import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topBannerVisible, setTopBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Banner */}
      {topBannerVisible && (
        <div className="bg-zinc-900 text-zinc-200 text-xs py-2.5 px-4 border-b border-zinc-800 relative z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 mx-auto">
              <span className="bg-sky-600 text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide">ƯU ĐÃI</span>
              <span className="font-medium text-zinc-300">Giảm 50% Khi Khởi Tạo Website <strong className="text-white font-bold">Havana</strong> Ngay Hôm Nay + Tặng Tên Miền .VN</span>
              <button 
                onClick={onOpenTrial}
                className="ml-2 bg-white text-zinc-900 px-3 py-1 rounded-md text-[11px] font-bold hover:bg-zinc-100 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 inline-flex items-center gap-1"
              >
                Nhận Ưu Đãi <ArrowRight size={12} />
              </button>
            </div>
            <button 
              onClick={() => setTopBannerVisible(false)}
              className="text-zinc-400 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 p-1 rounded"
              aria-label="Đóng thông báo"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className={`sticky top-0 left-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-zinc-200 transition-all duration-200 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1">
            <img 
              src="/assets/havana_logo_1784863971004.png" 
              alt="Havana Logo" 
              className="w-9 h-9 object-contain rounded-md"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-zinc-900 leading-none tracking-tight">Havana</span>
              <span className="text-[10px] font-bold text-sky-600 tracking-widest uppercase mt-0.5">HavanaWeb</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <a href="#features" className="text-sm font-semibold text-zinc-800 hover:text-zinc-900 flex items-center gap-1.5 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-2">
                Giải Pháp <ChevronDown size={14} />
              </a>
              <div className="absolute top-full left-0 w-64 bg-white border border-zinc-200 rounded-xl shadow-sm p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-1">
                <a href="#hero" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-50 transition-all duration-200 hover:border-zinc-300">
                  <div>
                    <div className="text-xs font-bold text-zinc-900">Website Bán Hàng</div>
                    <div className="text-[11px] text-zinc-500 font-normal">Tối ưu chuyển đổi đa kênh</div>
                  </div>
                </a>
                <a href="#seo" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-50 transition-all duration-200 hover:border-zinc-300">
                  <div>
                    <div className="text-xs font-bold text-zinc-900">Website Doanh Nghiệp</div>
                    <div className="text-[11px] text-zinc-500 font-normal">Chuẩn SEO & Tốc độ cao</div>
                  </div>
                </a>
              </div>
            </div>

            <a href="#themes" className="text-sm font-semibold text-zinc-800 hover:text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-2 py-1">Kho Giao Diện</a>
            <a href="#omnichannel" className="text-sm font-semibold text-zinc-800 hover:text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-2 py-1">Kênh Bán Havana</a>
            <a href="#seo" className="text-sm font-semibold text-zinc-800 hover:text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-2 py-1">Chuẩn SEO Google</a>
            <a href="#faqs" className="text-sm font-semibold text-zinc-800 hover:text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md px-2 py-1">Hỏi Đáp (FAQs)</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onOpenTrial()}
              className="hidden sm:inline-block text-sm font-semibold text-zinc-800 hover:text-zinc-900 px-3.5 py-2.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Đăng Nhập
            </button>
            <button 
              onClick={() => onOpenTrial()}
              className="bg-sky-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Dùng Thử Miễn Phí
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-800 p-2 rounded-lg border border-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200 px-4 py-6 space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-zinc-900">Giải Pháp Havana</a>
            <a href="#themes" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-zinc-900">Kho Giao Diện (400+)</a>
            <a href="#omnichannel" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-zinc-900">Bán Hàng Đa Kênh</a>
            <a href="#seo" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-zinc-900">Chuẩn SEO Google</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-zinc-900">Hỏi Đáp FAQs</a>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
                className="w-full text-center py-2.5 text-sm font-semibold border border-zinc-200 rounded-lg text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Đăng Nhập
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
                className="w-full text-center py-2.5 text-sm font-bold bg-sky-600 text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Dùng Thử Miễn Phí 14 Ngày
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
