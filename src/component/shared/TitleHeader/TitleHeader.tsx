const TitleHeader = ({ heading ,subHeading}: { heading: string ,subHeading:string }) => {
  return (
    <div className="py-5">
      <div className=" text-center title-text italic uppercase">{heading}</div>
      <div className=" text-center text-white text-5xl tracking-[.4px] font-bold uppercase">{subHeading}</div>

    </div>
  );
};

export default TitleHeader;
