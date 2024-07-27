import React from "react";
import Modal from "../modal/Modal";
import styles from "./CurriculumModal.module.scss";

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  onClose,
}) => {
  const downloadCV = () => {
    window.open("/files/jagalera_cv.pdf", "_blank");
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Curriculum Vitae"
      onClose={onClose}
      footer={
        <>
          <button style={{backgroundColor: 'aqua'}} onClick={downloadCV}>Download PDF</button>
          <button onClick={onClose}>Close</button>
        </>
      }
    >
      <div className={styles.curriculum}>
        <h1>Jose Alberto Galera Sánchez</h1>

        <section>
          <h2>Perfil</h2>
          <p>
            Frontend Developer with experience in resolving technical problems.
            Known for improving system efficiency and developing innovative
            solutions. Seeking opportunities to apply my skills in a dynamic and
            challenging environment.
          </p>
        </section>

        <section>
          <h2>Educación</h2>
          <p>
            <strong>The PowerMBA School</strong>
          </p>
          <p>
            <strong>IES Aguadulce</strong>
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <p>
            <strong>Professional:</strong> Angular, Jest, NextJs
          </p>
          <p>
            <strong>Personal:</strong> Communication Time Management Teamwork
          </p>
        </section>

        <section>
          <h2>Experiencia</h2>
          <p>
            <strong>Frontend Developer at Twenix (Present)</strong>
          </p>
          <p>
            <strong>Software Lead at NFT TECH LABS (2023-2024)</strong>
          </p>
          <p>
            <strong>Software developer Gauntlet Esport (2023-2024)</strong>
          </p>
        </section>
      </div>
    </Modal>
  );
};

export default CurriculumModal;
