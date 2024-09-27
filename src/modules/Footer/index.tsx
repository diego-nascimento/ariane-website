'use client';
import { MaxWidth } from '@/components/MaxWidth';
import { Instagram } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

export const Footer = () => {
  const theme = useTheme();
  return (
    <Stack
      width={'100%'}
      marginTop={16}
      sx={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <MaxWidth>
        <Stack paddingY={4}>
          <Grid2
            container
            spacing={{
              xs: 4,
              md: 0,
            }}
          >
            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Stack
                direction={{
                  xs: 'column',
                  md: 'row',
                }}
                gap={4}
              >
                <Typography
                  fontFamily={'Great Vibes'}
                  fontSize={{
                    xs: 64,
                    md: 42,
                  }}
                  sx={{
                    color: theme.palette.secondary.contrastText,
                  }}
                >
                  Ariane Miranda
                </Typography>
                <Stack
                  gap={{
                    xs: 0,
                    md: 2,
                  }}
                >
                  <Typography
                    fontFamily={'Noto Serif Georgian Variable, serif'}
                    fontWeight={600}
                    fontSize={{
                      xs: 18,
                    }}
                    sx={{
                      color: theme.palette.secondary.contrastText,
                    }}
                  >
                    Contatos
                  </Typography>
                  <List>
                    <ListItem disablePadding>
                      <Typography
                        fontSize={{
                          xs: 14,
                        }}
                        sx={{
                          color: theme.palette.secondary.contrastText,
                        }}
                        fontWeight={500}
                      >
                        arianemiranda58@gmail.com
                      </Typography>
                    </ListItem>
                    <ListItem disablePadding>
                      <Typography
                        fontSize={{
                          xs: 14,
                        }}
                        sx={{
                          color: theme.palette.secondary.contrastText,
                        }}
                        fontWeight={500}
                      >
                        (32) 9-9965-8169
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                md: 3,
              }}
            >
              <Stack
                alignItems={{
                  xs: 'flex-start',
                  md: 'center',
                }}
              >
                <Stack
                  gap={{
                    xs: 0,
                    md: 2,
                  }}
                >
                  <Typography
                    fontFamily={'Noto Serif Georgian Variable, serif'}
                    fontWeight={600}
                    fontSize={{
                      xs: 18,
                    }}
                    sx={{
                      color: theme.palette.secondary.contrastText,
                    }}
                  >
                    Links
                  </Typography>
                  <List>
                    <ListItem disablePadding>
                      <Link href={'/'}>
                        <Typography
                          fontSize={{
                            xs: 14,
                          }}
                          sx={{
                            color: theme.palette.secondary.contrastText,
                          }}
                          fontWeight={500}
                        >
                          Home
                        </Typography>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href={'/'}>
                        <Typography
                          fontSize={{
                            xs: 14,
                          }}
                          sx={{
                            color: theme.palette.secondary.contrastText,
                          }}
                          fontWeight={500}
                        >
                          Informações
                        </Typography>
                      </Link>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                md: 3,
              }}
            >
              <Stack
                alignItems={{
                  xs: 'flex-start',
                  md: 'flex-end',
                }}
                justifyContent={'center'}
                flex={1}
                sx={{
                  height: '100%',
                }}
              >
                <Button variant="contained">Agendar atendimento</Button>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
        <Stack
          marginY={4}
          sx={{
            bgcolor: theme.palette.primary.contrastText,
          }}
        >
          <Divider />
        </Stack>
        <Stack
          marginBottom={4}
          direction="row"
          justifyContent={'space-between'}
        >
          <Typography
            sx={{
              color: theme.palette.secondary.contrastText,
            }}
          >
            Ariane Miranda © {new Date().getFullYear()}. Todos os direitos
            reservados.
          </Typography>
          <Stack gap={2}>
            <Box>
              <IconButton
                color="primary"
                sx={{
                  backgroundColor: theme.palette.secondary.contrastText,
                  '&:hover': {
                    background: '#fff',
                  },
                }}
              >
                <Instagram color="secondary" />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
