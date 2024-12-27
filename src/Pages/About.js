import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../componets/Button';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
`;

const ImageContent = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

function About() {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About  ScCafe
      </Title>
      <Content>
        <TextContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
          Since its inception in 2020, ScCafe has been committed to providing the finest coffee experience. Our focus on exceptional beans and precision brewing has helped us build a strong community of coffee enthusiasts.
          </p>
          <p>
          We take pride in sourcing our beans from environmentally conscious farms across the globe, ensuring that every cup you enjoy is not only full of flavor but also ethically sourced and sustainable.
          </p>
          <Button primary>Learn More</Button>
        </TextContent>
        <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src="https://img.freepik.com/free-photo/digital-lavender-style-interior-design_23-2151561226.jpg?t=st=1727763316~exp=1727766916~hmac=621a2fad85c2229414cc73a6d1c40e4525802c326c6494db624ca97d2fda6bc2&w=1380" alt="Zumar Cafe Interior" />
        </ImageContent>
      </Content>
    </AboutContainer>
  );
}

export default About;