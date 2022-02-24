/** @jsx jsx */
import styled from '@emotion/styled';
import { useThemeUI, jsx } from 'theme-ui';

export const WpContent = ({ children }) => {
  const { theme } = useThemeUI();
  return <Content {...{ theme }}>{children}</Content>;
};

const Content = styled.section`
  h2 {
    font-size: ${(props) => `${props.theme.fontSizes[9]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h3 {
    font-size: ${(props) => `${props.theme.fontSizes[8]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h4 {
    font-size: ${(props) => `${props.theme.fontSizes[5]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h5 {
    font-size: ${(props) => `${props.theme.fontSizes[3]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h6 {
    font-size: ${(props) => `${props.theme.fontSizes[2]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  ul {
    list-style: disc;
    padding: revert;
  }
  a {
    text-decoration: underline;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    transition: ${(props) => props.theme.transition.link};
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  p {
    margin-bottom: ${(props) => `${props.theme.space[4]}px`};
  }
  blockquote {
    border-left: 6px solid ${(props) => props.theme.colors.primary};
    padding-top: ${(props) => `${props.theme.space[3]}px`};
    padding-bottom: ${(props) => `${props.theme.space[3]}px`};
    padding-left: ${(props) => `${props.theme.space[5]}px`};
    padding-right: ${(props) => `${props.theme.space[5]}px`};
    background: ${(props) => props.theme.colors.primaryPassive};
    margin: 0;
    p {
      margin: 0;
    }
  }
  .aligncenter {
    display: block;
    margin: 0 auto;
  }

  .aboutUsLogo > span {
    padding-bottom: 68.1% !important; // Fucking wordpress generate some padding as inline style to the span above image!
  }
`;
