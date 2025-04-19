"use client";

export default function NavigationBar() {
  const NavigationSelect = [
    { name: "Home", url: "" },
    { name: "About Me", url: "/about-me" },
    { name: "Prior Works", url: "/prior-works" },
    { name: "Resume", url: "/resume" },
  ];

  function NavList() {
    return (
      <>
        {NavigationSelect.map((listItem: { name: string; url: string }) => (
          <li className="mx-8 text-xl" key={listItem.name}>
            <a href={listItem.url}>{listItem.name}</a>
          </li>
        ))}
      </>
    );
  }
  return (
    <header className="bg-vibrant-red p-8 font-header">
      <ul className="flex">
        <NavList></NavList>
      </ul>
    </header>
  );
}
