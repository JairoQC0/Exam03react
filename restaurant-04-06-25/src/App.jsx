import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CardList from './components/CardList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ItemList from './components/ItemList'
import ContactForm from './components/ContactForm'


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroBanner />
            <CardList />
          </>
        } />
        <Route path="/items" element={<ItemList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <ToastContainer />
    </>
  )
}
