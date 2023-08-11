const Price = ({
  amount,
  currencyCode = "EUR",
  ariaAlt = "",
  ...props
}: {
  amount: string;
  currencyCode: string;
  ariaAlt?: string;
} & React.ComponentProps<"p">) => (
  <p {...props}>
    {ariaAlt !== "" && <span className="sr-only">{ariaAlt}</span>}
    {`${new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(parseFloat(amount))}`}
  </p>
);

export default Price;
