import React, { useState, useEffect } from 'react';

/**
 * PixelAnimation
 * Refined 8-bit retro-modern animation with mathematical symmetry & narrative logic:
 * - Scene 0: Client Consultation (Symmetrical 12px margins, dialogue bubbles & ideation lightbulb)
 * - Scene 1: AI Engineering & Workstation (Physically grounded ergonomics, dual monitors, coffee steam & matrix code)
 * - Scene 2: Celebratory Partnership & Connected Handshake (Strict bilateral symmetry around x=30, synced bobbing clasp & confetti)
 * - Borderless floating aesthetic with dynamic ambient hue glow.
 */
export default function PixelAnimation() {
  const [scene, setScene] = useState(0); // 0: Consultation, 1: Coding, 2: Handshake
  const [frame, setFrame] = useState(0); // Micro-tick for idle animation

  // Cycle scenes every 3.6 seconds (Consultation -> Build -> Launch & Handshake)
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

  const C_ACCENT = '#B7FF5A'; // Signature neon lime
  const C_DARK_ACCENT = '#8CC94A';
  const C_DARK = '#1C1C20';
  const C_MED = '#2A2A2E';
  const C_TEXT = '#F2F0EA';

  // Pixel Character Component (Clean 8-bit proportions with precise limb physics)
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

  const bob = (frame % 4 < 2) ? 0 : 1;

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] flex items-center justify-center overflow-hidden select-none">
      {/* Background Subtle Grid - No Border */}
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* Dynamic Ambient Glow */}
      <div 
        className="absolute w-48 h-48 rounded-full blur-3xl opacity-15 transition-all duration-1000"
        style={{
          background: scene === 1 ? '#B7FF5A' : scene === 2 ? '#8CC94A' : '#38bdf8',
          transform: `translate(${scene === 0 ? '-15px' : scene === 1 ? '10px' : '0px'}, -10px)`
        }}
      />

      {/* SVG Pixel Canvas with Crisp Edges (60 x 36 viewbox) */}
      <svg
        viewBox="0 0 60 36"
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="crispEdges"
        className="w-full h-full max-h-[380px] drop-shadow-2xl transition-opacity duration-300"
      >
        {/* Ground / Floor Horizon Line at y=31 */}
        <rect x="0" y="31" width="60" height="1" fill="#232328" />

        {/* SCENE 0: CLIENT CONSULTATION (Bilateral Symmetry: centered at x=30, 16px margins, 10px gap) */}
        {scene === 0 && (
          <g className="transition-opacity duration-500 ease-in-out">
            {/* Client on Left: body center at x=20 (10px from center 30, left margin 16px) */}
            <PixelCharacter x={15} y={13} pose="talk" color="#60a5fa" coatColor="#2563eb" />
            
            {/* Developer on Right: body center at x=40 (10px from center 30, right margin 16px) */}
            <PixelCharacter x={35} y={13} flip={true} pose="listen" color={C_ACCENT} coatColor={C_DARK_ACCENT} />

            {/* Speech Dialogue Bubble from Client (pointer aligned with client mouth at x=21) */}
            <g transform={`translate(20, ${4 + bob + (frame % 2 === 0 ? 0 : -1)})`}>
              <rect x="0" y="0" width="13" height="7" fill={C_TEXT} />
              <rect x="1" y="7" width="2" height="2" fill={C_TEXT} />
              <rect x="2.5" y="2.5" width="2" height="2" fill={frame % 3 >= 0 ? '#2563eb' : '#93c5fd'} />
              <rect x="5.5" y="2.5" width="2" height="2" fill={frame % 3 >= 1 ? '#2563eb' : '#93c5fd'} />
              <rect x="8.5" y="2.5" width="2" height="2" fill={frame % 3 >= 2 ? '#2563eb' : '#93c5fd'} />
            </g>

            {/* Lightbulb Idea Icon Centered Directly Above Developer Head (center x=40) */}
            <g transform={`translate(37, ${2 + bob + (frame % 2 === 0 ? -1 : 0)})`}>
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
            {/* Workstation Desk: x=23 to x=53, perfectly balanced with seated developer */}
            <rect x="23" y="23" width="30" height="2" fill="#323238" />
            <rect x="25" y="25" width="2" height="6" fill="#25252a" />
            <rect x="50" y="25" width="2" height="6" fill="#25252a" />

            {/* Ergonomic Office Chair */}
            <rect x="13" y="22" width="6" height="2" fill="#3f3f46" />
            <rect x="11" y="16" width="2" height="8" fill="#27272a" />
            <rect x="15" y="24" width="2" height="5" fill="#18181b" />
            <rect x="12" y="29" width="8" height="2" fill="#18181b" />

            {/* Developer seated and actively typing */}
            <PixelCharacter x={10} y={13} pose="sit" color={C_ACCENT} coatColor={C_DARK_ACCENT} />

            {/* Keyboard */}
            <rect x="23" y="22" width="5" height="1" fill="#52525b" />

            {/* Primary Monitor (Landscape AI Terminal) */}
            <rect x="29" y="13" width="14" height="9" fill="#18181b" />
            <rect x="30" y="14" width="12" height="7" fill="#09090b" />
            <rect x="35" y="22" width="2" height="1" fill="#3f3f46" />
            <rect x="33" y="23" width="6" height="1" fill="#52525b" />

            {/* Streaming Code & Blinking Matrix Cursor */}
            <rect x="31" y="15" width="4" height="1" fill={C_ACCENT} />
            <rect x="36" y="15" width="3" height="1" fill="#38bdf8" />
            <rect x="31" y="17" width="7" height="1" fill={frame % 2 === 0 ? C_ACCENT : '#8CC94A'} />
            <rect x="31" y="19" width="5" height="1" fill="#a78bfa" />
            <rect x="37" y="19" width="1" height="1" fill={frame % 2 === 0 ? C_ACCENT : 'transparent'} />

            {/* Secondary Monitor (Vertical Analytics / Neural Display) */}
            <rect x="45" y="10" width="7" height="12" fill="#18181b" />
            <rect x="46" y="11" width="5" height="10" fill="#09090b" />
            <rect x="48" y="22" width="1" height="1" fill="#3f3f46" />
            <rect x="47" y="13" width="3" height="1" fill="#38bdf8" />
            <rect x="47" y="15" width="2" height="1" fill="#38bdf8" />
            <rect x="47" y="17" width="3" height="1" fill={C_ACCENT} />
            <rect x="47" y="19" width="2" height="1" fill="#f43f5e" />

            {/* Steaming Coffee Mug */}
            <rect x="21" y="20" width="2" height="3" fill="#e4e4e7" />
            <rect x="20" y="21" width="1" height="1" fill="#a1a1aa" />
            <rect x="21.5" y={frame % 2 === 0 ? 18 : 17} width="1" height="1" fill="#71717a" opacity="0.6" />
            <rect x="22" y={frame % 2 === 0 ? 16 : 15} width="1" height="1" fill="#71717a" opacity="0.4" />

            {/* Logic & Syntax Particles */}
            <rect x="32" y={(frame % 4) + 7} width="1" height="1" fill={C_ACCENT} opacity="0.5" />
            <rect x="42" y={((frame + 2) % 4) + 6} width="1" height="1" fill="#38bdf8" opacity="0.6" />
          </g>
        )}

        {/* SCENE 2: CONNECTED HANDSHAKE & PARTNERSHIP (Strict Bilateral Symmetry around x=30) */}
        {scene === 2 && (
          <g className="transition-opacity duration-500 ease-in-out">
            {/* Left Character: Margin to left edge = 16, Hand extends precisely to x=30 */}
            <PixelCharacter x={16} y={13} pose="handshake" color="#60a5fa" coatColor="#2563eb" />
            
            {/* Right Character: Margin to right edge = 16, Hand extends precisely to x=30 */}
            <PixelCharacter x={34} y={13} flip={true} pose="handshake" color={C_ACCENT} coatColor={C_DARK_ACCENT} />

            {/* Seamless Connected Interlocking Hands Clasp (Dynamically synced with bobbing) */}
            <g transform={`translate(29, ${21 + bob})`}>
              <rect x="0" y="0" width="2" height="2" fill="#60a5fa" />
              <rect x="1" y="0" width="2" height="2" fill={C_ACCENT} />
              <rect x="1" y="1" width="1" height="1" fill="#facc15" />
            </g>

            {/* Celebratory Partnership Sparkle (Centered at x=29.5..30) */}
            <g transform={`translate(28.5, ${6 + bob})`}>
              <rect x="1.5" y="0" width="1" height="5" fill={C_ACCENT} />
              <rect x="-0.5" y="2" width="5" height="1" fill={C_ACCENT} />
              <rect x="1" y="1.5" width="2" height="2" fill="#ffffff" />
            </g>

            {/* Symmetrical Bilateral Confetti Particles */}
            {/* Inner Pair: Symmetrical at 30 ± 9 (x=21 and x=39) */}
            <rect x="21" y={9 + (frame % 3)} width="1" height="1" fill="#38bdf8" />
            <rect x="39" y={9 + (frame % 3)} width="1" height="1" fill="#facc15" />

            {/* Outer Pair: Symmetrical at 30 ± 15 (x=15 and x=45) */}
            <rect x="15" y={13 + ((frame + 1) % 3)} width="1" height="1" fill={C_ACCENT} opacity="0.8" />
            <rect x="45" y={13 + ((frame + 1) % 3)} width="1" height="1" fill="#ec4899" opacity="0.8" />
          </g>
        )}
      </svg>
    </div>
  );
}
