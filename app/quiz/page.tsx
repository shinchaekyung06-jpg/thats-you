'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { colorQuestions, aestheticQuestions, PersonalColor, AestheticType } from '@/lib/quizData';

const allQuestions = [...colorQuestions, ...aestheticQuestions];

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(PersonalColor | AestheticType | PersonalColor[])[]>([]);
  const [isFading, setIsFading] = useState(false);

  const currentQuestion = allQuestions[currentIndex];

  const handleSelect = (value: PersonalColor | AestheticType | PersonalColor[]) => {
    if (isFading) return;

    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentIndex < allQuestions.length - 1) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsFading(false);
      }, 400);
    } else {
      const flattenedAnswers = newAnswers.flat();
      const result = calculateResult(flattenedAnswers);
      router.push(`/result?color=${result.color}&aesthetic=${result.aesthetic}`);
    }
  };

  const handleBack = () => {
    if (isFading) return;

    if (currentIndex > 0) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setAnswers(answers.slice(0, -1));
        setIsFading(false);
      }, 400);
    } else {
      router.push('/');
    }
  };

  const calculateResult = (finalAnswers: (PersonalColor | AestheticType)[]) => {
    const colorCounts: Record<string, number> = {};
    const aestheticCounts: Record<string, number> = {};

    // Note: The total number of answers might vary slightly due to the accessory question logic
    // We filter by type to be safe.
    finalAnswers.forEach((ans) => {
      if (['Spring Warm', 'Summer Cool', 'Autumn Warm', 'Winter Cool'].includes(ans)) {
        colorCounts[ans] = (colorCounts[ans] || 0) + 1;
      } else {
        aestheticCounts[ans] = (aestheticCounts[ans] || 0) + 1;
      }
    });

    const dominantColor = Object.entries(colorCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0] as PersonalColor;
    const dominantAesthetic = Object.entries(aestheticCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0] as AestheticType;

    return { color: dominantColor, aesthetic: dominantAesthetic };
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-start md:justify-center px-6 py-20 relative overflow-x-hidden overflow-y-auto">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40 blur-[80px]">
        <div 
          className="absolute transition-all duration-1000 ease-in-out"
          style={{
            top: `${20 + currentIndex * 2}%`,
            left: `${10 + currentIndex}%`,
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            backgroundColor: currentIndex < 10 ? '#D4A5A5' : '#9CB380',
          }}
        />
      </div>

      <div className="w-full max-w-xl relative z-10">
        {/* Navigation / Back Button */}
        <div className="flex items-center gap-4 mb-8 h-6">
          <button 
            onClick={handleBack}
            className="text-[11px] tracking-[0.4em] uppercase text-gray-400 hover:text-dusty-rose transition-colors flex items-center gap-2 group font-medium"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
          </button>
        </div>

        {/* Progress Display */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-medium">
            Step {currentIndex + 1} of {allQuestions.length}
          </span>
          <div className="mt-4 flex justify-center gap-1">
            {allQuestions.map((_, i) => (
              <div 
                key={i}
                className={`h-[2px] w-4 transition-all duration-500 ${i <= currentIndex ? 'bg-[#2D2926]' : 'bg-warm-beige/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Question Area */}
        <div className={`transition-all duration-500 ease-out ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="mb-12">
            <span className="text-xs font-playfair italic text-dusty-rose mb-2 block">
              {currentIndex < 10 ? 'Personal Color Analysis' : 'Aesthetic Exploration'}
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair text-[#2D2926] leading-tight">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option.value)}
                className="group relative w-full p-6 text-left rounded-2xl border border-warm-beige/30 bg-white/50 hover:bg-white hover:border-dusty-rose/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 text-sm font-sans text-gray-600 group-hover:text-[#2D2926] transition-colors">
                  {option.text}
                </span>
                <div className="absolute top-1/2 right-6 -translate-y-1/2 w-2 h-2 rounded-full bg-dusty-rose opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] uppercase text-gray-300 pointer-events-none">
        That&apos;s You &copy; 2026
      </div>
    </main>
  );
}
