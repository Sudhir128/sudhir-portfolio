import React, { useState, useEffect } from 'react';

/**
 * PixelAnimation
 * Corrected pixel art animation component:
 * - Proper 8-bit proportions with connected limbs and seamless handshake.
 * - Smooth transition between 3 scenes: Client Consultation, AI Development & Coding, and Partnership Handshake.
 * - Border removed as requested (borderless floating canvas with subtle ambient depth).
 * - Bottom wordings and status text completely removed as requested.
 */
export default function PixelAnimation() {
  const [scene, setScene] = useState(0); // 0: Consultation, 1: Coding, 2: Handshake
  const [frame, setFrame] = useState(0); // Micro-tick for idle animation

  // Cycle scenes every 3.6 seconds
  useEffect(() => {
    const sceneTimer = setInterval(() => {
      setScene((prev) => (prev + 1) % 3);
    }, 3600);
    return () => clearInterval(sceneTimer);
  }, []);

  // Micro-animation timer (breathing, steam, blink, typing)
  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 8);
    }, 250);
    return () => clearInterval(frameTimer);
  }, []);

  const C_ACCENT = '#B7FF5A'; // Lime accent
  const C_DARK_ACCENT = '#8CC94A';
  const C_DARK = '#1C1C20';
  const C_MED = '#2A2A2E';
  const C_MUTED = '#4A4A52';
  const C_TEXT = '#F2F0EA';

  // Pixel Character Component (Clean 8-bit proportions)
  const PixelCharacter = ({ x, y, flip = false, pose = 'idle', color = C_ACCENT, coatColor = C_DARK_ACCENT }) => {
    const bob = (frame % 4 < 2) ? 0 : 1;

    return (
      <g
        transform={`translate(${x}, ${y + (pose === 'sit' ? 0 : bob)}) ${flip ? `scale(-1, 1) translate(-10, 0)` : ''}`}
        shapeRendering="crispEdges"
      >
        {/* Hair */}
        <rect x="2" y="0" width="6" height="2" fill={C_MED} />
        <rect x="1" y="2" width="2" height="3" fill={C_MED} />
        
        {/* Face / Head */}
        <rect x="3" y="2" width="5" height="4" fill={color} />
        {/* Eye */}
        <rect x="6" y="3" width="1" height="1" fill={C_DARK} />

        {/* Neck */}
        <rect x="4" y="6" width="2" height="1" fill={color} />

        {/* Torso / Jacket */}
        <rect x="2" y="7" width="6" height="6" fill={coatColor} />
        <rect x="4" y="7" width="2" height="6" fill={C_MED} />

        {/* Pose-specific Arms & Legs */}
        {pose === 'talk' && (
          <>
            <rect x="8" y="7" width="2" height="2" fill={coatColor} />
            <rect x="9" y={(frame % 2 === 0) ? 6 : 5} width="2" height="2" fill={color} />
            <rect x="1" y="8" width="1" height="5" fill={coatColor} />
            <rect x="3" y="13" width="2" height="5" fill={C_MED} />
            <rect x="5" y="13" width="2" height="5" fill={C_MED} />
            <rect x="2" y="17" width="3" height="1" fill="#0B0B0D" />
            <rect x="5" y="17" width="3" height="1" fill="#0B0B0D" />
          </>
        )}

        {pose === 'listen' && (
          <>
            <rect x="1" y="8" width="1" height="5" fill={coatColor} />
            <rect x="8" y="8" width="1" height="5" fill={coatColor} />
            <rect x="3" y="13" width="2" height="5" fill={C_MED} />
            <rect x="5" y="13" width="2" height="5" fill={C_MED} />
            <rect x="2" y="17" width="3" height="1" fill="#0B0B0D" />
            <rect x="5" y="17" width="3" height="1" fill="#0B0B0D" />
          </>
        )}

        {pose === 'sit' && (
          <>
            <rect x="7" y="8" width="4" height="2" fill={coatColor} />
            <rect x="11" y={(frame % 2 === 0) ? 9 : 8} width="2" height="2" fill={color} />
            <rect x="2" y="13" width="6" height="2" fill={C_MED} />
            <rect x="6" y="14" width="2" height="4" fill={C_MED} />
            <rect x="6" y="17" width="3" height="1" fill="#0B0B0D" />
          </>
        )}

        {pose === 'handshake' && (
          <>
            <rect x="1" y="8" width="1" height="5" fill={coatColor} />
            <rect x="7" y="8" width="4" height="2" fill={coatColor} />
            <rect x="11" y="8" width="3" height="2" fill={color} />
            <rect x="3" y="13" width="2" height="5" fill={C_MED} />
            <rect x="5" y="13" width="2" height="5" fill={C_MED} />
            <rect x="2" y="17" width="3" height="1" fill="#0B0B0D" />
            <rect x="5" y="17" width="3" height="1" fill="#0B0B0D" />
          </>
        )}
      </g>
    );
  };

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] flex items-center justify-center overflow-hidden select-none">
      {/* Background Subtle Grid - No Border */}
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* Ambient Glow */}
      <div 
        className="absolute w-48 h-48 rounded-full blur-3xl opacity-15 transition-all duration-1000"
        style={{
          background: scene === 1 ? '#B7FF5A' : scene === 2 ? '#8CC94A' : '#38bdf8',
          transform: `translate(${scene === 0 ? '-20px' : scene === 1 ? '10px' : '0px'}, -10px)`
        }}
      />

      {/* SVG Pixel Canvas with Crisp Edges (60 x 36 viewbox for high detail) */}
      <svg
        viewBox="0 0 60 36"
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="crispEdges"
        className="w-full h-full max-h-[380px] drop-shadow-2xl transition-opacity duration-300"
      >
        {/* Floor Horizon Line */}
        <rect x="0" y="31" width="60" height="1" fill="#232328" />

        {/* SCENE 0: CLIENT CONSULTATION */}
        {scene === 0 && (
          <g className="transition-opacity duration-500 ease-in-out">
            <PixelCharacter x={11} y={13} pose="talk" color="#60a5fa" coatColor="#2563eb" />
            <PixelCharacter x={47} y={13} flip={true} pose="listen" color={C_ACCENT} coatColor={C_DARK_ACCENT} />

            {/* Speech Dialogue Bubble from Client */}
            <g transform={`translate(16, ${4 + (frame % 2 === 0 ? 0 : -1)})`}>
              <rect x="0" y="0" width="13" height="7" fill={C_TEXT} />
              <rect x="2" y="7" width="2" height="2" fill={C_TEXT} />
              <rect x="2" y="3" width="2" height="2" fill={frame % 3 >= 0 ? '#2563eb' : '#93c5fd'} />
              <rect x="5.5" y="3" width="2" height="2" fill={frame % 3 >= 1 ? '#2563eb' : '#93c5fd'} />
              <rect x="9" y="3" width="2" height="2" fill={frame % 3 >= 2 ? '#2563eb' : '#93c5fd'} />
            </g>

            {/* Lightbulb Idea Icon above Developer */}
            <g transform={`translate(37, ${3 + (frame % 2 === 0 ? -1 : 0)})`}>
              <rect x="2" y="0" width="3" height="1" fill={C_ACCENT} />
              <rect x="1" y="1" width="5" height="3" fill={C_ACCENT} />
              <rect x="2" y="4" width="3" height="1" fill="#facc15" />
              <rect x="2" y="5" width="3" height="1" fill="#71717a" />
              <rect x="0" y="2" width="1" height="1" fill={C_ACCENT} />
              <rect x="6" y="2" width="1" height="1" fill={C_ACCENT} />
              <rect x="3" y="-1" width="1" height="1" fill={C_ACCENT} />
            </g>
          </g>
        )}

        {/* SCENE 1: BUILDING & CODING AT WORKSTATION */}
        {scene === 1 && (
          <g className="transition-opacity duration-500 ease-in-out">
            <rect x="24" y="23" width="30" height="2" fill="#323238" />
            <rect x="26" y="25" width="2" height="6" fill="#25252a" />
            <rect x="50" y="25" width="2" height="6" fill="#25252a" />

            <rect x="14" y="22" width="6" height="2" fill="#3f3f46" />
            <rect x="12" y="16" width="2" height="8" fill="#27272a" />
            <rect x="16" y="24" width="2" height="5" fill="#18181b" />
            <rect x="13" y="29" width="8" height="2" fill="#18181b" />

            <PixelCharacter x={11} y={13} pose="sit" color={C_ACCENT} coatColor={C_DARK_ACCENT} />

            <rect x="29" y="13" width="14" height="9" fill="#18181b" />
            <rect x="30" y="14" width="12" height="7" fill="#09090b" />
            <rect x="35" y="22" width="2" height="2" fill="#3f3f46" />
            <rect x="33" y="23" width="6" height="1" fill="#52525b" />

            <rect x="31" y="15" width="4" height="1" fill={C_ACCENT} />
            <rect x="36" y="15" width="3" height="1" fill="#38bdf8" />
            <rect x="31" y="17" width="7" height="1" fill={frame % 2 === 0 ? C_ACCENT : '#8CC94A'} />
            <rect x="31" y="19" width="5" height="1" fill="#a78bfa" />
            <rect x="37" y="19" width="1" height="1" fill={frame % 2 === 0 ? C_ACCENT : 'transparent'} />

            <rect x="45" y="10" width="7" height="12" fill="#18181b" />
            <rect x="46" y="11" width="5" height="10" fill="#09090b" />
            <rect x="48" y="22" width="1" height="2" fill="#3f3f46" />
            <rect x="47" y="13" width="3" height="1" fill="#38bdf8" />
            <rect x="47" y="15" width="2" height="1" fill="#38bdf8" />
            <rect x="47" y="17" width="3" height="1" fill={C_ACCENT} />
            <rect x="47" y="19" width="2" height="1" fill="#f43f5e" />

            <rect x="25" y="22" width="5" height="1" fill="#52525b" />

            <rect x="25" y="20" width="2" height="3" fill="#e4e4e7" />
            <rect x="27" y="21" width="1" height="1" fill="#a1a1aa" />
            <rect x="25.5" y={frame % 2 === 0 ? 18 : 17} width="1" height="1" fill="#71717a" opacity="0.6" />
            <rect x="26" y={frame % 2 === 0 ? 16 : 15} width="1" height="1" fill="#71717a" opacity="0.4" />

            <rect x="32" y={frame % 4 + 7} width="1" height="1" fill={C_ACCENT} opacity="0.5" />
            <rect x="42" y={((frame + 2) % 4) + 6} width="1" height="1" fill="#38bdf8" opacity="0.6" />
          </g>
        )}

        {/* SCENE 2: CONNECTED HANDSHAKE & PARTNERSHIP */}
        {scene === 2 && (
          <g className="transition-opacity duration-500 ease-in-out">
            <PixelCharacter x={16} y={13} pose="handshake" color="#60a5fa" coatColor="#2563eb" />
            <PixelCharacter x={42} y={13} flip={true} pose="handshake" color={C_ACCENT} coatColor={C_DARK_ACCENT} />

            {/* Seamless Connected Interlocking Hands */}
            <g transform="translate(28, 20)">
              <rect x="0" y="0" width="2" height="2" fill="#60a5fa" />
              <rect x="2" y="0" width="2" height="2" fill={C_ACCENT} />
              <rect x="1" y="1" width="2" height="1" fill="#facc15" />
            </g>

            {/* Celebratory Success Sparkle */}
            <g transform={`translate(28, ${7 + (frame % 2 === 0 ? 0 : -1)})`}>
              <rect x="1.5" y="0" width="1" height="4" fill={C_ACCENT} />
              <rect x="0" y="1.5" width="4" height="1" fill={C_ACCENT} />
              <rect x="1" y="1" width="2" height="2" fill="#ffffff" />
            </g>

            <rect x="22" y={9 + (frame % 3)} width="1" height="1" fill="#38bdf8" />
            <rect x="37" y={8 + ((frame + 1) % 3)} width="1" height="1" fill="#facc15" />
            <rect x="19" y={12} width="1" height="1" fill={C_ACCENT} opacity="0.7" />
            <rect x="39" y={13} width="1" height="1" fill="#ec4899" opacity="0.7" />
          </g>
        )}
      </svg>
    </div>
  );
}
