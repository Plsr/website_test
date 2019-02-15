import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

class RecentArticle extends PureComponent {
  render() {
    const { title, date, excerpt } = this.props

    return (
      <ArticleWrapper>
        <ArticleDate>{date}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleExcerpt>{excerpt}</ArticleExcerpt>
        <ReadMoreButton>Read on ></ReadMoreButton>
      </ArticleWrapper>
    )
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
  }
}

const ArticleWrapper = styled('div')`
  margin-bottom: 40px;
`

const ArticleDate = styled('span')`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.darkGrey};
  margin: 0;
`

const ArticleTitle = styled('h3')`
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 10px;
`

const ArticleExcerpt = styled('p')`
  margin-top: 0;
`

// TODO: Should be a button once it does something, probably
const ReadMoreButton = styled('div')`
  background-color: ${props => props.theme.colors.midGrey};
  padding: 10px 20px;
  border-radius: 4px;
  display: inline-block;
  &:hover {
    background-color: ${props => props.theme.colors.accentOne};
  }
`

export default RecentArticle
