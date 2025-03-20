"use client";

import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function ContactPage() {
  const pathName = usePathname();
  return (
    <nav className="font-sans bg-transparent">
      <Image
        src={"/cont.png"}
        alt="hero"
        fill
        className="object-cover -z-50 hidden lg:block"
        priority
      />
      <Image
        src={"/m3.png"}
        alt="hero"
        fill
        className="object-cover -z-50 lg:hidden"
        priority
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
      <div className="lg:absolute lg:bottom-20 lg:right-130 flex justify-center mt-12 md:mt-48">
        <div className="w-[300px] h-[450px] border rounded-2xl flex flex-col justify-center px-8 bg-black/30 lg:w-[400px] lg:h-[500px]">
          <input
            type="text"
            className="border rounded-lg px-4 py-2 text-white"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border rounded-lg px-4 py-2 text-white mt-4"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="border rounded-lg px-4 py-2 text-white mt-4"
            placeholder="Phone"
          />
          <Textarea
            className="border rounded-lg px-4 py-2 text-white mt-4"
            placeholder="Message"
          />
          <button className="bg-[#e91d9d] py-3 rounded-full mt-8 text-white cursor-pointer hover:bg-[#e91d9eda]">
            Send Message
          </button>
          <p className="text-sm text-muted-foreground justify-center flex text-center mt-4">
            Ally Music does not sell, share or trade customer information. Your
            privacy is very importants to us.
          </p>
        </div>
      </div>
    </nav>
  );
}
