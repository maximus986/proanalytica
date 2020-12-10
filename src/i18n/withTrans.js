import React, { Component } from 'react';
import i18n from './i18n';
import { I18nextProvider, withTranslation } from 'react-i18next';

export function withTrans(WrappedComponent) {
  WrappedComponent = withTranslation()(WrappedComponent);

  return class extends Component {
    render() {
      return (
        <I18nextProvider i18n={i18n}>
          <WrappedComponent {...this.props} language={i18n.language} />
        </I18nextProvider>
      );
    }
  };
}
