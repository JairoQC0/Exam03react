export default function ContactForm() {
  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Correo electrónico</label>
          <input type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea className="w-full border rounded px-3 py-2" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </main>
  )
}
