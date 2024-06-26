import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from '@asuikit/tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('@asuikit/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toStrictEqual('@asuikit/core/SelectScrollArea');
  });
});
