import { Theme } from '@emotion/react'

export const DARK: Theme = {
  name: 'Dark',
  colors: {
    background: '#201A30',
    primary_text: '#fff',
    secondary_text: '#c1c3c5',
    accent: '#0CF4E3',
    shadow: 'rgba(12, 244, 227, 0.2)',
    code: '#fff',
    code_background: '#1c1c1c',
  },
  sizes: { nav_height: '50px' },
}

export const LIGHT: Theme = {
  name: 'Light',
  colors: {
    background: '#c1c3c5',
    primary_text: '#fff',
    secondary_text: '#c1c3c5',
    accent: '#0CF4E3',
    shadow: 'rgba(12, 244, 227, 0.2)',
    code: '#fff',
    code_background: '#1c1c1c',
  },
  sizes: { nav_height: '50px' },
}
