'use client';
import Link from 'next/link';
import ShootingStars from '../decorations/shooting-star';
import StarBackground from '../decorations/star-background';

import { motion } from 'framer-motion';
import { Cover } from '../decorations/cover';
import { Button, ButtonVariant } from '../elements/button';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';

export const Hero = ({
  heading,
  sub_heading,
  CTAs,
  locale,
}: {
  heading: string;
  sub_heading: string;
  CTAs?: { id: string; URL: string; text: string; variant?: ButtonVariant }[];
  locale: string;
}) => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <StarBackground />
        <ShootingStars />
      </motion.div>
      <Heading
        as="h1"
        className="relative z-10 mx-auto mt-6 max-w-7xl py-6 text-center text-4xl font-semibold md:text-4xl lg:text-8xl"
      >
        {heading.substring(0, heading.lastIndexOf(' '))}{' '}
        <Cover>{heading.split(' ').pop()}</Cover>
      </Heading>
      <Subheading className="relative z-10 mx-auto mt-2 max-w-3xl text-center text-base text-muted md:mt-6 md:text-xl">
        {sub_heading}
      </Subheading>
      <div className="mt-8 flex items-center space-x-2">
        {CTAs &&
          CTAs.map((cta) => (
            <Button
              key={cta?.id}
              as={Link}
              href={`${cta.URL}`}
              {...(cta.variant && { variant: cta.variant })}
            >
              {cta.text}
            </Button>
          ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal to-transparent" />
    </div>
  );
};
