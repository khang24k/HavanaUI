import React from 'react';
import { Gauge, Search, Globe, FileText } from 'lucide-react';

export default function SeoFeature({ onOpenTrial }) {
  return (
    <section id="seo" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase">
              CHUẨN SEO GOOGLE HARBOUR
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
                Tăng lượng khách hàng truy cập nhờ <span className="text-sky-600">Website Havana chuẩn SEO</span>
              </h2>

              <p className="text-base text-zinc-500 font-normal leading-relaxed">
                Mỗi trang web xây dựng trên <strong className="text-zinc-900 font-bold">Havana (HavanaWeb)</strong> đều kế thừa hạ tầng đạt chuẩn Google Lighthouse, tự động tối ưu hóa từ khóa và đường dẫn giúp thương hiệu dễ dàng bứt phá lên Top 1 Google.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {[
                { icon: <Gauge size={20} />, title: 'Tốc độ tải trang nhanh dưới 1 giây', desc: 'Hệ thống CDN toàn cầu tự động nén ảnh WebP và tối ưu mã nguồn CSS/JS.' },
                { icon: <Search size={20} />, title: 'Cấu trúc dữ liệu Schema.org tự động', desc: 'Tự động sinh thẻ Rich Snippet (giá bán, đánh giá sao, tình trạng còn hàng) trên Google.' },
                { icon: <Globe size={20} />, title: 'Sitemap.xml & URL tùy chỉnh thân thiện', desc: 'Tự động cập nhật Sitemap ngay khi bạn thêm sản phẩm mới và cho phép tùy biến URL.' },
                { icon: <FileText size={20} />, title: 'Blog & Nội dung tích hợp Havana AI', desc: 'Công cụ soạn thảo bài viết gợi ý tiêu đề và kiểm tra từ khóa.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
                  <div className="w-11 h-11 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center flex-shrink-0 font-bold">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-900">{item.title}</h4>
                    <p className="text-xs text-zinc-500 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onOpenTrial()}
                className="bg-sky-600 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 inline-flex items-center gap-2"
              >
                TẠO WEBSITE CHUẨN SEO NGAY
              </button>
            </div>
          </div>

          {/* Right Metrics Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-8 space-y-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="font-bold text-sm text-zinc-900">
                  <span className="text-zinc-900">Google</span> PageSpeed Insights
                </div>
                <span className="bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-bold px-3 py-1 rounded-md">
                  Core Web Vitals PASSED
                </span>
              </div>

              {/* Score Circles */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="text-4xl font-bold text-sky-600">99/100</div>
                  <div className="text-xs font-bold text-zinc-900 mt-2">Hiệu Năng</div>
                  <div className="text-[11px] text-sky-600 font-semibold mt-0.5">Tốc độ &lt; 0.8s</div>
                </div>

                <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="text-4xl font-bold text-zinc-900">100/100</div>
                  <div className="text-xs font-bold text-zinc-900 mt-2">Điểm SEO Google</div>
                  <div className="text-[11px] text-sky-600 font-semibold mt-0.5">Tối Ưu Hoàn Hảo</div>
                </div>
              </div>

              {/* Snippet Preview */}
              <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2 text-left text-xs">
                <div className="text-zinc-500 font-mono">https://cuahang.havana.vn › san-pham</div>
                <div className="text-zinc-900 font-bold text-sm">Cửa Hàng Havana Official - Thiết Kế Chuyên Nghiệp</div>
                <div className="text-amber-500 font-semibold">★★★★★ Rating: 4.9 - 1,240 votes</div>
                <div className="text-zinc-500 font-normal leading-relaxed">Website thiết kế bởi Havana. Tốc độ tải cực nhanh, giao diện chuẩn responsive, miễn phí vận chuyển cho đơn từ 500k.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
