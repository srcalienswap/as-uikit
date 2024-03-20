import { createStyles, MantineNumberSize, rem, getSize } from '@asuikit/styles';

interface ModalBaseHeaderStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ModalBaseHeaderStylesParams) => {
  const paddingValue = getSize({ size: padding, sizes: theme.spacing });
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: paddingValue,
      paddingRight: `calc(${paddingValue} - ${rem(5)})`,
      position: 'sticky',
      top: 0,
      backgroundColor: theme.colors.bg[3],
      zIndex: 1000,
    },
  };
});
