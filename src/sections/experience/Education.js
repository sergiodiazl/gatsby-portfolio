import React from 'react';
import { Image, Heading, Text, Flex } from 'rebass/styled-components';
import { useStaticQuery, graphql } from 'gatsby';
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
const EducationInfo = ({ name, logo, description }) => {
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
          {name}
        </Title>

        <Image
          display="block"
          maxHeight={IMAGE_HEIGHT}
          src={logoUrl}
          width="100%"
        />
      </Flex>
      <Flex flexDirection="column">
        <Text p={2} width={[1]}>
          {description}
        </Text>
      </Flex>
    </Card>
  );
};

const Education = () => {
  const data = useStaticQuery(graphql`
    query EducationQuery {
      allContentfulEducation(sort: { yearStart: ASC }) {
        nodes {
          yearStart
          yearEnd
          ongoing
          name
          description
          id
          logo {
            file {
              url
            }
          }
        }
      }
    }
  `);
  const { allContentfulEducation } = data;
  return (
    <>
      <Slide left>
        <Heading color="primary" fontFamily={'inherit'} my={4}>
          <LinkAnimated selected>I Studied here</LinkAnimated>
        </Heading>

        <CardContainer minWidth="350px">
          {allContentfulEducation.nodes.map((p, i) => (
            <Fade bottom delay={i * 100} key={p.id}>
              <EducationInfo {...p} />
            </Fade>
          ))}
        </CardContainer>
      </Slide>
    </>
  );
};

export default Education;
