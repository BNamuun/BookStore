const Currency_formatter = new Intl.NumberFormat(undefined, {
  currency: "MNT",
  style: "currency",
  currencyDisplay: "symbol",
});
export function formatCurrency(number) {
  return Currency_formatter.format(number);
}
