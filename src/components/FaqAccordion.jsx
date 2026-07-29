import React from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export default function FaqAccordion({ onOpenTrial }) {
  const faqs = [
    {
      num: '01',
      badge: '14 NGÀY DÙNG THỬ',
      icon: <Sparkles size={22} className="text-white" />,
      q: 'Havana có thực sự cho phép dùng thử miễn phí 14 ngày không? Có cần thẻ tín dụng không?',
      a: 'Hoàn toàn miễn phí! Bạn có thể khởi tạo website Havana ngay lập tức chỉ với Email hoặc Số điện thoại. Trong 14 ngày dùng thử, bạn được trải nghiệm đầy đủ 100% tính năng bán hàng, kho 400+ giao diện và kết nối thử nghiệm các cổng thanh toán mà KHÔNG cần thẻ tín dụng hay bất kỳ chi phí phát sinh nào.'
    },
    {
      num: '02',
      badge: 'CHUẨN SEO GOOGLE',
      icon: <ShieldCheck size={22} className="text-white" />,
      q: 'Website xây dựng trên Havana có chuẩn SEO Google và tối ưu trên điện thoại di động không?',
      a: 'Có. Tất cả giao diện Havana đều được lập trình theo tiêu chuẩn Google Core Web Vitals, tự động tối ưu hóa tốc độ tải trang dưới 0.8 giây, tự động sinh thẻ Schema.org, Sitemap.xml và hỗ trợ giao diện Responsive chuẩn 100% trên điện thoại, tablet và máy tính.'
    },
    {
      num: '03',
      badge: 'TÊN MIỀN & SSL',
      icon: <HelpCircle size={22} className="text-white" />,
      q: 'Tôi có thể gắn tên miền riêng (.vn, .com, .net) của thương hiệu mình vào Havana được không?',
      a: 'Rất dễ dàng! Havana cho phép bạn kết nối tên miền riêng sẵn có của doanh nghiệp hoặc hỗ trợ mua & kích hoạt tên miền tự động ngay trên trang quản trị. Đội ngũ kỹ thuật Havana cũng hỗ trợ trỏ IP và cài đặt chứng chỉ bảo mật SSL HTTPS miễn phí cho bạn.'
    },
    {
      num: '04',
      badge: 'BÁN ĐA KÊNH & POS',
      icon: <CheckCircle2 size={22} className="text-white" />,
      q: 'Havana có kết nối sẵn với MoMo, VNPay, GHTK, GHN, Shopee, TikTok Shop không?',
      a: 'Havana đã tích hợp sẵn 15+ cổng thanh toán (MoMo, VNPay, ZaloPay, Visa/Mastercard, COD) và 10+ nhà vận chuyển (GHTK, GHN, Viettel Post, Ninja Van, Grab). Ngoài ra, bạn còn có thể đồng bộ sản phẩm & đơn hàng tự động với Shopee, Lazada và TikTok Shop chỉ trong vài cú click.'
    },
    {
      num: '05',
      badge: 'HỖ TRỢ 24/7',
      icon: <MessageSquare size={22} className="text-white" />,
      q: 'Trong quá trình sử dụng, nếu cần hỗ trợ kỹ thuật thì Havana hỗ trợ qua những kênh nào?',
      a: 'Đội ngũ CSKH và Chuyên gia kỹ thuật Havana sẵn sàng hỗ trợ bạn 24/7 qua Hotline trực tiếp, Livechat trên trang quản trị, Zalo Official Account hoặc Email hỗ trợ. Chúng tôi cam kết phản hồi và xử lý yêu cầu của bạn trong vòng vài phút.'
    }
  ];

  return (
    <section id="faqs" className="py-28 bg-white border-t border-b border-zinc-200">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase animate-pulse-badge">
            GIẢI ĐÁP THẮC MẮC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Những câu hỏi thường gặp về <span className="text-sky-600">Havana (HavanaWeb)</span>
          </h2>
          <p className="text-zinc-500 font-normal text-base max-w-2xl mx-auto leading-relaxed">
            Cuộn xuống để khám phá giải đáp chi tiết theo dạng thẻ bài xếp chồng hiện đại.
          </p>
        </div>

        {/* Sticky Card Stacking Container - Stacking Starts In The Middle Of Screen (28vh) */}
        <div className="max-w-6xl mx-auto space-y-8 relative pb-36">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'sticky',
                top: `calc(28vh + ${idx * 32}px)`,
                zIndex: idx + 1
              }}
              className="sticky-card bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-2xl border border-sky-500 shadow-xl p-8 sm:p-12 space-y-6 transition-[border-color,box-shadow] duration-200 hover:border-sky-300 hover:shadow-2xl group"
            >
              {/* Card Top Header */}
              <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-6">
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl font-black text-white tracking-tight">{item.num}</span>
                  <span className="bg-white/20 text-white border border-white/30 text-xs font-bold px-3.5 py-1.5 rounded-md backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
                <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Question & Answer */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  {item.q}
                </h3>
                <p className="text-base text-sky-100 font-normal leading-relaxed">
                  {item.a}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-sky-100">
                <span className="flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
                  Havana Ecosystem <ArrowRight size={14} className="text-white" />
                </span>
                <span className="text-sky-200/80 font-normal">Havana Support Team</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
