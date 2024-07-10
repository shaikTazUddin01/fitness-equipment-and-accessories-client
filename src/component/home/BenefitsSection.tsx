import SectionTitle from "../shared/sectionTitle/SectionTitle";
import sectionImg from "../../assets/images/benefit/benefit-1.webp";
import fastDelivery from '../../assets/images/benefit/fast-delivery_1.png'
const BenefitsSection = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <SectionTitle
          heading="benefits"
          subHeading="using out product"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-10 ">
        <div className="h-[400px] col-span-1 rounded-md">
          <img src={sectionImg} alt="" className="rounded-md" />
        </div>
        <div className="space-y-5">


         <div className="flex text-white items-center justify-center gap-2">
          <div className="w-[25%]">
            <img src={fastDelivery} alt="" className="border-2 border-white rounded-full p-5" />
          </div>
          <div>
            <h1 className="text-xl uppercase">FAst Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium! Mollitia doloribus iusto totam </p>
          </div>
         </div>
         <div className="flex text-white items-center justify-center gap-2">
          <div className="w-[25%]">
            <img src={fastDelivery} alt="" className="border-2 border-white rounded-full p-5" />
          </div>
          <div>
            <h1 className="text-xl uppercase">FAst Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium! Mollitia doloribus iusto totam </p>
          </div>
         </div>
         <div className="flex text-white items-center justify-center gap-2">
          <div className="w-[25%]">
            <img src={fastDelivery} alt="" className="border-2 border-white rounded-full p-5" />
          </div>
          <div>
            <h1 className="text-xl uppercase">FAst Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium! Mollitia doloribus iusto totam </p>
          </div>
         </div>
         <div className="flex text-white items-center justify-center gap-2">
          <div className="w-[25%]">
            <img src={fastDelivery} alt="" className="border-2 border-white rounded-full p-5" />
          </div>
          <div>
            <h1 className="text-xl uppercase">FAst Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium! Mollitia doloribus iusto totam </p>
          </div>
         </div>


        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
