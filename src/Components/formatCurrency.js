const Currency_formatter = new Intl.NumberFormat(undefined, {
  currency: "MNT",
  style: "currency",
});
export function formatCurrency(number) {
  return Currency_formatter.format(number);
}
