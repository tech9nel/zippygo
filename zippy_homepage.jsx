export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Zippy</h1>
        <nav className="space-x-4">
          <button className="text-sm text-gray-700 hover:text-blue-600">Giriş</button>
          <button className="text-sm text-gray-700 hover:text-blue-600">Kayıt Ol</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Aracını Kiraya Ver</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">İstanbul’da Araç Kirala</h2>
        <p className="text-lg mb-6 text-gray-600">Zippy ile güvenli ve hızlı araç paylaşımı</p>
        <div className="max-w-xl mx-auto bg-white rounded shadow p-4 flex gap-2">
          <input
            type="text"
            placeholder="Konum"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="date"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Ara
          </button>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-semibold mb-6">Popüler Araçlar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src="https://source.unsplash.com/400x200/?car" alt="Araç" className="w-full" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">Araç Modeli {item}</h4>
                <p className="text-sm text-gray-600">Günlük ₺750</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-10">Neden Zippy?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="font-bold">Güvenli Kiralama</h4>
            <p className="text-sm text-gray-600">Her kiralama Zippy güvencesiyle gerçekleşir.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⏱️</div>
            <h4 className="font-bold">Esnek Zamanlama</h4>
            <p className="text-sm text-gray-600">İstediğin zaman kirala veya kiraya ver.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💸</div>
            <h4 className="font-bold">Gelir Elde Et</h4>
            <p className="text-sm text-gray-600">Boştaki aracınla ek gelir kazan.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; 2025 Zippy. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
