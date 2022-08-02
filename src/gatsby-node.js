const path = require("path");
const slugify = require("slugify");

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       fallback: {
//         path: require.resolve("path-browserify"),
//       },
//     },
//   });
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve(`src/templates/post.js`);
  const queryResults = await graphql(`
    query queryPost {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  console.log(queryResults.data.allContentfulBlogPost.nodes);
  queryResults.data.allContentfulBlogPost.nodes.map((slug) => {
    createPage({
      // Path for this page — required
      path: `blog/${slug.slug}`,
      component: PostTemplate,
      context: {},
    });
  });
};
