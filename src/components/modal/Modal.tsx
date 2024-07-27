import React, { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onClose, footer }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button className={styles.modalClose} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
