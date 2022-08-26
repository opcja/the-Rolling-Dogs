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
  const PostTemplate = path.resolve(`src/templates/BlogTemplate.js`);
  const tagsList = [];
  const queryResults = await graphql(`
    query queryPost {
      allContentfulBlogPost {
        nodes {
          tags
          id
        }
      }
    }
  `);

  queryResults.data.allContentfulBlogPost.nodes.map((node) => {
    node.tags.map((tag) => {
      const slugifiedTag = slugify(tag, { lower: true });
      if (!tagsList.includes(slugifiedTag)) {
        tagsList.push(slugifiedTag);
        createPage({
          // Path for this page — required
          path: `blog/${slugifiedTag}`,
          component: PostTemplate,
          context: {
            tag: tag,
          },
        });
      }
    });
  });
};
