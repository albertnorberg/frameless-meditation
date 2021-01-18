import React from "react";
import PortableText from "./portableText";
import CTALink from "./CTALink";

const CTAColumn = ({ width, label, title, body, colors, ctas = [], mobile }) => {
  const className = `w-full md:w-1/${width} p-6 flex flex-col flex-grow flex-shrink`;

  const actions = ctas
    .filter(cta => cta.title)
    .map((cta, i) => {
      return (
        <div key={i} className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-start">
            <CTALink
                  key={cta._key}
                  mobile={mobile}
                  {...cta}
                  buttonActionClass="mx-auto hover:underline bg-black text-white lg:text-lg rounded-full py-4 px-8 shadow-lg mt-5"
                  linkActionClass="mx-auto hover:underline text-black lg:text-lg cursor-pointer"
                  buttonStyles={{ backgroundColor: colors.secondary }}
                />
          </div>
        </div>
      );
    });

  return (
    <div className={className}>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow py-6 px-6">
        <div className="flex-col flex-wrap items-center text-center">
          <p className="text-gray-600 font-bold text-lg lg:text-xl" style={{color: colors.secondary }} >{label}</p>
          <div className="font-bold text-xl text-gray-800 lg:text-xl">{title}</div>
          <div className="text-gray-800 text-base lg:text-lg">
            <PortableText blocks={body} />
          </div>
        </div>
      </div>
      {actions}
    </div>
  );
};

const CTAColumns = ({ title, columns, colors, mobile }) => {

  const cols = columns
    .filter(c => !c.disabled)
    .map((c, i) => {
      return <CTAColumn width={columns.length} key={c._key + i} {...c} colors={colors} mobile={mobile} />;
    });

  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {cols}
      </div>
    </section>
  );
};

export default CTAColumns;
