const path = require(`path`)
const axios = require('axios');
const crypto = require('crypto');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {fileAbsolutePath:  { regex:"/content/blog/" }}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the randomuser api
  const fetchStocks = () => axios.get(`http://188.166.95.21/stocks`);
  // await for results
  const res = await fetchStocks();

  var parsedRes = JSON.parse(res.data);

  console.log('last: ' + parsedRes.lastUpdated)
  console.log('stocks: ' + parsedRes.stocks)

      // Create your node object
  const stockNode = {
    // Required fields
    id: `StockFromApi`,
    parent: `__SOURCE__`,
    internal: {
      type: `Stocks`, // name of the graphQL query --> allRandomUser {}
      // contentDigest will be added just after
      // but it is required
    },
    children: [],

    // Other fields that you want to query with graphQl
    lastUpdated: parsedRes.lastUpdated,
    Stocks: parsedRes.stocks
    // etc...
  }

   // Get content digest of node. (Required field)
   const contentDigest = crypto
   .createHash(`md5`)
   .update(JSON.stringify(stockNode))
   .digest(`hex`);
 // add it to userNode
 stockNode.internal.contentDigest = contentDigest;

 // Create node with the gatsby createNode() API
 createNode(stockNode);

  return;
}