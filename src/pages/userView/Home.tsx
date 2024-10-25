import BenefitsSection from "../../component/home/BenefitsSection";
import CategorySection from "../../component/home/CategorySection";
import FeaturedProducts from "../../component/home/FeaturedProducts";
import HeroArea from "../../component/home/HeroArea";
import PhotoGallery from "../../component/home/PhotoGallery";
import Products from "../../component/home/Projucts";
import "../../index.css";

const Home = () => {
  return (
    <div>
      <HeroArea></HeroArea>
      <div className="px-5 xl:px-0 max-w-7xl mx-auto">
        <CategorySection></CategorySection>
        <Products />
        <FeaturedProducts></FeaturedProducts>
        <BenefitsSection></BenefitsSection>
        <PhotoGallery></PhotoGallery>
      </div>
    </div>
  );
};

export default Home;
