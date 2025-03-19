"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CountdownPage from "./CountdownPage";
const navLinks1 = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Upcoming",
    href: "/upcoming",
  },
];
const navLinks2 = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="font-sans bg-transparent">
      <Image
        src={"/hero4.png"}
        alt="hero"
        fill
        className="object-cover -z-50"
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="space-x-4">
            {navLinks1.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathName === item.href
                    ? "underline underline-offset-4 text-[#dd0d66] font-bold"
                    : "text-gray-200 cursor-pointer hover:underline underline-offset-4"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={300}
              height={300}
              className="object-cover w-40 h-40"
            />
          </Link>
          <div className="space-x-4">
            {navLinks2.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathName === item.href
                    ? "underline underline-offset-4 text-[#dd0d66] font-bold"
                    : "text-gray-200 cursor-pointer hover:underline underline-offset-4"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-90 pl-24 flex">
        <Link href={"/upcoming"}>
          <button className="border px-8 py-2 rounded-full cursor-pointer border-b-cyan-400 border-t-pink-600 border-l-cyan-500 border-r-pink-500 text-sm fontb">
            More info
          </button>
        </Link>
      </div>
      <div className="absolute bottom-30 pl-12 flex">
        <CountdownPage />
      </div>
    </nav>
  );
}
