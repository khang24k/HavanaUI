import React, { useState } from 'react';
import { Eye, Check, X, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ThemeShowcase({ onOpenTrial }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState(null);

  const categories = [
    { id: 'all', name: 'Tất Cả (400+)' },
    { id: 'fashion', name: 'Thời Trang & Mỹ Phẩm' },
    { id: 'food', name: 'Ẩm Thực & Thực Phẩm' },
    { id: 'furniture', name: 'Nội Thất & Gia Dụng' },
    { id: 'kids', name: 'Mẹ & Bé' },
    { id: 'corporate', name: 'Giới Thiệu Doanh Nghiệp' }
  ];

  const themes = [
    {
      id: 1,
      name: 'Havana Fashion Luxury',
      category: 'fashion',
      rating: '4.9',
      views: '12.4k',
      badge: 'Bán Chạy Nhất',
      image: '/assets/theme_fashion_1784863995053.png',
      description: 'Giao diện thời trang sang trọng, thiết lập banner lớn, giỏ hàng popup thông minh.'
    },
    {
      id: 2,
      name: 'Havana Organic Fresh',
      category: 'food',
      rating: '5.0',
      views: '9.8k',
      badge: 'Chuẩn SEO Google',
      image: '/assets/theme_organic_1784864006847.png',
      description: 'Tối ưu cho thực phẩm sạch, nông sản, tích hợp giao hàng siêu tốc trong ngày.'
    },
    {
      id: 3,
      name: 'Havana Modern Living',
      category: 'furniture',
      rating: '4.8',
      views: '15.1k',
      badge: 'Hot Trend 2026',
      image: '/assets/theme_furniture_1784864018562.png',
      description: 'Thiết kế tối giản cho ngành nội thất. Hỗ trợ xem ảnh 360 độ và thông số chi tiết.'
    },
    {
      id: 4,
      name: 'Havana Baby Care',
      category: 'kids',
      rating: '4.9',
      views: '8.2k',
      badge: 'Miễn Phí',
      image: '/assets/theme_baby_1784864029424.png',
      description: 'Tông màu tươi sáng, hệ thống phân loại theo độ tuổi, tích hợp đánh giá.'
    },
    {
      id: 5,
      name: 'Havana Corporate Elite',
      category: 'corporate',
      rating: '4.9',
      views: '11.3k',
      badge: 'Uy Tín',
      image: '/assets/theme_corporate_1784864042713.png',
      description: 'Giao diện uy tín cho công ty, giới thiệu dịch vụ, hồ sơ năng lực và đặt lịch 1:1.'
    },
    {
      id: 6,
      name: 'Havana Beauty & Spa',
      category: 'fashion',
      categoryLabel: 'Mỹ Phẩm',
      rating: '5.0',
      reviews: '18.9k',
      badge: 'Khuyên Dùng',
      image: '/assets/theme_beauty_1784864056117.png',
      desc: 'Tối ưu cho mỹ phẩm & spa. Tích hợp bộ lọc loại da và tư vấn liệu trình tự động.'
    }
  ];

  const filteredThemes = activeCategory === 'all' 
    ? themes 
    : themes.filter(t => t.category === activeCategory);

  return (
    <section id="themes" className="py-24 bg-white border-b border-zinc-200">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase transition-transform duration-200 hover:scale-105">
            KHO GIAO DIỆN PHONG PHÚ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Khám phá <span className="text-sky-600">400+ mẫu giao diện Havana</span> để bắt đầu kinh doanh
          </h2>
          <p className="text-zinc-500 font-normal text-base leading-relaxed">
            Thiết kế sẵn cho từng ngành hàng cụ thể. Tất cả đều tối ưu chuẩn Mobile First & chuẩn SEO Google.
          </p>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  activeCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-sm scale-105'
                    : 'bg-zinc-50 text-zinc-700 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Themes Grid - Full Width 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredThemes.map(theme => (
            <div 
              key={theme.id}
              className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl animate-fade-in-up group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={theme.image} 
                  alt={theme.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-sky-600 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                    {theme.categoryLabel}
                  </span>
                  {theme.badge && (
                    <span className="bg-zinc-900 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
                      {theme.badge}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-zinc-200 text-[11px] font-bold text-zinc-900 flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-amber-500 fill-amber-500" /> {theme.rating} ({theme.reviews})
                </div>
              </div>

              {/* Theme Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-sky-600 transition-colors duration-200">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal leading-relaxed mt-1">
                    {theme.desc}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 pt-2">
                  <button 
                    onClick={() => setSelectedTheme(theme)}
                    className="flex-1 bg-zinc-50 text-zinc-900 border border-zinc-200 py-2.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 hover:border-zinc-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 flex items-center justify-center gap-1.5"
                  >
                    <Eye size={14} /> XEM DEMO
                  </button>
                  <button 
                    onClick={() => onOpenTrial(theme.name)}
                    className="flex-1 bg-sky-600 text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    DÙNG MẪU NÀY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button 
            onClick={() => onOpenTrial()}
            className="bg-zinc-50 text-zinc-900 border border-zinc-200 font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 hover:border-zinc-300 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 inline-flex items-center gap-2"
          >
            Xem Tất Cả 400+ Giao Diện Havana <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Live Preview Modal with entrance animation */}
      {selectedTheme && (
        <div className="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in-up" onClick={() => setSelectedTheme(null)}>
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden border border-zinc-200 shadow-xl transition-all duration-300 transform scale-100" onClick={e => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
              <div className="text-sm font-bold text-zinc-900">
                Xem Demo Giao Diện: <strong>{selectedTheme.name}</strong>
              </div>
              <button 
                onClick={() => setSelectedTheme(null)}
                className="text-zinc-400 hover:text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 p-1 rounded-md"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 bg-zinc-50 space-y-5 text-center">
              <img 
                src={selectedTheme.image} 
                alt={selectedTheme.name} 
                className="w-full h-64 object-cover rounded-xl border border-zinc-200 shadow-sm transition-transform duration-300 hover:scale-[1.01]"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-zinc-900">{selectedTheme.name}</h3>
                <p className="text-sm text-zinc-500 font-normal max-w-md mx-auto">{selectedTheme.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-left bg-white p-4 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700">
                <span className="flex items-center gap-2"><Check size={15} className="text-sky-600" /> Tốc độ tải trang &lt; 0.8 giây</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-sky-600" /> Tối ưu ảnh WebP chuẩn Google</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-sky-600" /> Tích hợp thanh toán online</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-sky-600" /> Tương thích Mobile, PC</span>
              </div>
            </div>

            <div className="px-6 py-4 bg-white border-t border-zinc-200 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedTheme(null)}
                className="px-4 py-2.5 border border-zinc-200 rounded-lg text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Đóng
              </button>
              <button 
                onClick={() => { setSelectedTheme(null); onOpenTrial(selectedTheme.name); }}
                className="px-5 py-2.5 bg-sky-600 text-white rounded-lg text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 flex items-center gap-2"
              >
                Dùng Miễn Phí Giao Diện Này
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
