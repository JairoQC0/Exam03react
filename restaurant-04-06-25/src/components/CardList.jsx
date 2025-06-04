import movies from '../data/recetas'

export default function CardList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {movies.map(movie => (
        <div key={movie.id} className="bg-white shadow-lg rounded p-4">
          <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover rounded" />
          <h3 className="text-xl font-bold mt-2">{movie.title}</h3>
          <p className="text-gray-700 mt-1">{movie.description}</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Ver más</button>
        </div>
      ))}
    </section>
  )
}
