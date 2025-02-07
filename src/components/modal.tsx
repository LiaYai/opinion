import { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

type TModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modals');

export const Modal = memo(({ onClose, children }: TModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
  }}>
      {children}
      <button onClick={onClose}>Закрыть</button>
    </div>,
    modalRoot as HTMLDivElement
  );
});