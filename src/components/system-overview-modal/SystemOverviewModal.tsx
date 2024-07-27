// SystemOverviewModal.tsx
import React from "react";
import Modal from "../modal/Modal";
import styles from "./SystemOverviewModal.module.scss";

interface SystemOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SystemOverviewModal: React.FC<SystemOverviewModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="System Overview"
      onClose={onClose}
      footer={<button onClick={onClose}>Close</button>}
    >
      <div className={styles.systemOverview}>
        <h1>Apple System Profiler</h1>
        <div className={styles.section}>
          <strong>Machine:</strong> MacBook Air (M1, 2020)
          <br />
          <strong>Machine ID:</strong> MacBookAir10,1
        </div>
        <div className={styles.section}>
          <strong>Finder:</strong> v12.0.1
          <br />
          <strong>System:</strong> macOS Monterey v12.0.1 US
          <br />
          <strong>Processor:</strong> Apple M1
          <br />
          <strong>FPU:</strong> Integrated
          <br />
          <strong>System Enabler:</strong> Not Required
          <br />
          <strong>OpenDoc:</strong> Supported
        </div>
        <div className={styles.section}>
          <strong>Memory Installed:</strong> 8 GB
          <br />
          <strong>Virtual Memory:</strong> On
          <br />
          <strong>Total Memory:</strong> 8 GB
          <br />
          <strong>Disk Cache:</strong> Managed by System
        </div>
        <div className={styles.section}>
          <strong>Startup Device:</strong> Macintosh HD
        </div>
      </div>
    </Modal>
  );
};

export default SystemOverviewModal;
