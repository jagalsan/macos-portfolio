// SystemInfoModal.tsx
import React from "react";
import Modal from "../modal/Modal";

interface SystemInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SystemInfoModal: React.FC<SystemInfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="System Info"
      onClose={onClose}
      footer={<button onClick={onClose}>Close</button>}
    >
      <p>Stack used:</p>
      <ul>
        <li>Frontend: Next.js</li>
        <li>Backend: Nest.js</li>
        <li>Optimized for SEO</li>
      </ul>
    </Modal>
  );
};

export default SystemInfoModal;
