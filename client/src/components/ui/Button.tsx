import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full cursor-pointer select-none transition-[transform,background-color,box-shadow,border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] active:duration-100 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-8 py-3.5 text-sm sm:text-base gap-2.5',
  };

  const variantStyles = {
    // Primary: Blue pill with top specular reflection
    primary: 'bg-accent-blue text-white hover:bg-accent-blue/95 shadow-sm hover:shadow-md hover:shadow-accent-blue/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] border border-accent-blue/50',
    // Secondary: Light gray pill
    secondary: 'bg-surface-2 text-ink hover:bg-border/80 border border-border/80 shadow-xs',
    // Dark: Dark ink pill with top specular reflection
    dark: 'bg-ink text-white hover:bg-ink/90 shadow-sm hover:shadow-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] border border-ink/40',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
