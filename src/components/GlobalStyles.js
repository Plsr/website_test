import React, { PureComponent } from 'react'
import { Global, css } from '@emotion/core'

class GlobalStyles extends PureComponent {
  render() {
    return (
      <Global
        styles={css`
          * {
            font-family: 'Zilla Slab', serif;
          }
        `}
      />
    )
  }
}

export default GlobalStyles
