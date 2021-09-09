import React from 'react';
import { Box, Image, Flex, Heading, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import LinkAnimated from '../../components/LinkAnimated';
import { CardContainer, Card } from '../../components/Card';

const CARD_HEIGHT = '350px';
const IMAGE_HEIGHT = '250px';
const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';
const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 5px;
`;
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
  const descriptionText = description.content[0].content[0].value;
  return (
    <Card
      p={2}
      width={[300, 320, 350]}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      minHeight={CARD_HEIGHT}
    >
      <Title my={2} pb={1}>
        {name}
      </Title>

      <Image
        display="block"
        maxHeight={IMAGE_HEIGHT}
        src={logoUrl}
        width="100%"
      />
      <Text p={2} w idth={[1]}>
        {descriptionText}
      </Text>
    </Card>
  );
};

const Education = () => (
  <>
    <Slide left>
      <Heading color="primary" my={4}>
        <LinkAnimated selected>I Studied here</LinkAnimated>
      </Heading>
      <StaticQuery
        query={graphql`
          query EducationQuery {
            allContentfulEducation(sort: { fields: yearStart }) {
              nodes {
                yearStart
                yearEnd
                ongoing
                name
                id
                logo {
                  file {
                    url
                  }
                }
                description {
                  content {
                    content {
                      value
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulEducation }) => (
          <CardContainer minWidth="350px">
            {allContentfulEducation.nodes.map((p, i) => (
              <Fade bottom delay={i * 100} key={p.id}>
                <EducationInfo {...p} />
              </Fade>
            ))}
          </CardContainer>
        )}
      />
    </Slide>
  </>
);

export default Education;
