import SectionTitle from "../shared/sectionTitle/SectionTitle";

const ContactUs = () => {
  return (
    <div className="mt-16 mb-20 px-5 xl:px-0">
      <div className=" text-center mb-5">
        <SectionTitle
          heading="Contact"
          subHeading=" Out Anytime"
        ></SectionTitle>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10  items-center ">
        <div className="w-full md:w-2/4 text-center">
          <p className="text-xl md:text-2xl font-semibold mb-3">
            Office Address :<br />
            <span className="text-lg md:text-xl font-medium ">
              04,Poschim Bania Khamar Cross Road; BosuPara PS, <br /> Khulna –
              9100, Bangladesh
            </span>
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-3">
            Business Hours :<br />
            <span className="text-lg md:text-xl font-medium ">
              Monday - Friday : 9:00 AM - 6:00 PM <br />
              Saturday : 10:00 AM - 4:00 PM <br />
              Sunday : Closed <br />
            </span>
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-3">
            Phone : <br />
            <span className="text-lg md:text-xl  font-medium ">
              +880 1834 957677
            </span>
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-3">
            Email :<br />
            <span className="text-lg md:text-xl font-medium  ">
              tazahmedsoft@gmail.com
            </span>
          </p>
        </div>

        <div className="w-full md:w-2/4 my-10 md:my-0 ">
          <div className="w-full shadow-2xl   rounded-lg bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Name <span className="text-red-600">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-red-600">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Comment <span className="text-red-600">*</span>
                  </span>
                </label>
                {/* <input type="password" placeholder="password" className="input input-bordered text-black" required /> */}
                <textarea
                  placeholder="comment here..."
                  className="input input-bordered text-black min-h-16"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="rounded-lg font-semibold btn btn-neutral">
                  Send Messages
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
