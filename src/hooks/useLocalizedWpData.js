import React, { useMemo } from 'react';
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import { languageMap } from '../static-data/languageMap';

export const useLocalizedWpData = (data) => {
  const { lang } = usePageContext();
  const localizedData = useMemo(() => {
    return data.filter((item) => item.language.code === languageMap[lang]);
  }, [data, lang]);
  return localizedData;
};
