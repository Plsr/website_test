import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../lib/theme'
import GlobalStyles from './GlobalStyles'

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider>
    )
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  }
}

export default Layout
