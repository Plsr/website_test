import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const HeaderTitle = ({ isBold, children }) => (
  <Text isBold={isBold}>{children}</Text>
)

HeaderTitle.propTypes = {
  isBold: PropTypes.bool,
  children: PropTypes.node.isRequired
}

const Text = styled('h2')`
  font-size: 24px;
  font-weight: ${props => (props.isBold ? '600' : '400')};
  color: ${props => props.theme.colors.black};
`

export default HeaderTitle
