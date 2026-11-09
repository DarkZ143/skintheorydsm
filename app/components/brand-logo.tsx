"use client";

import Image from "next/image";
import { useState } from "react";

export default function BrandLogo() {
  const [logoAvailable, setLogoAvailable] = useState(true);

  if (!logoAvailable) {
    return (
      <span className="brand-wordmark" aria-label="Skin Theory DSM">
        <span>skin theory</span>
        <small>DES MOINES · IOWA</small>
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="Skin Theory DSM"
      width={190}
      height={64}
      className="brand-logo-image"
      onError={() => setLogoAvailable(false)}
    />
  );
}
