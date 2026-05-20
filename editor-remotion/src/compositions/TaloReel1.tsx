import { Video, Audio, Sequence, staticFile } from 'remotion';
import './TaloReel1.css';

export const TaloReel1: React.FC = () => {
  return (
    <div className="reel-container">
      {/* Intro text */}
      <Sequence from={0} durationInFrames={90}>
        <div className="intro-text">
          <h1>Talo y el Color del Enojo</h1>
        </div>
      </Sequence>

      {/* Clip 1: Frustrated (3-13 seconds = 90-390 frames at 30fps) */}
      <Sequence from={90} durationInFrames={300}>
        <div className="video-container">
          <Video src={staticFile('assets/reel1/clip1.mp4')} />
        </div>
      </Sequence>

      {/* Clip 2: Breathing (13-21 seconds = 390-630 frames) */}
      <Sequence from={390} durationInFrames={240}>
        <div className="video-container">
          <Video src={staticFile('assets/reel2/clip2.mp4')} />
        </div>
      </Sequence>

      {/* Clip 3: Resolution (21-30 seconds = 630-900 frames) */}
      <Sequence from={630} durationInFrames={270}>
        <div className="video-container">
          <Video src={staticFile('assets/reel3/clip3.mp4')} />
        </div>
      </Sequence>

      {/* Audio track */}
      <Audio src={staticFile('assets/audio/talo-enojo.mp3')} />
    </div>
  );
};
