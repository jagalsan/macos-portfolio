import styles from "./Header.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/data/static/menu";
import { getCurrentHour } from "@/core/helpers/date.helper";
import SystemInfoModal from "../system-modal/SystemInfoModal";
import PreferencesModal from "../preferences-modal/PreferencesModal";
import UpdatesModal from "../updates-modal/UpdatesModal";

config.autoAddCss = false;

const menuItems = Menu;

const Header: React.FC<{ title: string }> = ({ title }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isLogoMenuOpen, setIsLogoMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getCurrentHour());
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMenuClick = (item: string) => {
    setOpenSubMenu(openSubMenu === item ? null : item);
    setIsLogoMenuOpen(false);
  };

  const handleLogoClick = () => {
    setIsLogoMenuOpen(!isLogoMenuOpen);
    setOpenSubMenu(null);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      logoRef.current &&
      !logoRef.current.contains(event.target as Node)
    ) {
      setOpenSubMenu(null);
      setIsLogoMenuOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isSystemInfoModalOpen, setIsSystemInfoModalOpen] = useState(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);
  const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState(false);

  const openSystemInfoModal = () => setIsSystemInfoModalOpen(true);
  const closeSystemInfoModal = () => setIsSystemInfoModalOpen(false);

  const openPreferencesModal = () => setIsPreferencesModalOpen(true);
  const closePreferencesModal = () => setIsPreferencesModalOpen(false);

  const openUpdatesModal = () => setIsUpdatesModalOpen(true);
  const closeUpdatesModal = () => setIsUpdatesModalOpen(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerNavigation}>
          <div
            className={styles.logoContainer}
            ref={logoRef}
          >
            <Image
              src="/images/logos/old_apple.png"
              alt="Logo"
              width="20"
              onClick={handleLogoClick}

              height="20"
            />
            {isLogoMenuOpen && (
              <div className={styles.subMenu}>
                <p>About this system</p>
                <a href="#" onClick={openSystemInfoModal}>
                  System Info
                </a>
                <a href="#" onClick={openPreferencesModal}>
                  Preferences
                </a>
                <a href="#" onClick={openUpdatesModal}>
                  Updates
                </a>
              </div>
            )}
          </div>
          <nav ref={menuRef} className={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <div key={index} className={styles.menuItem}>
                <a
                  className={styles.menuLink}
                  onClick={() => handleMenuClick(item.name)}
                >
                  {item.name}
                </a>
                {openSubMenu === item.name && (
                  <div className={styles.subMenu}>
                    <p>Submenu content for {item.name}</p>
                    <span className={styles.separator3D}></span>
                    {item.subMenu.map((subMenuItem, subIndex) => (
                      <a key={subIndex} href="#">
                        {subMenuItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.headerSystem}>
          <span className={styles.systemHour}>{currentTime}</span>
          <div className={styles.systemSeparator}>
            <span className={styles.systemSeparatorItem}></span>
            <span className={styles.systemSeparatorItem}></span>
            <span className={styles.systemSeparatorItem}></span>
            <span className={styles.systemSeparatorItem}></span>
          </div>
          <div className={styles.systemFlex}>
            <Link href={"/"}>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
            </Link>
            <span title={title} className={styles.pageTitle}>
              {title}
            </span>
          </div>
        </div>
      </header>
      <SystemInfoModal
        isOpen={isSystemInfoModalOpen}
        onClose={closeSystemInfoModal}
      />
      <PreferencesModal
        isOpen={isPreferencesModalOpen}
        onClose={closePreferencesModal}
      />
      <UpdatesModal isOpen={isUpdatesModalOpen} onClose={closeUpdatesModal} />
    </>
  );
};

export default Header;
