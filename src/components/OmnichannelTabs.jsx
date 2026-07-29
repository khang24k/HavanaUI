import React, { useState } from 'react';
import { CreditCard, Truck, ShoppingBag, Layers, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

export default function OmnichannelTabs({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('payments');

  const tabContents = {
    payments: {
      title: 'Tích hợp 15+ Cổng Thanh Toán Hàng Đầu Việt Nam',
      description: 'Khách hàng dễ dàng thanh toán đơn hàng bằng mã QR, ví điện tử hoặc chuyển khoản ngân hàng tự động xác nhận đơn ngay tức thì.',
      badge: 'Thanh Toán Tự Động',
      partners: [
        { name: 'MoMo', desc: 'Quét mã QR MoMo 1-second' },
        { name: 'VNPay QR', desc: 'Giảm tới 50k quét mọi ngân hàng' },
        { name: 'ZaloPay', desc: 'Thanh toán trực tiếp trong Zalo' },
        { name: 'Visa / Mastercard', desc: 'Cổng thanh toán quốc tế an toàn' },
        { name: 'ShopeePay', desc: 'Ví điện tử liên kết ưu đãi' },
        { name: 'Chuyển Khoản COD', desc: 'Tự động kiểm tra cú pháp CK' }
      ],
      features: [
        'Xác nhận thanh toán hoàn tất chỉ trong 1 giây',
        'Tự động gửi hóa đơn điện tử cho khách hàng',
        'Bảo mật dữ liệu thanh toán chuẩn PCI-DSS'
      ]
    },
    shipping: {
      title: 'Kết Nối 10+ Đơn Vị Vận Chuyển Hàng Đầu',
      description: 'Tự động đẩy đơn sang các đơn vị vận chuyển uy tín, tự động tính phí ship theo vị trí và hỗ trợ tra cứu hành trình đơn hàng live.',
      badge: 'Giao Hàng Siêu Tốc',
      partners: [
        { name: 'Giao Hàng Tiết Kiệm (GHTK)', desc: 'Chiết khấu vận chuyển tới 20%' },
        { name: 'Giao Hàng Nhanh (GHN)', desc: 'Giao nội thành trong 2 giờ' },
        { name: 'Viettel Post', desc: 'Phủ sóng 63 tỉnh thành & huyện đảo' },
        { name: 'Ninja Van', desc: 'Hỗ trợ lấy hàng tận nhà miễn phí' },
        { name: 'GrabExpress', desc: 'Giao hỏa tốc 30 phút nội thành' },
        { name: 'Ahamove', desc: 'Vận chuyển hàng kềnh & xe tải' }
      ],
      features: [
        'Tự động so sánh phí ship giữa các nhà vận chuyển',
        'In mã vận đơn hàng loạt chỉ với 1 cú click',
        'Đối soát tiền COD minh bạch, chuyển khoản hàng ngày'
      ]
    },
    ecom: {
      title: 'Đồng Bộ Đa Kênh Shopee, Lazada, TikTok Shop & Facebook',
      description: 'Đăng sản phẩm 1 lần, tự động đồng bộ tồn kho và giá bán lên tất cả các sàn TMĐT và mạng xã hội lớn nhất.',
      badge: 'Bán Hàng Đa Kênh',
      partners: [
        { name: 'TikTok Shop', desc: 'Đồng bộ đơn hàng Livestream' },
        { name: 'Shopee Mall / Standard', desc: 'Tự động cập nhật số lượng tồn' },
        { name: 'Lazada', desc: 'Quản lý tin nhắn & gian hàng' },
        { name: 'Facebook Fanpage', desc: 'Havana Chatbot chốt đơn tự động' },
        { name: 'Zalo Official Account', desc: 'Gửi tin nhắn chăm sóc khách hàng' },
        { name: 'Instagram Shopping', desc: 'Gắn thẻ sản phẩm trong bài viết' }
      ],
      features: [
        'Tránh nguy cơ hủy đơn do hết hàng tồn kho',
        'Quản lý tất cả bình luận & tin nhắn tại 1 màn hình',
        'Báo cáo hiệu quả kinh doanh từng kênh bán riêng biệt'
      ]
    },
    management: {
      title: 'Quản Lý Đơn Hàng & Kho Hàng Tập Trung Tại Havana POS',
      description: 'Kiểm soát chính xác dòng tiền, công nợ, xuất nhập kho và thông tin khách hàng từ cửa hàng offline tới website online.',
      badge: 'Quản Lý Thông Minh',
      partners: [
        { name: 'Havana POS Cửa Hàng', desc: 'Bán hàng tại thu ngân nhanh chóng' },
        { name: 'Báo Cáo Doanh Thu Real-time', desc: 'Xem biểu đồ tăng trưởng mọi lúc' },
        { name: 'Quản Lý Tồn Kho Tự Động', desc: 'Cảnh báo khi sản phẩm sắp hết' },
        { name: 'Khách Hàng Thân Thiết (CRM)', desc: 'Tích điểm đổi quà Havana Loyalty' },
        { name: 'Mã Giảm Giá & Flash Sale', desc: 'Tạo chương trình khuyến mãi linh hoạt' },
        { name: 'Quản Lý Nhân Viên', desc: 'Phân quyền & theo dõi doanh số' }
      ],
      features: [
        'Đồng bộ dữ liệu thời gian thực giữa Website và POS',
        'Tích hợp máy in hóa đơn & máy quét mã vạch',
        'Giao diện trực quan, nhân viên làm quen trong 5 phút'
      ]
    }
  };

  const currentContent = tabContents[activeTab];

  return (
    <section id="omnichannel" className="py-24 bg-white border-b border-zinc-200 overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
          <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase transition-transform duration-200 hover:scale-105 animate-pulse-badge">
            HỆ SINH THÁI BÁN HÀNG ĐA KÊNH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Tất cả tính năng bạn cần cho <span className="text-sky-600">Havana Omnichannel</span>
          </h2>
          <p className="text-zinc-500 font-normal text-base leading-relaxed">
            Havana giúp bạn mở rộng kênh bán, tối ưu hóa quy trình giao vận và thanh toán chỉ trong một hệ thống quản lý duy nhất.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {[
              { id: 'payments', icon: <CreditCard size={16} />, label: 'Cổng Thanh Toán (15+)' },
              { id: 'shipping', icon: <Truck size={16} />, label: 'Đối Tác Vận Chuyển (10+)' },
              { id: 'ecom', icon: <ShoppingBag size={16} />, label: 'Shopee, TikTok, Social' },
              { id: 'management', icon: <Layers size={16} />, label: 'Quản Lý Đơn Hàng & POS' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-sm scale-105'
                    : 'bg-zinc-50 text-zinc-800 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Box with entrance animation */}
        <div key={activeTab} className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-300 animate-fade-in-up">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold px-3.5 py-1.5 rounded-md shadow-sm animate-pulse-badge">
              {currentContent.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">{currentContent.title}</h3>
            <p className="text-zinc-500 font-normal text-sm leading-relaxed">{currentContent.description}</p>

            <div className="space-y-3 pt-2">
              {currentContent.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800 transition-transform duration-200 hover:translate-x-1.5">
                  <CheckCircle2 size={18} className="text-sky-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onOpenTrial()}
                className="btn-shimmer text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 inline-flex items-center gap-2"
              >
                KHÁM PHÁ TÍNH NĂNG NÀY <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentContent.partners.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md group">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
                  <RefreshCw size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-zinc-900 group-hover:text-sky-600 transition-colors">{item.name}</h5>
                  <p className="text-xs text-zinc-500 font-normal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
