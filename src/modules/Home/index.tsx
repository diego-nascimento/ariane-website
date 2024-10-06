'use client';

import { MaxWidth } from '@/components/MaxWidth';
import { Box, Button, Grid2, Stack, Typography, useTheme } from '@mui/material';

export const Home = () => {
  const theme = useTheme();
  return (
    <Stack paddingY={4} bgcolor={theme.palette.secondary.main} px={2}>
      <MaxWidth>
        <Stack minHeight={400} justifyContent={'center'}>
          <Grid2 container height={'100%'} spacing={4}>
            <Grid2
              size={{
                xs: 12,
                md: 5,
              }}
              borderRadius={20}
              overflow={'hidden'}
            >
              <img
                src={'/oria.jpg'}
                alt="oria"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                md: 7,
              }}
            >
              <Stack width={'100%'} height={'100%'} justifyContent={'center'}>
                <Typography
                  color="primary"
                  fontSize={{
                    xs: 12,
                    md: 14,
                  }}
                  textTransform={'uppercase'}
                  letterSpacing={2}
                >
                  Psicologa | Crp CRP04/67556
                </Typography>
                <Typography
                  color="primary"
                  fontSize={{
                    xs: 32,
                    md: 88,
                  }}
                  letterSpacing={2}
                >
                  Ariane Miranda
                </Typography>
                <Stack marginTop={1} marginBottom={2}>
                  <Typography
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                    color="primary"
                    fontWeight={300}
                  >
                    <strong>
                      Sim, é possível aliviar o medo, o sofrimento, a angustia e
                      a culpa.{' '}
                    </strong>
                    A estabilidade emocional existe e pode ser construída!{' '}
                    <strong>
                      Não é sobre conversa é tratamento assertivo com base
                      cientifica.
                    </strong>
                  </Typography>
                </Stack>
                <Box>
                  <Button variant="contained" color="primary">
                    Agende sua consulta
                  </Button>
                </Box>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
