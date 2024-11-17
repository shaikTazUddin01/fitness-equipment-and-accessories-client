import SectionTitle from "../shared/sectionTitle/SectionTitle";


import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description:
        "We guarantee speedy delivery to your doorstep, ensuring you receive your products without unnecessary delays.",
    },
    {
      icon: <RiSecurePaymentLine />,
      title: "Secure Payments",
      description:
        "Your transactions are protected with our advanced security measures, providing you with peace of mind.",
    },
    {
      icon: <MdContactSupport />,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any inquiries or concerns.",
    },
  ];
  return (
    <div className="mt-16">
      {/* section title */}
      <div className="text-center text-secondaryColor">
        <SectionTitle
          heading="Why Shop With Us"
          subHeading="Experience unparalleled service and customer care"
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
         {/* Left Section: Image & Highlights */}
         <div className="relative">
          <img
            src="https://i.ibb.co/pwkrchP/benefit-1.webp"
            alt="Benefits"
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-gray-900 opacity-25 rounded-lg"></div>

          {/* Highlight Badge */}
          <div className="absolute top-4 left-4 bg-secondaryColor text-white py-2 px-4 rounded-full text-sm shadow-md">
            Trusted by 10k+ Customers
          </div>
        </div>
        {/* right side */}
        <div className="space-y-7 lg:pr-5 text-justify ">
          {/* benefit -1 */}
        {
          benefits?.map((benefit)=>(
            <div key={benefit?.title} className="flex flex-col sm:flex-row
            border-t-2 border-textSecondary items-center justify-center gap-5 bg-white  text-black p-5  rounded-lg shadow">
            <div className="border-2 border-textSecondary rounded-full p-5 text-3xl">
              {benefit?.icon}
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-[17px] uppercase font-semibold ">
              {benefit?.title}
              </h1>
              <p className="text-[15px] text-[#1d1c1c] pt-1">
              {benefit?.description}
              </p>
            </div>
          </div>
          ))
        }
          
        
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
