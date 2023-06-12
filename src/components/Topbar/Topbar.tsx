import Link from "next/link";
import React from "react";

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div className={`flex w-full items-center justify-between mx-auto`}>
      <Link href="/" className="h-[22px] flex-1">
        <img src="/logo-full.png" alt="Logo" className="h-full" />
      </Link>

      <div className="flex items-center apce-x-4 flex-1 justify-end">
        <div>
          <a
            href="https://www.buymeacoffee.com/burakorkmezz"
            target="_blank"
            rel="noreferrer"
            className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
          >
            Premium
          </a>
        </div>
        <Link href="/auth">
          <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Topbar;
