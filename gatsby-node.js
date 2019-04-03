/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({
        node,
        getNode, 
        // basePath: `pages`
      });
      createNodeField({
        node,
        name: "slug",
        value: slug,
      });
    }
  };