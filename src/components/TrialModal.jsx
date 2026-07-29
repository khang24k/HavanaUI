import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Store } from 'lucide-react';

export default function TrialModal({ isOpen, onClose, initialData = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    storeName: '',
    industry: 'Thời Trang'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({ ...prev, emailOrPhone: initialData }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-md w-full overflow-hidden border border-zinc-200 shadow-xl relative animate-pop-in" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 p-1 rounded-md"
          aria-label="Đóng"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase animate-pulse-badge">
                MIỄN PHÍ 14 NGÀY DÙNG THỬ
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Khởi Tạo Website <span className="text-sky-600">Havana</span> Ngay</h3>
              <p className="text-xs text-zinc-500 font-normal">Điền thông tin bên dưới để trải nghiệm đầy đủ 400+ giao diện Havana</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800">Họ và tên của bạn</label>
                <input 
                  type="text" 
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800">Email hoặc Số điện thoại</label>
                <input 
                  type="text" 
                  placeholder="0912345678 hoặc email@domain.com"
                  value={formData.emailOrPhone}
                  onChange={e => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800">Tên cửa hàng / Doanh nghiệp</label>
                <div className="flex border border-zinc-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-sky-500">
                  <input 
                    type="text" 
                    placeholder="my-store-havana"
                    value={formData.storeName}
                    onChange={e => setFormData({ ...formData, storeName: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    className="flex-1 px-3.5 py-2.5 text-sm text-zinc-900 outline-none"
                    required
                  />
                  <span className="bg-zinc-50 px-3.5 py-2.5 text-xs font-bold text-zinc-900 border-l border-zinc-200 flex items-center">
                    .havana.vn
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800">Ngành hàng kinh doanh</label>
                <select 
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-sky-500 bg-white"
                >
                  <option value="Thời Trang">Thời Trang & Phụ Kiện</option>
                  <option value="Mỹ Phẩm">Mỹ Phẩm & Làm Đẹp</option>
                  <option value="Thực Phẩm">Ẩm Thực & Nông Sản</option>
                  <option value="Nội Thất">Nội Thất & Gia Dụng</option>
                  <option value="Mẹ & Bé">Mẹ & Bé</option>
                  <option value="Khác">Giới Thiệu Doanh Nghiệp / Khác</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-sky-600 text-white font-bold py-3.5 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2 pt-3"
              >
                TẠO WEBSITE HAVANA MIỄN PHÍ
              </button>

              <div className="text-[11px] text-zinc-500 font-normal text-center pt-1">
                Bằng cách đăng ký, bạn đồng ý với <a href="#" className="text-zinc-900 font-bold underline">Điều khoản sử dụng Havana</a>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto border border-sky-200">
              <CheckCircle2 size={36} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-zinc-900">Chúc mừng bạn đã tạo thành công!</h3>
              <p className="text-xs text-zinc-500 font-normal">
                Website <strong className="text-zinc-900 font-bold">{formData.storeName || 'my-store'}.havana.vn</strong> sẵn sàng sử dụng 14 ngày.
              </p>
            </div>

            <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200 text-left text-xs space-y-2.5">
              <div className="flex items-center gap-2.5 text-zinc-700 font-medium">
                <Store size={16} className="text-sky-600" /> Tên miền: <strong className="text-zinc-900 font-bold">{formData.storeName || 'store'}.havana.vn</strong>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-700 font-medium">
                <CheckCircle2 size={16} className="text-sky-600" /> Gói: <strong className="text-zinc-900 font-bold">Havana Full Features (14 ngày)</strong>
              </div>
            </div>

            <button 
              onClick={handleReset}
              className="w-full bg-sky-600 text-white font-bold py-3.5 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2"
            >
              VÀO TRANG QUẢN TRỊ HAVANA <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
