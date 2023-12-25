import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  console.log(toasts)
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.props.id} className={styles.toastWrapper}>
          {toast}
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
