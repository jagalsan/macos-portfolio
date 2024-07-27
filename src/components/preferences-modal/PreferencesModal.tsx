// PreferencesModal.tsx
import React from "react";
import Modal from "../modal/Modal";

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Preferences"
      onClose={onClose}
      footer={<button onClick={onClose}>Close</button>}
    >
      <p>I want to work on:</p>
      <ul>
        <li>Frontend projects with Angular</li>
        <li>Next.js + React projects</li>
      </ul>
    </Modal>
  );
};

export default PreferencesModal;
