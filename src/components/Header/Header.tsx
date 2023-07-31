import HeaderActions from "@/components/Header/HeaderActions";
import Menu from "@/components/Header/Menu";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="relative z-50 py-4">
      <div className="container mx-auto flex items-center justify-center">
        <Menu />
        {/* <div className="flex gap-2 w-24">
          <HeaderActions />
        </div> */}
      </div>
    </header>
  );
}
