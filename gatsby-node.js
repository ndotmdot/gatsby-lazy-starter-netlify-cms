/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};



// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   const { frontmatter } = node
//   if (frontmatter) {
//     const { image } = frontmatter
//     if (image) {
//       console.log(image)
//       if (image.indexOf('/img') === 0) {
//         frontmatter.image = path.relative(
//           path.dirname(node.fileAbsolutePath),
//           path.join(__dirname, '..', image)
//         )
//         console.log(node.fileAbsolutePath)

//       }
//     }
//   }

//   if (node.internal.type === `MarkdownRemark` && node.frontmatter.image) {
//     const path = `..${node.frontmatter.image}`;

//      createNodeField({
//         node,
//         name: 'image',
//         value: path
//      });
//   }
  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  
// }
