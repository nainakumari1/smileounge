// ---------------------------------------------------------------
//  Single source of truth for all clinic details.
//  Facts were taken from the clinic's Practo, Justdial, Lybrate and
//  IndiaMart listings and its Google Maps pin. Edit here, not in views.
// ---------------------------------------------------------------
module.exports = {
  version: '1',
  name: 'The Smile Lounge',
  fullName: 'The Smile Lounge Dental Clinic',
  tagline: 'Braces, Implants & Smile Designing in Vivek Vihar, Delhi',

  phone: {
    display: '09911892424',
    tel: '+919911892424',
    whatsapp: '919911892424'
  },

  address: {
    line1: 'A-86, Vivek Vihar Phase-2',
    line2: 'Near Gurudwara, A Block, Jhilmil Colony',
    city: 'Delhi',
    region: 'Delhi',
    postal: '110095',
    country: 'IN'
  },

  geo: { lat: 28.6713886, lng: 77.3068559 },

  // Short link supplied by the clinic (opens the Google Maps listing + reviews)
  mapsLink: 'https://maps.app.goo.gl/r9LgnLSmy4A2xpDQ6',
  practoLink: 'https://www.practo.com/delhi/clinic/the-smile-lounge-vivek-vihar',
  justdialLink: 'https://www.justdial.com/Delhi/The-Smile-Lounge-Vivek-Vihar/011PXX11-XX11-220713112231-E5D6_BZDET',

  // Practo + Lybrate list: Mon-Sun, 09:30-13:00 and 17:00-20:30
  hours: {
    days: 'Monday – Sunday',
    sessions: ['9:30 AM – 1:00 PM', '5:00 PM – 8:30 PM'],
    schema: [
      { open: '09:30', close: '13:00' },
      { open: '17:00', close: '20:30' }
    ]
  },

  // Justdial listing: 4.8 / 5 from 190 ratings
  justdial: { rating: '4.8', count: 190 },

  // Optional: paste a Google-reviews widget embed (Elfsight, Trustindex, etc.)
  // between the backticks and it appears on Home and Reviews pages.
  reviewsWidgetHtml: ``,

  doctor: {
    name: 'Dr. Ankur Garg',
    title: 'Dentist · Orthodontist · Implantologist',
    degrees: 'BDS, MDS (Orthodontics)',
    experience: '19+',
    registration: 'Delhi State Dental Council, Reg. No. A-6357',
    memberships: [
      'American Association of Orthodontists (AAO)',
      'World Federation of Orthodontists',
      'European Orthodontic Society (EOS)',
      'FIO',
      'Indian Dental Association (IDA)',
      'FAGE'
    ]
  },

  services: [
    {
      id: 'braces',
      label: 'Braces & Orthodontics',
      icon: 'braces',
      title: 'Orthodontics & Tooth-Colour Braces',
      short: 'Braces fixing for crooked, crowded or gapped teeth, including tooth-colour braces.',
      body: 'Orthodontics is the clinic’s speciality. We assess your bite and alignment, then plan braces treatment, including discreet tooth-colour braces, to straighten teeth and improve how they fit together.'
    },
    {
      id: 'invisalign',
      label: 'Invisalign & Lingual',
      icon: 'aligner',
      title: 'Invisalign & Lingual Braces',
      short: 'Nearly invisible options for adults and teens who want straighter teeth discreetly.',
      body: 'If you prefer a less visible option, ask about lingual braces (placed behind the teeth) and Invisalign clear aligners. We will tell you honestly whether they suit your case.'
    },
    {
      id: 'implants',
      label: 'Dental Implants',
      icon: 'implant',
      title: 'Dental Implants',
      short: 'A fixed, natural-looking way to replace missing teeth.',
      body: 'Dental implants replace missing teeth with a root-like post and a crown on top. Dr. Ankur Garg is listed as an implantologist, and your plan starts with a proper examination and X-ray.'
    },
    {
      id: 'cosmetic',
      label: 'Smile Designing & Veneers',
      icon: 'sparkle',
      title: 'Smile Designing, Veneers & Laminates',
      short: 'Aesthetic dentistry to reshape colour, size and symmetry of your smile.',
      body: 'Veneers and laminates can improve the shape, size and colour of front teeth. Smile designing brings these options together into one plan built around your face and expectations.'
    },
    {
      id: 'whitening',
      label: 'Teeth Whitening',
      icon: 'sun',
      title: 'Teeth Whitening',
      short: 'A brighter smile, including 1-hour in-clinic whitening.',
      body: 'Professional teeth whitening lifts stains and brightens your smile in a single visit. Scaling and polishing beforehand helps results look even.'
    },
    {
      id: 'rct',
      label: 'Root Canal',
      icon: 'shield',
      title: 'Root Canal Treatment',
      short: 'Save a badly decayed or infected tooth and relieve the pain.',
      body: 'Root canal treatment removes infected tissue from inside the tooth so you can keep your natural tooth. Tell us about your pain on WhatsApp and we will guide you on the next step.'
    },
    {
      id: 'scaling',
      label: 'Scaling & Polishing',
      icon: 'wave',
      title: 'Ultrasonic Scaling & Polishing',
      short: 'Deep cleaning that removes plaque, tartar and surface stains.',
      body: 'Ultrasonic scaling removes tartar that brushing cannot, and polishing leaves teeth smooth. Regular cleaning supports healthy gums and fresher breath.'
    },
    {
      id: 'crowns',
      label: 'Crowns, Bridges & Dentures',
      icon: 'crown',
      title: 'Crowns, Bridges & Dentures',
      short: 'Crowns and bridges, plus flexible dentures for comfortable replacement teeth.',
      body: 'Crowns cap and protect weakened teeth, bridges fill gaps, and flexible dentures offer a comfortable removable option. We help you choose based on your teeth, comfort and budget.'
    },
    {
      id: 'extractions',
      label: 'Extractions',
      icon: 'tooth',
      title: 'Extractions & Impacted Teeth',
      short: 'Careful removal of damaged teeth and impacted wisdom teeth.',
      body: 'When a tooth cannot be saved, or a wisdom tooth is impacted, we plan a careful extraction after examining it with an X-ray.'
    },
    {
      id: 'kids',
      label: 'Children’s Care',
      icon: 'heart',
      title: 'Space Maintainers & Children’s Care',
      short: 'Space maintainers that keep room for adult teeth after early tooth loss.',
      body: 'If a baby tooth is lost early, a space maintainer holds the gap so permanent teeth can come in properly. Bring your child in for a check-up whenever you have a concern.'
    }
  ],

  facilities: [
    { title: 'Digital X-ray', text: 'Clear diagnostic images so your plan is based on what we can actually see.' },
    { title: 'Laser dentistry', text: 'Listed among the clinic’s treatments for gentle soft-tissue care.' }
  ],

  faqs: [
    {
      q: 'Where is The Smile Lounge located?',
      a: 'We are at A-86, Vivek Vihar Phase-2, Near Gurudwara, A Block, Jhilmil Colony, Delhi 110095.'
    },
    {
      q: 'What are your clinic timings?',
      a: 'Monday to Sunday, 9:30 AM – 1:00 PM and 5:00 PM – 8:30 PM. Timings can change on public holidays, so message us on WhatsApp to confirm before you visit.'
    },
    {
      q: 'How do I book an appointment?',
      a: 'Tap any “Book on WhatsApp” button and send us a message with your preferred day and time, or call 09911892424.'
    },
    {
      q: 'Which treatments do you offer?',
      a: 'Orthodontics (tooth-colour braces, lingual braces and Invisalign), dental implants, root canal treatment, ultrasonic scaling and polishing, crowns and bridges, laminates and veneers, flexible dentures, teeth whitening, extractions and impactions.'
    },
    {
      q: 'Who is the doctor at The Smile Lounge?',
      a: 'Dr. Ankur Garg, a dentist, orthodontist and implantologist with 19+ years of experience, registered with the Delhi State Dental Council.'
    },
    {
      q: 'Do you offer teeth whitening in one visit?',
      a: 'Yes, 1-hour teeth whitening is listed among our treatments. We will check your teeth first to confirm it suits you.'
    },
    {
      q: 'Can I see you for braces if I am an adult?',
      a: 'Yes. Orthodontic treatment is not only for teenagers. Book a consultation and Dr. Garg will explain the options, including tooth-colour, lingual and Invisalign aligners.'
    }
  ]
};
