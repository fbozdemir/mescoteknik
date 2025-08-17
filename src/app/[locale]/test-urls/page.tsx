'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { urlMappings } from '@/config/urlMappings';

export default function TestUrls() {
  const params = useParams();
  const locale = params?.locale as string || 'tr';

  return (
    <div className="pt-24 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">
        {locale === 'tr' ? 'URL Test Sayfası' : 'URL Test Page'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Turkish URLs */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Türkçe URL'ler</h2>
          <div className="space-y-2">
            {Object.keys(urlMappings).slice(0, 10).map((turkishUrl) => (
              <div key={turkishUrl} className="flex flex-col">
                <Link 
                  href={`/tr/${turkishUrl}`}
                  className="text-blue-600 hover:underline"
                >
                  /tr/{turkishUrl}
                </Link>
                <span className="text-sm text-gray-500">
                  → /en/{urlMappings[turkishUrl as keyof typeof urlMappings]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* English URLs */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">English URLs</h2>
          <div className="space-y-2">
            {Object.values(urlMappings).slice(0, 10).map((englishUrl) => (
              <div key={englishUrl} className="flex flex-col">
                <Link 
                  href={`/en/${englishUrl}`}
                  className="text-blue-600 hover:underline"
                >
                  /en/{englishUrl}
                </Link>
                <span className="text-sm text-gray-500">
                  → /tr/{Object.keys(urlMappings).find(key => urlMappings[key as keyof typeof urlMappings] === englishUrl)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
        <h3 className="font-semibold mb-2">Test Senaryoları:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>İngilizce sayfada Türkçe URL yazarsanız otomatik olarak İngilizce URL'ye yönlendirilmelisiniz</li>
          <li>Türkçe sayfada İngilizce URL yazarsanız otomatik olarak Türkçe URL'ye yönlendirilmelisiniz</li>
          <li>Yanlış URL kombinasyonları otomatik olarak düzeltilmelidir</li>
        </ul>
      </div>
    </div>
  );
}
