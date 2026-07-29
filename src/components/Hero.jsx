import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Hero({ onOpenTrial }) {
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenTrial(emailInput);
  };

  const brandLogos = [
    'Vinamilk', 'Juno', 'Dell Vietnam', 'Biti\'s', 'The Coffee House', 'Aeon Mall', 'Samsung'
  ];

  return (
    <section id="hero" className="py-20 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content with entrance animation */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-transform duration-200 hover:scale-105">
              Nền Tảng Thiết Kế Website Bán Hàng #1 Havana
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight tracking-tight">
                Thiết kế website dễ dàng, <br className="hidden sm:inline" />
                kinh doanh vượt trội cùng <span className="text-sky-600">Havana</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-500 font-normal leading-relaxed max-w-2xl">
                Tăng trưởng doanh thu đột phá với nền tảng bán hàng đa kênh chuyên nghiệp. 
                Khởi tạo website bán hàng & doanh nghiệp chuẩn SEO trong 5 phút. 
                <strong className="text-zinc-900 font-bold"> Miễn phí trải nghiệm 14 ngày!</strong>
              </p>
            </div>

            {/* Trial Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3 bg-white p-2.5 rounded-xl border border-zinc-200 shadow-sm transition-all duration-200 focus-within:border-zinc-400 focus-within:shadow-md">
                <input 
                  type="text" 
                  placeholder="Nhập email hoặc số điện thoại..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 text-sm text-zinc-900 outline-none rounded-lg bg-transparent focus-visible:ring-2 focus-visible:ring-sky-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-sky-600 text-white font-bold px-7 py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  TRẢI NGHIỆM MIỄN PHÍ <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-zinc-500 pt-1">
                <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-sky-600" /> Khai trương sau 5 phút</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-sky-600" /> Không cần thẻ tín dụng</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-sky-600" /> 400+ Giao diện miễn phí</span>
              </div>
            </form>

            {/* Social Proof */}
            <div className="pt-8 border-t border-zinc-200 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="transition-transform duration-200 hover:scale-125" />
                  ))}
                </div>
                <span className="font-bold text-sm text-zinc-900">4.9/5</span>
                <span className="text-xs text-zinc-500">(Từ 12,500+ đánh giá)</span>
              </div>

              <p className="text-xs text-zinc-500">
                Nền tảng được hơn <strong className="text-zinc-900 font-bold">60.000+ nhà kinh doanh và thương hiệu</strong> tin dùng:
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {brandLogos.map((brand, idx) => (
                  <span key={idx} className="bg-white border border-zinc-200 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:border-zinc-400 hover:-translate-y-0.5">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Realistic iPad Showcase Mockup with floating animation */}
          <div className="lg:col-span-5 space-y-4 animate-fade-in-up">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden p-3 transition-all duration-500 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 animate-float">
              <img 
                src="/assets/hero_ipad_mockup_1784865950168.png" 
                alt="Havana Web iPad Store Mockup" 
                className="w-full h-auto rounded-xl object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Highlights Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-center gap-3 transition-all duration-200 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5">
                <ShieldCheck size={22} className="text-sky-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-zinc-900">SEO Google #1</div>
                  <div className="text-[11px] text-zinc-500 font-normal mt-0.5">Core Web Vitals 99%</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-center gap-3 transition-all duration-200 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5">
                <BarChart3 size={22} className="text-zinc-900 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-zinc-900">Tăng Trưởng +250%</div>
                  <div className="text-[11px] text-zinc-500 font-normal mt-0.5">Đồng bộ Shopee, TikTok</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
