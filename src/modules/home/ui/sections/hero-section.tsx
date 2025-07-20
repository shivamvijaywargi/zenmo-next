'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-background py-16 md:py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl px-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-primary text-sm">
              Split expenses. Track finances. All in one app.
            </div>
            <motion.h1
              animate={{ opacity: 1 }}
              className="font-bold text-4xl tracking-tighter sm:text-5xl md:text-3xl lg:text-6xl"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              The smarter way to{' '}
              <span className="text-primary">split expenses</span> and manage
              expenses
            </motion.h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="max-w-[600px] text-gray-300 md:text-xl"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Zenmo combines the best of expense splitting with seamless payment
              processing. Track debts, split bills, and pay friends instantly.
            </motion.p>
            <motion.div
              animate={{ opacity: 1 }}
              className="flex flex-col gap-2 py-4 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button
                className="gap-2"
                onClick={() => redirect('/register')}
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="relative mt-8 self-center md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                className="relative z-10"
                initial={{ y: 0 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              >
                <img
                  alt="Zenmo"
                  className="mx-auto rounded-xl shadow-2xl"
                  loading="eager"
                  src="https://placehold.co/600x300/svg"
                />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                className="-right-4 -top-4 absolute h-full w-full rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-30 blur-2xl"
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              className="-bottom-32 -left-12 absolute z-20 hidden md:block"
              initial={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Card className="w-64 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="font-medium text-sm">Payment to Alex sent!</p>
                  </div>
                  <p className="mt-1 text-gray-300 text-xs">
                    Your dinner expense has been settled
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_40%)]" />
      <motion.div
        animate={{ scaleX: 1, opacity: 1 }}
        className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
}
