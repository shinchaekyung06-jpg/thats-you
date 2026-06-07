import Link from 'next/link';
import { results } from '@/lib/quizData';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#4A4A4A] selection:bg-dusty-rose/20">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full bg-sage-green/10 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35vw] h-[35vw] rounded-full bg-dusty-rose/10 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-muted-lavender/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col min-h-screen">
        {/* Navigation / Header */}
        <header className="py-10 flex justify-between items-center">
          <span className="font-playfair text-xl tracking-tighter">That&apos;s You</span>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 hidden sm:block">Personal Aesthetic Finder</span>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center py-20">
          <div className="relative mb-8">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] uppercase text-dusty-rose font-medium">
              Discover your essence
            </span>
            <h1 className="text-8xl md:text-[12rem] font-playfair leading-[0.8] tracking-tighter text-[#2D2926]">
              That&apos;s <br /> You
            </h1>
          </div>
          
          <p className="max-w-md mx-auto text-lg font-sans text-gray-400 mb-12 leading-relaxed italic">
            &ldquo;나만의 퍼스널 컬러와 고유한 에스테틱이 만나는 <br className="hidden sm:block" /> 그 찰나의 순간을 기록합니다.&rdquo;
          </p>
          
          <Link href="/quiz">
            <button className="group relative px-12 py-5 bg-[#2D2926] text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 font-sans tracking-widest text-sm uppercase">추구미 찾기</span>
              <div className="absolute inset-0 bg-dusty-rose translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </Link>
        </section>

        {/* Full Archive Section */}
        <section className="py-24 border-t border-warm-beige/30">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl font-playfair mb-6 leading-tight">
                32가지의 서로 다른 <br /> 무드를 탐험해보세요
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                우리는 단순히 네 가지 톤에 당신을 가두지 않습니다. <br />
                8가지의 감각적인 에스테틱과 4가지 퍼스널 컬러의 정교한 조합을 통해, <br />
                오직 당신만을 위한 입체적인 스타일 가이드를 제안합니다.
              </p>
            </div>
          </div>

          {/* Compact 32 Archetype Grid (Landscape-oriented & Clickable) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, i) => (
              <Link 
                key={i} 
                href={`/result?color=${result.color}&aesthetic=${result.aesthetic}`}
                className="group relative overflow-hidden rounded-2xl border border-warm-beige/20 bg-white/40 backdrop-blur-sm transition-all hover:border-dusty-rose/30 hover:shadow-lg h-24"
              >
                <div className="absolute inset-0 p-6 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400 font-medium">ID {String(i + 1).padStart(2, '0')}</span>
                      <div className="flex gap-1">
                        {result.colors.slice(0, 3).map((c, j) => (
                          <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.hex }} />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg text-[#2D2926] leading-tight">
                      {result.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] tracking-[0.3em] uppercase text-dusty-rose opacity-60">
                      {result.color.split(' ')[0]}
                    </span>
                    <span className="text-[9px] tracking-widest text-gray-300 font-sans italic mt-1">
                      {result.city}
                    </span>
                  </div>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: result.colors[0].hex }} />
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gray-300">
              The complete archive of personal identity & aesthetic synthesis.
            </p>
          </div>
        </section>

        <footer className="py-12 border-t border-warm-beige/30 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
            &copy; 2026 THAT&apos;S YOU. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-gray-400">
            <span className="hover:text-dusty-rose cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-dusty-rose cursor-pointer transition-colors">Pinterest</span>
            <span className="hover:text-dusty-rose cursor-pointer transition-colors">Archive</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
