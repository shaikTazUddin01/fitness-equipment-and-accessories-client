import SectionTitle from "../shared/sectionTitle/SectionTitle";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

const PhotoGallery = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <SectionTitle heading="Inspiring Customer Moments" subHeading="Memorable moments captured with our products."></SectionTitle>
      </div>
      <div className=" w-full">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </div>
  );
};

export default PhotoGallery;
