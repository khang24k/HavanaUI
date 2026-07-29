import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Havana có thực sự cho phép dùng thử miễn phí 14 ngày không? Có cần thẻ tín dụng không?',
      a: 'Hoàn toàn miễn phí! Bạn có thể khởi tạo website Havana ngay lập tức chỉ với Email hoặc Số điện thoại. Trong 14 ngày dùng thử, bạn được trải nghiệm đầy đủ 100% tính năng bán hàng, kho 400+ giao diện và kết nối thử nghiệm các cổng thanh toán mà KHÔNG cần thẻ tín dụng hay bất kỳ chi phí phát sinh nào.'
    },
    {
      q: 'Website xây dựng trên Havana có chuẩn SEO Google và tối ưu trên điện thoại di động không?',
      a: 'Có. Tất cả giao diện Havana đều được lập trình theo tiêu chuẩn Google Core Web Vitals, tự động tối ưu hóa tốc độ tải trang dưới 0.8 giây, tự động sinh thẻ Schema.org, Sitemap.xml và hỗ trợ giao diện Responsive chuẩn 100% trên điện thoại, tablet và máy tính.'
    },
    {
      q: 'Tôi có thể gắn tên miền riêng (.vn, .com, .net) của thương hiệu mình vào Havana được không?',
      a: 'Rất dễ dàng! Havana cho phép bạn kết nối tên miền riêng sẵn có của doanh nghiệp hoặc hỗ trợ mua & kích hoạt tên miền tự động ngay trên trang quản trị. Đội ngũ kỹ thuật Havana cũng hỗ trợ trỏ IP và cài đặt chứng chỉ bảo mật SSL HTTPS miễn phí cho bạn.'
    },
    {
      q: 'Havana có kết nối sẵn với MoMo, VNPay, GHTK, GHN, Shopee, TikTok Shop không?',
      a: 'Havana đã tích hợp sẵn 15+ cổng thanh toán (MoMo, VNPay, ZaloPay, Visa/Mastercard, COD) và 10+ nhà vận chuyển (GHTK, GHN, Viettel Post, Ninja Van, Grab). Ngoài ra, bạn còn có thể đồng bộ sản phẩm & đơn hàng tự động với Shopee, Lazada và TikTok Shop chỉ trong vài cú click.'
    },
    {
      q: 'Trong quá trình sử dụng, nếu cần hỗ trợ kỹ thuật thì Havana hỗ trợ qua những kênh nào?',
      a: 'Đội ngũ CSKH và Chuyên gia kỹ thuật Havana sẵn sàng hỗ trợ bạn 24/7 qua Hotline trực tiếp, Livechat trên trang quản trị, Zalo Official Account hoặc Email hỗ trợ. Chúng tôi cam kết phản hồi và xử lý yêu cầu của bạn trong vòng vài phút.'
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-white border-t border-b border-zinc-200">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase animate-pulse-badge">
            GIẢI ĐÁP THẮC MẮC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Những câu hỏi thường gặp về <span className="text-sky-600">Havana (HavanaWeb)</span>
          </h2>
          <p className="text-zinc-500 font-normal text-base max-w-2xl mx-auto leading-relaxed">
            Giải đáp nhanh các thắc mắc phổ biến giúp bạn hoàn toàn yên tâm khi bắt đầu xây dựng website kinh doanh cùng Havana.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-sky-600 shadow-md' 
                    : 'border-zinc-200 hover:border-zinc-300 hover:shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl"
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className={`text-zinc-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-sky-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-500 font-normal border-t border-zinc-100 leading-relaxed animate-pop-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
