import SectionTitle from "../shared/sectionTitle/SectionTitle";

const ContactUs = () => {
  return (
    <div className="mt-16 mb-20 px-6 xl:px-0">
      <div className="text-center mb-12">
        <SectionTitle heading="Contact Us" subHeading="We're Here to Help!" />
      </div>

      <div className="flex flex-col md:flex-row md:gap-16 items-center">
        {/* Contact Details Section */}
        <div className="w-full md:w-2/4 text-center md:text-left px-6">
          <div className="space-y-5">
            <p className="text-xl md:text-2xl font-semibold text-black">
              <span className="block text-black">Office Address:</span>
              <span className="block text-gray-600 text-lg">
                04, Poschim Bania Khamar Cross Road; BosuPara PS, <br />
                Khulna – 9100, Bangladesh
              </span>
            </p>
            <p className="text-xl md:text-2xl font-semibold text-black">
              <span className="block text-black">Business Hours:</span>
              <span className="block text-gray-600 text-lg">
                Monday - Friday: 9:00 AM - 6:00 PM <br />
                Saturday: 10:00 AM - 4:00 PM <br />
                Sunday: Closed
              </span>
            </p>
            <p className="text-xl md:text-2xl font-semibold text-black">
              <span className="block text-black">Phone:</span>
              <span className="block text-gray-600 text-lg">+880 1834 957677</span>
            </p>
            <p className="text-xl md:text-2xl font-semibold text-black">
              <span className="block text-black">Email:</span>
              <span className="block text-gray-600 text-lg">
                tazahmedsoft@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-2/4 my-10 md:my-0 px-6">
          <div className="w-full shadow-lg rounded-xl bg-white p-8">
            <form className="space-y-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full text-black rounded-lg py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full text-black rounded-lg py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Comment</span>
                </label>
                <textarea
                  placeholder="Your message..."
                  className="input input-bordered w-full text-black rounded-lg py-3 px-5 min-h-24 focus:outline-none focus:ring-2 focus:ring-primary"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="form-control">
                <button className="btn btn-sm bg-[#ef4a23] w-full  rounded-lg font-semibold text-white hover:bg-primary-dark focus:outline-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
