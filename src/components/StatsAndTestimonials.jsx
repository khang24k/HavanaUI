import React from 'react';
import { Users, ShoppingBag, ShieldCheck, Headphones } from 'lucide-react';

export default function StatsAndTestimonials() {
  const stats = [
    { icon: <Users size={22} />, number: '60,000+', label: 'Doanh Nghiệp & Nhà Bán Hàng' },
    { icon: <ShoppingBag size={22} />, number: '150M+', label: 'Đơn Hàng Xử Lý Mỗi Năm' },
    { icon: <ShieldCheck size={22} />, number: '99.99%', label: 'Uptime Tốc Độ Tải Trang' },
    { icon: <Headphones size={22} />, number: '24/7', label: 'Hỗ Trợ Kỹ Thuật Trực Tiếp' }
  ];

  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm text-center space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mx-auto font-bold transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-zinc-900 tracking-tight transition-colors duration-200 group-hover:text-sky-600">{item.number}</div>
              <div className="text-xs font-semibold text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
