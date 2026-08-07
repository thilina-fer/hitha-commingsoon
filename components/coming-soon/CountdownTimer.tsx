"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) {
    return (
      <div className="flex gap-3 justify-center">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="w-20 h-24 flex flex-col items-center justify-center border-none shadow-sm bg-white/60 backdrop-blur-sm" />
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const variants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 },
  };

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {timeUnits.map(({ label, value }) => (
        <Card
          key={label}
          className="w-20 h-24 sm:w-24 sm:h-28 flex flex-col items-center justify-center border-none shadow-[0_4px_20px_-4px_rgba(0,168,181,0.08)] bg-white/80 backdrop-blur-md rounded-2xl"
        >
          <div className="relative overflow-hidden h-12 flex items-center justify-center w-full">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={value}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl font-heading font-bold text-[var(--navy)] absolute"
              >
                {value.toString().padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-xs sm:text-sm font-medium text-[var(--teal)] mt-1 tracking-wider uppercase">
            {label}
          </span>
        </Card>
      ))}
    </div>
  );
}
