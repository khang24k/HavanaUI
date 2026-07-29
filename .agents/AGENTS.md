# Project Rules & Design System Guidelines (.cursorrules)

## Language & General Rules
- Always respond in Vietnamese (Luôn trả lời bằng tiếng Việt).
- Brand Name: **Havana** (Platform: **HavanaWeb**).
- Stack: **Vite + React (JSX) + Tailwind CSS + Lucide React Icons**.

## Modern Minimalist Design System Rules (Bắt Buộc Tuân Thủ)

### 1. Color Palette & Backgrounds (Khử Cảm Giác AI)
- **Neutral Base (Chủ đạo)**: Sử dụng hệ Slate hoặc Zinc tinh tế, hiện đại.
  - Page Background: `bg-slate-50` (hoặc `bg-white` cho khối nội dung chính).
  - Component Background: `bg-white` hoặc `bg-slate-100/60`.
- **Primary Text**: `text-slate-900` (`#0F172A`).
- **Secondary/Muted Text**: `text-slate-500` (`#64748B`).
- **Accent Color (Option A - Monochrome Style)**:
  - Primary Accent dùng `bg-slate-900 text-white hover:bg-slate-800` cho nút bấm chính (Style Vercel/Linear).
  - Secondary Accent: `emerald-600` (`bg-emerald-600`, `text-emerald-600`) cho badge, status.
- **PROHIBITED (TUYỆT ĐỐI CẤM)**:
  - KHÔNG dùng màu Indigo (`indigo-600`), Purple (`violet-600`), Cyan (`cyan-500`).
  - KHÔNG sử dụng màu gradient rực rỡ, KHÔNG dùng hiệu ứng phát sáng tím/neon.

### 2. Borders & Shadows
- **Borders**: Viền siêu mỏng, tinh tế (`border border-slate-200/80` hoặc `border-slate-200`).
- **Shadows**: Chỉ dùng bóng đổ siêu nhẹ (`shadow-sm`). Tránh tuyệt đối shadow lem luốc.

### 3. Layout & Spacing
- **Spacing**: Tăng khoảng thở rộng rãi (thẻ card tối thiểu `p-6` hoặc `p-8`, section `py-20` hoặc `py-24`).
- **Visual Hierarchy**: Bố cục phân cấp thị giác rõ ràng bằng typography (`font-bold` / `font-extrabold` cho tiêu đề, `font-normal text-slate-500` cho mô tả).

### 4. Micro-interactions & Accessibility
- **Hover Effects**: Bắt buộc có hiệu ứng di chuột mượt mà (`transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5`).
- **Accessibility**: Bắt buộc hỗ trợ `:focus-visible` ring cho tất cả button và interactive card (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2`).

### 5. Typography & Component Elements
- **Font**: Dùng font không chân (Sans-serif) hiện đại như `Plus Jakarta Sans` hoặc `Inter`.
- **Bo Góc (Radius)**: Sử dụng `rounded-lg` hoặc `rounded-xl` thống nhất.
- **Hình Ảnh & Icon**: Sử dụng hình ảnh thực tế chất lượng cao, biểu tượng nét mảnh từ `lucide-react`. Cấm dùng emoji trang trí trong tiêu đề.
