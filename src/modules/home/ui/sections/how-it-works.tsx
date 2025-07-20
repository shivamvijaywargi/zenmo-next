'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Create a group',
    description:
      'Start by creating a group for your roommates, trip, or event.',
    src: 'https://placehold.co/500x300',
  },
  {
    number: '02',
    title: 'Add expenses',
    description:
      'Log expenses as they happen. Take photos of receipts for easy reference.',
    src: 'https://placehold.co/500x300',
  },
  {
    number: '03',
    title: 'Split automatically',
    description:
      'The app calculates who owes what, simplifying even the most complex splits.',
    src: 'https://placehold.co/500x300',
  },
  {
    number: '04',
    title: 'Settle up',
    description:
      'Pay directly through the app or mark expenses as settled manually.',
    src: 'https://placehold.co/500x300',
  },
];

export function HowItWorksSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="flex justify-center bg-gray-800 py-20 md:py-32"
      id="how-it-works"
    >
      <div className="max-w-7xl px-4 md:px-8">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          ref={ref}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-primary text-sm">
            How It Works
          </div>
          <h2 className="mb-4 font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
            Simple, fast, and efficient
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Get started in minutes and say goodbye to awkward money
            conversations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="-translate-x-1/2 absolute top-0 left-1/2 hidden h-full w-px bg-border md:block" />

          <div className="relative space-y-8">
            {steps.map((step, index) => (
              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="items-center md:grid md:grid-cols-2 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                key={step.number}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div
                  className={`mb-4 md:mb-0 ${index % 2 === 1 ? 'md:order-last' : ''}`}
                >
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      alt={`Step ${index + 1}`}
                      className="rounded-xl object-cover"
                      height={300}
                      src={step.src}
                      width={500}
                    />
                  </div>
                </div>
                <div
                  className={`relative ${index % 2 === 1 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                >
                  <div className="-translate-y-1/2 absolute top-1/2 left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground shadow-lg md:flex">
                    {step.number}
                  </div>
                  <div className="mb-2 flex items-center md:hidden">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-left font-bold text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="mb-4 hidden font-bold text-2xl md:block">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
