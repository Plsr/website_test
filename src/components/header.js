import React from 'react'
import styled from '@emotion/styled'
import HeaderTitle from './HeaderTitle'
import backgroundImage from '../images/memphis-colorful.png'
import Wrapper from './Wrapper'

class Header extends React.PureComponent {
  render() {
    return (
      <Background>
        <Content>
          <Wrapper>
            <Title>
              <HeaderTitle isBold>Hi, I'm Chris 👋</HeaderTitle>
              <HeaderTitle>I'm a Fullstack Software Engineer</HeaderTitle>
            </Title>
            <Paragraph>
              I like building web applications using ReactJS and Ruby on Rails.
              <br />
              I’m interested in running, cycling, writing and mechanical
              keyboards.
              <br />
              I’m currently working at{' '}
              <Link href={'https://railslove.com'}>Railslove.</Link>
            </Paragraph>
            <Paragraph>
              Drop me a line at{' '}
              <Link href={'mailto:hello@christianpoplawski.de'}>
                hello@christianpoplawski.de
              </Link>
            </Paragraph>
          </Wrapper>
        </Content>
      </Background>
    )
  }
}

const Paragraph = styled('p')`
  font-size: ${props => props.theme.fontSizes.regular};
  color: ${props => props.theme.colors.black};
  margin-bottom: 20px;
`

const Link = styled('a')`
  text-decoration: underline;
  font-weight: 600;
  color: ${props => props.theme.colors.black};
`

const Background = styled('div')`
  background-color: ${props => props.theme.white};
  position: relative;
  padding: 40px 0;
  overflow: hidden;
  background-image: url(${backgroundImage});
`

const Content = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled('div')`
  margin-bottom: 40px;
`

export default Header
