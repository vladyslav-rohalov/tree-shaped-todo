import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import './modal.css';

interface IModalProps {
  onClose: () => void;
}

const modalRoot = document.getElementById('root');

const Modal: React.FC<IModalProps> = ({ onClose }) => {
  useEffect(() => {
    const keyDownEvent = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDownEvent);

    return () => {
      window.removeEventListener('keydown', keyDownEvent);
    };
  }, [onClose]);

  const onCloseBackdrop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className="backdrop" onClick={onCloseBackdrop}>
      <div className="modal">
        <p>123</p>
      </div>
    </div>,
    modalRoot as Element,
  );
};

export default Modal