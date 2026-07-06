import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const variantClasses = {
  solid: 'pill pill--solid',      // dark ink on light surfaces
  outline: 'pill pill--outline',  // bordered on light surfaces
  light: 'pill pill--light',      // light fill on dark bands
  ghost: 'pill pill--ghost',      // bordered on dark bands
};

export default function PillButton({
  to,
  href,
  variant = 'solid',
  icon: Icon = ArrowRight,
  showIcon = true,
  magnetic = false,
  className = '',
  children,
  onClick,
  ...rest
}) {
  const content = (
    <>
      <span>{children}</span>
      {showIcon && <Icon className="w-4 h-4 pill__arrow" />}
    </>
  );

  const classes = `${variantClasses[variant]} ${className}`;

  let el;
  if (to) {
    el = <Link to={to} className={classes} onClick={onClick} {...rest}>{content}</Link>;
  } else if (href) {
    el = <a href={href} className={classes} onClick={onClick} {...rest}>{content}</a>;
  } else {
    el = <button type="button" className={classes} onClick={onClick} {...rest}>{content}</button>;
  }

  return magnetic ? <Magnetic>{el}</Magnetic> : el;
}
