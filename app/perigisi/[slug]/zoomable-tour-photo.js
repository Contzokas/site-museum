"use client";

import { useState } from "react";

export default function ZoomableTourPhoto({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <button className="zoomable-photo" type="button" onClick={() => setIsOpen(true)} aria-label={`Μεγέθυνση: ${alt}`}><img src={src} alt={alt} /></button>
    {isOpen && <div className="photo-modal" role="dialog" aria-modal="true" aria-label="Μεγέθυνση φωτογραφίας" onClick={() => setIsOpen(false)}><button className="photo-modal-close" type="button" aria-label="Κλείσιμο" onClick={() => setIsOpen(false)}>×</button><img src={src} alt={alt} onClick={(event) => event.stopPropagation()} /></div>}
  </>;
}
