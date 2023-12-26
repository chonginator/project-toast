import React from 'react';
import Toast from '../Toast';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useKeydown('Escape', () => setToasts([]));
  
  const dismissToast = React.useCallback((id) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.props.id !== id));
  }, []);

  const addToast = React.useCallback((variant, message) => {
    const id = crypto.randomUUID();
    const newToast = (
      <Toast id={id} variant={variant} handleDismiss={() => dismissToast(id)}>
        {message}
      </Toast>
    );

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
