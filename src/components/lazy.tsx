import { useState, useEffect } from "react";

export function LazyBackground({ src, children }) {
    const [source, setSource] = useState("https://res.cloudinary.com/ddrulpeh5/image/upload/v1702826801/ayyu8kxpzoluaqo0dn8k.jpg");

    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setSource(src);
    }, [src]);

    return <div className="authContainer" /*style={{ backgroundImage: `url(${source})` }}*/>{children}</div>;
  }
