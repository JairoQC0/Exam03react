export default function HeroBanner() {
  return (
    <section className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('')" }}>
      <div className="bg-black/60 p-6 rounded">
        <h2 className="text-4xl font-bold">¡Bienvenido </h2>
        <p className="text-xl mt-2">Disfruta las mejores recetas</p>
      </div>
    </section>
  )
}
