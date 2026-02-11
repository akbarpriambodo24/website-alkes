# Halaman Contact - Form Pengaduan Pelanggan

## URL
`/contact` atau `https://yourwebsite.com/contact`

## Fitur

### 1. **Form Pengaduan Pelanggan**
Form lengkap untuk pelanggan mengirimkan:
- ✅ Pengaduan
- ✅ Pertanyaan
- ✅ Saran
- ✅ Pesan Lainnya

### 2. **Field Form**
- **Jenis Pesan** (Required): Dropdown untuk memilih tipe pesan
  - Pengaduan
  - Pertanyaan
  - Saran
  - Lainnya
- **Nama Lengkap** (Required)
- **Email** (Required)
- **Nomor Telepon** (Opsional)
- **Subjek** (Required): Ringkasan singkat
- **Pesan** (Required): Detail pengaduan/pertanyaan

### 3. **Pengiriman Email**
Saat form di-submit, sistem akan:
1. Membuka email client (Gmail, Outlook, dll)
2. Otomatis mengisi:
   - To: `info@alkesindonesia.com`
   - Subject: `[JENIS_PESAN] Subjek dari form`
   - Body: Semua data form terformat rapi

### 4. **Informasi Kontak**
Di sebelah kanan form, ditampilkan:
- ✅ Email: info@alkesindonesia.com
- ✅ Telepon: (021) 0000000
- ✅ WhatsApp: 0812-0000-0000
- ✅ Jam Operasional
- ✅ Alamat Head Office & Distribution Center

## Desain & UX

### Layout
- **2 Kolom** di desktop (Form | Info Kontak)
- **1 Kolom** di mobile (stacked)
- Responsive untuk semua ukuran layar

### Warna & Styling
- Brand color: **#2759cd**
- Form dengan border & focus ring biru
- Gradient background di header & info kontak card
- Shadow effects untuk depth

### Fitur UX
- ✅ Required field indicators (*)
- ✅ Placeholder text yang jelas
- ✅ Success/Error messages
- ✅ Disabled state saat submitting
- ✅ Smooth transitions & hover effects

## Navigasi

### Link ke Halaman Contact:
1. **Header** → Menu "Kontak"
2. **Header** → Button "Hubungi Kami"
3. **Hero Section** → Button "Hubungi Kami"

## Update untuk Backend (Opsional)

Saat ini form menggunakan `mailto:` link. Untuk implementasi yang lebih advanced, Anda bisa:

### Option 1: API Route Next.js
```typescript
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    // Email config
  });

  await transporter.sendMail({
    from: data.email,
    to: 'info@alkesindonesia.com',
    subject: `[${data.type}] ${data.subject}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
  });

  return NextResponse.json({ success: true });
}
```

### Option 2: EmailJS
```bash
npm install @emailjs/browser
```

### Option 3: SendGrid / Mailgun
Menggunakan service third-party untuk email

## Testing

### Test Checklist:
- [ ] Form validation bekerja (required fields)
- [ ] Email format validation
- [ ] Submit membuka email client
- [ ] Responsive di mobile, tablet, desktop
- [ ] Success message muncul setelah submit
- [ ] Link navigation bekerja
- [ ] Hover effects pada buttons
- [ ] Mobile menu menutup setelah klik link

## File Terkait
- `/src/app/contact/page.tsx` - Halaman utama
- `/src/components/Header.tsx` - Navigation links
- `/src/components/HeroSection.tsx` - CTA button
