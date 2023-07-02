import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { useScrollSections, SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100vw;
`;

const formatLinks = (sections) => {
  const home = sections.find((section) => section.id === 'home');
  const links = sections.filter((section) => section.id !== 'home');

  return { home, links };
};

const Header = () => {
  const sections = useScrollSections();
  console.log(formatLinks(sections));
  const { home, links } = formatLinks(sections);
  return (
    <HeaderContainer>
      <Fade top>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={1}
        >
          {home && (
            <Image
              src={Logo}
              p={[0, 1, 3]}
              width={['50px', '100px']}
              alt="Portfolio Logo"
              onClick={home.onClick}
              style={{
                cursor: 'pointer',
              }}
            />
          )}
          <Flex flexWrap="wrap" mr={[0, 3, 5]}>
            {links.map((linkObject) => (
              <RouteLink
                key={linkObject.id}
                onClick={linkObject.onClick}
                selected={linkObject.selected}
                name={linkObject.id}
              />
            ))}
          </Flex>
          {/** 
         * <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = 
              home && (
              <Image
                src={Logo}
                p={[0, 1, 3]}
                width={['50px', '100px']}
                alt="Portfolio Logo"
                onClick={home.onClick}
                style={{
                  cursor: 'pointer',
                }}
              />
            )
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
                name={name}
              />
            ));

            return (
              <Fragment>
                {homeLink}
                <Flex flexWrap="wrap" mr={[0, 3, 5]}>
                  {navLinks}
                </Flex>
              </Fragment>
            );
          }}
        </SectionLinks>
         */}
        </Flex>
      </Fade>
    </HeaderContainer>
  );
};

export default Header;
