import React from "react";

import Image from "next/image";

interface ShopifyImageProps extends React.ComponentPropsWithRef<typeof Image> {}
type Ref = HTMLImageElement;

// image with fallback
export const ShopifyImage = React.forwardRef<Ref, ShopifyImageProps>((props, ref) => {
  const { src, alt, ...orgProps } = props;

  let imageSrc = src || ""; // define fallback
  let imageAltText = alt || ""; // define fallback

  return <Image src={imageSrc} alt={imageAltText} ref={ref} {...orgProps} />;
});
