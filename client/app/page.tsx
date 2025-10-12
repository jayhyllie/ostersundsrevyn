"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const img_url = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL || "";

  useEffect(() => {
    // Start exit animation after entrance completes
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000); // After 1s delay + 2s entrance animation

    // Navigate after exit animation completes
    const navTimer = setTimeout(() => {
      router.push("/hem");
    }, 4000); // 3s + 1s exit animation

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
  }, [router]);

  return (
    <main className="h-screen flex items-center justify-center px-8 splash-page" style={{ perspective: "600px" }}>
      <motion.div
        initial={{ opacity: 0, y: 500, rotateY: 720 }}
        animate={
          isExiting
            ? { opacity: 0, y: -500, rotateY: -360 }
            : { opacity: 1, y: 0, rotateY: 0 }
        }
        transition={{
          duration: isExiting ? 1 : 2,
          delay: isExiting ? 0 : 1,
          ease: "easeInOut",
        }}
      >
        <Image
          src={`${img_url}/logo.png`}
          alt="Östersunds Revyn Logo"
          width={310}
          height={310}
          className="w-[310px] max-md:max-w-[200px]"
          priority
        />
      </motion.div>
    </main>
  );
}

