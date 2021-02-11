import styled from '@emotion/styled'

export const PrimaryHeadline = styled('h3')`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.large};
  padding: 0 10px;
  margin-top: 0;
  background-size: 2px 1em;
  box-shadow: inset 0 -0.4em ${props => props.theme.colors.accentTwo};
`
