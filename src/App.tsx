/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  UserPlus, 
  XCircle, 
  Users, 
  ChevronRight, 
  Info, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Phone,
  Globe,
  BookOpen
} from 'lucide-react';

type Section = 'pendaftaran' | 'pembatalan' | 'pelimpahan';

export default function App() {
  const [activeTab, setActiveTab] = useState<Section>('pendaftaran');

  const sections = {
    pendaftaran: {
      title: 'Syarat Pendaftaran Haji',
      icon: <UserPlus className="w-6 h-6" />,
      color: 'bg-hajj-brown',
      items: [
        'Beragama Islam.',
        'Berusia minimal 12 tahun pada saat mendaftar.',
        'KTP yang sah sesuai domisili (asli & fotokopi).',
        'Kartu Keluarga (asli & fotokopi).',
        'Akta Kelahiran / Surat Kenal Lahir / Kutipan Akta Nikah / Ijazah.',
        'Memiliki Tabungan Haji pada Bank Penerima Setoran (BPS) BPIH.',
        'Menyerahkan setoran awal sebesar Rp 25.000.000,-.',
        'Pas foto terbaru 3x4 (5 lembar) dengan latar belakang putih.'
      ]
    },
    pembatalan: {
      title: 'Syarat Pembatalan Haji',
      icon: <XCircle className="w-6 h-6" />,
      color: 'bg-stone-700',
      items: [
        'Surat permohonan pembatalan bermaterai cukup.',
        'Bukti asli setoran awal BPIH yang dikeluarkan oleh Bank.',
        'SPPH (Surat Pendaftaran Pergi Haji) asli.',
        'Fotokopi KTP dan Buku Tabungan yang masih aktif.',
        'Jika meninggal dunia: Surat Kematian dari instansi berwenang.',
        'Surat kuasa ahli waris bermaterai (jika dibatalkan oleh ahli waris).',
        'Proses pengembalian dana memakan waktu sesuai ketentuan.'
      ]
    },
    pelimpahan: {
      title: 'Syarat Pelimpahan Nomor Porsi',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-hajj-gold',
      items: [
        'Hanya untuk Jemaah yang meninggal dunia atau sakit permanen.',
        'Penerima pelimpahan adalah suami, istri, ayah, ibu, anak kandung, atau saudara kandung.',
        'Surat permohonan pelimpahan nomor porsi.',
        'Surat keterangan kematian (asli) atau surat keterangan sakit permanen dari RS Pemerintah.',
        'Surat kuasa penunjukan pelimpahan nomor porsi bermaterai.',
        'Fotokopi KTP, KK, dan Akta Lahir/Nikah penerima pelimpahan.',
        'Penerima pelimpahan harus memenuhi syarat pendaftaran haji.'
      ]
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <header className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-hajj-brown">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Kaaba" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-hajj-gold/20 text-hajj-gold text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm border border-hajj-gold/30">
              Informasi Resmi Haji
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Brosur Digital Haji
            </h1>
            <p className="text-stone-200/80 max-w-xl mx-auto text-lg">
              Panduan lengkap tata cara pendaftaran, pembatalan, dan pelimpahan porsi haji sesuai regulasi terbaru.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 -mt-16 pb-20 relative z-20">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
          {(Object.keys(sections) as Section[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
                activeTab === key 
                  ? 'bg-white shadow-xl scale-105 border-b-4 border-hajj-gold' 
                  : 'bg-white/60 hover:bg-white/80 text-stone-500'
              }`}
            >
              <div className={`p-3 rounded-xl mb-2 ${activeTab === key ? sections[key].color + ' text-white' : 'bg-stone-100'}`}>
                {sections[key].icon}
              </div>
              <span className={`text-xs md:text-sm font-bold uppercase tracking-wide text-center`}>
                {key}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100"
          >
            <div className={`h-2 ${sections[activeTab].color}`} />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl ${sections[activeTab].color} text-white shadow-lg`}>
                  {sections[activeTab].icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
                  {sections[activeTab].title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {sections[activeTab].items.map((item, index) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={index} 
                      className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-hajj-gold/20 transition-colors group"
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${activeTab === 'pendaftaran' ? 'text-hajj-brown' : activeTab === 'pembatalan' ? 'text-stone-500' : 'text-hajj-gold'}`} />
                      <p className="text-stone-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="hidden md:block">
                  <div className="sticky top-8 p-6 rounded-3xl bg-hajj-brown text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-hajj-gold/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4 text-hajj-gold">
                        <Info className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-widest">Catatan Penting</span>
                      </div>
                      <p className="text-stone-300 text-sm leading-relaxed mb-6">
                        Seluruh proses administrasi dilakukan di Kantor Kementerian Haji Kabupaten/Kota domisili sesuai KTP jemaah. Pastikan dokumen asli dibawa saat verifikasi.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-stone-400">
                          <BookOpen className="w-4 h-4" />
                          <span>PMHU Nomor 3 Tahun 2025</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-400">
                          <MapPin className="w-4 h-4" />
                          <span>Kemhaj Kabupaten/Kota </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-hajj-brown">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Call Center</p>
              <p className="font-bold text-stone-800">1500 425</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-hajj-gold">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Website Resmi</p>
              <p className="font-bold text-stone-800">haji.go.id</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-600">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Aplikasi</p>
              <p className="font-bold text-stone-800">Haji Pintar</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-stone-900 py-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-stone-500 text-sm">
            &copy; 2025 Informasi Haji Indonesia. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-stone-600 text-xs mt-2">
            Informasi ini bersifat panduan umum. Silakan hubungi Kantor Kemenhaj setempat untuk detail lebih lanjut.
          </p>
        </div>
      </footer>
    </div>
  );
}
