import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        seo: file(relativePath: {eq: "seo.md"}) {
          childMarkdownRemark {
            frontmatter {
              open_graph {
                description
                image
                keywords
                title
                url
              }
              twitter {
                author
                description
                title
                user_name
              }
            }
          }
        }
      }
    `
  )

  const { open_graph, twitter } = data.seo.childMarkdownRemark.frontmatter;
  let meta = []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={open_graph.title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: open_graph.description,
        },
        {
          property: `og:title`,
          content: open_graph.title,
        },
        {
          property: `og:site_name`,
          content: open_graph.title,
        },
        {
          property: `og:description`,
          content: open_graph.description,
        },
        {
          property: `og:type`,
          content: 'website',
        },
        {
          property: `og:url`,
          content: open_graph.url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: twitter.title,
        },
        {
          name: `twitter:creator`,
          content: twitter.author,
        },
        {
          name: `twitter:description`,
          content: twitter.description,
        },
        {
          name: `twitter:site`,
          content: twitter.user_name,
        },
        {
          name: `twitter:image`,
          content: twitter.image,
        },
      ]
        .concat(
          {
            name: `keywords`,
            content: open_graph.keywords,
          }
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: ` `
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
