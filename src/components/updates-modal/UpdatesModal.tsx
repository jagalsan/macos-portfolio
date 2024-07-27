// UpdatesModal.tsx
import React from "react";
import Modal from "../modal/Modal";

interface UpdatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdatesModal: React.FC<UpdatesModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Updates"
      onClose={onClose}
      footer={<button onClick={onClose}>Close</button>}
    >
      <p>Currently, there are no updates available.</p>
    </Modal>
  );
};

export default UpdatesModal;
