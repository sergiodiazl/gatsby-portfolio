import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import { ScrollingProvider } from 'react-scroll-section';
const IndexPage = () => (
  <Layout>
    <ScrollingProvider>
      <Header />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ScrollingProvider>
    <Footer />
  </Layout>
);

export default IndexPage;
