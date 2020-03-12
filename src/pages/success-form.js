import React from 'react';
import { Heading, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from "gatsby";
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);
const StyledLink = styled(Link)`
  color:  ${props => props.theme.colors.primaryDark};;
`;


const SuccessFormPage = () => (
  <Layout>
    <Section.Container id="404" minHeight="100vh" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading
          color="primaryDark"
          fontSize={['3rem', '6rem', '8rem']}
          as="h1"
        >
          Sent!
        </Heading>
        <Heading color="secondary" fontSize={['2rem', '3rem', '4rem']} as="h2">
        I will try to reply soon!
        <StyledLink to="/" > You can wait in the main page.</StyledLink>
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default SuccessFormPage;
