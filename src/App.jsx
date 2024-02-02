import ImageSearch from './components/ImageSearch/ImageSearch';

import styles from './app.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <ImageSearch />
    </div>
  );
};
