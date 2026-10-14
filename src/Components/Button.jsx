import React from "react";

const Button = ({
  className = "",
  size = "default",
  children,
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full bg-primary text-white hover:bg- muted-foreground-700 px-6";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes}>
      {children}
    </button>
  );
};

export default Button;