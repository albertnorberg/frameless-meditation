import React from "react";
import PortableText from "../components/portableText";
import CTALink from "./CTALink";

const CTA = ({ label, title, body, ctas }) => (
  <section className="container mx-auto text-center py-6 px-6">
    <h1 className="w-full my-2 text-4xl lg:text-5xl font-bold leading-tight text-center text-white">{title}</h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>

    <div className="my-4 text-xl lg:text-2xl leading-tight">
      <PortableText blocks={body} />
    </div>

    <div className="flex">
      {(ctas || []).map((c, i) => (
        <div key={i} className="flex-1 text-gray-700 text-center py-2">
          <CTALink
            key={`cta_${i}`}
            {...c}
            buttonActionClass="mx-auto hover:underline lg:text-lg bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        </div>
      ))}
    </div>
  </section>
);

export default CTA;
