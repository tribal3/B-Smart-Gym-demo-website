import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'en'

const en = {
  meta: {
    title: 'B Smart Gym — Gym in PECHS Block 2, Karachi',
    description:
      'B Smart Gym — a community gym on Nazrul Islam Road, Block 2 PECHS, Karachi. Explore training options, facilities and membership enquiries. Independent website concept by TRIBAL³.',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    experiences: 'Our Facilities',
    training: 'Training',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore Our Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Nazrul Islam Road · PECHS, Karachi',
    titleTop: 'Train Smart.',
    titleAccent: 'Get Stronger.',
    text: 'A welcoming, well-equipped gym on Nazrul Islam Road in Block 2 PECHS — built for strength, fitness and everyday progress.',
    ratingLabel: 'Google reviews',
    optionsValue: 'Full Gym Access',
    optionsLabel: 'Strength & cardio',
    locationValue: 'Nazrul Islam Rd, PECHS',
    locationLabel: 'Karachi, Pakistan',
    imageAlt: 'Modern gym training floor with strength and cardio equipment',
  },
  marquee: ['Strength', 'Discipline', 'Consistency', 'Energy'],
  about: {
    eyebrow: 'About B Smart Gym',
    index: '01',
    title: 'A neighbourhood gym in PECHS, built for real training.',
    text: 'B Smart Gym is a community gym on Nazrul Islam Road in Block 2 PECHS, Karachi. With modern equipment, a friendly atmosphere and trainers who keep sessions focused, it is a place to build strength, improve fitness and stay consistent — one session at a time.',
    points: [
      'Modern strength and cardio equipment',
      'Friendly, focused training atmosphere',
      'Easy to reach on Nazrul Islam Road, Block 2 PECHS',
    ],
    cardTitle: 'Training that fits real life',
    cardText: 'A welcoming floor, practical guidance and a focus on showing up.',
    imageAlt: 'Dumbbell rack on a modern gym training floor',
    caption: 'Concept visual — not the gym',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Two ways to train. One gym.',
    text: 'Pick the training style that fits your goals — both share the same welcoming energy and the same standard of showing up.',
    strength: {
      label: 'Strength Training',
      tag: 'Strength',
      desc: 'Build and maintain strength with focused resistance training on a well-equipped training floor.',
      tags: ['Free weights & machines', 'Strength & conditioning', 'Evening sessions'],
      cta: 'Ask About Strength Training',
      imageAlt: 'Gym floor with strength training equipment',
    },
    functional: {
      label: 'Functional Fitness',
      tag: 'Performance',
      desc: 'Build usable strength, stamina and movement quality with training focused on real-world performance.',
      tags: ['Functional strength', 'Conditioning & stamina', 'For all fitness levels'],
      cta: 'Ask About Functional Fitness',
      imageAlt: 'Athlete training with functional fitness equipment',
    },
    note: 'Presentation copy only. Please contact the gym directly to confirm facilities, access policies and schedules.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the goals you actually have.',
    text: 'From building strength to improving endurance, find a direction for your training and take it one session at a time.',
    items: [
      {
        title: 'Strength Training',
        desc: 'Build and maintain strength with focused resistance training.',
        icon: 'dumbbell',
      },
      {
        title: 'Functional Fitness',
        desc: 'Train movement patterns that carry over into everyday performance.',
        icon: 'heart',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Work on stamina and cardiovascular fitness at your own pace.',
        icon: 'target',
      },
      {
        title: 'Personal Guidance',
        desc: 'Ask about guidance on training safely and consistently.',
        icon: 'compass',
      },
    ],
    note: 'General fitness categories — contact the gym to confirm current programs and availability.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '04',
    title: 'Inside the training floor.',
    text: 'A look at the atmosphere, equipment and energy of a modern gym.',
    note: 'Reference imagery — stock photography used for this concept, not photographs of B Smart Gym.',
    alts: [
      'Modern gym training floor',
      'Strength training with a barbell',
      'Gym interior with strength equipment',
      'Focused training session',
      'Dumbbell rack',
      'Core and floor training',
      'Battle rope conditioning',
      'Outdoor running for endurance',
      'Mat-based fitness training',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why B Smart Gym',
    index: '05',
    title: 'Built for the long run.',
    text: 'A convenient PECHS location, modern equipment and a training floor with the energy to keep you coming back.',
    items: [
      {
        title: 'A welcoming training atmosphere',
        desc: 'Train in a friendly, focused space with room to move and equipment for every session.',
      },
      {
        title: 'A convenient PECHS location',
        desc: 'On Nazrul Islam Road in Block 2 PECHS, easy to reach from across the city.',
      },
      {
        title: 'Modern equipment and trainers',
        desc: 'A well-equipped floor with trainers who keep the sessions focused.',
      },
      {
        title: 'Evening hours that fit your day',
        desc: 'Open Monday to Saturday from 5 PM to 12 AM.',
      },
    ],
    ratingCaption: 'Based on 25 public Google reviews.',
    ratingLabel: 'Google Reviews',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Monday to Saturday, 5 PM – 12 AM.',
    text: 'Closed on Sunday. A quick call or WhatsApp message is the fastest way to confirm before you visit.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '06',
    title: 'Come train with us.',
    text: 'Questions about the gym, membership or training options? Reach out on WhatsApp or give us a call.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
    },
    locationTitle: 'Find us on Nazrul Islam Road, PECHS',
    locationText: 'Nazrul Islam Rd, Block 2 PECHS, Karachi. Open the listing in Google Maps for turn-by-turn directions.',
    locationChip: 'Landmark',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '03XX XXXXXXX',
      interest: 'Interested In',
      interestMembership: 'Gym Membership',
      interestTraining: 'Personal Training',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText: 'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy: 'For this demo, your details are not stored — they are only placed into a WhatsApp message.',
    },
  },
  footer: {
    tagline: 'Gym in Block 2 PECHS, Karachi. A training space built around showing up and getting stronger.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'About this site',
    demo: 'Independent website concept by TRIBAL³. All sample content and imagery are for demonstration purposes.',
    notAffiliated: 'Not affiliated with or authorized by B Smart Gym.',
    credit: 'Concept & design — TRIBAL³',
  },
  whatsappMessages: {
    general: 'Hello B Smart Gym, I found your website and would like to ask about membership.',
    strength: 'Hello B Smart Gym, I would like to ask about strength training.',
    functional: 'Hello B Smart Gym, I would like to ask about functional fitness training.',
    join: 'Hello B Smart Gym, I would like to join. Could you share the available membership options?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

export const copy = { en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr'
  isRtl: false
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    root.lang = 'en'
    root.dir = 'ltr'
    root.dataset.lang = 'en'
    document.title = copy.en.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.en.meta.description)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang: 'en', dir: 'ltr', isRtl: false, t: copy.en }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
