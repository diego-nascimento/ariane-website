'use client';
import { MaxWidth } from '@/components/MaxWidth';
import {
  Button,
  Grid2 as Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

export const Presentation = () => {
  const theme = useTheme();
  return (
    <Stack
      id="quem-sou"
      marginTop={{
        xs: 8,
        md: 12,
      }}
      marginBottom={{
        xs: 8,
        md: 12,
      }}
    >
      <MaxWidth>
        <Grid container spacing={8}>
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Stack alignItems={'center'}>
              <Stack
                maxWidth={500}
                sx={{
                  backgroundImage: 'url(oria.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',

                  width: '100%',
                  borderTopLeftRadius: '50%',
                  borderTopRightRadius: '50%',

                  [theme.breakpoints.up('xs')]: {
                    height: 400,
                  },
                  [theme.breakpoints.up('sm')]: {
                    height: 500,
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              flex={1}
              height={'100%'}
            >
              <Stack>
                <Stack>
                  <Typography
                    fontSize={{
                      xs: 20,
                      md: 48,
                    }}
                    fontWeight={500}
                    color="secondary"
                    fontFamily={'Noto Serif Georgian Variable, serif'}
                  >
                    Oi, sou Ariane Miranda
                  </Typography>
                </Stack>

                <Stack marginTop={2} gap={2}>
                  <Typography
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                    sx={{
                      color: (theme) => theme.palette.primary.contrastText,
                    }}
                  >
                    Sou psicóloga com foco em perinatalidade e parentalidade, ou
                    seja: Dedico o meu trabalho para auxiliar mães e famílias do
                    planejamento familiar até questões com a criação dos filhos.
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                    sx={{
                      color: (theme) => theme.palette.primary.contrastText,
                    }}
                  >
                    Eu sei o que é precisar de apoio e acolhimento e não saber
                    onde encontrar! É por isso que ao longo da minha carreira
                    venho me dedicando e me especializando para ajudar você.
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                    sx={{
                      color: (theme) => theme.palette.primary.contrastText,
                    }}
                  >
                    Para além da graduação em psicologia, sou Pós-graduada em
                    Psicologia Perinatal e da Parentalidade e Pós-graduanda em
                    Terapias Cognitivas-Comportamentais.
                  </Typography>
                </Stack>
                <Stack marginTop={4} alignItems={'center'}>
                  <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                    }}
                  >
                    Fale comigo
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                      display: {
                        xs: 'block',
                        md: 'none',
                      },
                    }}
                    fullWidth
                  >
                    Fale comigo
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </MaxWidth>
    </Stack>
  );
};
