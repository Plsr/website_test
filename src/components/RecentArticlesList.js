import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import Wrapper from './Wrapper'
import RecentArticle from './RecentArticle'
import { PrimaryHeadline } from './Typography'

// The actual list rendering the content
const List = ({ data }) => {
  return (
    <Background>
      <Wrapper>
        <Content>
          <PrimaryHeadline>Recent Articles</PrimaryHeadline>
          <div>
            {data.allMarkdownRemark.edges.map(article => (
              <div key={article.node.id}>
                <RecentArticle
                  title={article.node.frontmatter.title}
                  date={article.node.frontmatter.date}
                  excerpt={article.node.excerpt}
                  slug={article.node.fields.slug}
                />
              </div>
            ))}
          </div>
        </Content>
      </Wrapper>
    </Background>
  )
}

// Container that passes the data read from fs on to the List
const RecentArticlesList = props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
        ) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              id
              excerpt
            }
          }
        }
      }
    `}
    render={data => <List data={data} {...props} />}
  />
)

const Background = styled('div')`
  background-color: ${props => props.theme.colors.grey};
`

const Content = styled('div')`
  padding: 80px 0;
`

List.propTypes = {
  data: PropTypes.object.isRequired
}

export default RecentArticlesList
