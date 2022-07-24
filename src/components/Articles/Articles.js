import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

// const Bold = ({ children }) => <span className="bold">{children}</span>;
// const Text = ({ children }) => <p className="align-center">{children}</p>;

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//     [BLOCKS.EMBEDDED_ASSET]: (node) => {
//       return (
//         <>
//           <h2>Embedded Asset</h2>
//           <pre>
//             <code>{JSON.stringify(node, null, 2)}</code>
//           </pre>
//         </>
//       );
//     },
//   },
// };

export const Articles = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              description {
                raw
              }
            }
          }
        }
      }
    `
  );

  return (
    // console.log(data.allContentfulBlogPost.edges[0].node.title)

    <>
      {" "}
      <ul>
        {data.allContentfulBlogPost.edges.map((item) => {
          console.log(item.node.description.raw);
          // const { bodyRichText } = data.allContentfulBlogPost;
          return (
            <li>
              <article>
                <h3>{item.node.title}</h3>
                <p>{item.node.dataPublikacji}</p>
                <p>{renderRichText(item.node.description)}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};
