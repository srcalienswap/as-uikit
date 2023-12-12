import { MantineNumberSize } from '@asuikit/styles';
import { createSafeContext } from '@asuikit/utils';

export type ScrollAreaComponent = React.FC<any>;

interface ModalContext {
  yOffset: string | number;
  radius: MantineNumberSize;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
