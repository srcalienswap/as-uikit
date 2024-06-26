# AS.UIKit tests

@asuikit/tests is a helper package that is used to contain commonly repeated tests logic. It is not published on npm.

## checkAccessibility

checkAccessibility test checks markup of given component with axe. It allows to find ~30% of accessibility issues.

```tsx
import { render } from '@testing-library/react';
import { checkAccessibility } from '@asuikit/tests';
import { Tabs, Tab } from '@asuikit/core';

const content = [
  <Tab label="tab-1" key="tab-1">
    tab-1
  </Tab>,
  <Tab label="tab-2" key="tab-2">
    tab-2
  </Tab>,
  <Tab label="tab-3" key="tab-3">
    tab-3
  </Tab>,
];

describe('@asuikit/core/Tabs', () => {
  checkAccessibility([<Tabs>{content}</Tabs>, <Tabs initialTab={2}>{content}</Tabs>]);
});
```

## itRendersChildren

Checks if component renders React node at any position. itRendersChildren accepts 2 arguments: component and required component props.

```tsx
import { itRendersChildren } from '@asuikit/tests';
import { Button } from '@asuikit/core';

describe('@asuikit/core/Button', () => {
  itRendersChildren(Button, { color: 'red' });
});
```

## itSupportsClassName

Checks if component sets given className on root element. itSupportsClassName accepts 2 arguments: component and required component props.

```tsx
import { itSupportsClassName } from '@asuikit/tests';
import { Button } from '@asuikit/core';

describe('@asuikit/core/Button', () => {
  itSupportsClassName(Button, { color: 'red' });
});
```

## itSupportsOthers

Checks if component spreads ...others props on root element. itSupportsOthers accepts 2 arguments: component and required component props.

```tsx
import { itSupportsOthers } from '@asuikit/tests';
import { Button } from '@asuikit/core';

describe('@asuikit/core/Button', () => {
  itSupportsOthers(Button, { children: 'test' });
});
```

## itSupportsStyle

Checks it component sets given styles object to style property of root element. itSupportsStyle accepts 2 arguments: component and required component props.

```tsx
import { itSupportsStyle } from '@asuikit/tests';
import { Button } from '@asuikit/core';

describe('@asuikit/core/Button', () => {
  itSupportsStyle(Button, { children: 'test' });
});
```

## itSupportsRef

Checks if component produces ref on mount. itSupportsRef accepts 4 arguments:

- component
- required component props
- ref instance type
- ref prop key (optional, defaults to 'ref')

```tsx
import { itSupportsRef } from '@asuikit/tests';
import { Button } from '@asuikit/core';

describe('@asuikit/core/Button', () => {
  itSupportsRef(Button, { children: 'test' }, HTMLButtonElement, 'customRefPath');
});
```

## itSupportsStylesApi

Checks if component attaches correct styles to inner elements:

```tsx
import { itSupportsStylesApi } from '@asuikit/tests';
import { Button } from './Button';
import { Button as ButtonStylesApi } from './styles.api';

describe('@asuikit/core/Button', () => {
  itSupportsRef(Button, { children: 'test' }, Object.keys(ButtonStylesApi), 'button');
});
```
