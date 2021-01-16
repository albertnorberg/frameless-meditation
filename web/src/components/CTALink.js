import React from "react";
import { Link, navigate } from "gatsby";

const doNavigate = (target, isNotJumpLink, isNotRoute, isNotExternalLink, isLandingPageRoute) => {
  if (!target || !target.length) {
    return;
  }

  const internal = /^\/(?!\/)/.test(target);
  const jumpLink = document.getElementById(target);

  if (jumpLink && !isNotJumpLink && isNotRoute && isNotExternalLink) {
    jumpLink.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else if (internal) {
    console.log('INTERNAL')
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

  if (props.kind === "button") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link, isNotJumpLink, isNotRoute, isNotExternalLink, isLandingPageRoute)}
        className={props.buttonActionClass || ""}
        style={props.buttonStyles}
      >
        {props.title}
      </button>
    );
  }

  if (props.kind === "link" && !isNotJumpLink && !props.link?.length > 0) {
    console.log('CONFIRMED')
    return (
      <button
        onClick={() => doNavigate(link, isNotJumpLink, isNotRoute, isNotExternalLink, isLandingPageRoute)}
        className={props.linkActionClass || "mr-3"}
        style={props.linkStyles}
      >
        {props.title}
      </button>
    );
  }

  // External
  if (props.link) {
    console.log("External")
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
