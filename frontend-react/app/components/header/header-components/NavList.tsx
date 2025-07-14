"use client";

import Link from "next/link";

export default function NavList({
  navigationSelect,
}: {
  navigationSelect: { name: string; url: string; currentPage: boolean }[];
}) {
  return (
    <>
      {navigationSelect.map((listItem) => (
        <li className="mx-8 text-xl list-none" key={listItem.name}>
          <Link
            className={`hover:text-bright-yellow ${
              listItem.currentPage ? "text-supplement-white" : ""
            }`}
            href={listItem.url}
          >
            {listItem.name}
          </Link>
        </li>
      ))}
    </>
  );
}
