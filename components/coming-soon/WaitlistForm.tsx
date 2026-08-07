"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

export function WaitlistForm({
  placeholder = "Enter your email address",
  buttonText = "Notify Me",
  successMessage = "Thank you! We'll let you know as soon as we launch."
}: {
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: wire to API/email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-3 bg-[var(--mint)] text-[var(--navy)] px-6 py-4 rounded-full max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <HeartHandshake className="w-6 h-6 text-[var(--teal)]" />
        </motion.div>
        <span className="font-medium text-sm sm:text-base">
          {successMessage}
        </span>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full"
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-full h-12 px-6 border-slate-200 focus-visible:ring-[var(--teal)] bg-white/80 backdrop-blur-sm"
      />
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
        <Button
          type="submit"
          className="w-full sm:w-auto rounded-full h-12 px-8 bg-gradient-to-r from-[var(--teal)] to-[var(--green)] hover:from-[var(--teal)] hover:to-[var(--green)] text-white shadow-[0_4px_14px_0_rgba(0,168,181,0.39)] hover:shadow-[0_6px_20px_rgba(0,168,181,0.23)] transition-all font-semibold"
        >
          {buttonText}
        </Button>
      </motion.div>
    </form>
  );
}
