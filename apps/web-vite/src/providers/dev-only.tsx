import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { IS_DEVELOPMENT } from "@tape.xyz/constants";
import { m } from "framer-motion";

const Devtools = () => {
  if (!IS_DEVELOPMENT) return null;
  return (
    <>
      <m.div
        drag
        dragMomentum={false}
        className="fixed right-2.5 bottom-20 z-50 rounded-full border border-custom bg-primary px-6 py-2 text-center font-semibold text-sm text-theme"
      >
        <span className="block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="3xl:hidden hidden 2xl:block">2xl</span>
        <span className="3xl:block hidden">3xl</span>
      </m.div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
};

export { Devtools };
