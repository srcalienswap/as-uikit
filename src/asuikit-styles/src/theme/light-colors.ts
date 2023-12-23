import type { Tuple } from './types';

const grey: Tuple<string, 10> = [
  '#F2F2F2',
  '#E6E6E6',
  '#CCCCCC',
  '#B3B3B3',
  '#999999',
  '#808080',
  '#666666',
  '#4D4D4D',
  '#333333',
  '#0A0A0A',
];

export const LIGHT_COLORS = {
  grey,
  purple: [
    '#E5E0FF',
    '#DBD4FF',
    '#D0C7FF',
    '#C6BAFF',
    '#BBADFF',
    '#B0A1FF',
    '#9B87FF',
    '#917AFF',
    '#866EFF',
    '#7B61FF',
  ],
  white: [
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.25)',
    'rgba(255, 255, 255, 0.4)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.7)',
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.9)',
    'rgba(255, 255, 255, 0.95)',
    '#FFFFFF',
  ],
  green: [
    '#E1FAF2',
    '#D4FAED',
    '#B6F2DE',
    '#A1E5CF',
    '#82D9BC',
    '#66CCAA',
    '#52CCA3',
    '#30BF8F',
    '#30BF8F',
    '#00B377',
  ],
  red: [
    '#FFEDED',
    '#FFD9D9',
    '#FFC7C7',
    '#FFB5B5',
    '#FFA3A3',
    '#FF9696',
    '#F27E7E',
    '#F26D6D',
    '#E55757',
    '#D94141',
  ],
  blue: [
    '#E5EDFF',
    '#D1DFFF',
    '#BDD1FF',
    '#A8C2FF',
    '#93B4FF',
    '#80A6FF',
    '#6B98FF',
    '#578AFF',
    '#427BFF',
    '#2668FF',
  ],
  yellow: [
    '#FFF7E0',
    '#FFF2CC',
    '#FFEBAD',
    '#FFE599',
    '#FFE085',
    '#FFDC70',
    '#FFD65C',
    '#FFD24D',
    '#FFCE38',
    '#FFC619',
  ],
  orange: [
    '#FFF5EB',
    '#FFEAD6',
    '#FFE0C2',
    '#FFD6AD',
    '#FFCC99',
    '#FFC285',
    '#FFB870',
    '#FFAD5C',
    '#FFA347',
    '#FF9933',
  ],
  dark: [
    '#C1C2C5',
    '#A6A7AB',
    '#909296',
    '#5c5f66',
    '#373A40',
    '#2C2E33',
    '#25262b',
    '#1A1B1E',
    '#141517',
    '#101113',
  ],

  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],

  pink: [
    '#fff0f6',
    '#ffdeeb',
    '#fcc2d7',
    '#faa2c1',
    '#f783ac',
    '#f06595',
    '#e64980',
    '#d6336c',
    '#c2255c',
    '#a61e4d',
  ],

  grape: [
    '#f8f0fc',
    '#f3d9fa',
    '#eebefa',
    '#e599f7',
    '#da77f2',
    '#cc5de8',
    '#be4bdb',
    '#ae3ec9',
    '#9c36b5',
    '#862e9c',
  ],

/*   purple: [
    '#f3f0ff',
    '#e5dbff',
    '#d0bfff',
    '#b197fc',
    '#9775fa',
    '#845ef7',
    '#7950f2',
    '#7048e8',
    '#6741d9',
    '#5f3dc4',
  ], */

  indigo: [
    '#edf2ff',
    '#dbe4ff',
    '#bac8ff',
    '#91a7ff',
    '#748ffc',
    '#5c7cfa',
    '#4c6ef5',
    '#4263eb',
    '#3b5bdb',
    '#364fc7',
  ],

  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],

  teal: [
    '#e6fcf5',
    '#c3fae8',
    '#96f2d7',
    '#63e6be',
    '#38d9a9',
    '#20c997',
    '#12b886',
    '#0ca678',
    '#099268',
    '#087f5b',
  ],

  lime: [
    '#f4fce3',
    '#e9fac8',
    '#d8f5a2',
    '#c0eb75',
    '#a9e34b',
    '#94d82d',
    '#82c91e',
    '#74b816',
    '#66a80f',
    '#5c940d',
  ],

  line: [
    '#F2F2F2',
    '#F2F2F2',
    '#E6E6E6',
    '#CCCCCC',
    '#F2F2F2',
    '#F2F2F2',
    '#F2F2F2',
    '#F2F2F2',
    '#F2F2F2',
    '#F2F2F2',
  ],
  bg: [
    '#FFFFFF',
    '#FFFFFF',
    '#F5F5F5',
    '#EBEBEB',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
  ],

  raise: [
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
    '#29CC6A',
  ],
  decline: [
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
    '#FC5555',
  ],
  text: [grey[9], grey[9], grey[7], grey[5], grey[2], grey[9], grey[9], grey[9], grey[9], grey[9]],
} as Record<string, Tuple<string, 10>>;
