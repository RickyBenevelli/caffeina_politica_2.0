// components/SpotifyEpisodes.js
import React from 'react';

const SpotifyEpisodes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">

      {/* Fabrizio Aguzzoli - Coalizione civica */}
      <iframe
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/episode/5tWHqfaZw4yEErdswEMsH2/video?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full aspect-[9/16]"
      ></iframe>

      {/* Marco Massari - Coalizione Centro Sinistra */}
      <iframe
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/episode/3f8JDNnSgMmzEGCQrkjy5g/video?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full aspect-[9/16]"
      ></iframe>

      {/* Giuliana Reggio - Alleanza Civica */}
      <iframe
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/episode/03RlajYvtAoBQY71RWXlNp/video?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full aspect-[9/16]"
      ></iframe>

      {/* Gianni Tasselli - REagire */}
      <iframe
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/episode/44t14bjd4KIsj8ofNjTAO4/video?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full aspect-[9/16]"
      ></iframe>

      {/* Paolo Soragni - Movimento per Reggio Emilia */}
      <iframe
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/episode/25fecgqenhfpvZSworvZTA/video?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full aspect-[9/16]"
      ></iframe>

    </div>
  );
};

export default SpotifyEpisodes;
