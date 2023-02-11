import { ImageGalleryList } from '../ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ImageGalleryList>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageClick={largeImageURL}
          onClick={onClick}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryList>
  );
};

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зо
