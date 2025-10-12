"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Bilder", href: "/media/images" },
  { name: "Videos", href: "/media/videos" },
];

export default function MediaLayout({
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
            {tabs.map((tab) => {
              const isActive = tab.href === "/media/images" 
                ? pathname.startsWith("/media/images")
                : pathname === tab.href;
              
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    "px-4 py-3 text-lg font-medium border-b-2 transition-colors",
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-white hover:border-gray-300"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

