//
import { ThemeProvider } from "@emotion/react";
import { Button } from '@mui/material';
import React from 'react';
import { theme } from "../styles/theme";

export interface MPButtonProps {
  color?:
    | "primary"
    | "secondary"
    | "error";
  onClick: () => {};
  ariaLabel?: string;
  disabled?: boolean;
  buttonText: string;
  variant?: "contained" | "outlined" | "text";
}

export const MPButton = ({
  color = "primary",
  onClick,
  ariaLabel,
  disabled = false,
  buttonText,
  variant = "contained",
  ...props
}: MPButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        variant={variant}
        {...props}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
}