'use client';
import { Avatar, Box, Grid2, Stack, Typography, useTheme } from '@mui/material';

const steps = [
  {
    title: 'Avaliação e Diagnostico',
    text: 'Identificação de questões que você vem enfrentando. Vamos juntas compreender de forma mais ampla o que você vem vivenciando.',
  },
  {
    title: 'Plano de tratamento',
    text: 'Com diagnóstico definido é criado um protocolo individual e personalizado (plano de tratamento) para tratar de forma personalizada o que te incomoda.',
  },
  {
    title: 'Técnicas praticas',
    text: 'Durante as sessões, além do acolhimento e uma escuta qualificada trabalhamos com técnicas eficazes da TCC (Terapias Cognitivo Comportamentais).',
  },
  {
    title: 'Alta do paciente',
    text: 'Ao atingirmos os objetivos terapêuticos que te trouxeram para o tratamento e mediante a melhora do seu quadro, você já será capaz de utilizar as habilidades e ferramentas construídas em terapia.',
  },
];

export const Pilars = () => {
  const theme = useTheme();
  return (
    <Stack marginY={8}>
      <Stack alignItems={'center'}>
        <Typography
          fontSize={{
            xs: 8,
            md: 12,
          }}
        >
          CLAREZA ESTÁ MAIS PRÓXIMO DO QUE VOCÊ PENSA
        </Typography>
        <Typography
          fontSize={{
            xs: 24,
            md: 48,
          }}
          fontFamily={'Noto Serif Georgian Variable, serif'}
          color="secondary"
          textTransform={'uppercase'}
        >
          Pilares da Terapia
        </Typography>
        <Box
          sx={{
            width: '25px',
            height: '2px',
            background: theme.palette.secondary.main,
          }}
        />
      </Stack>
      <Stack
        justifyContent={'flex-end'}
        paddingBottom={4}
        marginTop={4}
        minHeight={'90vh'}
        borderRadius={20}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://plus.unsplash.com/premium_photo-1664053011444-0f4f789a8671?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <Grid2
          paddingX={{
            xs: 2,
            md: 5,
          }}
          container
          spacing={4}
          marginTop={{
            xs: 4,
            md: 8,
          }}
        >
          {steps.map((step, index) => {
            return (
              <Grid2
                key={step.title}
                bgcolor={theme.palette.secondary.contrastText}
                padding={{
                  xs: 2,
                  md: 4,
                }}
                borderRadius={8}
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
                }}
                sx={{
                  '&:hover': {
                    transition: 'background .5s',
                    background: theme.palette.terciary.main,
                  },
                }}
              >
                <Stack direction={'column'} gap={2}>
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      background: 'transparent',
                      color: theme.palette.secondary.main,
                      border: 1,
                      fontSize: 14,
                    }}
                  >
                    {index + 1}
                  </Avatar>

                  <Typography
                    fontSize={{
                      xs: 24,
                      md: 28,
                    }}
                    fontFamily={'Noto Serif Georgian Variable, serif'}
                  >
                    {step.title}
                  </Typography>
                  <Typography fontSize={16} fontWeight={400}>
                    {step.text}
                  </Typography>
                </Stack>
              </Grid2>
            );
          })}
        </Grid2>
      </Stack>
      {/* <Stack marginTop={4} alignItems={'center'}>
        <Typography
          fontSize={{
            xs: 20,
            md: 28,
          }}
          fontWeight={500}
          color="secondary"
          textAlign={'center'}
        >
          Retome as rédeas da sua vida.
        </Typography>

        <Typography
          fontSize={{
            xs: 16,
            md: 24,
          }}
          fontWeight={500}
          color="primary.contrastText"
          textAlign={'center'}
        >
          A TCC é uma abordagem cientifica com resultados mensuráveis e
          comprovados{' '}
        </Typography>
        <Box marginTop={2}>
          <Button variant="contained" size="large" color="secondary">
            Agende sua consulta
          </Button>
        </Box>
      </Stack> */}
    </Stack>
  );
};
