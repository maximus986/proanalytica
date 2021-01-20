import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(
        filter: { contactPage: { fieldGroupName: { eq: "contactPage" } } }
      ) {
        nodes {
          language {
            code
          }
          contactPage {
            address
            pageSubtitle
            pageTitle
            emails {
              email
            }
            pageIntroImage {
              localFile {
                childImageSharp {
                  fluid(quality: 100, toFormat: WEBP) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            telephones {
              phoneNumber
            }
          }
          language {
            code
          }
        }
      }
    }
  `);
  return data;
};
