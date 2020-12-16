import React from 'react';
import BackgroundSlider from 'gatsby-image-background-slider';
import { graphql, useStaticQuery } from 'gatsby';

export const Hero = () => {
  return (
    <div style={{ height: '70vh', position: 'relative' }}>
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "backgrounds" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg']}
        // pass down standard element props
        style={{ height: '70vh' }}
      >
        {/* Captions in sync with background images*/}
        <div>Woof</div>
        <div>Meow</div>
        <>
          {/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}
        </>
        <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
          I could use a hand
        </a>
        <div>I need to find better hobbies</div>
      </BackgroundSlider>
      <Dim />
    </div>
  );
};

const Dim = () => (
  <div
    style={{
      background:
        'linear-gradient( to top, rgba(0, 104, 119, 0.5), rgba(80, 138, 135, 0.5), rgba(138, 172, 156, 0.5), rgba(192, 205, 188, 0.5), rgba(241, 241, 230, 0.5))',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      zIndex: -2,
    }}
  ></div>
);
