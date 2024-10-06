'use client';
import { MaxWidth } from '@/components/MaxWidth';
import {
  Avatar,
  Box,
  Button,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

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

      <Stack py={4} px={2} id="psicoterapia">
        <Stack>
          <MaxWidth>
            <Grid2 container spacing={4}>
              <Grid2
                size={{
                  xs: 12,
                  lg: 6,
                }}
              >
                <Stack
                  alignItems={'center'}
                  height={'100%'}
                  justifyContent={'center'}
                >
                  <Stack
                    width={'100%'}
                    maxWidth={750}
                    justifyContent={'center'}
                  >
                    <Image
                      src={'/image.png'}
                      width={1500}
                      height={1200}
                      alt="imagem"
                    />
                  </Stack>
                </Stack>
              </Grid2>
              <Grid2
                size={{
                  xs: 12,
                  lg: 6,
                }}
              >
                <Stack alignItems={'center'}>
                  <Stack
                    width={'100%'}
                    maxWidth={750}
                    justifyContent={'center'}
                  >
                    <Stack gap={4} marginTop={4}>
                      <Stack
                        direction={{
                          xs: 'column',
                          md: 'row',
                        }}
                        alignItems={{
                          xs: 'center',
                          md: 'initial',
                        }}
                        gap={2}
                      >
                        <Box marginTop={1}>
                          <Avatar
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                            }}
                          >
                            1
                          </Avatar>
                        </Box>

                        <Typography
                          fontSize={{
                            md: 18,
                            xs: 12,
                          }}
                        >
                          <Box component="strong" color={'#000'}>
                            Identificação
                          </Box>{' '}
                          de questões que você vem ​enfrentando. Vamos juntas
                          compreender de ​forma mais ampla o que você vem
                          vivenciando.
                        </Typography>
                      </Stack>
                      <Stack
                        direction={{
                          xs: 'column',
                          md: 'row',
                        }}
                        alignItems={{
                          xs: 'center',
                          md: 'initial',
                        }}
                        gap={2}
                      >
                        <Box marginTop={1}>
                          <Avatar
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                            }}
                          >
                            2
                          </Avatar>
                        </Box>

                        <Typography
                          fontSize={{
                            md: 18,
                            xs: 12,
                          }}
                        >
                          Com diagnóstico definido é criado um protocolo
                          ​individual e personalizado ({' '}
                          <Box component="strong" color={'#000'}>
                            plano de tratamento
                          </Box>{' '}
                          ) para tratar de forma​{' '}
                          <Box component="strong" color={'#000'}>
                            personalizada
                          </Box>{' '}
                          o que te incomoda.
                        </Typography>
                      </Stack>
                      <Stack
                        direction={{
                          xs: 'column',
                          md: 'row',
                        }}
                        alignItems={{
                          xs: 'center',
                          md: 'initial',
                        }}
                        gap={2}
                      >
                        <Box marginTop={1}>
                          <Avatar
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                            }}
                          >
                            3
                          </Avatar>
                        </Box>

                        <Typography
                          fontSize={{
                            md: 18,
                            xs: 12,
                          }}
                        >
                          Durante as sessões, além do{' '}
                          <Box component="strong" color={'#000'}>
                            acolhimento
                          </Box>{' '}
                          e uma​{' '}
                          <Box component="strong" color={'#000'}>
                            escuta qualificada
                          </Box>{' '}
                          trabalhamos com técnicas ​eficazes da TCC (Terapias
                          Cognitivo ​Comportamentais).
                        </Typography>
                      </Stack>
                      <Stack
                        direction={{
                          xs: 'column',
                          md: 'row',
                        }}
                        alignItems={{
                          xs: 'center',
                          md: 'initial',
                        }}
                        gap={2}
                      >
                        <Box marginTop={1}>
                          <Avatar
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                            }}
                          >
                            4
                          </Avatar>
                        </Box>

                        <Typography
                          fontSize={{
                            md: 18,
                            xs: 12,
                          }}
                        >
                          Ao atingirmos os{' '}
                          <Box component="strong" color={'#000'}>
                            objetivos terapêuticos
                          </Box>{' '}
                          que te ​trouxeram para o tratamento e mediante a
                          ​melhora do seu quadro, você já será capaz de
                          ​utilizar as{' '}
                          <Box component="strong" color={'#000'}>
                            habilidades
                          </Box>{' '}
                          e{' '}
                          <Box component="strong" color={'#000'}>
                            ferramentas
                          </Box>{' '}
                          construídas ​em terapia.
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid2>
            </Grid2>
            <Stack>
              <Typography
                fontSize={{
                  md: 24,
                  xs: 18,
                }}
                fontWeight={700}
                marginTop={{
                  xs: 4,
                  lg: 8,
                }}
                textAlign={'center'}
              >
                Você pode <strong>retomar as rédeas</strong> da sua{' '}
                <strong>retomar as rédeas</strong>. E eu ​posso te auxiliar com
                isso através de uma​{' '}
                <strong>abordagem validada cientificamente</strong>.
              </Typography>
            </Stack>

            <Stack alignItems={'center'} marginTop={4}>
              <Box>
                <Button variant="contained" color="secondary" size="large">
                  Fale comigo
                </Button>
              </Box>
            </Stack>
          </MaxWidth>
        </Stack>
      </Stack>
    </Stack>
  );
};
