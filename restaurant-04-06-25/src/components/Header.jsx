import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">RestaurantJ</h1>
      <nav className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/items">Recetas</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  )
}
