import React from 'react';
import { Composition } from 'remotion';
import { TaloReel1, TOTAL_FRAMES } from './compositions/TaloReel1';
import { VideoTimecode } from './compositions/VideoTimecode';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TaloReel1"
        component={TaloReel1}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="VideoTimecode"
        component={VideoTimecode}
        durationInFrames={9000}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
