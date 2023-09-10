import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Track } from '../types';

type PlayerContectType = {
  track?: Track;
  setTrack: (track: Track) => void;
};

const PlayerContext = createContext<PlayerContectType>({
  setTrack: () => {},
});

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [track, setTrack] = useState<Track>();

  return (
    <PlayerContext.Provider value={{ track, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const userPlayerContext = () => useContext(PlayerContext);
