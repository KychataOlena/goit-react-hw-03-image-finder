import { GalleryItem, ImageGalleryImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
// import { Component } from 'react';

export const ImageGalleryItem = ({
  webformatURL,
  onClick,
  largeImageClick,
}) => {
  return (
    <GalleryItem>
      <ImageGalleryImage
        src={`${webformatURL}`}
        onClick={() => onClick(largeImageClick)}
        alt=""
      />
    </GalleryItem>
  );
};

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };
//   ModalOpen = () => this.setState({ isModalOpen: true });
//   ModalClose = () => this.setState({ isModalOpen: false });

//   render() {
//     const { isModalOpen } = this.state;
//     const { webformatURL, onImgClick } = this.props;
//     return (
//       <GalleryItem>
//         <ImageGalleryImage
//           src={`${webformatURL}`}
//           onClick={onImgClick}
//           onClick={this.ModalOpen}
//           alt=""
//         />
//         {isModalOpen && <Modal />}
//       </GalleryItem>
//     );
//   }
// }
