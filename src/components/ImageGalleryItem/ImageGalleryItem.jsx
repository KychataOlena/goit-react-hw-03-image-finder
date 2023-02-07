import { GalleryItem, ImageGalleryImage } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <GalleryItem>
      <ImageGalleryImage src={`${webformatURL}`} alt="" />
    </GalleryItem>
  );
};
