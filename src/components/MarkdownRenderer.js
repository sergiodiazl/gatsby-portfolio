import React from 'react';
import { SectionLink, useScrollSection } from 'react-scroll-section';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.backgroundDark};
    transition: all 250ms;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const MarkdownParagraph = styled.p`
  line-height: 2em;
  color: ${(props) => props.theme.colors.primary};
  &:first-child {
    margin-top: 0em;
  }
`;

const MarkdownList = styled.ul`
  margin: 0;
`;

const MarkdownListItem = styled.li`
  margin: 1em 0;
  line-height: 2em;
`;

const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.startsWith('#');

  if (isInnerLink) {
    const section = useScrollSection(href.slice(1));
    return <StyledLink onClick={section.onClick}>{children}</StyledLink>;
  }

  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default {
  p: (props) => <MarkdownParagraph {...props} />,
  ul: (props) => <MarkdownList {...props} />,
  li: (props) => <MarkdownListItem {...props} />,
  a: MarkdownLink,
};
