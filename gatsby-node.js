/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

// Add slugs to markdown nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

// Create pages from markdown nodes
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
              excerpt
              id
            }
          }
        }
      }
    `
  ).then(result => {
    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/ArticlesIndex.js',
      pageLength: 20,
      pathPrefix: 'articles'
    })
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/article.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
