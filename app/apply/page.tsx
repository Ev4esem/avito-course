'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ApplicationForm from '@/components/ApplicationForm';
import Nav from '@/components/Nav';

function ApplyContent() {
  const searchParams = useSearchParams();
  const tariff = searchParams.get('tariff') || undefined;

  useEffect(() => {
    // Запускаем reveal-анимацию, как на главной странице
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <ApplicationForm initialTariff={tariff} />;
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Nav />
      <div className="pt-20">
        <Suspense fallback={<div className="py-24 text-center text-white/40">Загрузка...</div>}>
          <ApplyContent />
        </Suspense>
      </div>
    </main>
  );
}
