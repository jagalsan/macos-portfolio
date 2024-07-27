"use client";

import "./globals.scss";
import localFont from "next/font/local";
import styles from "./layout.module.scss";
import Header from "@/components/header/Header";
import { TitleProvider, useTitle } from "@/core/contexts/PageTitleContext";
import ShortcutList from "@/components/shortcut-list/ShortCutList";
import { ShortcutProps } from "@/components/shortcut/ShortCut";
import { useRouter } from "next/navigation";
import SystemOverviewModal from "@/components/system-overview-modal/SystemOverviewModal";
import { useState } from "react";
import CurriculumModal from "@/components/curriculum-modal/CurriculumModal";

const inter = localFont({ src: "../../public/fonts/ChicagoFLF.ttf" });

function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { title } = useTitle();

  const shortcuts: ShortcutProps[] = [
    {
      icon: "disk",
      title: "My Computer",
      onClick: () => openSystemOverviewModal(),
      top: "62.8946vh",
      left: "65.2539vw",
    },
    {
      icon: "x",
      title: "Twitter",
      onClick: () => window.location.assign("https://x.com/jagalerasanchez"),
      top: "6.8946vh",
      left: "29.2539vw",
    },
    {
      icon: "ig",
      title: "Instagram",
      onClick: () => window.location.assign("https://instagram.com/jagalerasanchez"),
      top: "16.8946vh",
      left: "22.2539vw",
    },
    {
      icon: "in",
      title: "LinkedIn",
      onClick: () => window.location.assign("https://www.linkedin.com/in/jose-alberto-galera-s%C3%A1nchez/"),
      top: "24.8946vh",
      left: "12.2539vw",
    },
    {
      icon: "search",
      title: "Projects",
      onClick: () => router.push("/projects"),
      top: "49.1278vh",
      left: "39.9316vw",
    },
    {
      icon: "file",
      title: "Blog",
      onClick: () => router.push("/blog"),
      top: "42.5917vh",
      left: "30.8723vw",
    },
    {
      icon: "write",
      title: "Curriculum",
      onClick: () => openCurriculumModal(),
      top: "11.6641vh",
      left: "52.6139vw",
    },
  ];

  const [isSystemOverviewModalOpen, setIsSystemOverviewModalOpen] =
    useState(false);
  const openSystemOverviewModal = () => setIsSystemOverviewModalOpen(true);
  const closeSystemOverviewModal = () => setIsSystemOverviewModalOpen(false);

  const [isCurriculumModalOpen, setIsCurriculumModalOpen] = useState(false);
  const openCurriculumModal = () => setIsCurriculumModalOpen(true);
  const closeCurriculumModal = () => setIsCurriculumModalOpen(false);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header title={title || 'Home'} />
        <div className={styles.wrapper}>
          <>{children}</>
        </div>
        <ShortcutList shortcuts={shortcuts}></ShortcutList>
        <SystemOverviewModal
          isOpen={isSystemOverviewModalOpen}
          onClose={closeSystemOverviewModal}
        />
        <CurriculumModal
          isOpen={isCurriculumModalOpen}
          onClose={closeCurriculumModal}
        />
      </body>
    </html>
  );
}

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <TitleProvider>
    <RootLayout>{children}</RootLayout>
  </TitleProvider>
);

export default AppLayout;
