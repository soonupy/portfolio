// src/Playground.tsx
import { Introduce } from './sections/Introduce'
import { Navigation } from './sections/Nav'
import { Ability } from './sections/Ability'
import { StackTool } from './sections/StackTool'
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
      {/* <Introduce /> */}
        

      <Ability />
      <StackTool />
      {children}
    </main>
  )
}

export default Main



