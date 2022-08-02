import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Test = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          nodes {
            slug
          }
        }
      }
    `
  );
  {
    data.allContentfulBlogPost.nodes.map((slug) => {
      return console.log(slug.slug);
    });
  }
};

export default Test;
