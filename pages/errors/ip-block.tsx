import React, { useState } from 'react';
import { getErrorTranslation } from '@/config/translations';
import { ShieldBan } from 'lucide-react';

export default function IpBlockPage() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const { error, common } = getErrorTranslation('ip-block', lang);
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
        <button
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="absolute top-4 right-4 px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
        >
          {lang === 'zh' ? 'EN' : '中'}
        </button>
        
        <div className="flex items-center mb-4">
          <ShieldBan className="w-12 h-12 text-red-500 mr-4" />
          <h1 className="text-2xl font-bold">{error.title}</h1>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">{error.description}</p>
        </div>
        <div className="text-sm text-gray-500">
          <p>{common.rayId}: ::RAY_ID::</p>
          <p>{common.location}: ::GEO::</p>
        </div>
      </div>
    </div>
  );
} 