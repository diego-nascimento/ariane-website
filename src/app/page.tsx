'use client';
import { Advantages } from '@/modules/Advantages';
import { Footer } from '@/modules/Footer';
import { Header } from '@/modules/Header';
import { Home } from '@/modules/Home';
import { Message } from '@/modules/Message';
import { Pilars } from '@/modules/Pilars';

import { Presentation } from '@/modules/Presentation';
import { Questions } from '@/modules/Questions';
import { Testemonial } from '@/modules/Testemonial';
import { Box, useTheme } from '@mui/material';

export default function Page() {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Header />
      <Home />
      <Pilars />
      <Advantages />
      <Testemonial />

      <Message />
      <Presentation />
      <Questions />
      <Footer />
    </Box>
  );
}
