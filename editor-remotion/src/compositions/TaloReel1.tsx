import {
  Video,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  AbsoluteFill,
} from 'remotion';

const TRANSITION = 18;

// Timing (frames at 30fps)
const INTRO_DUR = 75;          // 2.5s
const C1_START = INTRO_DUR - TRANSITION;
const C1_DUR = 330;            // 11s
const C2_START = C1_START + C1_DUR - TRANSITION;
const C2_DUR = 270;            // 9s
const C3_START = C2_START + C2_DUR - TRANSITION;
const C3_DUR = 300;            // 10s
export const TOTAL_FRAMES = C3_START + C3_DUR;

// Clip con fade in/out y leve zoom-out
const ZoomFadeClip: React.FC<{ src: string; durationInFrames: number }> = ({
  src,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const scale = interpolate(frame, [0, durationInFrames], [1.08, 1.0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <AbsoluteFill style={{ transform: `scale(${scale})`, overflow: 'hidden' }}>
        <Video
          src={src}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Intro animado
const IntroSlide: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20, durationInFrames - 15, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const titleScale = spring({ frame, fps, config: { damping: 14, stiffness: 80 } });

  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const bgOpacity = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(160deg, #1a0a2e 0%, #4a1a6b 50%, #8b2fc9 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: bgOpacity,
      }}
    >
      <div style={{ textAlign: 'center', padding: '60px' }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: 'white',
            letterSpacing: 8,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            fontFamily: 'Arial Black, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          TALO
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: '#f9d94e',
            lineHeight: 1.2,
            marginTop: 20,
            opacity: subtitleOpacity,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          y el Color
          <br />
          del Enojo
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Marca TALO persistente
const TaloBrand: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [INTRO_DUR, INTRO_DUR + 20], [0, 0.75], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 48,
          opacity,
          background: 'rgba(0,0,0,0.45)',
          borderRadius: 12,
          padding: '8px 18px',
        }}
      >
        <span
          style={{
            color: '#f9d94e',
            fontFamily: 'Arial Black, sans-serif',
            fontWeight: 900,
            fontSize: 28,
            letterSpacing: 3,
          }}
        >
          TALO
        </span>
      </div>
    </AbsoluteFill>
  );
};

// CTA final
const CTASlide: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = spring({ frame, fps, config: { damping: 12, stiffness: 60 } });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(160deg, #1a0a2e 0%, #4a1a6b 100%)',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: 90,
            transform: `scale(${scale})`,
            display: 'inline-block',
          }}
        >
          🎵
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            marginTop: 24,
          }}
        >
          Escucha la canción
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#f9d94e',
            fontFamily: 'Arial, sans-serif',
            marginTop: 12,
            opacity: 0.9,
          }}
        >
          @elmundodetalo
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const TaloReel1: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={INTRO_DUR}>
        <IntroSlide durationInFrames={INTRO_DUR} />
      </Sequence>

      {/* Clip 1 */}
      <Sequence from={C1_START} durationInFrames={C1_DUR}>
        <ZoomFadeClip src={staticFile('assets/reel1/clip1.mp4')} durationInFrames={C1_DUR} />
      </Sequence>

      {/* Clip 2 */}
      <Sequence from={C2_START} durationInFrames={C2_DUR}>
        <ZoomFadeClip src={staticFile('assets/reel2/clip2.mp4')} durationInFrames={C2_DUR} />
      </Sequence>

      {/* Clip 3 */}
      <Sequence from={C3_START} durationInFrames={C3_DUR}>
        <ZoomFadeClip src={staticFile('assets/reel3/clip3.mp4')} durationInFrames={C3_DUR} />
      </Sequence>

      {/* CTA Final */}
      <Sequence from={C3_START + C3_DUR - 60} durationInFrames={60}>
        <CTASlide />
      </Sequence>

      {/* Marca TALO persistente */}
      <TaloBrand />

      {/* Audio */}
      <Audio src={staticFile('assets/audio/talo-enojo.mp3')} />
    </AbsoluteFill>
  );
};
