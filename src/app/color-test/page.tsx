"use client";

export default function ColorTest() {
  return (
    <div className="min-h-screen p-12">
      <h1 className="text-4xl font-bold mb-8">Neutral Color Palette Test</h1>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-50 border border-neutral-200 rounded-lg"></div>
          <div>
            <p className="font-bold">neutral-50</p>
            <p className="text-sm text-neutral-600">#fafafa</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-100 border border-neutral-200 rounded-lg"></div>
          <div>
            <p className="font-bold">neutral-100</p>
            <p className="text-sm text-neutral-600">#f5f5f5</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-200 border border-neutral-300 rounded-lg"></div>
          <div>
            <p className="font-bold">neutral-200</p>
            <p className="text-sm text-neutral-600">#e5e5e5</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-300 rounded-lg"></div>
          <div>
            <p className="font-bold">neutral-300</p>
            <p className="text-sm text-neutral-600">#d4d4d4</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-400 rounded-lg"></div>
          <div>
            <p className="font-bold">neutral-400</p>
            <p className="text-sm text-neutral-600">#a3a3a3</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-500 rounded-lg"></div>
          <div>
            <p className="font-bold text-white">neutral-500</p>
            <p className="text-sm text-white">#737373</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-600 rounded-lg"></div>
          <div>
            <p className="font-bold text-white">neutral-600</p>
            <p className="text-sm text-white">#525252</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-700 rounded-lg"></div>
          <div>
            <p className="font-bold text-white">neutral-700</p>
            <p className="text-sm text-white">#404040</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-800 rounded-lg"></div>
          <div>
            <p className="font-bold text-white">neutral-800</p>
            <p className="text-sm text-white">#262626</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 bg-neutral-900 rounded-lg"></div>
          <div>
            <p className="font-bold text-white">neutral-900</p>
            <p className="text-sm text-white">#171717</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Sample Components</h2>
        <button className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-all">
          Neutral Button
        </button>
        
        <div className="mt-4 bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Card with Neutral</h3>
          <p className="text-neutral-600">This is using neutral colors for a warm, professional look.</p>
        </div>
      </div>
    </div>
  );
}
