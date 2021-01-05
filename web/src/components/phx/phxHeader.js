import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";
import Logo from "../../images/logo.svg";
import Drawer from "./drawer";
import { makeStyles } from "@material-ui/core/styles";

const query = graphql`
  query HeaderQuery {
    sanityNavigationMenu {
      items {
        title
        route
        link
      }
    }
  }
`;

const styles = {
  container: {
    backgroundColor: 'black',
    height: 75,
    padding: "0px 20px 0px 20px",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1280
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  link: {
    transition: "all .4s",
    padding: "0px 10px",
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.light
    }
  }
}));

const Header = ({ showNav, siteTitle, scrolled, textWhite = true, mobile }) => {
  const classes = useStyles();
  let headerClass = "fixed w-full z-30 top-0 text-white";
  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";

  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  return (
    <StaticQuery
      query={query}
      render={data => {
        const navMenuItems = data?.sanityNavigationMenu?.items || [];

        return (
          <nav id="header" className={headerClass}>
            <div style={styles.container}>
              <div style={styles.contentContainer}>
                <Link id="siteTitle" className={titleClass} to="/">
                  <img
                    src={Logo}
                    style={{ height: 40, objectFit: "contain", cursor: "pointer" }}
                    alt="logo"
                  />
                </Link>
                {mobile && <Drawer navMenuItems={navMenuItems} />}

                {!mobile && navMenuItems && (
                  <div>
                    
                    {navMenuItems.map((item, index) => {
                      return (
                        <a key={index} className={classes.link} href={item.route ? item.route : item.link}>
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </nav>
        );
      }}
    />
  );
};

export default Header;
