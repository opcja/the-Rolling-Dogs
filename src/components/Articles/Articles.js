import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Button } from "../Button/Button";

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

const DataAndTags = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div {
    display: flex;
  }

  a {
    margin-right: 10px;
  }

  a:nth-last-of-type(1) {
    margin-right: 0px;
  }

  a,
  p {
    font-family: "Lora", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.caption};
    color: ${({ theme }) => theme.colors.black200};
  }

  a::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    margin-top: 2px;
    background-color: ${({ theme }) => theme.colors.black200};
  }
`;

const PostTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: ${({ theme }) => theme.font.size.mobile.h5};
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.green300};
  font-weight: 600;
`;

const DescriptionWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ArticleListItem = styled.li`
  margin-top: 80px;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  a {
    padding-left: 0;
  }
`;

export const Articles = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          nodes {
            miniaturPhoto {
              gatsbyImageData(
                aspectRatio: 1
                formats: WEBP
                placeholder: BLURRED
              )
            }
            dataPublikacji
            description {
              raw
            }
            title
            tags
            slug
          }
        }
      }
    `
  );

  return (
    <>
      {" "}
      <ul>
        {data.allContentfulBlogPost.nodes.map((item) => {
          const MiniaturPhoto = getImage(item.miniaturPhoto);
          return (
            <ArticleListItem key={item.title}>
              <article>
                <GatsbyImage image={MiniaturPhoto} alt="psi hotel" />
                <DataAndTags>
                  {" "}
                  <p>{item.dataPublikacji}</p>
                  <div>
                    {item.tags.map((tag) => {
                      return (
                        <Link to="/" key={tag}>
                          {tag}
                        </Link>
                      );
                    })}
                  </div>
                </DataAndTags>
                <PostTitle>{item.title}</PostTitle>
                <DescriptionWrapper>
                  {renderRichText(item.description)}
                </DescriptionWrapper>
                <Button
                  as="a"
                  href="/"
                  variant="secondary"
                  text="Czytaj więcej"
                />
              </article>
            </ArticleListItem>
          );
        })}
      </ul>
    </>
  );
};
