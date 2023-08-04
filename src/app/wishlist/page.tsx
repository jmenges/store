import Breadcrumbs from "@/components/Breadcrumbs";
import WishlistGrid from "@/components/Wishlist/WishlistGrid";

export default async function Wishlist() {

  return (
    <div>
      <Breadcrumbs
        title="Wishlist"
        items={[
          { title: "Home", href: "/" },
          { title: "Wishlist", href: "/wishlist" },
        ]}
      />
      <main className="container relative mx-auto mb-12 flex">
        <WishlistGrid />
      </main>
    </div>
  );
}
