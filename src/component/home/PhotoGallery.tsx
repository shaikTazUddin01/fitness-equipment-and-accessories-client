import SectionTitle from "../shared/sectionTitle/SectionTitle";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

const PhotoGallery = () => {
  return (
    <div className="py-14">
      <div className="text-center text-secondaryColor">
        <SectionTitle heading="Healthy" subHeading="User Mosaic"></SectionTitle>
      </div>
      <div className=" w-full mt-5">
        <PhotoAlbum layout="rows" photos={photos} />;
      </div>
    </div>
  );
};

export default PhotoGallery;
