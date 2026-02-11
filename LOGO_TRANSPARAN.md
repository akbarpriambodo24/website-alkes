# Cara Membuat Logo dengan Background Transparan

## File Logo yang Perlu Diupdate

File logo yang perlu memiliki background transparan:
- `/public/Logo Lak Putih.avif` - Logo putih untuk header saat di homepage (tidak di-scroll)

## Cara Membuat Logo Transparan

### Opsi 1: Menggunakan Photoshop
1. Buka file logo asli di Photoshop
2. Pilih layer background
3. Klik kanan > Delete Layer (hapus background putih)
4. File > Export > Export As
5. Pilih format **PNG** atau **WebP** (jangan JPEG karena tidak support transparency)
6. Pastikan checkbox "Transparency" dicentang
7. Save dengan nama `Logo Lak Putih.png` atau `Logo Lak Putih.webp`
8. Convert ke AVIF menggunakan tool online atau command line

### Opsi 2: Menggunakan GIMP (Gratis)
1. Buka file logo di GIMP
2. Layer > Transparency > Add Alpha Channel
3. Gunakan "Select by Color Tool" untuk select background putih
4. Tekan Delete untuk menghapus background
5. File > Export As
6. Pilih format **PNG** atau **WebP**
7. Save dengan nama `Logo Lak Putih.png`
8. Convert ke AVIF jika diperlukan

### Opsi 3: Menggunakan Canva (Online)
1. Upload logo ke Canva
2. Pilih "Background Remover" (fitur premium)
3. Download sebagai PNG (dengan transparent background)
4. Rename menjadi `Logo Lak Putih.png`
5. Convert ke AVIF jika diperlukan

### Opsi 4: Menggunakan Photopea (Online & Gratis)
1. Buka [photopea.com](https://www.photopea.com)
2. Upload file logo
3. Hapus background layer
4. File > Export As > PNG
5. Download dan rename menjadi `Logo Lak Putih.png`

### Opsi 5: Menggunakan remove.bg (Online & Gratis)
1. Buka [remove.bg](https://www.remove.bg)
2. Upload logo
3. Download hasil dengan background transparan
4. Rename menjadi `Logo Lak Putih.png`

## Convert PNG ke AVIF

Setelah mendapat file PNG dengan background transparan, convert ke AVIF:

### Menggunakan Online Converter:
- [Squoosh.app](https://squoosh.app) - Tool dari Google
- [CloudConvert](https://cloudconvert.com/png-to-avif)

### Menggunakan Command Line (jika sudah install ImageMagick):
```bash
magick convert "Logo Lak Putih.png" "Logo Lak Putih.avif"
```

## Lokasi File

Setelah mendapatkan file logo dengan background transparan:
1. Simpan file ke folder `/public/`
2. Nama file harus **persis** `Logo Lak Putih.avif`
3. Replace file lama yang sudah ada

## Verifikasi

Untuk memverifikasi logo sudah transparan:
1. Buka file di image viewer
2. Background seharusnya menampilkan pola checkerboard (kotak-kotak abu-abu)
3. Atau coba taruh di background berwarna, logo harus tidak memiliki kotak putih di sekitarnya

## Catatan Penting

- File JPEG **TIDAK SUPPORT** transparency
- Hanya PNG, WebP, AVIF, dan GIF yang support transparent background
- Ukuran logo sebaiknya dioptimasi agar tidak terlalu besar (max 200KB)
- Quality AVIF bisa diset 80-90% untuk keseimbangan antara kualitas dan ukuran file
