const TestimonialsCard = ({
  image,
  name,
  review,
}: {
  image: string;
  name: string;
  review: string;
}) => {
  return (
    <div>
      <div className="bg-white  rounded-lg py-5 px-3">
        <div className="flex justify-center">
          <img
            src={image}
            alt=""
            className="size-[70px] rounded-full bg-center  border-2 border-primaryColor "
          />
        </div>
        <div>
          <div className="pt-2">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm font-semibold ">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
