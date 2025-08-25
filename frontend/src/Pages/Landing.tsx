
const Landing = () => {
  return (
    <div>
        <section className="flex flex-col items-center justify-center h-[50vh] bg-yellow-100 mb-8 rounded-lg shadow">
          <h1 className="text-5xl font-bold mb-4 text-orange-500">Minimal Library Management System</h1>
          <p className="text-xl text-gray-700 mb-6">Effortlessly manage you library, books and borrowings.</p>
          <button className="px-6 py-2 bg-orange-400 text-white font-semibold rounded hover:bg-orange-500 transition">Explre Books</button>
        </section>
    </div>
  )
}

export default Landing;