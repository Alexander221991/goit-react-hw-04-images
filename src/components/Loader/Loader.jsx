import styles from './loader.module.css';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
export default Loader;
