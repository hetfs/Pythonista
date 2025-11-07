import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function ProgrammingChecklist() {
  const storageKey = 'programming-checklist';
  const { width, height } = useWindowSize();
  const audioRef = useRef(null);

  const items = [
    'Computers are literal; instructions must be precise',
    'Programs use sequences, conditionals, loops, and repetitions',
    'Understand syntax, logic, algorithms, and debugging',
    'Programming languages translate human logic to machine code',
    'Break problems into smaller steps',
    'Testing and debugging are essential',
    'Build websites, apps, games, AI, and embedded software',
    'Empowers you to automate, create, and solve problems'
  ];

  const [checked, setChecked] = useState(
    () => JSON.parse(localStorage.getItem(storageKey)) || Array(items.length).fill(false)
  );

  const [celebrated, setCelebrated] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked]);

  const toggleItem = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const resetChecklist = () => {
    const empty = Array(items.length).fill(false);
    setChecked(empty);
    setCelebrated(false);
    localStorage.setItem(storageKey, JSON.stringify(empty));
  };

  const progressPercent = Math.round((checked.filter(Boolean).length / items.length) * 100);

  const getProgressColor = () => {
    if (progressPercent < 50) return '#e74c3c';
    if (progressPercent < 80) return '#f1c40f';
    return '#2ecc71';
  };

  const allComplete = progressPercent === 100;

  useEffect(() => {
    if (allComplete && !celebrated && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.warn('Audio playback blocked. Interact with the page first.');
      });
      setCelebrated(true);
    }
  }, [allComplete, celebrated]);

  return (
    <div style={{ position: 'relative', padding: '1rem', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(14px, 2vw, 18px)', lineHeight: 1.5 }}>
      {allComplete && <Confetti width={width} height={height} recycle={false} />}
      {allComplete && (
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#ffffffcc', padding: '1rem 1.5rem', borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)', textAlign: 'center', fontSize: 'clamp(16px,3vw,22px)',
          fontWeight: 'bold', color: '#2ecc71', zIndex: 10
        }}>
          🎉 Congratulations! You completed the checklist! 🎉
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <strong>Progress:</strong> {progressPercent}%
        <div style={{ height: '12px', width: '100%', backgroundColor: '#e0e0e0', borderRadius: '6px', marginTop: '0.3rem', overflow: 'hidden' }}>
          <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: getProgressColor(), borderRadius: '6px', transition: 'width 0.3s, background-color 0.3s' }} />
        </div>
      </div>

      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ margin: '0.5rem 0', cursor: 'pointer', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <input type="checkbox" checked={checked[idx]} onChange={() => toggleItem(idx)} style={{ marginRight: '0.5rem', flexShrink: 0 }} />
            <span style={{ textDecoration: checked[idx] ? 'line-through' : 'none', wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>

      <button onClick={resetChecklist} style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', fontSize: '1rem', backgroundColor: '#007acc', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
        Reset Checklist
      </button>

      <audio ref={audioRef} src="/sounds/tada.mp3" preload="auto" />
    </div>
  );
}
