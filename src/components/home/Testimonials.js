/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { jsx, useThemeUI } from 'theme-ui';
import { Container } from '../container';
import { SectionContainer } from '../SectionContainer';

export const fragment = graphql`
  fragment TestimonialsSection on WpPage_Homepagesections_Content_Testimonials {
    fieldGroupName
    sectionTitle
    testimonials: testimonial {
      testimonialItem {
        ... on WpTestimonial {
          id
          testimonial {
            author
            content
            position
          }
        }
      }
    }
  }
`;

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 3000,
  fade: false,
  cssEase: 'linear',
  pauseOnHover: false,
  arrows: false,
  dots: true,
};

export const Testimonials = ({ sectionTitle, testimonials }) => {
  const { theme } = useThemeUI();
  return (
    <SectionContainer sectionTitle={sectionTitle}>
      <Container>
        <StyledSlider {...settings} {...{ theme }}>
          {testimonials.map(({ testimonialItem }) => {
            const {
              id,
              testimonial: { content, author, position },
            } = testimonialItem;
            return (
              <div
                key={id}
                sx={{
                  textAlign: 'center',
                  px: [4, 0],
                }}
              >
                <article
                  sx={{ width: ['90%', null, null, null, '70%'], mx: 'auto' }}
                >
                  <p sx={{ fontSize: 3, mb: 6 }}>{content}</p>
                  <p sx={{ fontSize: 2, fontWeight: 'bold' }}>{author}</p>
                  <p sx={{ fontSize: 2 }}>{position}</p>
                </article>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    </SectionContainer>
  );
};

const StyledSlider = styled(Slider)`
  .slick-dots {
    top: -52px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      button {
        position: relative;
        width: 10px;
        height: 10px;
        background: ${(props) => props.theme.colors.primary};
        border-radius: 50%;
        margin: 0px 5px;
        transition: ${(props) => props.theme.transition.button};
        cursor: pointer;
        &::before {
          display: none;
        }
        &:hover {
          width: 17px;
          height: 17px;
          background: transparent;
          border: ${(props) => `4px solid ${props.theme.colors.primary}`};
        }
      }
    }
    li.slick-active {
      button {
        width: 17px;
        height: 17px;
        background: transparent;
        border: ${(props) => `4px solid ${props.theme.colors.primary}`};
      }
    }
  }
`;
