import HeroArea from "../component/home/HeroArea";
import CategorySection from "../component/home/CategorySection";
import FeaturedProducts from "../component/home/FeaturedProducts";
import BenefitsSection from "../component/home/BenefitsSection";
import "../index.css";
const Home = () => {

  return (
    <div>
      <HeroArea></HeroArea>
      <CategorySection></CategorySection>
      <FeaturedProducts></FeaturedProducts>
      <BenefitsSection></BenefitsSection>
      {/* <PhotoGallery></PhotoGallery> */}
    </div>
  );
};

export default Home;
