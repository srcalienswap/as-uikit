export const PACKAGES_DATA = [
  {
    package: '@asuikit/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@asuikit/hooks'],
  },
  {
    package: '@asuikit/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@asuikit/hooks', '@asuikit/core'],
  },
  {
    package: '@asuikit/form',
    description: 'Form management library',
    dependencies: ['@asuikit/form'],
  },
  {
    package: '@asuikit/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/dates', 'dayjs'],
  },
  {
    package: '@asuikit/notifications',
    description: 'Notifications system',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/notifications'],
  },
  {
    package: '@asuikit/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/prism'],
  },
  {
    package: '@asuikit/tiptap',
    description: 'Rich text editor based on Tiptap',
    dependencies: [
      '@asuikit/hooks',
      '@asuikit/core',
      '@asuikit/tiptap',
      '@tabler/icons-react',
      '@tiptap/react',
      '@tiptap/extension-link',
      '@tiptap/starter-kit',
    ],
  },
  {
    package: '@asuikit/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/dropzone'],
  },
  {
    package: '@asuikit/carousel',
    description: 'Embla based carousel component',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/carousel', 'embla-carousel-react'],
  },
  {
    package: '@asuikit/spotlight',
    description: 'Overlay command center',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/spotlight'],
  },
  {
    package: '@asuikit/modals',
    description: 'Centralized modals manager',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/modals'],
  },
  {
    package: '@asuikit/nprogress',
    description: 'Navigation progress',
    dependencies: ['@asuikit/hooks', '@asuikit/core', '@asuikit/nprogress'],
  },
];
