"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SimpleNav() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = React.useState("/");

  React.useEffect(() => {
    // console.log("pathname", pathname);
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath]);

  return (
    <>
      <section className="sticky top-0">
        <div className="w-full flex justify-center border-b border-black py-5">
          <div className="flex justify-around gap-10">
            <Link
              className={
                "font-semibold hover:text-blue-600 text-xl " +
                (currentPath == "/"
                  ? "text-green-600 underline underline-offset-2"
                  : "")
              }
              href={"/"}
            >
              Editor
            </Link>
            <Link
              className={
                "font-semibold hover:text-blue-600 text-xl " +
                (currentPath == "/shiki"
                  ? "text-green-600 underline underline-offset-2"
                  : "")
              }
              href={"/shiki"}
            >
              Editor with codeToHtml
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
