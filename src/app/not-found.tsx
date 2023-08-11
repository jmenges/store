import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="container -mt-[68px] h-screen justify-center items-center flex flex-col text-center">
      <h1 className="text-[clamp(8rem,30vw,18rem)] leading-none font-bold">404</h1>
      <h2 className="text-2xl xs:text-3xl lg:text-4xl mb-2">
        Page not found or functionality not implemented
      </h2>
      <p className="mb-4 lg:text-lg">For more information please visit this projects GitHub.</p>
      <div className="flex gap-4 max-xs:flex-wrap">
        <Link className={cn(buttonVariants({ size: "lg" }), "max-xs:w-full")} href="/">
          Go Home
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "max-xs:w-full")}
          href="https://github.com/jmenges/store"
        >
          Visit GitHub
        </Link>
      </div>
    </main>
  );
}
