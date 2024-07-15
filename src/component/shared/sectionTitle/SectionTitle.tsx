const SectionTitle = ({
  heading,
  subHeading

}: {
  heading: string;
  subHeading: string;
  
}) => {
  return (
    <div className="py-5 text-white">
      {heading ? (
        <h3 className="title-text italic uppercase text-white">{heading}</h3>
      ) : (
        ""
      )}
      {subHeading ? (
        <h1 className="text-white text-5xl tracking-[.4px] font-bold uppercase">
          {subHeading}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionTitle;
