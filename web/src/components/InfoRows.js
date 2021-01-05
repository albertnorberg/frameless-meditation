import React from "react";
import PortableText from "./portableText";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import CTALink from "./CTALink";

const maybeImage = illustration => {
  let img = null;
  if (
    illustration &&
    illustration.disabled !== true &&
    illustration.image &&
    illustration.image.asset
  ) {
    img = (
      <img
        src={imageUrlFor(buildImageObj(illustration.image))
          // .width(800)
          // .height(Math.floor((9 / 16) * 800))
          .auto("format")
          .url()
        }
        alt={illustration.image.alt}
      />
    );
  }
  return img;
};

const InfoRow = props => {
  const img = maybeImage(props.illustration);
  const { flipped, mobile, ctas, colors } = props;

  const thisStyles = {
    rowContainer: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      padding: "2rem 0"
    },
    textContentContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      flex: 1,
      padding: img ? (flipped ? "0 0 0 2rem" : "0 2rem 0 0") : 0,
    },
    textContentContainerMobile: {
      width: "100%",
      paddingBottom: "1.5rem"
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      paddingRight: !flipped ? 0 : "2rem",
      paddingLeft: flipped ? 0 : "2rem"
    },
    imageContainerMobile: {
      width: "100%",
      // display: 'flex',
      // justifyContent: 'center',
    }
  };

  function getImage() {
    return (
      <div style={mobile ? thisStyles.imageContainerMobile : thisStyles.imageContainer}>{img}</div>
    );
  }
  return (
    <div style={thisStyles.rowContainer}>
      {flipped && !mobile && img && getImage()}

      <div style={mobile ? thisStyles.textContentContainerMobile : thisStyles.textContentContainer}>
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">{props.title}</h3>
        <div className="text-gray-600">
          {props.text && <PortableText blocks={props.text} />}
        </div>
        <div>
          {ctas &&
            ctas.length > 0 &&
            ctas.map(cta => {
              return (
                <CTALink
                  key={cta._key}
                  {...cta}
                  buttonActionClass="hover:underline bg-black text-white rounded-full py-4 px-8 shadow-lg mt-5 mr-5"
                  linkActionClass="hover:underline text-black mr-3"
                  buttonStyles={{backgroundColor: colors.secondary }}
                />
              );
            })}
        </div>
      </div>

      {(!flipped || (flipped && mobile)) && img && getImage()}
    </div>
  );
};

const InfoRows = props => {
  const { mobile } = props;
  const contentRows = (props.rows || [])
    .filter(r => !r.disabled)
    .map((r, i) => {
      return <InfoRow mobile={mobile} flipped={i % 2 !== 0} key={r._key} {...r} colors={props.colors} />;
    });
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-screen-xl mx-auto m-8 px-6">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {props.title}
        </h1>
        <div className="w-full mb-8">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {contentRows}
      </div>
    </section>
  );
};

export default InfoRows;