import React from "react";
import PortableText from "../portableText";
import CTALink from "../CTALink";
import {  makeStyles} from "@material-ui/core/styles";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PhxJumpButton from "./phxJumpButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const vhMobileDevice = 592;

const useStyles = makeStyles(theme => ({
  backdrop: props => ({
    width: "100%",
    minHeight: props.mobile ? vhMobileDevice : "calc(100vh - 75px)",
    backgroundImage: `url(${imageUrlFor(buildImageObj(props.illustration.image))
      .width(window.innerWidth)
      .height(window.innerHeight)
      .auto("format")
      .url()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: !props.mobile && props.parallax ? "fixed" : "scroll"
  })
}));

function PhxHero(props) {
  const classes = useStyles(props);
  const { mobile, darkOpacityOverlay, phxJumpButtonLink } = props
  
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
      minHeight: props.mobile ? vhMobileDevice : "calc(100vh - 75px)",
      overflow: 'hidden'
    },
    innerContentContainer: {
      maxHeight: props.mobile ? vhMobileDevice : "calc(100vh - 75px)",
      maxWidth: 800,
      display: 'flex',
      flexDirection: 'column'
    },
    overlay: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0, 0.5)",
      width: "100%",
      minHeight: props.mobile ? vhMobileDevice : "calc(100vh - 75px)",
    },
    heading: {
      fontSize: mobile ? "2.25rem" : "3.5rem",
      lineHeight: "1.25", 
    },
    text: {
      lineHeight: "1.25",
      fontSize: mobile ? "1rem" : "1.5rem",
      marginTop: "1rem",
      marginBottom: "2rem"
    }
  };

  return (
    <div className={classes.backdrop}>
      {darkOpacityOverlay && <div style={styles.overlay}></div>}
      <div style={styles.outerContentContainer}>
        <div style={styles.innerContentContainer}>
          <p className="uppercase tracking-loose w-full">{props.label}</p>
          <h1 className="font-bold" style={styles.heading} >{props.heading}</h1>
          <div style={styles.text}>
            <PortableText blocks={props.tagline} />
          </div>
          {props.cta && (props.cta?.title && !props.cta?.disabled) && (
            <CTALink
              {...props.cta}
              buttonActionClass="mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            />
          )}

          {!phxJumpButtonLink?.disabled && phxJumpButtonLink?.tagId &&
            <PhxJumpButton jumpTarget={phxJumpButtonLink?.tagId} icon={<ExpandMoreIcon style={{fontSize: 70}} />} mobile={mobile}/>
          }


        </div>
      </div>
    </div>
  );
}



export default PhxHero;
