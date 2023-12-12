import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Tabs
  '../src/asuikit-core/src/Tabs/TabsList/TabsList.tsx',
  '../src/asuikit-core/src/Tabs/Tab/Tab.tsx',
  '../src/asuikit-core/src/Tabs/TabsPanel/TabsPanel.tsx',
  '../src/asuikit-core/src/Tabs/Tabs.tsx',

  // Accordion
  '../src/asuikit-core/src/Accordion/AccordionControl/AccordionControl.tsx',
  '../src/asuikit-core/src/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/asuikit-core/src/Accordion/AccordionPanel/AccordionPanel.tsx',

  // Tooltip
  '../src/asuikit-core/src/Tooltip/TooltipFloating/TooltipFloating.tsx',
  '../src/asuikit-core/src/Tooltip/TooltipGroup/TooltipGroup.tsx',

  // Popover
  '../src/asuikit-core/src/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/asuikit-core/src/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // HoverCard
  '../src/asuikit-core/src/HoverCard/HoverCardTarget/HoverCardTarget.tsx',
  '../src/asuikit-core/src/HoverCard/HoverCardDropdown/HoverCardDropdown.tsx',

  // Menu
  '../src/asuikit-core/src/Menu/MenuTarget/MenuTarget.tsx',
  '../src/asuikit-core/src/Menu/MenuDropdown/MenuDropdown.tsx',
  '../src/asuikit-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/asuikit-core/src/Menu/MenuLabel/MenuLabel.tsx',

  // Input
  '../src/asuikit-core/src/Input/InputLabel/InputLabel.tsx',
  '../src/asuikit-core/src/Input/InputWrapper/InputWrapper.tsx',
  '../src/asuikit-core/src/Input/InputDescription/InputDescription.tsx',
  '../src/asuikit-core/src/Input/InputError/InputError.tsx',

  // List
  '../src/asuikit-core/src/List/ListItem/ListItem.tsx',

  // Avatar
  '../src/asuikit-core/src/Avatar/AvatarGroup/AvatarGroup.tsx',

  // Checkbox
  '../src/asuikit-core/src/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Switch
  '../src/asuikit-core/src/Switch/SwitchGroup/SwitchGroup.tsx',

  // Radio
  '../src/asuikit-core/src/Radio/RadioGroup/RadioGroup.tsx',

  // Chip
  '../src/asuikit-core/src/Chip/ChipGroup/ChipGroup.tsx',

  // Grid
  '../src/asuikit-core/src/Grid/Col/Col.tsx',

  // Button
  '../src/asuikit-core/src/Button/ButtonGroup/ButtonGroup.tsx',

  // Timeline
  '../src/asuikit-core/src/Timeline/TimelineItem/TimelineItem.tsx',

  // Slider
  '../src/asuikit-core/src/Slider/Slider/Slider.tsx',
  '../src/asuikit-core/src/Slider/RangeSlider/RangeSlider.tsx',

  // AppShell
  '../src/asuikit-core/src/AppShell/Navbar/Navbar.tsx',
  '../src/asuikit-core/src/AppShell/Header/Header.tsx',
  '../src/asuikit-core/src/AppShell/Footer/Footer.tsx',
  '../src/asuikit-core/src/AppShell/Aside/Aside.tsx',

  // Stepper
  '../src/asuikit-core/src/Stepper/Step/Step.tsx',

  // Pagination
  '../src/asuikit-core/src/Pagination/PaginationRoot/PaginationRoot.tsx',
  '../src/asuikit-core/src/Pagination/PaginationItems/PaginationItems.tsx',

  // Carousel
  '../src/asuikit-carousel/src/Carousel.tsx',
  '../src/asuikit-carousel/src/CarouselSlide/CarouselSlide.tsx',

  // Other
  '../src/asuikit-notifications/src/Notifications/Notifications.tsx',
  '../src/asuikit-prism/src/Prism/Prism.tsx',
  '../src/asuikit-spotlight/src/SpotlightProvider.tsx',
  '../src/asuikit-modals/src/ModalsProvider.tsx',
  '../src/asuikit-tiptap/src/RichTextEditor.tsx',
  '../src/asuikit-nprogress/src/NavigationProgress.tsx',
  '../src/asuikit-dropzone/src/Dropzone.tsx',
  '../src/asuikit-dropzone/src/DropzoneFullScreen.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/asuikit-core/src') },
  { type: 'package', path: path.join(__dirname, '../src/asuikit-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/asuikit-dropzone/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
