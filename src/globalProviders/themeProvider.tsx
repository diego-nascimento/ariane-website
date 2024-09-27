'use client';

import { theme } from '@/styles/Theme';
import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export const GlobalThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
