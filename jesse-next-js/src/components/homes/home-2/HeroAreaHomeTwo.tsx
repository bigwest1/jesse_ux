
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import hero_img_1 from "@/assets/img/hero/2/hero-stroke-text.png";
import hero_img_2 from "@/assets/img/hero/hero-2-img.png";
import HeroShapeHomeTwo from '@/svg/home-2/HeroShapeHomeTwo';
import ThoughtBubble from '@/components/ui/ThoughtBubble';

const HeroAreaHomeTwo = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>

      <div className="section">
        <div className="tp-mouse-move-section tp-hero-2__bg black-bg-3 tp-hero-2__space-1 d-flex align-items-end justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-2 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-3 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-4 tp-mouse-move-element"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-content-2">
                  <h3 className="tp-hero-title-2 text-center tp-char-animation">
                    User Interface
                    <br />
                    <span className="stroke-text d-flex align-items-end justify-content-center">
                      <Image src={hero_img_1} alt="image-here" />
                      <span className="location-text d-flex align-items-end text-start d-none d-lg-flex">
                        <span className="d-none d-md-block">based <i className="fa-sharp fa-solid fa-heart"></i>
                          <br /> in Nevada, USA</span>
                      </span>
                    </span>
                  </h3>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__thumb-wrap p-relative text-center" style={{ overflow: 'visible' }}>
                  <div className="tp-hero-2__thumb z-index-5">
                    <Image className="tp-mouse-move-element" src={hero_img_2} style={{height: 'auto'}} alt="image-here" />
                  </div>
                  {/* Thought bubbles above head */}
                  {messages.map((msg, idx) => {
                    // Dynamic bubble width
                    const width = Math.min(400, Math.max(160, msg.length * 12));
                    // right, center, left slots
                    const slots = [
                      { left: '30%', top: 'calc(8% - 100px)', transform: 'translateX(-100%)' },
                      { left: '50%', top: 'calc(4% - 100px)', transform: 'translateX(-50%)' },
                      { left: '70%', top: 'calc(0% - 100px)', transform: 'translateX(0)' },
                    ];
                    // Position messages so newest always on the right
                    const base = Math.max(0, slots.length - messages.length);
                    const pos = slots[base + idx] || slots[2];
                    const orient = ['left', 'center', 'right'][base + idx] || 'right';
                    return (
                      <div key={idx + msg} style={{ position: 'absolute', transition: 'all 0.5s ease', ...pos }}>
                        <ThoughtBubble
                          text={msg}
                          width={width}
                          orientation={orient as any}
                        />
                      </div>
                    );
                  })}
                  <div className="tp-hero-2__thumb-shape d-none d-md-block">
                    <span>
                      <HeroShapeHomeTwo />
                    </span>
                  </div>
                  {/* AI Chat input overlay: partly overlapping image on bottom-right */}
                  {/* Chat input box */}
                  <div
                    className="ai-chat-input d-none d-md-flex"
                    style={{
                      position: 'absolute',
                      right: '-40px',
                      bottom: '10%',
                      zIndex: 10,
                      background: '#fff',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      alignItems: 'center',
                    }}
                  >
                    <form
                      onSubmit={async e => {
                        e.preventDefault();
                        const prompt = inputRef.current?.value.trim();
                        if (!prompt) return;
                        inputRef.current!.value = '';
                        try {
                          const res = await fetch('/api/chat', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ prompt }),
                          });
                          const json = await res.json();
                          if (json.error) throw new Error(json.error);
                          const reply = json.text?.trim() ?? '';
                          setMessages(prev => (prev.length === 3 ? [...prev.slice(1), reply] : [...prev, reply]));
                        } catch (err) {
                          console.error('Chat error:', err);
                        }
                      }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Ask me something..."
                        style={{
                          border: '1px solid #ddd',
                          borderRadius: '0.25rem',
                          padding: '0.5rem 0.75rem',
                          minWidth: '200px',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          background: '#0070f3',
                          border: 'none',
                          color: '#fff',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '0.25rem',
                          cursor: 'pointer',
                        }}
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeTwo;
