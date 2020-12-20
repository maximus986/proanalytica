/** @jsx jsx */
import { jsx } from 'theme-ui';

export const SectionContainer = ({ sectionTitle, children }) => {
  return (
    <section sx={{ py: [6, null, 7, 8] }}>
      <h2 sx={{ textAlign: 'center', mb: [8, null, null, 10], px: [4, 0] }}>
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
};
