'use client';
import { MaxWidth } from '@/components/MaxWidth';

import { Button, Grid2, Stack, Typography, useTheme } from '@mui/material';

export const Message = () => {
  const theme = useTheme();
  return (
    <Stack paddingY={8} bgcolor={theme.palette.secondary.main}>
      <MaxWidth>
        <Grid2 container spacing={4}>
          <Grid2
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Stack>
              <Typography
                fontSize={{
                  xs: 24,
                  md: 36,
                }}
                fontFamily={'Noto Serif Georgian Variable, serif'}
                color="primary"
                textTransform={'uppercase'}
              >
                Posso te ajudar
              </Typography>
              <Typography
                fontSize={{
                  xs: 14,
                  md: 20,
                }}
                fontWeight={300}
                color="primary"
              >
                Independente do que você vem sentindo, mesmo que ache que não
                existe saída, é <strong>possível</strong> construir uma
                realidade mais funcional e com mais{' '}
                <strong>qualidade de vida</strong>.
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Stack
              alignItems={'center'}
              justifyContent={'center'}
              height="100%"
            >
              <Button variant="contained" size="large">
                Agende sua consulta
              </Button>
            </Stack>
          </Grid2>
        </Grid2>
      </MaxWidth>
    </Stack>
  );
};
