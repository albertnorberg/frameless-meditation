import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import PhxHero from "../components/phx/phxHero.js";
import InfoRows from "../components/InfoRows";
import CTAColumns from "../components/cta-columns";
import CTA from "../components/cta";
import Pricing from "../components/pricing";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import withWidth from "@material-ui/core/withWidth";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = props => {
  const { data, errors, width } = props;
  const mobile = width === "sm" || width === "xs";

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;
  const colors = {
    primary: (site.primaryColor && site.primaryColor.hex) || "#d53369",
    secondary: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"    
  }

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i, index) => {
      let el = null;
      switch (c._type) {
        case "pricing":
          el = <Pricing key={c._key + i} {...c} />;
          break;
        case "infoRows":
          el = <InfoRows key={c._key + i} {...c} mobile={mobile} colors={colors} />;
          break;
        case "hero":
          el = <Hero key={c._key + i} {...c} />;
          break;
        case "phxHero":
          el = <PhxHero key={c._key + i} {...c} mobile={mobile} />;
          break;
        case "ctaColumns":
          el = <CTAColumns key={c._key + i} {...c} colors={colors} mobile={mobile} />;
          break;
        case "ctaPlug":
          el = <CTA key={c._key + i} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const gradient = {
    from: colors.primary,
    to: colors.secondary
  };

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;

  return (
    <Layout navMenuItems={menuItems} textWhite={true} colors={colors}>
      <div style={{ width: "100%", height: 75 }}></div>
      <SEO
        title={pageTitle ? pageTitle : site.title}
        description={site.description}
        keywords={site.keywords}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient"
        }}
        gradient={gradient}
      />
      <div>{content}</div>
    </Layout>
  );
};

export default withWidth()(Page);;
