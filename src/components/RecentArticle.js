import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

class RecentArticle extends PureComponent {
  render() {
    const { title, date, excerpt, slug } = this.props

    return (
      <ArticleWrapper>
        <ArticleDate>{date}</ArticleDate>
        <ArticleTitle to={slug}>{title}</ArticleTitle>
        <ArticleExcerpt>{excerpt}</ArticleExcerpt>
        <ReadMoreButton to={slug}>Read on ></ReadMoreButton>
      </ArticleWrapper>
    )
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }
}

const ArticleWrapper = styled('div')`
  margin-bottom: 40px;
`

const ArticleDate = styled('span')`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.darkGrey};
  margin: 0;
`

const ArticleTitle = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 10px;
  &:hover {
    background-size: 2px 1em;
    box-shadow: inset 0 -0.4em ${props => props.theme.colors.accentThree};
  }
`

const ArticleExcerpt = styled('p')`
  margin-top: 0;
`

const ReadMoreButton = styled(Link)`
  background-color: ${props => props.theme.colors.midGrey};
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  display: inline-block;
  &:hover {
    background-color: ${props => props.theme.colors.accentThree};
  }
`

export default RecentArticle
