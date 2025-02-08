import { memo, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton } from './button';

type TModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modals');

export const Modal = memo(({ onClose, children }: TModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const overlay = overlayRef?.current;

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleOverlayClick = (e: MouseEvent) => {
      if (e.target === overlay) {
        onClose();
      }
    };

    if (overlay) {
      overlay.addEventListener('click', handleOverlayClick);
      document.addEventListener('keydown', handleEscapeKey);
      overlay.focus();
    }
  
    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleOverlayClick);
        document.removeEventListener('keydown', handleEscapeKey);
      }
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div ref={overlayRef} className='fixed inset-0 flex items-center justify-center bg-black/50' >
        <div className='relative text-center h-[400px] w-[400px] bg-pink-500'>
        {children}
        <PrimaryButton onClick={onClose} className='absolute top-5 right-5 cursor-pointer '>Закрыть</PrimaryButton>
        </div>
    </div>,
    modalRoot as HTMLDivElement
  );
});