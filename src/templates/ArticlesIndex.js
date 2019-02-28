import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Wrapper from '../components/Wrapper'
import Layout from '../components/layout'
import ArticlesList from '../components/ArticlesList'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pageContext
  const previousUrl =
    index - 1 == 1 ? pathPrefix : `${pathPrefix}/${(index - 1).toString()}`
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`

  return (
    <Layout>
      <Wrapper>
        <ArticlesList articles={group} />
        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <span>
          Page {index} of {pageCount}
        </span>
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </Wrapper>
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default IndexPage
