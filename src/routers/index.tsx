import Home from '@pages/Home'
import Hotel from '@pages/Hotel'
import List from '@pages/List'
import { Route, Routes as Router } from 'react-router-dom'
import { routes } from './routes'

const Routes = () => {
   return (
      <Router>
         <Route path={routes.default} element={<Home />} />
         <Route path={routes.hotel.default} element={<List />} />
         <Route path={routes.hotel.detail} element={<Hotel />} />
      </Router>
   )
}

export default Routes
