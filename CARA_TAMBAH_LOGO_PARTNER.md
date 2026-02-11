# Cara Menambahkan Logo Partner

## 🎯 Sistem Baru: Path Logo Sudah Disiapkan!

Logo partner sekarang sudah memiliki path yang tetap. Anda tinggal menaruh file logo dengan nama yang sesuai.

## 📁 Langkah-langkah:

### 1. Siapkan 10 File Logo Partner

**Nama file harus sesuai:**
- `partner1.png` → Partner 1
- `partner2.png` → Partner 2
- `partner3.png` → Partner 3
- `partner4.png` → Partner 4
- `partner5.png` → Partner 5
- `partner6.png` → Partner 6
- `partner7.png` → Partner 7
- `partner8.png` → Partner 8
- `partner9.png` → Partner 9
- `partner10.png` → Partner 10

### 2. Letakkan File di Folder `public/partners/`

```
public/
└── partners/
    ├── partner1.png
    ├── partner2.png
    ├── partner3.png
    ├── partner4.png
    ├── partner5.png
    ├── partner6.png
    ├── partner7.png
    ├── partner8.png
    ├── partner9.png
    └── partner10.png
```

### 3. Selesai! ✅

Logo akan otomatis muncul di website. Tidak perlu edit kode!

## 🎨 Format File yang Didukung:

- ✅ **PNG** (Recommended untuk logo dengan transparansi)
- ✅ **JPG** (Untuk logo tanpa transparansi)
- ✅ **SVG** (Terbaik untuk logo vektor)
- ✅ **WEBP** (Modern format, size kecil)

## ✨ Fitur Visual:

- **Grayscale by Default**: Logo tampil hitam-putih
- **Color on Hover**: Logo berwarna penuh saat di-hover
- **Smooth Transition**: Animasi halus 300ms
- **Auto Fallback**: Jika gambar tidak ada, tampil placeholder
- **Border Glow**: Border berubah biru saat hover

## 💡 Tips Optimasi:

### Ukuran Logo:
- **Minimal**: 200x200px
- **Optimal**: 400x400px
- **Maksimal**: 800x800px (lebih besar tidak perlu)

### Format File:
| Format | Use Case | Ukuran File |
|--------|----------|-------------|
| **SVG** | Logo sederhana, icon | Paling kecil |
| **PNG** | Logo dengan shadow/efek | Sedang |
| **WEBP** | Logo modern | Kecil |
| **JPG** | Foto/logo kompleks | Besar |

### Background:
- ✅ Gunakan background **TRANSPARAN** (PNG/SVG)
- ❌ Jangan gunakan background putih solid

### Naming:
- ✅ Pakai nama sesuai urutan: `partner1.png`, `partner2.png`, dll
- ❌ Jangan ganti nama (harus sesuai dengan kode)

## 🔄 Mengubah Nama Partner:

Jika ingin mengubah nama partner yang tampil:

1. Buka file: `src/components/PartnersSection.tsx`
2. Edit array `partners`:

```tsx
const partners = [
  { name: "PT ABC Medical", logo: "/partners/partner1.png" },
  { name: "RS Mitra Sehat", logo: "/partners/partner2.png" },
  { name: "Klinik Sejahtera", logo: "/partners/partner3.png" },
  // ... dan seterusnya
];
```

## 🚨 Troubleshooting:

### Logo tidak muncul?
1. **Cek nama file**: Harus exact `partner1.png` - `partner10.png`
2. **Cek lokasi**: Harus di `public/partners/`, bukan di folder lain
3. **Cek format**: Pastikan format file didukung (PNG, JPG, SVG, WEBP)
4. **Restart dev server**: `npm run dev` ulang

### Logo pecah/blur?
1. **Resolusi terlalu kecil**: Upload logo minimal 200x200px
2. **Format JPG quality rendah**: Gunakan PNG atau SVG

### Logo terlalu besar/kecil?
- Logo akan otomatis di-resize sesuai container
- Aspect ratio tetap terjaga (tidak distorsi)

## 📝 Checklist:

- [ ] Siapkan 10 file logo
- [ ] Rename sesuai format: `partner1.png` - `partner10.png`
- [ ] Letakkan di folder `public/partners/`
- [ ] (Optional) Edit nama partner di kode
- [ ] Test di browser (grayscale + hover effect)

## 🎉 Hasil Akhir:

Website akan menampilkan:
- 10 logo partner dalam grid responsive
- Grayscale effect dengan hover color
- Border animation saat hover
- Fallback placeholder jika gambar tidak ada
