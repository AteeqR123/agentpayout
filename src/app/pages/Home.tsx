import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { Overview } from '../components/Overview';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { AgentNetwork } from '../components/AgentNetwork';
import { PaymentMethods } from '../components/PaymentMethods';
import { Trustability } from '../components/Trustability';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Overview />
      <HowItWorks />
      <Features />
      <AgentNetwork />
      <PaymentMethods />
      <Trustability />
      <FAQ />
      <CTA />
    </>
  );
}
