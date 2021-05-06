import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage {
        nodes {
          language {
            code
          }
          contactPage {
            contactData {
              ... on WpContactInfo {
                id
                contactInfoItem {
                  emails {
                    email
                  }
                  locations {
                    address
                  }
                  phoneNumbers {
                    phoneNumber
                  }
                }
              }
            }
            pageIntros {
              ... on WpPageIntro {
                id
                pageIntroItem {
                  pageSubtitle
                  pageTitle
                  pageIntroImage {
                    localFile {
                      childImageSharp {
                        fluid(quality: 100, toFormat: WEBP) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const contactData = data.allWpPage.nodes.filter(
    ({ contactPage }) => contactPage.contactData,
  );
  return contactData;
};
