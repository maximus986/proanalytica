/** @jsx jsx */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { jsx } from 'theme-ui';
import { Container } from '../Container';
import { SectionContainer } from '../SectionContainer';
import { partnerSliderSettings } from './sliderConfig';

export const fragment = graphql`
  fragment PartnersSection on WpPage_Homepagesections_Content_Partners {
    fieldGroupName
    sectionTitle
    partners {
      partner {
        ... on WpPartner {
          id
          partner {
            link
            name
            logo {
              localFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
              }
            }
          }
        }
      }
      fieldGroupName
    }
  }
`;

export const Partners = ({ sectionTitle, partners }) => {
  return (
    <SectionContainer sectionTitle={sectionTitle} bg="primaryPassive">
      <Container>
        <Slider {...partnerSliderSettings}>
          {partners.map(({ partner }) => {
            if (!partner) {
              // For some reason a few partner objects are null
              return;
            }
            const {
              partner: {
                link,
                logo: {
                  localFile: {
                    childImageSharp: { fixed },
                  },
                },
              },
            } = partner;
            return (
              <article key={partner.id}>
                <a href={link} target="_blank" rel="noreferrer">
                  <figure
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100px',
                    }}
                  >
                    <Img fixed={fixed} alt={partner.partner.name} />
                  </figure>
                </a>
              </article>
            );
          })}
        </Slider>
      </Container>
    </SectionContainer>
  );
};
