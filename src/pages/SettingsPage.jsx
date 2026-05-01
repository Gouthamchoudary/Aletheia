import React, { useState } from 'react';

const DEFAULT_KEY = 'AIzaSyAKEdLSEZuAGrEiX27pigtvQQbDJ8wNfAY';

export default function SettingsPage({ apiKey, saveApiKey }) {
  const [inputKey, setInputKey] = useState(apiKey || DEFAULT_KEY);
  const [saved, setSaved] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveApiKey(inputKey.trim() || DEFAULT_KEY);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setInputKey(DEFAULT_KEY);
    saveApiKey(DEFAULT_KEY);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <section className="mb-8 animate-fadeup">
        <div className="badge badge-blue mb-3">Configuration</div>
        <h1 className="text-4xl font-head font-black mb-2 gradient-text">Settings</h1>
        <p className="text-muted">Manage your Aletheia AI configuration.</p>
      </section>

      {/* API Key Card */}
      <div className="card card-accent-blue mb-5 animate-fadeup-delay-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="step-icon blue" style={{ width: 48, height: 48 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>key</span>
          </div>
          <div>
            <h2 className="text-xl font-head font-bold">Gemini API Key</h2>
            <p className="text-sm text-muted">Your key is stored locally in your browser only.</p>
          </div>
        </div>

        <div className="fact-ticker mb-4" style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.25)', color: '#6ee7b7' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>
          <span>A default API key is pre-configured. The AI assistant works out of the box!</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold mb-2" style={{ display: 'block', color: 'var(--text)' }}>
              Google AI Studio API Key
            </label>
            <div className="flex gap-2">
              <input
                id="apiKey"
                type={show ? 'text' : 'password'}
                value={inputKey}
                onChange={e => setInputKey(e.target.value)}
                placeholder="AIzaSy..."
                className="input"
                style={{ fontFamily: 'monospace', letterSpacing: show ? 'normal' : '0.1em' }}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShow(!show)}
                style={{ flexShrink: 0 }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  {show ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            <p className="text-xs text-muted mt-2">
              Get a free key at{' '}
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                aistudio.google.com
              </a>
            </p>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn btn-primary">
              {saved
                ? <><span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span> Saved!</>
                : <><span className="material-symbols-outlined" style={{ fontSize: 16 }}>save</span> Save Key</>
              }
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>restart_alt</span>
              Reset to Default
            </button>
          </div>
        </form>
      </div>

      {/* About Card */}
      <div className="card animate-fadeup-delay-2">
        <h3 className="text-xl font-head font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-accent">info</span>
          About Aletheia
        </h3>
        <div className="flex flex-col gap-3">
          {[
            { icon: 'smart_toy', label: 'AI Model', value: 'Google Gemini 2.0 Flash', color: '#93c5fd' },
            { icon: 'gavel', label: 'Non-partisan', value: 'Always objective and neutral', color: '#6ee7b7' },
            { icon: 'lock', label: 'Privacy', value: 'No data stored on any server', color: '#c4b5fd' },
            { icon: 'map', label: 'Maps', value: 'Google Maps Embed API', color: '#fcd34d' },
            { icon: 'code', label: 'Built with', value: 'React + Vite + Google AI', color: '#93c5fd' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3" style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: 10, border: '1px solid var(--border)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: item.color }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div className="text-xs text-muted">{item.label}</div>
                <div className="text-sm font-semibold">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
