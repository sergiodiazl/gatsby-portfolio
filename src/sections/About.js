import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { useStaticQuery, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import WorkExperience from './experience/WorkExperience';
import Education from './experience/Education';

const Background = () => (
  <div>
    <Triangle
      color="secondaryDark"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutMeQuery {
      contentfulAbout {
        aboutMe {
          aboutMe
        }
        profile {
          title
          image: resize(width: 450, quality: 100) {
            src
          }
        }
      }
    }
  `);
  const { aboutMe, profile } = data.contentfulAbout;
  console.log(markdownRenderer);
  return (
    <Section.Container id="About" Background={Background}>
      <Section.Header name="About me" icon="🙋‍♂️" label="person" />

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
          <Fade bottom>
            <ReactMarkdown
              children={aboutMe.aboutMe}
              components={markdownRenderer}
            />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade right>
            <ProfilePicture
              src={profile.image.src}
              alt={profile.title}
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
            />
          </Fade>
        </Box>
      </Flex>

      <WorkExperience />
      <Education />
    </Section.Container>
  );
};

export default About;
