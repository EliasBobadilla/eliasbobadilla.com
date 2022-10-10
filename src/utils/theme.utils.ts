import { Theme } from '@emotion/react'
import { DARK, LIGHT } from '../const/schema'

const KEY = 'theme'

export const getTheme = (value: string): Theme => {
  return value === LIGHT.name ? LIGHT : DARK
}

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem(KEY)
  if (stored) {
    const theme = JSON.parse(stored)
    return getTheme(theme)
  }

  setStoredTheme(DARK.name)
  return getTheme(DARK.name)
}

export function setStoredTheme(theme: string) {
  localStorage.setItem(KEY, JSON.stringify(theme))
}
