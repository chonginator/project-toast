import React from 'react';
import Toast from '../Toast';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useKeydown('Escape', () => setToasts([]));
  
  const dismissToast = React.useCallback((id) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  }, []);

  const addToast = React.useCallback((variant, message) => {
    const id = crypto.randomUUID();
    const newToast = ({
      id,
      variant,
      message,
      handleDismiss: () => dismissToast(id)
    });

    setToasts([...toasts, newToast])
  }, [toasts, dismissToast]);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, [])


  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissAllToasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
