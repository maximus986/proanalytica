/** @jsx jsx */
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import Img from 'gatsby-image';
import { parseContentWithLinks } from 'utils/utils';
import { WpContent, Button } from 'components';

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
  return (
    <Grid
      gap={0}
      columns={[null, null, null, '2fr 3fr']}
      sx={{
        borderWidth: [0, null, null, 2],
        borderStyle: 'solid',
        borderColor: 'primaryPassive',
      }}
    >
      <div
        sx={{
          my: 'auto',
        }}
      >
        <figure
          sx={{
            maxWidth: [null, null, null, null, '400px', '600px'],
            margin: 'auto',
          }}
        >
          <Img fluid={fluid} alt="" />
        </figure>
      </div>
      <div
        sx={{
          px: [4, null, 5, 7, 8],
          py: [7],
          bg: 'primaryPassive',
        }}
      >
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
