import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CtaBanner({ onOpenTrial }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenTrial(email);
  };

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 text-white rounded-2xl p-10 sm:p-14 md:p-16 text-center space-y-8 shadow-sm border border-zinc-800">
          <div className="inline-block bg-sky-950/80 text-sky-400 border border-sky-800 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
            KHỞI TẠO TƯƠNG LAI KINH DOANH
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
              Sẵn sàng bứt phá doanh số với <span className="text-sky-400">Website Havana</span>?
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
              Hơn 60.000+ nhà bán hàng đã lựa chọn Havana để xây dựng kênh bán đa kênh chuyên nghiệp. 
              Đăng ký trải nghiệm miễn phí 14 ngày ngay hôm nay!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-2">
            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 p-2.5 rounded-xl border border-zinc-700">
              <input 
                type="text" 
                placeholder="Nhập email của bạn..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-sm text-white placeholder-zinc-400 bg-transparent outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400"
                required
              />
              <button 
                type="submit" 
                className="bg-sky-500 text-white font-bold px-7 py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                TẠO WEBSITE <ArrowRight size={16} />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-zinc-400 pt-2">
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-sky-400" /> Khai trương trong 5 phút</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-sky-400" /> Miễn phí 100% 14 ngày</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-sky-400" /> Tư vấn 1:1 miễn phí</span>
          </div>
        </div>
      </div>
    </section>
  );
}
