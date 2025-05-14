
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


### 2. **Comparison Testing**

**Comparison Testing** adalah pengujian yang membandingkan keluaran dari dua aplikasi atau lebih yang memiliki fungsionalitas yang serupa.

#### Contoh Kode:

```javascript
function bandingkanAngka(a, b) {
  if (a === b) {
    return "Angka sama";
  } else {
    return "Angka berbeda";
  }
}

console.log(bandingkanAngka(5, 5));  // Output: Angka sama
console.log(bandingkanAngka(5, 3));  // Output: Angka berbeda
```

---

### 3. **Sample Testing**

**Sample Testing** adalah teknik pengujian yang memilih sejumlah sampel dari data yang tersedia dan menguji sampel tersebut.

#### Contoh Kode:

```javascript
const data = [10, 20, 30, 40, 50];

function ujiSampel(arr) {
  return arr[0] + arr[arr.length - 1];
}

console.log(ujiSampel(data));  // Output: 60 (10 + 50)
```

---

### 4. **Behaviour Testing**

**Behaviour Testing** fokus pada cara aplikasi merespons input tertentu atau interaksi dengan pengguna.

#### Contoh Kode:

```javascript
function cekStatusLogin(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login berhasil";
  } else {
    return "Login gagal";
  }
}

console.log(cekStatusLogin("admin", "1234"));  // Output: Login berhasil
console.log(cekStatusLogin("user", "abcd"));  // Output: Login gagal
```

---

### 5. **Endurance Testing**

**Endurance Testing** bertujuan untuk menguji daya tahan aplikasi dengan memberikan beban atau input yang berkelanjutan dalam waktu yang lama.

#### Contoh Kode:

```javascript
function pengujianEndurance() {
  let startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < 5000) { // 5 detik
    count++;
  }

  return `Aplikasi berjalan selama ${count} iterasi dalam 5 detik.`;
}

console.log(pengujianEndurance());
```

---

### 6. **Performance Testing**

**Performance Testing** digunakan untuk menguji seberapa baik aplikasi berfungsi di bawah kondisi beban tertentu.

#### Contoh Kode:

```javascript
function ujiPerforma() {
  let startTime = Date.now();
  let result = 0;

  for (let i = 0; i < 1000000; i++) {
    result += i;
  }

  let endTime = Date.now();
  return `Waktu yang dibutuhkan untuk menghitung 1 juta angka: ${endTime - startTime} ms`;
}

console.log(ujiPerforma());
```

---

### 7. **Cause-Effect Relationship Testing**

**Cause-Effect Relationship Testing** adalah metode pengujian untuk memeriksa hubungan antara input dan keluaran.

#### Contoh Kode:

```javascript
function cekHari(hari) {
  if (hari === "Senin") {
    return "Hari kerja";
  } else if (hari === "Sabtu" || hari === "Minggu") {
    return "Weekend";
  } else {
    return "Hari kerja";
  }
}

console.log(cekHari("Senin"));  // Output: Hari kerja
console.log(cekHari("Minggu"));  // Output: Weekend
```

---

## Instalasi

Untuk menjalankan kode ini di lokal, ikuti langkah-langkah berikut:

1. **Clone Repository**:
   Salin URL repository ini dan jalankan perintah berikut di terminal:
   `git clone https://github.com/username/black-box-testing-js.git`

2. **Akses Folder Proyek**:
   Masuk ke folder proyek yang telah di-clone:
   `cd black-box-testing-js`

3. **Jalankan Kode**:
   Kode dalam file tugas.js dapat dijalankan menggunakan Node.js. Pastikan Anda telah menginstal Node.js.
   Untuk menjalankan kode, ketik perintah berikut di terminal:
   `node tugas.js`

---

## Kontribusi

Jika Anda ingin berkontribusi pada repository ini, silakan buat fork dan kirim pull request. Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan.

```

---

This format organizes the Black Box Testing content clearly in sections, following a **Canvas-style structure** with **headers, code examples, and instructions**, making it easy to read and follow in a **GitHub markdown environment**. You can copy this directly into a markdown file for GitHub or any other platform that supports Markdown rendering.
```
