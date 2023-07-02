import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';

const SectionContainer = styled.div`
  min-height: ${(props) => [props.minHeight]};
  min-width: 320px;

  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  scroll-behavior: smooth;
`;

const DefaultBackground = () => <div />;

const Container = ({
  id,
  children,
  Background = DefaultBackground,
  minHeight = '50vh',
}) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer minHeight={minHeight}>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const Header = ({ name, icon = '', label = '' }) => (
  <Slide left>
    <Heading color="primary" fontFamily={'inherit'} mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
};
