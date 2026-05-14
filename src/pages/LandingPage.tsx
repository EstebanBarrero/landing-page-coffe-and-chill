import { LandingNav }          from '@/components/landing/LandingNav'
import { HeroSection }         from '@/components/landing/HeroSection'
import { FeaturesSection }     from '@/components/landing/FeaturesSection'
import { HowItWorksSection }   from '@/components/landing/HowItWorksSection'
import { WorkshopsSection }    from '@/components/landing/WorkshopsSection'
import { AtmosphereSection }   from '@/components/landing/AtmosphereSection'
import { TeamSection }         from '@/components/landing/TeamSection'
import { InfoSection }         from '@/components/landing/InfoSection'
import { LandingFooter }       from '@/components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />
      <LandingNav />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WorkshopsSection />
        <AtmosphereSection />
        <TeamSection />
        <InfoSection />
      </main>
      <LandingFooter />
    </>
  )
}
