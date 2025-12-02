// src/Playground.tsx
import { Introduce } from './sections/Introduce'
import { Navigation } from './sections/Nav'
import { Ability } from './sections/Ability'
import { StackTool } from './sections/StackTool'
import { Career } from './sections/Career'
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
      <Ability />
      <StackTool />
      <Career />
      {children}
    </main>
  )
}

export default Main



