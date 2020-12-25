/** @jsx jsx */
import { jsx } from 'theme-ui';

export const SectionContainer = ({
  sectionTitle,
  bg = 'primaryBackground',
  children,
}) => {
  return (
    <section sx={{ py: [7, null, 9, 10], bg }}>
      <h2 sx={{ textAlign: 'center', mb: [8, null, null, 10], px: [4, 0] }}>
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
};
