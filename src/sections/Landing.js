import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import { useScrollSection, SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      contentfulAbout {
        name
        roles
        socialLinks {
          name
          iconType
          fontAwesomeIcon
          url
          id
        }
      }
    }
  `);
  const { name, socialLinks, roles } = data.contentfulAbout;
  const aboutSection = useScrollSection('About');
  return (
    <Section.Container id="home" Background={Background}>
      <Fragment>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[5, 6, 8]}
          mt={[100, 175, 200]}
          mb={[3, 4, 5]}
          fontFamily={'inherit'}
        >
          {`Hello, I'm ${name}!`}
        </Heading>

        <Heading
          as="h2"
          color="primary"
          fontSize={[4, 5, 6]}
          mb={[3, 5]}
          textAlign="center"
          style={centerHorizontally}
          fontFamily={'inherit'}
        >
          <TextLoop interval={3000}>
            {roles
              .sort(() => Math.random() - 0.5)
              .map((text) => (
                <Text width={[300, 500]} key={text}>
                  {text}
                </Text>
              ))}
          </TextLoop>
        </Heading>
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          {socialLinks.map(({ id, ...rest }) => (
            <Box mx={3} fontSize={[5, 6, 6]} key={id}>
              <SocialLink {...rest} />
            </Box>
          ))}
        </Flex>
        <Box my={4}>
          <MouseIcon onClick={aboutSection.onClick} />
        </Box>
      </Fragment>
    </Section.Container>
  );
};

export default LandingPage;
