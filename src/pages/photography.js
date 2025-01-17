import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import photography from '../../content/data/photography.json'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Container, PageHeader } from '../components/styles'
import { useImage } from '../utils/useImage'

const PhotographyImage = styled.div`
  display: grid;
  align-items: center;

  ${(props) => props.theme.mediaQueries.small} {
    padding: 0 0.5rem;
  }

  ${Container} {
    display: flex;
    flex-direction: row;
  }

  div.image {
    width: 80vw;

    &::after {
      content: '${(props) => props.label}';
    }
  }
`

const Photography = () => {
  const getImage = useImage()
  const heroImage = getImage(photography.hero_image.image)
  const seoImage = getImage(photography.seo.image)
  const { seo, sections: images } = photography
  const totalImages = images.length

  return (
    <Layout overlayHeader>
      <SEO
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seoImage?.publicURL}
        pathname='/photography'
      />
      <Hero
        image={
          <GatsbyImage
            image={heroImage.childImageSharp.gatsbyImageData}
            alt={photography.hero_image.alt_text}
            style={{ height: '100%', opacity: 0.7 }}
          />
        }
        content={<PageHeader>{photography.page_header}</PageHeader>}
      />
      {images.map(({ image, alt_text, caption }, index) => {
        const imageSharp = getImage(image)
        return (
          <PhotographyImage key={image} label={`${index + 1} / ${totalImages}`}>
            <Container>
              <div className='image'>
                <GatsbyImage image={imageSharp.childImageSharp.gatsbyImageData} alt={alt_text} />
              </div>
            </Container>
          </PhotographyImage>
        )
      })}
    </Layout>
  )
}

export default Photography
