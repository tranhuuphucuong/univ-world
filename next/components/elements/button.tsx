import { cn } from '@/lib/utils';
import { LinkProps } from 'next/link'; // Or from your routing library
import React from 'react';

export type ButtonVariant = 'simple' | 'outline' | 'primary' | 'muted';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  href?: LinkProps['href'];
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  className,
  children,
  ...props
}) => {
  const variantClass =
    variant === 'simple'
      ? 'bg-secondary relative z-10 bg-transparent hover:border-secondary/50 hover:bg-secondary/10  border border-transparent text-typo text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center'
      : variant === 'outline'
        ? 'bg-white relative z-10 hover:bg-secondary/90 hover:shadow-xl  text-black border border-black hover:text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center'
        : variant === 'primary'
          ? 'bg-secondary relative z-10 hover:bg-secondary/90  border border-secondary text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset  hover:-translate-y-1 active:-translate-y-0'
          : variant === 'muted'
            ? 'bg-dim relative z-10 hover:bg-base  border border-transparent text-typo text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_1px_0px_0px_#FFFFFF20_inset]'
            : '';
  return (
    <Tag
      className={cn(
        'relative z-10 flex items-center justify-center rounded-md border border-transparent bg-secondary bg-transparent px-4 py-2 text-sm font-medium text-typo transition duration-200 hover:border-secondary hover:bg-secondary/50 md:text-sm',
        variantClass,
        className,
      )}
      {...props}
    >
      {children ?? `Get Started`}
    </Tag>
  );
};
