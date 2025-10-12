"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { text: "Revygänget", href: "/revyganget/ensemble" },
  { text: "Information", href: "/information" },
  { text: "Media", href: "/media/images" },
  { text: "Historik", href: "/historik" },
  { text: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="flex h-16 items-center justify-between px-4 w-full">
        <div className="flex items-center md:gap-6">
          <Link href="/hem" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Östersunds Revyn"
              width={60}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center md:gap-2 gap-20">
            <div className="text-primary font-bold text-lg animate-pulse uppercase bg-white/80 px-4 py-2 rounded-md hidden md:block">
              Biljettsläpp 20/10
            </div>
            {/* <Button asChild size="default">
              <a
                href="https://www.nortic.se/voucher/1893"
                target="_blank"
                rel="noopener noreferrer"
              >
                Presentkort
              </a>
            </Button>
            <Button asChild size="default">
              <a
                href="https://www.nortic.se/ticket/event/61851"
                target="_blank"
                rel="noopener noreferrer"
              >
                Biljetter
              </a>
            </Button> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-md font-medium transition-colors hover:text-primary",
                pathname.startsWith(item.href)
                  ? "text-primary"
                  : "text-white"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="text-primary font-bold text-lg animate-pulse uppercase bg-white/80 px-4 py-2 rounded-md block md:hidden">
              Biljettsläpp 20/10
        </div>

        {/* Mobile Navigation */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden bg-[var(--brown)] absolute right-0 top-16 min-w-40 z-10 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="py-4 px-4 space-y-4 bg-black/50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname.startsWith(item.href)
                  ? "text-primary"
                  : "text-white"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

