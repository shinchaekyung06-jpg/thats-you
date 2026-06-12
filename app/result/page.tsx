'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { results } from '@/lib/quizData';

function ResultContent() {
  const searchParams = useSearchParams();
  
  const color = searchParams.get('color');
  const aesthetic = searchParams.get('aesthetic');
  
  const result = results.find(r => r.color === color && r.aesthetic === aesthetic) || results[0];

  return (
    <main className="min-h-screen bg-[#FAF8F5] relative overflow-hidden flex flex-col items-center py-20 px-6 selection:bg-dusty-rose/20">
      {/* Editorial Decorative Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-20 transition-all duration-1000"
          style={{ backgroundColor: result.colors[1].hex }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-10 transition-all duration-1000"
          style={{ backgroundColor: result.colors[2].hex }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Result Header */}
        <div className="text-center mb-24">
          <span className="text-[10px] tracking-[0.6em] uppercase text-gray-400 font-medium mb-6 block">The Analysis Result</span>
          <h1 className="text-7xl md:text-[10rem] font-playfair text-[#2D2926] leading-[0.85] tracking-tighter mb-10 break-keep">
            {result.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {result.keywords.map((kw, i) => (
              <span key={i} className="text-xs font-sans tracking-[0.2em] text-dusty-rose uppercase">
                &bull; {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Main Visual/Palette (4 cols) */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            <div className="bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-8">Essential Palette</h3>
              <div className="flex flex-col gap-6">
                {result.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full shadow-sm transition-transform group-hover:scale-110 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-sans tracking-[0.2em] text-[#2D2926] uppercase font-bold truncate">
                        {c.name}
                      </span>
                      <span className="text-[9px] font-sans tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {c.hex.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Soul Fragrance</span>
              <p className="text-lg font-sans leading-relaxed text-[#2D2926] italic break-keep">
                &ldquo;{result.perfumeGuide}&rdquo;
              </p>
            </div>

            <div className="bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Best Weather</span>
              <p className="text-lg font-sans text-[#2D2926] leading-relaxed break-keep">{result.weather}</p>
            </div>

            <div className="bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Interior Style</span>
              <p className="text-lg font-sans text-[#2D2926] leading-relaxed break-keep">{result.interior}</p>
            </div>
          </div>

          {/* Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Atmosphere</span>
                <p className="text-2xl font-playfair text-[#2D2926] mb-2">{result.timeOfDay}</p>
                <p className="text-sm font-sans text-gray-400 italic break-keep">{result.spaceVibe}</p>
              </div>
              <div className="bg-white/40 p-8 md:p-10 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Soul City</span>
                <p className="text-2xl font-playfair text-[#2D2926]">{result.city}</p>
              </div>
            </div>

            <div className="bg-[#2D2926] text-[#FAF8F5] p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-[4rem] font-playfair opacity-10 group-hover:opacity-20 transition-opacity italic">&ldquo;</div>
              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-8 block">Styling Direction</span>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xs tracking-widest uppercase mb-4 text-dusty-rose font-medium">Fashion</h4>
                    <p className="text-xl font-sans leading-relaxed opacity-90 break-keep">{result.fashionGuide}</p>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <h4 className="text-xs tracking-widest uppercase mb-4 text-dusty-rose font-medium">Makeup</h4>
                    <p className="text-xl font-sans leading-relaxed opacity-90 break-keep">{result.makeupGuide}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Life & Vibes Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/40 p-8 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Music & Mood</span>
                <p className="text-lg font-sans text-[#2D2926] leading-relaxed break-keep">{result.music}</p>
              </div>
              <div className="bg-white/40 p-8 rounded-[2.5rem] border border-warm-beige/30 backdrop-blur-md">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">Media Genre</span>
                <p className="text-lg font-sans text-[#2D2926] leading-relaxed break-keep">{result.mediaGenre}</p>
              </div>
            </div>

            <div className="bg-white/40 p-10 rounded-[3rem] border border-warm-beige/30 backdrop-blur-md">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-6 block">SNS Feed Style</span>
              <p className="text-lg font-sans leading-relaxed text-[#2D2926] break-keep">{result.feedStyle}</p>
            </div>

            <div className="bg-[#2D2926] text-[#FAF8F5] p-10 md:p-12 rounded-[3rem] shadow-xl">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-6 block">Photography Tip</span>
              <p className="text-xl font-sans leading-relaxed break-keep">{result.photoTip}</p>
            </div>

            {/* Final CTA */}
            <div className="text-center pt-12">
              <Link href="/">
                <button className="group relative px-10 py-4 border border-[#2D2926]/10 rounded-full overflow-hidden transition-all hover:border-dusty-rose">
                  <span className="relative z-10 text-xs tracking-[0.4em] uppercase text-[#2D2926] group-hover:text-white transition-colors">다시 하기</span>
                  <div className="absolute inset-0 bg-[#2D2926] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-[10px] tracking-[0.5em] uppercase text-gray-300">
        That&apos;s You Archive 2026
      </footer>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-playfair italic animate-pulse">Curating your essence...</div>}>
      <ResultContent />
    </Suspense>
  );
}
