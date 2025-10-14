import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero'
import MapSection from '@/components/sections/map'
import AccommodationSection from '@/components/sections/accommodation'
import FaqSection from '@/components/sections/faq'
import RsvpSection from '@/components/sections/rsvp'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n-config'

const getFaqs = (dict: any) => [
    {
        question: dict.data.faqs.q1,
        answer: (
            <>
                <p className="font-bold">{dict.data.faqs.a1_casual_title}</p>
                <p>{dict.data.faqs.a1_casual_body}</p>
                <br />
                <p className="font-bold">{dict.data.faqs.a1_beach_formal_title}</p>
                <p>{dict.data.faqs.a1_beach_formal_body}</p>
                <br />
                <p className="font-bold">{dict.data.faqs.a1_formal_title}</p>
                <p>{dict.data.faqs.a1_formal_body}</p>
            </>
        ),
    },
    {
        question: dict.data.faqs.q2,
        answer: dict.data.faqs.a2,
    },
    {
        question: dict.data.faqs.q3,
        answer: dict.data.faqs.a3,
    },
    {
        question: dict.data.faqs.q4,
        answer: dict.data.faqs.a4,
    },
];

const getLocations = (dict: any) => [
  {
    id: "el-ganzo",
    name: dict.data.location_names.el_ganzo,
    address: dict.data.location_addresses.el_ganzo,
    events: [dict.data.events.welcome_cocktail, dict.data.events.pool_party],
    position: { top: "45%", left: "25%" },
  },
  {
    id: "yetti",
    name: dict.data.location_names.yetti,
    address: dict.data.location_addresses.yetti,
    events: [dict.data.events.ceremony, dict.data.events.reception],
    position: { top: "30%", left: "75%" },
  },
  {
    id: "sculpture-garden",
    name: dict.data.location_names.sculpture_garden,
    address: dict.data.location_addresses.sculpture_garden,
    events: [dict.data.events.farewell_brunch],
    position: { top: "70%", left: "35%" },
  },
  {
    id: "crania",
    name: dict.data.location_names.crania,
    address: dict.data.location_addresses.crania,
    events: [dict.data.events.dinner_party],
    position: { top: "65%", left: "80%" },
  },
  {
    id: "la-marina-inn",
    name: dict.data.location_names.la_marina_inn,
    address: dict.data.location_addresses.la_marina_inn,
    events: [],
    position: { top: "20%", left: "15%" },
  },
];

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <main className="flex-1">
        <Header dictionary={dictionary.nav} />
        <HeroSection dictionary={dictionary.hero} />
        <MapSection dictionary={dictionary.map} locations={getLocations(dictionary)} />
        <AccommodationSection lang={lang} dictionary={dictionary.accommodation} />
        <FaqSection dictionary={dictionary.faq} faqs={getFaqs(dictionary)} />
        <RsvpSection lang={lang} dictionary={dictionary.rsvp} />
        <Footer dictionary={dictionary.footer} />
      </main>
    </div>
  )
}
