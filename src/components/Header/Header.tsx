import CartLoader from "@/components/Cart/CartLoader";
import HeaderActions from "@/components/Header/HeaderActions";
import Menu from "@/components/Header/Menu";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="relative z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Menu />
        {/* <div className="flex gap-2 w-24">
          <HeaderActions />
        </div> */}
        <CartLoader />
      </div>
    </header>
  );
}
