import ButtonBack from "@/components/Button/ButtonBack";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const DefaultLayout = (props: { children: React.ReactNode; title: string }) => {
  const [isBack, setIsBack] = useState(false);
  const pathname = usePathname();
  // const splitPathname = pathname?.split("/");
  // const getPathname = splitPathname.
  console.log(pathname);
  useEffect(() => {
    const splitPathname = pathname?.split("/");
    if (
      // pathname === "breed" ||
      // pathname?.startsWith("breed") ||
      // pathname === "fact" ||
      // pathname?.startsWith("fact") &&
      splitPathname &&
      splitPathname?.length > 2
    ) {
      setIsBack(true);
    }
  }, [pathname]);

  return (
    <div className="relative flex flex-col gap-8 items-center bg-blue-400 w-[480px] h-fit p-5 rounded-md">
      <div className="text-title-md font-semibold text-white">
        {props.title}
      </div>
      {props.children}
      {isBack && <ButtonBack />}
      {/* <ButtonBack /> */}
    </div>
  );
};

export default DefaultLayout;
