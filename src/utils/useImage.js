import { graphql, useStaticQuery } from 'gatsby'

const allImagesQuery = graphql`
  query allImagesQuery {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          absolutePath
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export const useImage = () => {
  const { allFile } = useStaticQuery(allImagesQuery)

  const getImage = (image) => (!image ? null : allFile.edges.find(({ node }) => node.absolutePath.includes(image)).node)

  return getImage
}