// components/SpotifyEpisodes.js
import React from 'react';

const SpotifyEpisodes = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-10">

      <iframe
        style={ { borderRadius: '12px' } }
        src="https://open.spotify.com/embed/episode/5tWHqfaZw4yEErdswEMsH2/video?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full md:w-1/3 aspect-[9/16]"
      ></iframe>

    </div>
  );
};

export default SpotifyEpisodes;
