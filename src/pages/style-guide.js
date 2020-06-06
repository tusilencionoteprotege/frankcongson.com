import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import BlogPosts from '../components/BlogPosts'
import FeaturedSection from '../components/FeaturedSection'
import Hero from '../components/Hero'
import ImageCaption from '../components/ImageCaption'
import Layout from '../components/layouts'
import theme, { Container, LinkButton, PageHeader, Quote, Section } from '../components/styles'

export const query = graphql`
  {
    file(relativePath: { eq: "sample-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1120, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const StyleGuideContainer = styled(Container)`
  margin: 8rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
    margin: 4rem auto;
  }
`

export default ({ data }) => {
  const imageSharp = data.file
  const image = { alt: 'Sample image' }
  console.log(data)
  return (
    <Layout>
      <Section>
        <Container>
          <PageHeader>Style Guide.</PageHeader>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>This is my style guide.</h2>
          <p>
            This style guide will be a living document to showcase the designs I have incorporated into my website. It
            will help me keep track of things as I grow this space.
          </p>
        </Container>
      </Section>

      {/* Typography */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Typography.'
            text='Typography styles'
            callToAction='style-guide/#typography'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='typography'>
          <h1>H1 Lorem Ipsum</h1>
          <h2>H2 Lorem Ipsum</h2>
          <h3>H3 Lorem Ipsum</h3>
          <h4>H4 Lorem Ipsum</h4>
          <h5>H5 Lorem Ipsum</h5>
          <h6>H6 Lorem Ipsum</h6>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <p>
            Paragraph. <a href='#typography'>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            <strong>Bold. Lorem ipsum dolor sit amet</strong>
          </p>
          <p>
            <em>Italic. Lorem ipsum dolor sit amet</em>
          </p>
          <p>
            <code>Code. Lorem ipsum dolor sit amet</code>
          </p>
          <p>
            <pre>Preformatted. Lorem ipsum dolor sit amet</pre>
          </p>
        </Container>
      </Section>

      {/* Page Header */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Page Header.'
            text={['Page header using the ', <code>{'<PageHeader />'}</code>, ' component.']}
            callToAction='style-guide/#page-header'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='page-header'>
          <PageHeader>Lorem Ipsum</PageHeader>
        </Container>
      </Section>

      {/* Quote */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Quote.'
            text={[
              'Quotes using the ',
              <code>{'<Quote />'}</code>,
              ' component. This component provides responsive quote blocks that are emphasized on larger screens.',
            ]}
            callToAction='style-guide/#quote'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='quote'>
          <Quote>Short quote.</Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Quote>Medium quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Quote>
            Long quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Quote>
        </Container>
      </Section>

      {/* Layout */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Layout.'
            text={[
              'Layouts using the ',
              <code>{'<Section />'}</code>,
              ' and ',
              <code>{'<Container />'}</code>,
              ' components.',
            ]}
            callToAction='style-guide/#layout'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='layout'>
          <h2>
            <code>{'<Section />'}</code>
          </h2>
          <p>
            The <code>{'<Section />'}</code> component creates a full width wrapper around body content with a max width
            of <code>{`${theme.layout.maxWidthSection}`}</code>.
          </p>
          <h2>
            <code>{'<Container />'}</code>
          </h2>
          <p>
            The <code>{'<Container />'}</code> component creates a responsive wrapper around body content with a max
            width of <code>{`${theme.layout.maxWidthContainer}`}</code>. This component is used within the{' '}
            <code>{'<Section />'}</code> component.
          </p>
        </Container>
      </Section>

      {/* Image Caption */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Image Caption.'
            text={[
              'Images with caption using the ',
              <code>{'<ImageCaption />'}</code>,
              ' component. This component provides responsive images with optional comments. Images also have the option of being emphasized or fullwidth.',
            ]}
            callToAction='style-guide/#image-caption'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='image-caption'>
          <h2>Variations</h2>
          <p>
            There are three variations of the <code>{'<ImageCaption />'}</code> component. The default image will stay
            within the container. On larger screens, the <code>emphasized</code> image will expand beyond the width of
            the container. The <code>fullwidth</code> image will span the full width and height of the viewport. For all
            variations, the caption is optional.
          </p>
        </Container>
      </Section>
      <ImageCaption
        imageSharp={imageSharp}
        image={image}
        caption='Default. Lorem ipsum dolor sit amet'
        id='image-caption'
      />
      <ImageCaption imageSharp={imageSharp} image={image} caption='Emphasized. Lorem ipsum dolor sit amet' emphasized />
      <ImageCaption imageSharp={imageSharp} image={image} caption='Fullwidth. Lorem ipsum dolor sit amet' fullwidth />

      {/* Featured Section */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Featured Section.'
            text={[
              'Featured sections using the ',
              <code>{'<FeaturedSection />'}</code>,
              ' component. This component provides a featured section with header, text, and call to action.',
            ]}
            callToAction='style-guide/#featured-section'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='featured-section'>
          <h2>Variations</h2>
          <p>
            There are three variations of the <code>{'<FeaturedSection />'}</code> component. The default will put
            content in front of a color background. The <code>imageAsBackground</code> variation will put content in
            front of a provided image with the image at 50% opacity.
          </p>
        </Container>
      </Section>
      <FeaturedSection
        header='Lorem Ipsum.'
        text='Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        callToAction='style-guide/#featured-section'
        callToActionText='Lorem ipsum dolor sit amet'
        imageAlt={image.alt}
        imageSharp={imageSharp}
        imageAsBackground
      />
      <FeaturedSection
        header='Lorem Ipsum.'
        text='Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        callToAction='style-guide/#featured-section'
        callToActionText='Lorem ipsum dolor sit amet'
      />
      <FeaturedSection
        header='Lorem Ipsum.'
        text='Color Background with Image. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        callToAction='style-guide/#featured-section'
        callToActionText='Lorem ipsum dolor sit amet'
        imageAlt={image.alt}
        imageSharp={imageSharp}
        backgroundColor={theme.colors.oliveLight40}
      />

      {/* Hero */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Hero.'
            text={[
              'Hero using the ',
              <code>{'<Hero />'}</code>,
              ' component. This component provides full width and full height section, displaying content in front of a provided image.',
            ]}
            callToAction='style-guide/#hero'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='hero'></Container>
      </Section>
      <Hero
        image={
          <Img
            fluid={imageSharp.childImageSharp.fluid}
            alt={'Alt text'}
            style={{ height: '100%' }}
            imgStyle={{ opacity: 0.5 }}
          />
        }
        content={<PageHeader>Lorem Ipsum</PageHeader>}
      />

      {/* Blog Posts */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Blog Posts.'
            text={[
              'Blog posts using the ',
              <code>{'<BlogPosts />'}</code>,
              ' component. This component provides a single column layout of blog posts in descending date order.',
            ]}
            callToAction='style-guide/#blog-posts'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='blog-posts'>
          <BlogPosts />
        </Container>
      </Section>

      {/* Link Button */}

      <Section>
        <StyleGuideContainer>
          <FeaturedSection
            header='Link Button.'
            text={['Link button using the ', <code>{'<LinkButton />'}</code>, ' component.']}
            callToAction='style-guide/#link-button'
            callToActionText='↓'
          />
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='link-button'>
          <LinkButton to='style-guide/#link-button'>Link button</LinkButton>
        </Container>
      </Section>
    </Layout>
  )
}
