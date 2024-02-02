import styles from './image-gallery-item.module.css';

const ImageGalleryItem = ({ showModal, id, webformatURL, tags }) => {
  return (
    <li
      key={id}
      onClick={() => showModal({ webformatURL, tags })}
      className={styles.item}
    >
      <img className={styles.image} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
