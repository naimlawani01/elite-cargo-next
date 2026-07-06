import React from 'react';

/**
 * Editorial image frame: cover image with hover-zoom, a bottom shade and an
 * optional caption (serif, italic) + mono code — the freight-metadata language.
 */
export default function Frame({
  src,
  alt = '',
  caption,
  code,
  className = '',
  imgClassName = '',
  children,
}) {
  return (
    <div className={`frame grain ${className}`}>
      {src && <img src={src} alt={alt} loading="lazy" className={`frame__img ${imgClassName}`} />}
      {(caption || code) && <div className="frame__shade" />}
      {(caption || code) && (
        <div className="frame__cap">
          {caption && <span className="font-serif italic text-[0.95rem] leading-tight">{caption}</span>}
          {code && <span className="mono-meta text-band-ink/80">{code}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
