/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title }) {
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description
/* defer={false} IS IMPORTANT HERE FOR UPDATING THE PAGE TITLE. 
I MIGHT NEED TO DISABLE THIS WHEN LIVE */
  return (
    <Helmet defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        
      ].concat(meta)}
    >
<meta name="keywords" content="Web Development, Graphic Design, UX, 3D Rendering, React, Agile, HTML, CSS, JavaScript"
></meta>
<meta name="description" content="Andrew Gilroy's personal portfolio website.
Showcasing - Graphic Design, Web Development and 3D Rendering projects."
></meta>


{/*<!-- Open Graph / Facebook -->*/}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.andrew-gilroy.design/"/>
<meta property="og:title" content="Andrew Gilroy - Design"/>
<meta property="og:description" content="Andrew Gilroy's personal portfolio website.
Showcasing - Graphic Design, Web Development and 3D Rendering projects."/>
<meta property="og:image" content="https://www.andrew-gilroy.design/seo_image.png"/>

{/*<!-- Twitter -->*/}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.andrew-gilroy.design/"/>
<meta property="twitter:title" content="Andrew Gilroy - Design"/>
<meta property="twitter:description" content="Andrew Gilroy's personal portfolio website.
Showcasing - Graphic Design, Web Development and 3D Rendering projects."/>
<meta property="twitter:image" content="https://www.andrew-gilroy.design/seo_image.png"/>

<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
<meta name="application-name" content="&nbsp;"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

</Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO