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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-8 py-3.5 text-sm sm:text-base gap-2.5',
  };

  const variantStyles = {
    // Primary: Blue pill
    primary: 'bg-accent-blue text-white hover:bg-accent-blue/90 shadow-sm hover:shadow-md hover:shadow-accent-blue/20',
    // Secondary: Light gray pill
    secondary: 'bg-surface-2 text-ink hover:bg-border border border-border/80 shadow-xs',
    // Dark: Dark ink pill (for services & contrast on gradient bands)
    dark: 'bg-ink text-white hover:bg-ink/90 shadow-sm hover:shadow-md',
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
