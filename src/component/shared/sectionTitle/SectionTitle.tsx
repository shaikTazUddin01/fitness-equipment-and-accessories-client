const SectionTitle = ({
  heading,
  subHeading

}: {
  heading: string;
  subHeading: string;
  
}) => {
  return (
    <div className="py-5 ">
      {heading ? (
        <h3 className="text-2xl font-semibold">{heading}</h3>
      ) : (
        ""
      )}
      {subHeading ? (
        <h1 className="text-secondaryColor ">
          {subHeading}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionTitle;
