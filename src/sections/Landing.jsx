import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Label } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const LandingPage = () => (
  <Section.Container id="home">
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <>
            <Heading textAlign="center" is="h1" color="primary" fontSize={[5, 6, 8]} mb={[3, 4, 5]}>
              {`Hello, I'm ${name}`}
            </Heading>

            <Heading is="h2" color="primary" fontSize={[4, 5, 6]} mb={[2, 4]} textAlign="center">
              <TextLoop>
                {roles.map(text => (
                  <p style={{ width: '360px' }} key={text}>
                    {text}
                  </p>
                ))}
              </TextLoop>
            </Heading>
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Label mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink color="primary" hoverColor="primaryLight" {...rest} />
                </Label>
              ))}
            </Flex>
            <MouseIcon />
          </>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
