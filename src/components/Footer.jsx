import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-zinc-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/assets/havana_logo_1784863971004.png" 
                alt="Havana Logo" 
                className="w-9 h-9 object-contain rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">Havana</span>
                <span className="text-[10px] font-bold text-sky-400 tracking-widest uppercase mt-0.5">HavanaWeb</span>
              </div>
            </a>

            <p className="text-zinc-400 font-normal leading-relaxed max-w-sm">
              Havana là nền tảng thiết kế website chuyên nghiệp & quản lý bán hàng đa kênh hàng đầu Việt Nam. Giúp hơn 60.000+ doanh nghiệp bứt phá doanh số.
            </p>

            <div className="space-y-2.5 text-zinc-300">
              <div className="flex items-center gap-2.5"><Phone size={15} className="text-sky-400" /> Hotline: <strong className="text-white font-bold">1900 2233</strong> (24/7)</div>
              <div className="flex items-center gap-2.5"><Mail size={15} className="text-sky-400" /> Email: support@havana.vn</div>
              <div className="flex items-center gap-2.5"><MapPin size={15} className="text-sky-400" /> Tòa nhà Havana Tower, TP.HCM & Hà Nội</div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Giải Pháp Website</h4>
              <ul className="space-y-2.5 font-normal">
                <li><a href="#hero" className="hover:text-white transition-all duration-200">Website Bán Hàng</a></li>
                <li><a href="#seo" className="hover:text-white transition-all duration-200">Website Doanh Nghiệp</a></li>
                <li><a href="#themes" className="hover:text-white transition-all duration-200">Kho 400+ Giao Diện</a></li>
                <li><a href="#omnichannel" className="hover:text-white transition-all duration-200">Omnichannel Bán Đa Kênh</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Marketing & Kênh Bán</h4>
              <ul className="space-y-2.5 font-normal">
                <li><a href="#omnichannel" className="hover:text-white transition-all duration-200">Đồng Bộ Shopee & TikTok</a></li>
                <li><a href="#omnichannel" className="hover:text-white transition-all duration-200">Cổng Thanh Toán MoMo/VNPay</a></li>
                <li><a href="#omnichannel" className="hover:text-white transition-all duration-200">Kết Nối GHTK / GHN</a></li>
                <li><a href="#seo" className="hover:text-white transition-all duration-200">Công Cụ Chuẩn SEO</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Hỗ Trợ Khách Hàng</h4>
              <ul className="space-y-2.5 font-normal">
                <li><a href="#faqs" className="hover:text-white transition-all duration-200">Trung Tâm Trợ Giúp</a></li>
                <li><a href="#faqs" className="hover:text-white transition-all duration-200">Hướng Dẫn Sử Dụng</a></li>
                <li><a href="#faqs" className="hover:text-white transition-all duration-200">Công Cụ Tính Thuế</a></li>
                <li><a href="#faqs" className="hover:text-white transition-all duration-200">System Status</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Về Havana</h4>
              <ul className="space-y-2.5 font-normal">
                <li><a href="#" className="hover:text-white transition-all duration-200">Giới Thiệu Công Ty</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-200">Tin Tức & Blog</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-200">Tuyển Dụng Tài Năng</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-200">Chính Sách Bảo Mật</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-normal">
          <div>© 2026 <strong className="text-white font-bold">Havana Technology Corporation</strong>. Tất cả quyền được bảo lưu.</div>
          <div className="flex items-center gap-2 bg-zinc-800 px-3.5 py-1.5 rounded-lg text-sky-400 font-semibold text-[11px]">
            <ShieldCheck size={15} /> Đã đăng ký Bộ Công Thương
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-all duration-200" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-all duration-200" aria-label="Youtube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
