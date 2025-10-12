"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Ensemble", href: "/revyganget/ensemble" },
  { name: "Orkester", href: "/revyganget/band" },
  { name: "Produktion", href: "/revyganget/production" },
];

export default function RevygangetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <div className="bg-transparent sticky top-20 z-40">
        <div className="mx-auto px-4">
          <div className="flex justify-center gap-4">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                  pathname === tab.href
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-white hover:border-gray-300"
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

