import PropTypes from 'prop-types';
import {
  ImageGalleryItemCard,
  ImageGalleryItemImg,
} from './imageGalleryItem.styled';

export const ImageGalleryItem = ({ url, tag, openModal, largeImageURL }) => {
  return (
    <ImageGalleryItemCard>
      <ImageGalleryItemImg
        src={url}
        alt={tag}
        onClick={() => openModal(largeImageURL, tag)}
      />
    </ImageGalleryItemCard>
  );
};

ImageGalleryItem.prototype = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
