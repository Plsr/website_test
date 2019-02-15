import React, { PureComponent } from 'react'
import { Global, css } from '@emotion/core'

class GlobalStyles extends PureComponent {
  render() {
    return (
      <Global
        styles={css`
          * {
            font-family: 'Zilla Slab', serif;
            font-size: 18px;
          }
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
    )
  }
}

export default GlobalStyles
