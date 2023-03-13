import { Route, Routes } from 'react-router-dom'
import { AboutUs } from './AboutUs'

const AboutUsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AboutUs />} />
    </Routes>
  )
}

export { AboutUsRoutes }