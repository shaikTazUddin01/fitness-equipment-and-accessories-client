import CompanyOverView from "../../component/AboutUs/CompanyOverView";
import ContactUs from "../../component/AboutUs/ContactUs";
import TeamInTo from "../../component/AboutUs/TeamInTo";
import Testimonials from "../../component/AboutUs/Testimonials";


// import SectionTitle from '../component/shared/sectionTitle/SectionTitle';
const AboutUs = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* conpany over view */}
      <CompanyOverView></CompanyOverView>
      {/* introduce team */}
      <TeamInTo></TeamInTo>
      {/* our customer Testimonials */}
      <Testimonials></Testimonials>
      {/* contact us */}
     <ContactUs></ContactUs>
    </div>
  );
};

export default AboutUs;
