import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Particles from './effects/ParticlesBg'


type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <Particles
      particleColors={['#fff', '#fff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
      <Main>
        {children}
      </Main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout