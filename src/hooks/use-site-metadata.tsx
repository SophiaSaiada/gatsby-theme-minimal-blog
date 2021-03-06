import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      siteTitle: string
      siteTitleEn: string
      siteTitleAlt: string
      siteHeadline: string
      siteUrl: string
      siteDescription: string
      siteLanguage: string
      siteImage: string
      author: string
      externalLinks: {
        name: string
        url: string
      }[]
      tagsPath: string
      basePath: string
      blogPath: string
      showLineNumbers: boolean,
      keywords: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
{
  site {
    siteMetadata {
      siteTitle
      siteTitleEn
      siteTitleAlt
      siteHeadline
      siteUrl
      siteDescription
      siteLanguage
      siteImage
      author
      externalLinks {
        name
        url
      }
      tagsPath
      basePath
      blogPath
      showLineNumbers
      projects {
        name
        description
        url
        tags
        stars
      }
      keywords
    }
  }
}
`)

  return data.site.siteMetadata
}

export default useSiteMetadata
