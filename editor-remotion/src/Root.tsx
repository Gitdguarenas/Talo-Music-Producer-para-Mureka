import React from 'react';
import { Composition } from 'remotion';
import { TaloReel1, TOTAL_FRAMES } from './compositions/TaloReel1';

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
    </>
  );
};
