'use client';
import { MaxWidth } from '@/components/MaxWidth';

import {
  Box,
  Card,
  CardContent,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

const persons = [
  {
    text: 'Estou feliz e confiante no processo terapêutico com a Ariane! Em pouco tempo muita coisa mudou! Sou grata a ela! É um instrumento poderoso para minha cura!!',
    name: 'J.S 40 anos',
  },
  {
    text: `Comecei a me consultar com a Ariane em um dos momentos mais difíceis
da minha vida mas graças a isso passei a enxergar esse momento como um
"copo meio cheio" ao invés de "meio vazio".

", e além disso com o conhecimento dela sobre maternidade e parto me
fez orientações além do trabalho dela, me deixando mais tranquila para
fazer meu plano de parto. Uma profissional excelente e humana.`,
    name: 'A.L.C 24 anos',
  },
  {
    text: 'Está sendo ótima as sessões, me faz acreditar que sou capaz naquilo que eu quero, e no meio das dúvidas e incertezas eu lembro das nossas conversas e combinados, isso me dá mais forças e acreditar que sou capaz.',
    name: 'I.S 28 anos',
  },
];

export const Testemonial = () => {
  const theme = useTheme();
  return (
    <Stack marginY={16} id="comentarios">
      <MaxWidth>
        <Stack alignItems={'center'}>
          <Typography
            fontSize={{
              xs: 8,
              md: 12,
            }}
          >
            O QUE MEUS CLIENTES DIZEM
          </Typography>
          <Typography
            fontSize={{
              xs: 20,
              md: 48,
            }}
            fontFamily={'Noto Serif Georgian Variable, serif'}
            color="secondary"
            textTransform={'uppercase'}
          >
            comentários
          </Typography>
          <Box
            sx={{
              width: '25px',
              height: '2px',
              background: theme.palette.secondary.main,
            }}
          />
        </Stack>
        <Grid2
          container
          marginTop={8}
          spacing={3}
          sx={{
            gridTemplateRows: 'masonry',
          }}
        >
          {persons.map((person) => {
            return (
              <Grid2
                key={person.name}
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    '&:hover': {
                      transition: 'background .5s',
                      backgroundColor: theme.palette.terciary.main,
                      cursor: 'default',
                    },
                  }}
                >
                  <CardContent>
                    <Stack
                      direction={'column'}
                      justifyContent={'space-between'}
                      gap={2}
                      height={'100%'}
                    >
                      <Typography
                        fontStyle={'italic'}
                        fontSize={{
                          xs: 12,
                          md: 18,
                        }}
                        fontWeight={400}
                      >
                        {person.text}
                      </Typography>

                      <Typography
                        textAlign={'end'}
                        fontWeight={500}
                        fontSize={{
                          xs: 13,
                          md: 20,
                        }}
                      >
                        {person.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </MaxWidth>
    </Stack>
  );
};
