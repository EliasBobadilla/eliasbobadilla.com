import React from 'react'
import { useEffect, useState } from 'react'
import hljs from 'highlight.js'
import { css, useTheme } from '@emotion/react'

import 'highlight.js/styles/base16/railscasts.css'

interface Props {
  language: string
  text: string
  typeItOut?: boolean
}

export const Terminal = ({ language, text, typeItOut }: Props) => {
  const [code, setCode] = useState<string>('saile ~ $ ')

  const theme = useTheme()

  useEffect(() => {
    if (!code) return
    hljs.highlightAll()
  }, [code])

  useEffect(() => {
    if (!typeItOut) {
      setCode(code + text)
      return
    }

    let i = 0
    const speed = 60
    let txt = code

    function typeIt() {
      if (i < text.length) {
        txt += text.charAt(i)
        setCode(txt)
        i++
        setTimeout(typeIt, speed)
      }
    }

    setTimeout(typeIt, 1800)
  }, [])

  return (
    <div
      css={css`
        width: 100%;
        text-align: left;
        padding: 0 1rem;
        border-radius: 5px;
        background: ${theme.colors.code_background};
        min-height: 285px;
        animation: fadeUp 2s;
        box-shadow: 0px 12px 36.8px 9.2px rgba(0, 0, 0, 0.3);
        @media (max-width: 750px) {
          width: 90%;
        }
      `}
    >
      <pre
        css={css`
          white-space: pre-line;
          font-size: 0.8rem;
          padding-top: 1rem;
        `}
      >
        <code
          className={language}
          css={css`
            font-family: Space Mono, SFMono-Regular, Menlo, Monaco, Consolas,
              Liberation Mono, Courier New, monospace;
            background: none !important;
            border: none !important;
            color: ${theme.colors.code};
          `}
        >
          {code}
        </code>
      </pre>
    </div>
  )
}
