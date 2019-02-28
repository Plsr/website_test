import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import { PrimaryHeadline } from '../components/Typography'

class ArticlesList extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <PrimaryHeadline>Articles</PrimaryHeadline>
        {this.props.articles.map(({ node }) => (
          <div key={node.id}>
            <div>{node.frontmatter.date}</div>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <div>{node.excerpt}</div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default ArticlesList
