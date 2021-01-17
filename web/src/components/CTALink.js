import React from "react";
import { Link, navigate } from "gatsby";

const doNavigate = (target, isNotJumpLink, isNotRoute, isNotExternalLink, isLandingPageRoute, mobile) => {
  if (!target || !target.length) {
    return;
  }

  const internal = /^\/(?!\/)/.test(target);
  const jumpLinkElement = document.getElementById(target);

  if (jumpLinkElement && !isNotJumpLink && isNotRoute && isNotExternalLink) {
    
    if (mobile) {
      jumpLinkElement.scrollIntoView(true);
      const scrolledY = window.scrollY;
      const headerHeight = 75;
      const extraPadding = 25;
      const offsetFixedHeader = headerHeight + extraPadding;
      if (scrolledY) {
        window.scroll(0, scrolledY - offsetFixedHeader);
      }

    } else {
      jumpLinkElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  } else if (internal) {
    navigate(target);
  } else {
    if (!isNotExternalLink || isLandingPageRoute) {
      window.location = target;
    }
    return
  }
};

const CTALink = props => {
  let link = props.route || props.link || props.jumpLink || "#";
  let isLandingPageRoute = false;
  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    link = props.landingPageRoute.slug.current;
    isLandingPageRoute = true;
  }

  const isNotJumpLink = !props?.jumpLink;
  const isNotRoute = !props?.route;
  const isNotExternalLink = !props?.link;
  const {mobile } = props; 

  if (props.kind === "button") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link, isNotJumpLink, isNotRoute, isNotExternalLink, isLandingPageRoute, mobile)}
        className={props.buttonActionClass || ""}
        style={props.buttonStyles}
      >
        {props.title}
      </button>
    );
  }

  if (props.kind !== "button" && !isNotJumpLink && !props.link?.length > 0) {
    return (
      <button
        onClick={() => doNavigate(link, isNotJumpLink, isNotRoute, isNotExternalLink, isLandingPageRoute, mobile)}
        className={props.linkActionClass || "mr-3"}
        style={props.linkStyles}
      >
        {props.title}
      </button>
    );
  }

  // External
  if (props.link) {
    return (
      <a href={props.link} className={props.linkActionClass || "mr-3"} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    );
  }

  return (
    <Link className={props.linkActionClass || "mr-3"} style={props.linkStyles} to={link}>
      {props.title}
    </Link>
  );
};

export default CTALink;
