/** @jsx jsx */
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { parseContentWithLinks } from 'utils/utils';
import { WpContent, Button } from 'components';
import BackgroundImage from 'gatsby-background-image';

export const Offering = ({ offeringItem, offeringIndex, className }) => {
  const {
    offeringItemName,
    offeringItemDescription,
    offeringItemButtonLabel,
    offeringItemDocument: {
      localFile: { url },
    },
    offeringItemImage: {
      localFile: {
        childImageSharp: { fluid },
      },
    },
  } = offeringItem;
  console.log(offeringItem, offeringIndex);
  return (
    <Grid gap={0} columns={[null, null, null, null, 2]}>
      {/* <figure
        sx={{
          order: [null, null, null, null, offeringIndex % 2 === 0 ? -1 : 1],
        }}
      >
        <Img fluid={fluid} alt="" sx={{ height: '100%' }} /> */}
      <StyledBackgroundImage
        className={className}
        fluid={fluid}
        sx={{
          order: [null, null, null, null, offeringIndex % 2 === 0 ? -1 : 1],
          height: ['600px', null, '800px', null, 'auto'],
        }}
      />
      {/* </figure> */}
      <div sx={{ px: [4, null, 5, 7, 8], py: [7], bg: 'primaryPassive' }}>
        <div sx={{ width: [null, null, '80%'], mx: 'auto' }}>
          <h3 sx={{ fontWeight: 'normal' }}>{offeringItemName}</h3>
          <div sx={{ mb: 6 }}>
            <WpContent>
              {parseContentWithLinks(offeringItemDescription)}
            </WpContent>
          </div>
          <Button variant="primarySmall" to={url}>
            {offeringItemButtonLabel}
          </Button>
        </div>
      </div>
    </Grid>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  width: 100%;
`;
