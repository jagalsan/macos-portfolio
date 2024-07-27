"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useTitle } from "@/core/contexts/PageTitleContext";

type Layout = {
  children: React.ReactElement;
};

export default function BlogLayout({ children }: Layout) {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Blog");
  }, [setTitle]);

  return <div className={styles.wrapper}>{children}</div>;
}
