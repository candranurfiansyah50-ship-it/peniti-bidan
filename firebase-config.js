// Import SDK Firebase yang dibutuhkan
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "AIzaSyAs0-y2twWezIFzYwFEDLu6BPMFYC735u0",
    authDomain: "penitibidanpasongsongan.firebaseapp.com",
    projectId: "penitibidanpasongsongan",
    storageBucket: "penitibidanpasongsongan.firebasestorage.app",
    messagingSenderId: "665656505186",
    appId: "1:665656505186:web:2aaaf4df493534604db23b",
    measurementId: "G-R01CT4PX4W"
};

// Inisialisasi Firebase & Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Ekspor fungsi agar bisa dipanggil dari file HTML lain
export { collection, addDoc, getDocs };