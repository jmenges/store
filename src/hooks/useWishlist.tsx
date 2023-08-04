import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function useWishlist() {
  const [wishlist, setWishlist] = useLocalStorageState<string[]>("wishlist", {
    defaultValue: [],
  });
  const [count, setCount] = useState<number>(0);

  const isInWishlist = (productId: string): boolean => {
    return (
      wishlist.find((wishlistProductId) => wishlistProductId === productId) !==
      undefined
    );
  };

  const addToWishlist = (productId: string) => {
    setWishlist((prev) => [...prev, productId]);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.filter((wishlistProductId) => wishlistProductId !== productId)
    );
  };

  useEffect(() => {
    setCount(wishlist.length);
  }, [wishlist]);

  return {
    wishlist,
    count,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    setWishlist,
  };
}
