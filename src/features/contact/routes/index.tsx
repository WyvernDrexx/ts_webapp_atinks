import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutUs } from '../components'

const ContactUsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AboutUs />} />
      <Route path='/details' element={<div>Details Element</div>} />
      <Route path='*' element={<Navigate to='.' />} />
    </Routes>
  )
}

export { ContactUsRoutes }
