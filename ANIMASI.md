# Dokumentasi Animasi Website

## Overview
Website ini telah dilengkapi dengan animasi yang smooth dan menarik menggunakan **Framer Motion** untuk meningkatkan user experience.

## Fitur Animasi yang Ditambahkan

### 1. Page Transitions
- **File**: `src/app/template.tsx`
- **Deskripsi**: Setiap perpindahan halaman memiliki animasi fade-in dan slide-up yang smooth
- **Efek**:
  - Opacity: 0 → 1
  - Slide up: 20px → 0
  - Duration: 0.3s dengan spring animation

### 2. Hero Section Animations
- **File**: `src/components/PageHero.tsx`
- **Animasi yang diterapkan**:
  - **Background Image**: Zoom-in effect (scale 1.1 → 1) saat page load
  - **Badge**: Fade-in dengan slide down, delay 0.2s
  - **Title**: Fade-in dengan slide up, delay 0.3s
  - **Decorative Line**: Scale animation (0.5 → 1), delay 0.5s
  - **Subtitle**: Fade-in dengan slide up, delay 0.6s

### 3. Scroll-Triggered Animations
- **Component**: `src/components/AnimatedSection.tsx`
- **Deskripsi**: Section yang muncul dengan animasi saat di-scroll ke viewport
- **Props**:
  - `delay`: Delay animation (default: 0)
  - `direction`: Arah animasi ('up', 'down', 'left', 'right')
- **Fitur**: Hanya animasi sekali (once: true) untuk performa optimal

### 4. Card Hover Animations
- **Component**: `src/components/AnimatedCard.tsx`
- **Efek**:
  - Fade-in saat scroll ke viewport
  - Hover effect: Card terangkat 8px ke atas
  - Smooth transition 0.3s

### 5. Smooth Scroll Behavior
- **File**: `src/app/globals.css`
- **Deskripsi**: Scroll yang smooth saat navigasi menggunakan anchor links
- **CSS**: `scroll-behavior: smooth`

## Cara Penggunaan

### AnimatedSection
```tsx
import { AnimatedSection } from '@/components/AnimatedSection';

<AnimatedSection delay={0.2} direction="up">
  <div className="content">
    {/* Your content here */}
  </div>
</AnimatedSection>
```

### AnimatedCard
```tsx
import { AnimatedCard } from '@/components/AnimatedCard';

<AnimatedCard delay={0.1}>
  <div className="card-content">
    {/* Card content */}
  </div>
</AnimatedCard>
```

## Halaman yang Sudah Diimplementasi

### Training Page
- ✅ Hero section dengan staggered animations
- ✅ Overview section dengan AnimatedSection
- ✅ Jenis Training dengan AnimatedSection (delay 0.2s)
- ✅ Keunggulan Training dengan AnimatedSection (delay 0.3s)
- ✅ Topik Training dengan AnimatedSection (delay 0.4s)
- ✅ Proses Training dengan AnimatedSection (delay 0.5s)
- ✅ Equipment Coverage dengan AnimatedSection (delay 0.6s)
- ✅ CTA Section dengan AnimatedSection (delay 0.7s)

## Optimasi Performa

1. **Once Animation**: Animasi hanya berjalan sekali saat pertama kali terlihat (tidak re-trigger saat scroll kembali)
2. **Viewport Margin**: Animasi mulai 50-100px sebelum element terlihat untuk transisi yang lebih smooth
3. **Lazy Loading**: Component hanya menggunakan 'use client' di tempat yang diperlukan
4. **Hardware Acceleration**: Menggunakan transform untuk animasi (bukan top/left)

## Dependencies

```json
{
  "framer-motion": "^11.x.x"
}
```

## Browser Support

Animasi kompatibel dengan semua browser modern:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips untuk Developer

1. **Jangan over-animate**: Gunakan animasi secukupnya agar tidak mengganggu user
2. **Konsisten dengan timing**: Gunakan delay yang konsisten (0.1s, 0.2s, 0.3s, dst)
3. **Test di mobile**: Pastikan animasi smooth di perangkat mobile
4. **Reduce motion**: Pertimbangkan untuk menambahkan `prefers-reduced-motion` untuk accessibility

## Next Steps (Optional Improvements)

1. Add loading animations untuk data fetching
2. Implement skeleton screens untuk better perceived performance
3. Add micro-interactions pada buttons dan links
4. Implement scroll progress indicator
5. Add parallax effect pada hero sections

## Troubleshooting

### Animasi tidak berjalan
- Pastikan component menggunakan `'use client'` directive
- Check console untuk error framer-motion
- Verifikasi bahwa framer-motion sudah terinstall dengan benar

### Performance issues
- Reduce jumlah animasi yang berjalan bersamaan
- Gunakan `once: true` pada animations
- Pertimbangkan untuk menggunakan CSS animations untuk animasi simple
