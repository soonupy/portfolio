// src/Playground.tsx
import { Introduce } from './sections/Introduce'
import { Navigation } from './sections/Nav'
// import Particles from './effects/ParticlesBg';

import "@styles/index.scss";
import "./effects/effect.scss";


type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="main">
      <Introduce />
        
      <Navigation />
      {children}
    </main>
  )
}

export default Main



