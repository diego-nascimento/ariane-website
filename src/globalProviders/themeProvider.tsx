'use client';

import { theme } from '@/styles/Theme';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export const GlobalThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          img: {
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            display: 'block',
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
