import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Loading.module.scss";

const messages = [
    "Initializing portfolio...",
    "Loading Next.js framework...",
    "Fetching data from server...",
    "Setting up React components...",
    "Loading styling with SCSS...",
    "Integrating FontAwesome icons...",
    "Fetching project details...",
    "Optimizing for SEO...",
    "Connecting to backend with Nest.js...",
    "Finalizing setup...",
    "Welcome to Jose Alberto Galera Sánchez's portfolio!",
    "Setting up database connections...",
    "Loading environment variables...",
    "Starting development server...",
    "Compiling TypeScript files...",
    "Building client-side bundle...",
    "Synchronizing client and server...",
    "Verifying dependencies...",
    "Starting Node.js server...",
    "Running initial tests...",
    "Applying middleware...",
    "Configuring Webpack...",
    "Resolving modules...",
    "Establishing WebSocket connection...",
    "Preparing Redux store...",
    "Hydrating application state...",
    "Loading user preferences...",
    "Connecting to API endpoints...",
    "Fetching GitHub repositories...",
    "Parsing JSON data...",
    "Transpiling ES6 to ES5...",
    "Loading custom hooks...",
    "Analyzing bundle size...",
    "Performing code splitting...",
    "Executing async operations...",
    "Mounting React components...",
    "Applying global styles...",
    "Optimizing performance...",
    "Caching assets...",
    "Setting up service worker...",
    "Compiling SCSS to CSS...",
    "Minifying JavaScript...",
    "Updating document head...",
    "Connecting to MongoDB...",
    "Loading icons and images...",
    "Checking browser compatibility...",
    "Final adjustments...",
    "Launching application...",
  ];

const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress >= 100) {
          clearInterval(interval);
          onFinish();
        }
        return nextProgress;
      });

      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 200); // 300ms interval to reach 100% in ~30 seconds

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={styles.loadingScreen}>
      <Image src="/images/logos/old_apple.png" alt="Logo" width={120} height={120} />
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      </div>
      <p className={styles.message}>{messages[messageIndex]}</p>
    </div>
  );
};

export default LoadingScreen;
