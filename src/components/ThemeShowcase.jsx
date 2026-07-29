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
      rating: '5.0',
      views: '18.9k',
      badge: 'Khuyên Dùng',
      image: '/assets/theme_beauty_1784864056117.png',
      description: 'Tối ưu cho mỹ phẩm & spa. Tích hợp bộ lọc loại da và tư vấn liệu trình tự động.'
    }
  ];

  const filteredThemes = activeCategory === 'all' 
    ? themes 
    : themes.filter(t => t.category === activeCategory);

  return (
    <section id="themes" className="py-24 bg-white border-t border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase transition-transform duration-200 hover:scale-105">
            KHO GIAO DIỆN PHONG PHÚ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Khám phá <span className="text-sky-600">400+ mẫu giao diện Havana</span> để bắt đầu kinh doanh
          </h2>
          <p className="text-zinc-500 font-normal text-base leading-relaxed">
            Tất cả giao diện Havana đều được tối ưu SEO Google, tương thích 100% trên điện thoại và tùy chỉnh dễ dàng.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  activeCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-sm scale-105'
                    : 'bg-zinc-50 text-zinc-800 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.map((theme, idx) => (
            <div 
              key={theme.id}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg animate-fade-in-up"
            >
              {/* Preview Image */}
              <div className="h-56 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden group">
                <img 
                  src={theme.image} 
                  alt={theme.name} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm backdrop-blur-sm">
                  {theme.badge}
                </span>
              </div>

              {/* Theme Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sky-600 font-bold flex items-center gap-1.5">
                      <ShieldCheck size={15} /> Chuẩn SEO
                    </span>
                    <span className="text-zinc-500 font-semibold">★ {theme.rating} ({theme.views})</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-sky-600 transition-colors duration-200">{theme.name}</h3>
                  <p className="text-sm text-zinc-500 font-normal leading-relaxed">{theme.description}</p>
                </div>

                <div className="flex gap-3 pt-3 border-t border-zinc-100">
                  <button 
                    onClick={() => setSelectedTheme(theme)}
                    className="flex-1 bg-zinc-50 text-zinc-900 border border-zinc-200 py-2.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 hover:border-zinc-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 flex items-center justify-center gap-1.5"
                  >
                    <Eye size={14} /> Xem Demo Live
                  </button>
                  <button 
                    onClick={() => onOpenTrial(theme.name)}
                    className="flex-1 bg-sky-600 text-white py-2.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    Sử Dụng Giao Diện
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
