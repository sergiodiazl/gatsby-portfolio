import React from 'react';
import { Image, Flex, Heading, Text } from 'rebass/styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import LinkAnimated from '../../components/LinkAnimated';
import { CardContainer, Card } from '../../components/Card';

const CARD_HEIGHT = '350px';
const IMAGE_HEIGHT = '250px';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  display: table;
  width: 100%;
`;
const ExperienceInfo = ({ company, title, logo, description }) => {
  const logoUrl = logo.file.url;
  return (
    <Card
      p={2}
      width={[300, 320, 350]}
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      minHeight={CARD_HEIGHT}
    >
      <Flex flexDirection="column">
        <Title my={2} pb={1}>
          {company}
        </Title>

        <Image
          display="block"
          maxHeight={IMAGE_HEIGHT}
          src={logoUrl}
          width="100%"
        />
      </Flex>
      <Flex flexDirection="column">
        <Title p={2} width={[1]}>
          {title}
        </Title>
        <Text p={2} width={[1]}>
          {description}
        </Text>
      </Flex>
    </Card>
  );
};

const Education = () => {
  const data = useStaticQuery(graphql`
    query ExperienceQuery {
      allContentfulExperience(sort: { yearStart: DESC }) {
        nodes {
          company
          id
          description
          yearStart
          yearEnd
          title
          ongoing
          logo {
            file {
              url
            }
          }
        }
      }
    }
  `);
  const { allContentfulExperience } = data;
  return (
    <>
      <Slide left>
        <Heading color="primary" fontFamily={'inherit'} my={4}>
          <LinkAnimated selected>I worked here</LinkAnimated>
        </Heading>
        <CardContainer minWidth="350px">
          {allContentfulExperience.nodes.map((p, i) => (
            <Fade bottom delay={i * 100} key={p.id}>
              <ExperienceInfo {...p} />
            </Fade>
          ))}
        </CardContainer>
      </Slide>
    </>
  );
};

export default Education;
