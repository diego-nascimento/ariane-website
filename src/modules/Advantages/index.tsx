'use client';
import { MaxWidth } from '@/components/MaxWidth';

import { Avatar, Box, Grid2, Stack, Typography, useTheme } from '@mui/material';

const phrases = [
  'Se sentir mais segura na tomada de decisões',
  'Lidar com situações novas e não planejadas',
  'Construir mais qualidade de vida mesmo que convivendo com algum transtorno ou período difícil',
  'Lidar com a ansiedade, angustia e medo',
  'Construir um puerpério emocional mais saudável',
  'Identificar e lidar com as emoções de maneira funcional',
  'Construir uma rotina que seja coerente com que você é',
  'Se aproximar da versão de você que você deseja ser',
  'Entender um pouco mais sobre você e suas relações',
  'Construir uma vida mais leve com mais autoconhecimento, autoestima',
];

export const Advantages = () => {
  const theme = useTheme();
  return (
    <Stack paddingY={8} bgcolor={theme.palette.secondary.main}>
      <MaxWidth>
        <Stack alignItems={'center'}>
          <Typography
            fontSize={{
              xs: 20,
              md: 48,
            }}
            fontFamily={'Noto Serif Georgian Variable, serif'}
            color="primary"
            textTransform={'uppercase'}
          >
            A terapia pode te a ajudar
          </Typography>
          <Box
            sx={{
              width: '25px',
              height: '2px',
              background: theme.palette.primary.main,
            }}
          />
        </Stack>
        <Stack
          marginTop={{
            xs: 4,
            md: 8,
          }}
        >
          <Grid2
            container
            spacing={{
              xs: 2,
              md: 4,
            }}
          >
            {phrases.map((phrase, index) => {
              return (
                <Grid2
                  size={{
                    xs: 12,
                    lg: 6,
                  }}
                  key={index}
                >
                  <Stack direction={'row'} alignItems={'center'} gap={4}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: theme.palette.primary.contrastText,
                      }}
                    >
                      {index + 1}
                    </Avatar>
                    <Typography
                      color="primary"
                      fontSize={{
                        md: 18,
                        xs: 12,
                      }}
                    >
                      {phrase}
                    </Typography>
                  </Stack>
                </Grid2>
              );
            })}
          </Grid2>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
