import React from 'react'
import { Global, css, useTheme } from '@emotion/react'

export const GlobalStyle = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          background: ${theme.colors.background};
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          color: ${theme.colors.primary_text};
        }

        a {
          color: ${theme.colors.primary_text};
        }

        a:hover {
          color: ${theme.colors.primary_text};
        }

        button {
          background: transparent;
          color: ${theme.colors.primary_text};
          font-size: 1rem;
          border-width: 0;
          padding: 0;
        }

        button:hover {
          cursor: pointer;
        }

        h4 {
          color: ${theme.colors.secondary_text};
        }
      `}
    />
  )
}
