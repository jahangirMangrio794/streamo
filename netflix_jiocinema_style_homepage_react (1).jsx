export default function StreamoHomePage() {
  const trending = [
    {
      title: 'Action Hero',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Kids Cartoon',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Drama Series',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Comedy Show',
      image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const sections = [
    'Trending Now',
    'Pakistani Dramas',
    'Kids Cartoons',
    'Latest Movies',
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-black/90 sticky top-0 z-50 border-b border-gray-800">
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-bold text-red-600">STREAMO</h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Movies</a>
            <a href="#" className="hover:text-white">Series</a>
            <a href="#" className="hover:text-white">Kids</a>
            <a href="#" className="hover:text-white">Live TV</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="bg-gray-900 border border-gray-700 rounded-full px-4 py-2 text-sm outline-none w-40 md:w-64"
          />

          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-semibold">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-2xl px-6 md:px-12">
          <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            Trending
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Watch Unlimited Movies & Shows
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Enjoy blockbuster movies, kids cartoons, Pakistani dramas, and web series in HD quality.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              ▶ Watch Now
            </button>

            <button className="bg-gray-700/80 px-6 py-3 rounded-full font-bold hover:bg-gray-600 transition">
              + My List
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-6 md:px-12 py-10 space-y-14">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-bold">{section}</h3>
              <button className="text-red-500 hover:text-red-400 text-sm">
                View All
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {trending.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h4 className="font-bold text-lg">{item.title}</h4>

                    <button className="mt-3 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm font-semibold">
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Banner */}
      <section className="mx-6 md:mx-12 mb-14 bg-gradient-to-r from-red-700 to-red-500 rounded-3xl p-10 text-center">
        <h3 className="text-4xl font-extrabold">Unlimited Entertainment</h3>
        <p className="mt-4 text-lg text-red-100">
          Stream movies, dramas, cartoons, and live channels anytime anywhere.
        </p>

        <button className="mt-6 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
          Subscribe Now
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Streamo Entertainment. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ===============================
// MOVIE PLAYER PAGE (NEW)
// ===============================

export function MoviePlayerPage() {
  const movie = {
    title: 'Action Hero Movie',
    description:
      'A high intensity action movie with stunning visuals and gripping storyline. Watch in HD quality anytime.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    episodes: [
      'Episode 1 - The Beginning',
      'Episode 2 - Rising Action',
      'Episode 3 - The Twist',
      'Episode 4 - Final Battle',
    ],
    related: [
      { title: 'Action Hero 2', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Spy Mission', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop' },
      { title: 'War Zone', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop' },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <button className="text-white text-sm bg-gray-800 px-4 py-2 rounded-full">
          ← Back
        </button>
        <h1 className="text-red-600 font-bold text-2xl">STREAMO</h1>
        <div></div>
      </div>

      {/* Video Player */}
      <div className="px-6 md:px-12 py-6">
        <video
          className="w-full rounded-2xl bg-black"
          controls
          src={movie.videoUrl}
        />

        {/* Movie Info */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold">{movie.title}</h2>
          <p className="text-gray-400 mt-2 max-w-3xl">{movie.description}</p>

          <div className="flex gap-3 mt-4">
            <button className="bg-red-600 px-5 py-2 rounded-full font-semibold">
              ▶ Play
            </button>
            <button className="bg-gray-800 px-5 py-2 rounded-full">
              + Add to List
            </button>
          </div>
        </div>

        {/* Episodes */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-3">Episodes</h3>
          <div className="grid gap-3">
            {movie.episodes.map((ep, i) => (
              <div
                key={i}
                className="bg-gray-900 p-3 rounded-xl hover:bg-gray-800 cursor-pointer"
              >
                {ep}
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Related Movies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {movie.related.map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-gray-900 hover:scale-105 transition">
                <img src={item.image} className="h-48 w-full object-cover" />
                <div className="p-3 font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

