"use client";

import { useInfo } from "@/hooks/queries";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DOMPurify from "dompurify";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const imageVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export default function InformationPage() {
  const { infoQuery, topData, ticketData, generalInfo } = useInfo();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  if (infoQuery.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Spinner size={50} />
      </div>
    );
  }

  const sortedGeneralInfo = generalInfo.sort((a, b) => (a.sortingPosition ?? 0) - (b.sortingPosition ?? 0));

  // Sanitize HTML content
  const sanitizeHtml = (html: string) => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['em', 'strong', 'b', 'i', 'u', 'br', 'a', 'p', 'span', 'div'],
      ALLOWED_ATTR: ['href', 'style', 'target', 'rel'],
    });
  };

  const imageUrl = process.env.NEXT_PUBLIC_AWS_IMAGEBUCKET_URL + "Logos/" || "";
  const image1 = "kvinnorna.png";
  const image2 = "Pojkarna.png";

  const images = [image1, image2].map((image) => `${imageUrl}${image}`);

  return (
    <main className="mx-auto px-4 py-8 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {topData.length > 0 && (
          <Card className="bg-transparent border-none text-white text-center">
            <CardHeader>
              <CardTitle className="lg:text-6xl text-4xl uppercase text-gradient from-primary to-white">{topData[0].title}</CardTitle>
              {topData[0].subtitle && (
                <p className="text-white/50">{topData[0].subtitle}</p>
              )}
            </CardHeader>
            <CardContent>
              <div 
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(topData[0].content) }}
              />
              {topData[0].buttonLink && topData[0].buttonText && (
                <Button asChild size="xl"> 
                  <a
                    href="https://www.nortic.se/ticket/event/74378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 w-full md:w-80"
                  >
                    {topData[0].buttonText}
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {ticketData && ticketData.length > 0 && (
          <div>
            <div className="grid gap-4 md:grid-cols-3">
              {ticketData.map((ticket) => (
                <Card key={ticket.id} className="bg-gradient-to-br from-grayscale-dark to-black py-10">
                  <CardContent className="p-6 text-center space-y-2">
                    <p className="text-revy-primary text-2xl font-bold">{ticket.title}</p>
                    <p className="text-6xl font-bold text-white">
                      {ticket.price} kr
                    </p>
                    <p className="text-sm text-gray-300 min-h-5">{ticket.subtitle || ''}</p>
                    <p className="text-white/30 text-sm font-bold">{ticket.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {generalInfo && generalInfo.length > 0 && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-1">
            {sortedGeneralInfo.map((info) => (
              <Card key={info.id} className="h-full w-full bg-purple-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
 text-white
">
                <CardHeader className="lg:p-6 p-4">
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="lg:p-6 p-4">
                  <div 
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(info.content) }}
                  />
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        )}
      </div>
      {screenWidth > 1024 &&
          images.map((image, index) => (
            <motion.figure
              variants={imageVariants}
              initial={"initial" + { rotate: 0 }}
              animate={"animate" + { rotate: index * 10 }}
              exit={"exit" + { rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 2.2 }}
              className={cn(`${index + 1} absolute top-16 lg:w-0 xl:w-[280px] 2xl:w-[320px] 3xl:w-[360px] aspect-square opacity-40 2xl:opacity-80`, index === 1 ? "left-12 2xl:left-16 rotate-[-15deg]" : "right-12 2xl:right-16 rotate-[15deg]")}
              key={index}
            >
              <img src={image} alt={image} loading="lazy" style={{ filter: 'sepia(70%)', borderRadius: '1em' }} />
            </motion.figure>
          ))}
    </main>
  );
}

