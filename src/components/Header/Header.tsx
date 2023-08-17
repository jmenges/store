import CartLoader from "@/components/Cart/CartLoader";
import Menu from "@/components/Header/Menu";
import SearchBar from "@/components/Search/SearchBar";
import WishlistLink from "@/components/Wishlist/WishlistLink";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="relative z-50">
      <div className="container mx-auto relative w-full flex items-center justify-center py-4">
        <div className="flex-1">
          <SearchBar className="" />
        </div>
        <Menu className="mx-auto" />

        <div className="flex-1 flex gap-2 justify-end">
          <WishlistLink />
          {/* <CartLoader className="" /> */}
        </div>
      </div>
    </header>
  );
}
