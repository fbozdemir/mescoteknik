const fs = require('fs');
const path = require('path');

// useState kullanan dosyaların listesi
const filesToFix = [
  'src/app/[locale]/urunler/cift-kafali-rulo-acici/page.tsx',
  'src/app/[locale]/urunler/asma-tavan-uretim-hatti/page.tsx',
  'src/app/[locale]/urunler/mini-servo-surucu/page.tsx',
  'src/app/[locale]/urunler/mini-dogrultmali-servo-surucu/page.tsx',
  'src/app/[locale]/urunler/zigzag-surucu-sistemi/page.tsx',
  'src/app/[locale]/urunler/mekanik-rulo-acici/page.tsx',
  'src/app/[locale]/urunler/iskele-kalas-uretim-hatti/page.tsx',
  'src/app/[locale]/urunler/kompakt-l-serisi/page.tsx',
  'src/app/[locale]/urunler/kompakt-m-serisi/page.tsx',
  'src/app/[locale]/urunler/yuksek-performansli-laminasyon-kaliplari/page.tsx',
  'src/app/[locale]/urunler/hidrolik-rulo-acici/page.tsx',
  'src/app/[locale]/urunler/rulo-sac-boy-kesme-hatti/page.tsx',
  'src/app/[locale]/urunler/yuksek-hizli-hassas-laminasyon-pres-hatlari/page.tsx',
  'src/app/[locale]/urunler/rotor-stator-lazer-kesim-makineleri/page.tsx',
  'src/app/[locale]/urunler/rulo-sac-acma-dogrultma-surme-grubu/page.tsx',
  'src/app/[locale]/urunler/rulo-sac-perfore-hatti/page.tsx',
  'src/app/[locale]/urunler/rulo-sac-dilme-hatti/page.tsx',
  'src/app/[locale]/urunler/soguk-sekillendirme-pres-hatlari/page.tsx',
  'src/app/[locale]/urunler/servo-surucu-sistemi/page.tsx',
  'src/app/[locale]/urunler/genis-capli-rotor-stator-orta-hizli-laminasyon-pres-hatlari/page.tsx',
  'src/app/[locale]/urunler/dogrultmali-servo-surucu/page.tsx',
  'src/app/[locale]/urunler/sicak-soguk-ilik-dovme-pres-hatlari/page.tsx',
  'src/app/[locale]/urunler/rotor-stator-paketleme-cozumleri/page.tsx',
  'src/app/[locale]/urunler/otomasyon/page.tsx',
  'src/app/[locale]/urunler/gagalama-presi/page.tsx'
];

function addUseClientDirective(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Eğer zaten "use client" varsa, hiçbir şey yapma
    if (content.includes('"use client"')) {
      console.log(`✅ ${filePath} - zaten "use client" var`);
      return;
    }
    
    // İlk satıra "use client" ekle
    const newContent = '"use client"\n\n' + content;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ ${filePath} - "use client" eklendi`);
  } catch (error) {
    console.error(`❌ ${filePath} - hata:`, error.message);
  }
}

// Tüm dosyaları düzelt
console.log('🚀 "use client" direktifi ekleniyor...\n');

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    addUseClientDirective(filePath);
  } else {
    console.log(`⚠️  ${filePath} - dosya bulunamadı`);
  }
});

console.log('\n🎉 Tüm dosyalar düzeltildi!');
