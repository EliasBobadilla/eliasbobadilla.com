import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    name: string
    colors: {
      background: string
      primary_text: string
      secondary_text: string
      accent: string
      shadow: string
      code: string
      code_background: string
    }
    sizes: {
      nav_height: string
    }
  }
}
