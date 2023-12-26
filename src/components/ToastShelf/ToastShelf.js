import React from 'react';

import { ToastContext } from '../ToastProvider';
import useKeydown from '../../hooks/useKeydown';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);
  useKeydown('Escape', dismissAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.props.id} className={styles.toastWrapper}>
          {toast}
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
