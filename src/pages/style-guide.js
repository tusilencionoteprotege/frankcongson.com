import React from 'react'
import BlogPosts from '../components/BlogPosts'
import FeaturedSection from '../components/FeaturedSection'
import Layout from '../components/layouts'
import theme, { Container, LinkButton, PageHeader, Quote, Section } from '../components/styles'

export default () => (
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
    <Section>
      <Container>
        <FeaturedSection
          header='Typography.'
          text='Typography styles'
          callToAction='style-guide/#typography'
          callToActionText='↓'
        />
      </Container>
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
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <p>
          Paragraph. <a href='#typography'>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
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
    <Section>
      <Container>
        <FeaturedSection
          header='Page Header.'
          text={['Page header using the ', <code>{'<PageHeader />'}</code>, ' component.']}
          callToAction='style-guide/#page-header'
          callToActionText='↓'
        />
      </Container>
    </Section>
    <Section>
      <Container id='page-header'>
        <PageHeader>Lorem Ipsum</PageHeader>
      </Container>
    </Section>
    <Section>
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Container id='quote'>
        <Quote>Short quote.</Quote>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <Quote>Medium quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Quote>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <Quote>
          Long quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Quote>
      </Container>
    </Section>
    <Section>
      <Container>
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
      </Container>
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
          The <code>{'<Container />'}</code> component creates a responsive wrapper around body content with a max width
          of <code>{`${theme.layout.maxWidthContainer}`}</code>. This component is used within the{' '}
          <code>{'<Section />'}</code> component.
        </p>
      </Container>
    </Section>
    <Section>
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Container id='image-caption'></Container>
    </Section>
    <Section>
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Container id='featured-section'></Container>
    </Section>
    <Section>
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Container id='blog-posts'>
        <BlogPosts />
      </Container>
    </Section>
    <Section>
      <Container>
        <FeaturedSection
          header='Link Button.'
          text={['Link button using the ', <code>{'<LinkButton />'}</code>, ' component.']}
          callToAction='style-guide/#link-button'
          callToActionText='↓'
        />
      </Container>
    </Section>
    <Section>
      <Container id='link-button'>
        <LinkButton to='style-guide/#link-button'>Link button</LinkButton>
      </Container>
    </Section>
  </Layout>
)
