import { useState, useRef, useEffect } from 'react';

import styles from './search-bar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}>Search</span>
        </button>
        <input
          ref={inputRef}
          className={styles.input}
          value={state.search}
          onChange={handleChange}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
