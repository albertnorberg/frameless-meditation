import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import imageLogo from "../images/img-logo.svg";
import {
  Facebook,
  Youtube,
  Linkedin,
  Patreon,
  Instagram,
  Location
} from "../images/social/iconComponents/index";

const query = graphql`
  query FooterQuery {
    sanityFooter {
      id
      companyName
      socialLinks {
        _key
        _type
        disabled
        url
      }
      email
    }
  }
`;

function getSocialLink(url) {
  console.log("*** url: ", url);

  if (url.includes("linkedin")) {
    return {
      platform: "linked_in",
      title: "Linked In",
      icon: <Linkedin className={"svgIcon"} />
    };
  }
  if (url.includes("youtube")) {
    return {
      platform: "youtube",
      title: "YouTube",
      icon: <Youtube className={"svgIcon"} />
    };
  }
  if (url.includes("facebook")) {
    return {
      platform: "facebook",
      title: "Facebook",
      icon: <Facebook className={"svgIcon"} />
    };
  }
  if (url.includes("patreon")) {
    return {
      platform: "patreon",
      title: "Patreon",
      icon: <Patreon className={"svgIcon"} />
    };
  }
  if (url.includes("insta")) {
    return {
      platform: "instagram",
      title: "Instagram",
      icon: <Instagram className={"svgIcon"} />
    };
  }
  if (url.includes("maps")) {
    return {
      platform: "googleMaps",
      title: "Google Maps",
      icon: <Location className={"svgIcon"} />
    };
  }

  return null;
}

const Footer = props => {
  const { mobile } = props;

  const styles = {
    outerContainer: {
      display: "flex",
      width: "100%",
      minHeight: 200,
      backgroundColor: "black",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem 1.5rem",
      overflow: "hidden"
    },
    innerContainer: {
      maxWidth: 1280,
      display: "flex",
      width: "100%",
      flexWrap: "wrap"
    },
    col: {
      display: "flex",
      width: mobile ? "100%" : "50%",
      textAlign: mobile ? "center" : "left"
    },
    col1: {
      flexWrap: "wrap",
      justifyContent: mobile ? "center" : "flex-start"
    },
    col2: {
      justifyContent: mobile ? "center" : "flex-end",
      alignItems: "center",
      flexWrap: "wrap"
    },
    logo: {
      width: 100,
      height: 100,
      minWidth: 100,
      cursor: "pointer",
      marginBottom: mobile ? "1rem" : 0
    },
    textContent: {
      padding: "0 1.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: mobile ? "center" : "space-between",
      marginBottom: mobile ? "1rem" : 0
    },
    socialLink: {
      margin: 10
    }
  };

  return (
    <StaticQuery
      query={query}
      render={data => {
        const { companyName, email, socialLinks } = data.sanityFooter;
        const activeSocialLinks = socialLinks.filter(link => link.disabled !== true);

        return (
          <footer style={styles.outerContainer}>
            <div style={styles.innerContainer}>
              <div style={{ ...styles.col, ...styles.col1 }}>
                <Link to="/">
                  <img style={styles.logo} src={imageLogo} alt="logo" />
                </Link>
                <div style={styles.textContent}>
                  {companyName && <h3>{companyName}</h3>}
                  {email && <h4>{email}</h4>}
                </div>
              </div>
              <div style={{ ...styles.col, ...styles.col2 }}>
                {activeSocialLinks.length > 0 &&
                  activeSocialLinks.map((link, index) => {
                    if (link.disabled || !link.url) {
                      return null;
                    }

                    const socialLink = getSocialLink(link.url);
                    return socialLink ? (
                      <a key={index} style={styles.socialLink} href={link.url}>
                        {socialLink.icon}
                      </a>
                    ) : null;
                  })}
              </div>
            </div>
          </footer>
        );
      }}
    />
  );
};

export default Footer;
