/**
 * Utilitários e contratos do LetsPay.
 * NÃO executa pagamentos nem substitui validações no backend.
 */

export const LETSPAY = {
  baseCurrency: 'USD',
  maxBalanceCents: 100_000_000, // US$ 1.000.000,00
  transactionCooldownMs: 10 * 60 * 1000,
  premiumPrice: { amount: 5, currency: 'MZN', interval: 'month' as const },
  providers: ['PayPal', 'm-Pesa', 'e-Mola', 'Pix', 'Airtm'] as const,
};

export type LetsPayProvider = typeof LETSPAY.providers[number];
export type TransactionKind = 'deposit' | 'withdrawal' | 'transfer' | 'premium_subscription';

export type WalletBalance = {
  balanceUsdCents: number;
  localCurrency: string;
  localAmountMinor: number;
  fxRate: number;
  fxUpdatedAt: string;
  isEstimate: true;
};

export function isStrongLetsPayPin(pin: string): boolean {
  if (!/^\d{4}$/.test(pin)) return false;
  if (pin.startsWith('1') || pin.startsWith('2')) return false;
  if (pin === '0000' || pin === '1234') return false;
  if (/^(\d)\1{3}$/.test(pin)) return false;
  if (['0123', '2345', '3456', '4567', '5678', '6789',
       '9876', '8765', '7654', '6543', '5432', '4321'].includes(pin)) return false;
  // Padrões de teclado simples e repetição alternada.
  if (['2580', '1478', '1590', '1212', '3434', '5656', '7878', '9090'].includes(pin)) return false;
  return true;
}

export function remainingCooldownMs(lastSuccessfulTransactionAtMs: number | null, nowMs = Date.now()): number {
  if (!lastSuccessfulTransactionAtMs) return 0;
  return Math.max(0, lastSuccessfulTransactionAtMs + LETSPAY.transactionCooldownMs - nowMs);
}

/**
 * Apenas apresentação local. O backend tem de impor o cooldown com o relógio do servidor.
 */
export function canStartTransactionLocally(lastSuccessfulTransactionAtMs: number | null, nowMs = Date.now()): boolean {
  return remainingCooldownMs(lastSuccessfulTransactionAtMs, nowMs) === 0;
}

/**
 * A taxa deve vir de uma fonte/serviço confiável e ser validada no servidor.
 * Este cálculo serve apenas para exibir uma estimativa na interface.
 */
export function estimateLocalBalance(
  balanceUsdCents: number,
  localCurrency: string,
  unitsPerUsd: number,
): { amount: number; currency: string; estimated: true } {
  if (!Number.isInteger(balanceUsdCents) || balanceUsdCents < 0) {
    throw new Error('Saldo USD inválido.');
  }
  if (!Number.isFinite(unitsPerUsd) || unitsPerUsd <= 0) {
    throw new Error('Taxa de câmbio inválida.');
  }
  return {
    amount: (balanceUsdCents / 100) * unitsPerUsd,
    currency: localCurrency,
    estimated: true,
  };
}

export function formatMoney(amount: number, currency: string, locale = 'pt-PT'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}
