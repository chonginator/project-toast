import React from 'react';
import Toast from '../Toast';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  
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


  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
