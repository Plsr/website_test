import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

// The actual list rendering the content
const List = ({ data }) => {
  return (
    <>
      <h3>Recent Articles</h3>
      <div>
        {data.allMarkdownRemark.edges.map(article => (
          <p key={article.node.id}>{article.node.frontmatter.title}</p>
        ))}
      </div>
    </>
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
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <List data={data} {...props} />}
  />
)

List.propTypes = {
  data: PropTypes.object.isRequired
}

export default RecentArticlesList
