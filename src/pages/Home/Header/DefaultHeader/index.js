import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import UserIcon from '../UserIcon';

const DefaultHeader = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}></div>
      <div className={styles.headerItem}>
        <div className={styles.headerLinks}>
          <a href='../App/App.js'>Почта</a>
        </div>
        <div className={styles.headerLinks}>
          <Link to='/mooglee/images' className={styles.postsLink}>
            Картинки
          </Link>
        </div>
        <div>
          <UserIcon user={user} />
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
