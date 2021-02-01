/** @jsx jsx */
import { ProductCategory } from './ProductCategory';
import { Fragment } from 'react';
import { Grid, jsx } from 'theme-ui';

export const ProductCategoriesSection = ({ categories }) => {
  return (
    <section sx={{ px: [4, null, 5, 7, 8], py: [8], bg: 'primaryPassive' }}>
      <Grid gap={[6]} columns={[1, 2, null, null, 4]}>
        {categories.map(({ productCategoryItem }, index) => {
          const {
            id,
            productCategory: {
              categoryName,
              categorySlug,
              categoryImage: {
                localFile: {
                  childImageSharp: { fluid: categoryImage },
                },
              },
            },
          } = productCategoryItem;
          return (
            <Fragment key={id}>
              <ProductCategory
                categoryName={categoryName}
                categorySlug={categorySlug}
                categoryImage={categoryImage}
                categoryOrder={index}
              />
            </Fragment>
          );
        })}
      </Grid>
    </section>
  );
};
