"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useTitle } from "@/core/contexts/PageTitleContext";

type Layout = {
  children: React.ReactElement;
};

export default function ProjectsLayout({ children }: Layout) {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Projects");
  }, [setTitle]);

  return (
    <>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
}
