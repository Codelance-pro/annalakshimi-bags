import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isExternal?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  isExternal = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-900 hover:bg-primary-800 text-white focus:ring-primary-500 disabled:bg-primary-300',
    secondary: 'bg-white border border-primary-900 text-primary-900 hover:bg-primary-50 focus:ring-primary-500 disabled:border-primary-300 disabled:text-primary-300',
    accent: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-400 disabled:bg-accent-300',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonMotion = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  // External link
  if (href && isExternal) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...buttonMotion}
      >
        {children}
      </motion.a>
    );
  }
  
  // Internal link
  if (href) {
    return (
      <motion.div {...buttonMotion}>
        <Link to={href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }
  
  // Regular button
  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...buttonMotion}
    >
      {children}
    </motion.button>
  );
};

export default Button;