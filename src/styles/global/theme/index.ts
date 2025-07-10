import type { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const defaultTheme: iTheme = {
  name: 'default',

  colors: {
    header: '#322939',
    darkVinho: '#CCC0A6',
    textDefault: '#CCC0A6',
    lightVinho: '#594855',
    bege: '#F3ECE2',
    cobreColor: 'linear-gradient(292.95deg, #AD986A 21.49%, #AD986A 53.8%, #AD986A 85.43%);',
  },
  ...sharedTheme,
};
