'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  DollarSign,
  PieChart,
  Smartphone,
  Split,
  Users,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      id: 1,
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Group Expenses',
      description:
        'Split bills with friends, roommates, or travel groups. Create multiple groups for different occasions.',
    },
    {
      id: 2,
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: 'Instant Payments',
      description:
        'Pay or request money instantly. Connect your bank account or cards for seamless transfers.',
    },
    {
      id: 3,
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: 'Expense Analytics',
      description:
        'Track spending patterns and get insights on your expenses with beautiful visualizations.',
    },
    {
      id: 4,
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: 'Mobile First',
      description:
        'Designed for the mobile experience with offline capabilities and real-time syncing.',
    },
    {
      id: 5,
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: 'Currency Support',
      description:
        'Support for multiple currencies with automatic conversion for international trips.',
    },
    {
      id: 7,
      icon: <Split className="h-10 w-10 text-primary" />,
      title: 'Smart Split',
      description:
        'Split bills equally or unequally. Specify exact amounts or split by percentages.',
    },
  ];

  return (
    <section
      className="flex justify-center bg-gray-900 py-20 md:py-32"
      id="features"
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
            Features
          </div>
          <h2 className="mb-4 font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
            Everything you need to manage expenses
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Zenmo combines the best features of expense splitting and finance
            management in one seamless experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-6 transition-all hover:shadow-md hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              key={feature.id}
              transition={{ delay: 0.1 * 0, duration: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 font-bold text-xl">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
