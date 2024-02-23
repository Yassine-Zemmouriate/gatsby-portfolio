import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Yassine Zemmouriate Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true
  },
  plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: 'Inter',
              variants: ["400", "500", "600", "700"],
            }
          ]
        }
      }
    },
    {
      resolve : "gatsby-plugin-manifest",
      options : {
        name : "Yassine Curriculum Vitae",
        icon : "static/images/circle.png"
      }
    }
  ],
};

export default config;
