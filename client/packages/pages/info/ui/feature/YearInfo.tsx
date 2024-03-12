import { Button } from "@revyn/button";
import { Btn, Style } from "@revyn/types";
import { Variants, motion } from "framer-motion";

export const YearInfo = () => {
  const variants: Variants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <>
      <section className="info__top">
        <section className="info__first">
          <motion.h1
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="info__first--highlight">Publiksuccén</span> är
            tillbaka!
          </motion.h1>
          <motion.h2
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 1.5 }}
          >
            ÖSTERSUNDSREVYN HAR RÖTTERNA I 50- TALET OCH LOCKAR VARJE VINTER
            RUNT BESÖKARE TILL STORSJÖTEATERN.
          </motion.h2>
        </section>
        <section className="info__second">
          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 2 }}
          >
            Revyn har byggt upp ett gott renommé och har genom åren bland annat
            fått LT:s Kulturpris 2017 och prisats ett flertal gånger i Revy-SM.
            Utöver detta har Östersundsrevyn även uppmärksammats av SVT, som
            sänt delar av tidigare föreställningar vid ett flertal tillfällen.
            <br />
            Revymakarnas texter är populära och spelas inte bara på hemmaplan,
            utan även av andra revyer i landet. Östersundrevyn försöker varje år
            att förnya och utveckla revykonsten, men är också måna om att ha ett
            rejält ben kvar i den klassiska revytraditionen. Revyn erbjuder allt
            från buskis till sitcom. Från glad sång och dans till stillsam
            eftertänksamhet. <br /> Den innehåller en del lokala nummer, men de
            flesta av texterna berör ämnen av nationell och globala karaktär som
            kan ses av såväl jämtar, stockholmare som glada trönder.
          </motion.p>
        </section>
      </section>
      <motion.section
        className="info__bottom"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, delay: 2.5 }}
      >
        <a href="#">
          <Button
            type={Btn.SOLID}
            style={Style.DEFAULT}
            onClick={() => console.log("clicked")}
          >
            Köp biljetter här
          </Button>
        </a>
        <p>
          eller hos VISIT ÖSTERSUND (Turistbyrån) tel. 063-701 1700, Mån-Fre
          10.00-15.00 eller info@visitostersund.se <br />
          <br /> (VISIT STÄNGT 24 DEC-2 JAN / 5-9 JAN)
        </p>
      </motion.section>
    </>
  );
};
