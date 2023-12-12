import React from 'react';
import { Text, Box } from '@asuikit/core';
import { AccordionDemo, TimelineBase } from '@asuikit/demos';

export function Content() {
  return (
    <div>
      <Text
        mb="sm"
        size="lg"
        weight={700}
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      >
        Accordion component
      </Text>

      <Box
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          borderRadius: theme.radius.sm,
        })}
      >
        <AccordionDemo />
      </Box>

      <Text
        mb="sm"
        mt={40}
        size="lg"
        weight={700}
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      >
        Timeline component
      </Text>
      <TimelineBase />
    </div>
  );
}
