import CartLoader from "@/components/Cart/CartLoader";
import HeaderActions from "@/components/Header/HeaderActions";
import Menu from "@/components/Header/Menu";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="relative z-50 py-4">
      <div className="container mx-auto relative w-full flex items-center justify-center">
        <div className="flex-1"></div>
        <Menu className="mx-auto" />
        {/* <div className="flex gap-2 w-24">
          <HeaderActions />
        </div> */}
        <div className="flex-1 flex">
        <CartLoader className="ml-auto" />
        </div>
      </div>
    </header>
  );
}
