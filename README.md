# Tugas Black Box Testing dengan JavaScript

**Dosen Pengampu**  
Deni Suprihadi, S.T, M.Kom., MCE.

**Materi**  
- Session 1: Definisi dan konsep  
- Session 2: Model Black Box Testing

**Disusun Oleh:**  
- Arya Nugraha  
- NIM: 20221310064  
- Denita Alhamdina Putri Arisandi  
- NIM: 20221310013

## Deskripsi  
Tugas ini bertujuan untuk memahami dan mengimplementasikan pengujian Black Box Testing menggunakan JavaScript. Black Box Testing adalah metode pengujian perangkat lunak yang fokus pada pengujian fungsionalitas aplikasi tanpa melihat struktur internal atau kode sumber aplikasi.

## Model Pengujian yang Digunakan

### 1. Boundary Value Analysis
Boundary Value Analysis (BVA) adalah teknik pengujian yang menguji nilai-nilai ekstrem dari input yang dapat diterima oleh aplikasi. Pengujian ini memastikan bahwa program dapat menangani batas nilai dengan benar.

#### Contoh Kode:
```javascript
function cekBatasNilai(angka) {
  if (angka >= 0 && angka <= 100) {
    return "Nilai valid";
  } else {
    return "Nilai tidak valid";
  }
}

console.log(cekBatasNilai(0));  // Output: Nilai valid
console.log(cekBatasNilai(100));  // Output: Nilai valid
console.log(cekBatasNilai(-1));  // Output: Nilai tidak valid
