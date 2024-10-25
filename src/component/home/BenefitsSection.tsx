import SectionTitle from "../shared/sectionTitle/SectionTitle";


import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
const BenefitsSection = () => {
  return (
    <div className="mt-16">
      {/* section title */}
      <div className="text-center text-secondaryColor">
        <SectionTitle
          heading="Why Shop With Us"
          subHeading="Your satisfaction is our priority."
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
        <div className="h-auto col-span-1 rounded-md ">
          <img src="https://i.ibb.co/pwkrchP/benefit-1.webp" alt="image" className="rounded-md" />
        </div>
        <div className="space-y-7 lg:pr-5 text-justify ">
          {/* benefit -1 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 bg-white  text-black p-5  rounded-lg shadow">
            <div className="border-2 border-black rounded-full p-5 text-3xl">
              <FaShippingFast></FaShippingFast>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-[17px] uppercase font-semibold ">
                FAst Delivery
              </h1>
              <p className="text-[15px] italic">
                Fast delivery ensures your products reach their destination
                quickly, boosting customer satisfaction and loyalty.
              </p>
            </div>
          </div>
          {/* benefit -2 */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-5 bg-white   text-black   p-5  rounded-lg">
            <div className="border-2 border-black  rounded-full p-5 text-3xl">
              <IoAirplaneOutline />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-[17px] uppercase font-semibold ">
                SHIPPING WORLDWIDE
              </h1>
              <p className="text-[15px] italic">
                Shipping worldwide, we ensure your products reach every corner
                of the globe swiftly and securely.
              </p>
            </div>
          </div> */}
          {/* benefit -3 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 bg-white   text-black   p-5  rounded-lg">
            <div className="border-2 border-black  rounded-full p-5 text-3xl">
              <RiSecurePaymentLine />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-[17px] uppercase font-semibold ">
                SECURE PAYMENTS
              </h1>
              <p className="text-[15px] italic">
                Shipping worldwide, we ensure your products reach every corner
                of the globe swiftly and securely.
              </p>
            </div>
          </div>
          {/* benefit -4 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 bg-white   text-black   p-5  rounded-lg">
            <div className="border-2 border-black  rounded-full p-5 text-3xl">
              <MdContactSupport />
            </div>
            <div className="text-center sm:text-left ">
              <h1 className="text-[17px] uppercase font-semibold ">
                ONLINE SUPPORT
              </h1>
              <p className="text-[15px] italic">
                Shipping worldwide, we ensure your products reach every corner
                of the globe swiftly and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
