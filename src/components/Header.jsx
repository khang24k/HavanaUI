import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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
        <div className="bg-zinc-900 text-zinc-200 text-xs py-2.5 px-6 sm:px-12 lg:px-16 border-b border-zinc-800 relative z-50">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2.5 mx-auto text-center">
              <span className="bg-sky-600 text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide animate-pulse-badge">ƯU ĐÃI NỔI BẬT</span>
              <span className="font-medium text-zinc-300">Giảm 50% Khi Khởi Tạo Website <strong className="text-white font-bold">Havana</strong> Ngay Hôm Nay + Tặng Tên Miền .VN</span>
              <button 
                onClick={onOpenTrial}
                className="ml-2 bg-white text-zinc-900 px-3 py-1 rounded-md text-[11px] font-bold hover:bg-zinc-100 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 inline-flex items-center gap-1"
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

      {/* Main Header Container - Full Width Edge-to-Edge */}
      <header className={`sticky top-0 left-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-zinc-200 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1 group">
            <img 
              src="/assets/havana_logo_1784863971004.png" 
              alt="Havana Logo" 
              className="w-10 h-10 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-zinc-900 leading-none tracking-tight">Havana</span>
              <span className="text-[10px] font-bold text-sky-600 tracking-widest uppercase mt-0.5">HavanaWeb</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-700">
            <a href="#hero" className="hover:text-sky-600 transition-colors duration-200">Trang chủ</a>
            <a href="#themes" className="hover:text-sky-600 transition-colors duration-200">Kho Giao Diện (400+)</a>
            <a href="#seo" className="hover:text-sky-600 transition-colors duration-200">Tính năng SEO</a>
            <a href="#omnichannel" className="hover:text-sky-600 transition-colors duration-200">Bán Đa Kênh</a>
            <a href="#faqs" className="hover:text-sky-600 transition-colors duration-200">Giải đáp</a>
          </nav>

          {/* CTA Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onOpenTrial()}
              className="hidden sm:inline-block text-sm font-semibold text-zinc-800 hover:text-sky-600 px-3.5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Đăng nhập
            </button>
            <button 
              onClick={() => onOpenTrial()}
              className="btn-shimmer text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 flex items-center gap-2"
            >
              DÙNG THỬ 14 NGÀY <Sparkles size={15} />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-700 hover:text-zinc-900 transition-colors rounded-lg border border-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 animate-pop-in">
            <nav className="flex flex-col space-y-3 text-sm font-semibold text-zinc-800">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-600 transition-colors">Trang chủ</a>
              <a href="#themes" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-600 transition-colors">Kho Giao Diện (400+)</a>
              <a href="#seo" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-600 transition-colors">Tính năng SEO</a>
              <a href="#omnichannel" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-600 transition-colors">Bán Đa Kênh</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-sky-600 transition-colors">Giải đáp thắc mắc</a>
            </nav>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
                className="w-full text-center py-2.5 text-sm font-semibold border border-zinc-200 rounded-lg text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Đăng nhập
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}
                className="w-full text-center py-2.5 text-sm font-bold btn-shimmer text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                TẠO WEBSITE MIỄN PHÍ
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
