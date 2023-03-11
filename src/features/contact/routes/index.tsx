import { Routes, Route, Navigate } from 'react-router-dom'

const ContactUsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Contact Us</div>} />
      <Route path='/details' element={<div>Details Element</div>} />
      <Route path='*' element={<Navigate to='.' />} />
    </Routes>
  )
}

export { ContactUsRoutes }
