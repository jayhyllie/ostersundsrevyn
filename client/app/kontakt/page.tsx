"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function KontaktPage() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh-82px)] md:mx-auto px-4 py-8 opacity-90">
      <div className="w-full md:max-w-4xl md:mx-auto">
        <Card className="bg-transparent border-none text-white">
          <CardHeader>
            <CardTitle className="text-4xl lg:text-6xl">Kontakta Oss</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-200">
                Har du frågor eller funderingar? <br /> Kontakta oss via e-post eller sociala medier.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 pt-4 w-full">
              <Card className="lg:p-10 p-4 px-16 w-full lg:w-auto text-center bg-primary border-none text-white lg:min-w-48">
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:info@ostersundsrevyn.com"
                  >
                    E-post
                  </a>
                </div>
              </Card>
              <Card className="lg:p-10 p-4 px-16 w-full lg:w-auto text-center bg-primary border-none text-white lg:min-w-48">
                <div className="flex items-center justify-center gap-2">
                  <Facebook size={16} />
                  <a href="https://www.facebook.com/ostersundsrevyn" target="_blank" rel="noopener noreferrer">
                  Facebook
                  </a>
                </div>
              </Card>
              <Card className="lg:p-10 p-4 px-16 w-full lg:w-auto text-center bg-primary border-none text-white lg:min-w-48">
                <div className="flex items-center justify-center gap-2">
                  <Instagram size={16} />
                  <a href="https://www.instagram.com/ostersundsrevyn" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.493213879197!2d14.634167087662508!3d63.17967071918248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466fb83db8d32813%3A0xf58f111da638fab!2sStorsj%C3%B6teatern!5e0!3m2!1ssv!2sse!4v1760080318798!5m2!1ssv!2sse" width="100%" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </main>
  );
}

