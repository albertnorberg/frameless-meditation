import React from "react";
import PortableText from "../portableText";
import CTALink from "../CTALink";
import { makeStyles } from "@material-ui/core/styles";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

const useStyles = makeStyles(theme => ({
  backdrop: props => ({
    backgroundColor: "darkgrey",
    width: "100%",
    minHeight: "calc(100vh - 75px)",
    backgroundImage: `url(${imageUrlFor(buildImageObj(props.illustration.image))
      .width(window.innerWidth)
      .height(window.innerHeight)
      .auto("format")
      .url()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  })
}));

const styles = {
  outerContentContainer: {
    position: "absolute",
    width: "100%",
    height: 'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: 20,
    minHeight: "calc(100vh - 75px)",
  },
  innerContentContainer: {
    maxHeight: "calc(100vh - 75px)",
    overflow: 'hidden',
    maxWidth: 800
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.5)",
    width: "100%",
    minHeight: "calc(100vh - 75px)"
  }
};

function PhxHero(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.backdrop}>
      <div style={styles.overlay}></div>
      <div style={styles.outerContentContainer}>
        <div style={styles.innerContentContainer}>
          <p className="uppercase tracking-loose w-full">{props.label}</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
          <div className="leading-normal text-2xl mb-8">
            <PortableText blocks={props.tagline} />
          </div>
          {props.cta && props.cta.title && (
            <CTALink
              {...props.cta}
              buttonActionClass="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PhxHero;
