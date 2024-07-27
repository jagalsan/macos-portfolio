"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import styles from "./Error.module.scss";
import { useRouter } from "next/navigation";
import { useTitle } from "@/core/contexts/PageTitleContext";

interface ErrorComponentProps {
  title: string;
  error: string;
  description: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  title,
  error,
  description,
}) => {
  const router = useRouter();

  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Error");
  }, [setTitle]);

  const backToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorWrapperContainer}>
        <div className={styles.errorWrapperIcon}>
          <FontAwesomeIcon icon={faBomb} size="2x" />
        </div>
        <div className={styles.errorWrapperMessage}>
          <div className={styles.errorWrapperTitle}>{title}</div>
          <div className={styles.errorWrapperText}>{error}</div>
          <div className={styles.errorWrapperDescription}>{description}</div>
          <button onClick={backToHome} className={styles.restartButton}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
