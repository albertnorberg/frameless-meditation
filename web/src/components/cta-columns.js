import React from "react";
import PortableText from "./portableText";

const CTAColumn = ({ width, label, title, body, colors, ctas = [] }) => {
  const className = `w-full md:w-1/${width} p-6 flex flex-col flex-grow flex-shrink`;
  const buttonClass = `mx-auto hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg`

  const actions = ctas
    .filter(c => c.title)
    .map((c, i) => {
      return (
        <div key={i} className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-start">
            {/* <button className="mx-auto hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"> */}
            <button className={buttonClass} style={{backgroundColor: colors.secondary }}>
              {c.title}
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className={className}>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow py-6 px-6">
        <div className="flex-col flex-wrap items-center text-center">
          <p className="text-gray-600 text-xs md:text-sm">{label}</p>
          <div className="font-bold text-xl text-gray-800">{title}</div>
          <div className="text-gray-800 text-base">
            <PortableText blocks={body} />
          </div>
        </div>
      </div>
      {actions}
    </div>
  );
};

const CTAColumns = ({ title, columns, colors }) => {
  const cols = columns
    .filter(c => !c.disabled)
    .map((c, i) => {
      return <CTAColumn width={columns.length} key={c._key + i} {...c} colors={colors} />;
    });

  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
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
