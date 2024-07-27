// Shortcut.tsx
import React from "react";
import styles from "./ShortCut.module.scss";
import { Icon } from "@/data/types/icon";
import Image from "next/image";

export interface ShortcutProps {
  icon: Icon;
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
  top: string;
  left: string;
}

const Shortcut: React.FC<ShortcutProps> = ({ icon, title, onClick, style }) => {
  return (
    <div className={styles.shortcut} onClick={onClick} style={style}>
      <Image className={styles.shortcutIcon} src={`/images/macos/icons/${icon}.png`} alt="img" width={34} height={34} />
      <div className={styles.shortcutTitle}>{title}</div>
    </div>
  );
};

export default Shortcut;
