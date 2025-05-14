// 1. Boundary Value Analysis (BVA)
function cekBatasNilai(angka) {
  if (angka >= 0 && angka <= 100) {
    return "Nilai valid";
  } else {
    return "Nilai tidak valid";
  }
}

// Test Boundary Value Analysis
console.log(cekBatasNilai(0));    // Output: Nilai valid
console.log(cekBatasNilai(100));  // Output: Nilai valid
console.log(cekBatasNilai(-1));   // Output: Nilai tidak valid
console.log(cekBatasNilai(101));  // Output: Nilai tidak valid


// 2. Comparison Testing
function bandingkanAngka(a, b) {
  if (a === b) {
    return "Angka sama";
  } else {
    return "Angka berbeda";
  }
}

// Test Comparison Testing
console.log(bandingkanAngka(5, 5));  // Output: Angka sama
console.log(bandingkanAngka(5, 3));  // Output: Angka berbeda


// 3. Sample Testing
const data = [10, 20, 30, 40, 50];

function ujiSampel(arr) {
  return arr[0] + arr[arr.length - 1];
}

// Test Sample Testing
console.log(ujiSampel(data));  // Output: 60 (10 + 50)


// 4. Behaviour Testing
function cekStatusLogin(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login berhasil";
  } else {
    return "Login gagal";
  }
}

// Test Behaviour Testing
console.log(cekStatusLogin("admin", "1234"));  // Output: Login berhasil
console.log(cekStatusLogin("user", "abcd"));  // Output: Login gagal


// 5. Endurance Testing
function pengujianEndurance() {
  let startTime = Date.now();
  let count = 0;

  // Simulating a task that runs for 5 seconds
  while (Date.now() - startTime < 5000) { // 5 detik
    count++;
  }

  return `Aplikasi berjalan selama ${count} iterasi dalam 5 detik.`;
}

// Test Endurance Testing
console.log(pengujianEndurance());


// 6. Performance Testing
function ujiPerforma() {
  let startTime = Date.now();
  let result = 0;

  for (let i = 0; i < 1000000; i++) {
    result += i; // Adding numbers from 0 to 999,999
  }

  let endTime = Date.now();
  return `Waktu yang dibutuhkan untuk menghitung 1 juta angka: ${endTime - startTime} ms`;
}

// Test Performance Testing
console.log(ujiPerforma());


// 7. Cause-Effect Relationship Testing
function cekHari(hari) {
  if (hari === "Senin") {
    return "Hari kerja";
  } else if (hari === "Sabtu" || hari === "Minggu") {
    return "Weekend";
  } else {
    return "Hari kerja";
  }
}

// Test Cause-Effect Relationship Testing
console.log(cekHari("Senin"));  // Output: Hari kerja
console.log(cekHari("Minggu"));  // Output: Weekend
console.log(cekHari("Rabu"));   // Output: Hari kerja
