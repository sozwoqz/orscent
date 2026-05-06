import { HeroSection }        from '@/components/sections/HeroSection'
import { StorySection }       from '@/components/sections/StorySection'
import { BestSellersSection } from '@/components/sections/BestSellersSection'
import { CollectionsSection } from '@/components/sections/CollectionsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { NewsletterSection }  from '@/components/sections/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <BestSellersSection />
      <CollectionsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
