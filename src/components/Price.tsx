const Price = ({
  amount,
  currencyCode = "EUR",
  ...props
}: {
  amount: string;
  currencyCode: string;
} & React.ComponentProps<"p">) => (
  <p {...props}>
    {`${new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(parseFloat(amount))}`}
  </p>
);

export default Price;
