"use client"

import { useTitle } from "@/core/contexts/PageTitleContext";
import { useEffect } from "react";

export default function HomeClient() {
    const { setTitle } = useTitle();

    useEffect(() => {
      setTitle("Home");
    }, [setTitle]);

  return (
    <>
    </>
  );
}
