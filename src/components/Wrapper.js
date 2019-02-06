import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

const StyledWrapper = styled('div')`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
