import { Box, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MaxWidth = ({ children }: PropsWithChildren) => {
  return (
    <Stack alignItems={'center'} paddingX={3}>
      <Stack width={'100%'} maxWidth={'1290px'}>
        <Box>{children}</Box>
      </Stack>
    </Stack>
  );
};
