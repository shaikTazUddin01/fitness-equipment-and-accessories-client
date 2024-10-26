import SectionTitle from "../shared/sectionTitle/SectionTitle";


const CompanyOverView = () => {
    return (
        <>
        <div className=' text-center  md:mt-10'>
        <SectionTitle heading='OverView' subHeading='Our Compaby'></SectionTitle>
      </div>
      <div>
      <div className='px-5 md:px-10  grid grid-cols-1 lg:px-0 lg:grid-cols-2 gap-5 items-center mt-5 mb-20'>
            <div className=''>
                <img src="https://i.ibb.co/pfzH357/Strength-Training-Equipment.webp" alt="img" className='rounded-xl '/>
            </div>
            <div className="text-justify">
                <div className='space-y-5 mt-5 md:mt-0 '>
                    <h1 className='text-2xl font-medium'> Fitness Equipment and Accessories Empowering Your Fitness Journey .</h1>
                    <ul className='space-y-5'>
                        <li>
                            <span className='font-bold'>Conpany History : </span>Founded in 2015, Fitness Equipment and Accessories started as a small venture with the aim of providing high-quality fitness products to enthusiasts and professionals alike. Over the years, the company has grown from a local supplier to a nationally recognized brand, known for its innovation, durability, and customer-centric approach. Our journey is marked by continuous improvement and adaptation to the evolving needs of the fitness community
                        </li>
                        <li>
                            <span className='font-bold'>Our Mission : </span>Our mission is to empower individuals to achieve their fitness goals by providing top-notch equipment and accessories that enhance their workout experience. We are dedicated to promoting a healthy and active lifestyle through our wide range of products, exceptional customer service, and a commitment to excellence.
                        </li>
                        <li>
                            <span className='font-bold'>Our Vision:</span> Our vision is to become a global leader in the fitness industry, inspiring a culture of health and well-being. We aim to set the standard for quality and innovation in fitness equipment and accessories, making fitness accessible and enjoyable for everyone, everywhere.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
        </>
    );
};

export default CompanyOverView;