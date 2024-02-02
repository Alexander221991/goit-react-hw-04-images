import styles from './image-gallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ showModal, items }) => {
  const elements = items.map(({ id, webformatURL, tags }) => (
    <ImageGalleryItem
      key={id}
      showModal={showModal}
      id={id}
      webformatURL={webformatURL}
      tags={tags}
    />
  ));
  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;
