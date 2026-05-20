import { Video, AbsoluteFill, useCurrentFrame, useVideoConfig, staticFile } from 'remotion';

export const VideoTimecode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const totalSeconds = frame / fps;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const centiseconds = Math.floor((totalSeconds % 1) * 100);

  const timecode = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <Video
        src={staticFile('assets/videoenojo/0518.mp4')}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />

      {/* Timecode badge */}
      <AbsoluteFill style={{ pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.75)',
            color: '#00ff88',
            fontFamily: 'monospace',
            fontSize: 52,
            fontWeight: 'bold',
            padding: '12px 32px',
            borderRadius: 12,
            letterSpacing: 4,
            border: '2px solid #00ff88',
          }}
        >
          {timecode}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
