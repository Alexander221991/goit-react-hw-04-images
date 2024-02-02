import { useEffect, useState } from 'react';
import { searchImage } from 'api/images';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

import styles from './imagesearch.module.css';

const ImageSearch = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModal] = useState(false);
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await searchImage(search, page);
        setImages(prevImages =>
          data.hits?.length ? [...prevImages, ...data.hits] : prevImages
        );
        setTotalHits(data.totalHits || 0);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    setSearch(search);
    setImages([]);
    setTotalHits(0);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showModal = ({ webformatURL, tags }) => {
    setModal(true);
    setPostDetails({
      webformatURL,
      tags,
    });
  };

  const closeModal = () => {
    setModal(false);
    setPostDetails({});
  };

  const isImages = Boolean(images.length);
  const isTotal = Boolean(totalHits > images.length);

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {error && <p className={styles.error}>ERROR: {error}</p>}

      {isImages && <ImageGallery showModal={showModal} items={images} />}
      {isTotal && (
        <div className={styles.loadMoreWrapper}>
          <Button type="button" onClick={loadMore}>
            Load more
          </Button>
        </div>
      )}
      {loading && <Loader />}
      {modalOpen && (
        <Modal close={closeModal}>
          <img src={postDetails.webformatURL} alt={postDetails.tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageSearch;
