"use client";

export default function NavList({
  navigationSelect,
}: {
  navigationSelect: { name: string; url: string; currentPage: boolean }[];
}) {
  return (
    <>
      {navigationSelect.map((listItem) => (
        <li className="mx-8 text-xl" key={listItem.name}>
          <a
            className={`hover:text-bright-yellow ${
              listItem.currentPage ? "text-supplement-white" : ""
            }`}
            href={listItem.url}
          >
            {listItem.name}
          </a>
        </li>
      ))}
    </>
  );
}
