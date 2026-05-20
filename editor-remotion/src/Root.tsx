import { Composition } from 'remotion';
import { TaloReel1 } from './compositions/TaloReel1';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TaloReel1"
        component={TaloReel1}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
