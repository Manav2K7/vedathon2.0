import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Schedule } from './pages/Schedule'
import { Gallery } from './pages/Gallery'
import { Tracks } from './pages/Tracks'
import { Prizes } from './pages/Prizes'
import { Sponsors } from './pages/Sponsors'
import { Team } from './pages/Team'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  )
}

export default App
