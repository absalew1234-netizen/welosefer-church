
import { TranslationContent } from './types';

export const translations: Record<'am' | 'en', TranslationContent> = {
  am: {
    nav: {
      home: 'መነሻ',
      about: 'ስለ ቤተክርስቲያን',
      services: 'አገልግሎቶች',
      gallery: 'ፎቶዎች',
      contact: 'እውቂያ',
      developer: 'አልሚ',
    },
    auth: {
      signUp: 'ተመዝገብ',
      logIn: 'ግባ',
      logOut: 'ውጣ',
    },
    hero: {
      title: 'ወሎ ሰፈር ቅድስት ማርያም እና ቅዱስ ገብርኤል ቤተክርስቲያን',
      subtitle: 'እንኳን ደህና መጡ! መንፈሳዊ ጉዞዎን ከእኛ ጋር ይጀምሩ።',
      cta: 'ተጨማሪ ይወቁ',
    },
    home: {
      welcome: 'እንኳን ደህና መጡ',
      intro: 'ይህ ቤተክርስቲያን በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ስር የሚገኝ ሲሆን ለቅድስት ድንግል ማርያም እና ለቅዱስ ገብርኤል መልአክ የተቀደሰ ነው።',
      recentAnnouncements: 'የቅርብ ማስታወቂያዎች',
      announcement1: 'የቅድስት ማርያም ዓመታዊ ክብረ በዓል - ግንቦት 21 ቀን።',
      announcement2: 'የሰንበት ትምህርት ቤት ምዝገባ አሁኑኑ ተከፍቷል።',
    },
    about: {
      title: 'ስለ ቤተክርስቲያን',
      fullName: 'ሙሉ ስም፡ ወሎ ሰፈር ቅድስት ማርያም እና ቅዱስ ገብርኤል ቤተክርስቲያን',
      churchType: 'አይነት፡ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን',
      address: 'አድራሻ፡ አዲስ አበባ፣ ወሎ ሰፈር (ኪርኮስ ክፍለ ከተማ)',
      plusCode: 'Plus Code: XQQF+9GJ',
      hours: 'አገልግሎት፡ ጸሎት፣ በዓላት፣ ማህበረሰብ እንቅስቃሴዎች (ብዙውን ጊዜ 24/7 ክፍት)',
      historyTitle: 'አጭር ታሪክ',
      historyText: 'ይህ ቅዱስ ስፍራ ለብዙ ዓመታት የማህበረሰቡ መንፈሳዊ ማዕከል ሆኖ ቆይቷል። ለቅድስት ማርያም እና ለቅዱስ ገብርኤል በጋራ የተሰየመ ታሪካዊ ቤተክርስቲያን ነው።',
      appreciationTitle: 'የማህበረሰብ አድናቆት',
      likedBy: 'በአብሳለው በላይነህ እና በሌሎችም የተወደደ።',
    },
    services: {
      title: 'አገልግሎቶች እና በዓላት',
      liturgy: 'ቅዳሴ',
      liturgyDesc: 'በየቀኑ ከንጋቱ 11፡00 ሰዓት ጀምሮ ይከናወናል።',
      prayer: 'የጋራ ጸሎት',
      prayerDesc: 'በየሳምንቱ ረቡዕ እና አርብ ከሰዓት በኃላ።',
      choir: 'መዝሙር',
      choirDesc: 'የሰንበት ትምህርት ቤት ዝማሬ እና ጥናት።',
      eventsTitle: 'የበዓላት ቀን መቁጠሪያ',
      events: [
        { date: 'ታህሳስ 19', title: 'ቅዱስ ገብርኤል ዓመታዊ በዓል' },
        { date: 'ግንቦት 1', title: 'ልደታ ለማርያም' },
        { date: 'ነሐሴ 16', title: 'ፍልሰታ ለማርያም (በዓለ ደብረ ምጥማቅ)' },
      ],
    },
    gallery: {
      title: 'ፎቶ ጋለሪ',
      description: 'የቤተክርስቲያናችንን ታሪክ፣ ውበት እና የማህበረሰቡን እንቅስቃሴዎች በፎቶዎች ይመልከቱ።',
      quote: '"እግዚአብሔር በቅዱሳኑ ላይ ድንቅ ነው!"',
      quoteSource: 'መዝሙረ ዳዊት 68፡35',
      quoteTitle: 'መንፈሳዊ ውበት',
      albums: [
        {
          title: 'የቤተክርስቲያኑ ውጫዊ እይታ',
          images: [
            { label: 'የወደፊት እቅድ (3D)', desc: 'የሚገነባው አዲሱ ቤተክርስቲያን ውጫዊ ዲዛይን።' },
            { label: 'አሁን ያለው እይታ', desc: 'የቤተክርስቲያኑ የአሁኑ ገጽታ።' }
          ]
        },
        {
          title: 'የቤተክርስቲያን ገጽታዎች',
          images: [
            { label: 'መንፈሳዊ እይታ 1', desc: 'በቤተክርስቲያኑ ውስጥ የታዩ ልዩ እይታዎች።' },
            { label: 'መንፈሳዊ እይታ 2', desc: 'በቤተክርስቲያኑ ውስጥ የታዩ ልዩ እይታዎች።' },
            { label: 'መንፈሳዊ እይታ 3', desc: 'በቤተክርስቲያኑ ውስጥ የታዩ ልዩ እይታዎች።' }
          ]
        },
        {
          title: 'የበዓላት አከባበር',
          images: [
            { label: 'የማህበረሰቡ ሰልፍ', desc: 'ምዕመናን በታላላቅ በዓላት ወቅት የሚያደርጉት መንፈሳዊ ተሳትፎ።' },
            { label: 'የጥምቀት በዓል', desc: 'በአደባባይ የሚከበር ደማቅ የጥምቀት ክብረ በዓል ምስል።' },
            { label: 'የበዓላት ድባብ', desc: 'በቤተክርስቲያኑ የሚታይ የበዓላት ደስታ።' }
          ]
        },
        {
          title: 'ታሪካዊ ምስሎች',
          images: [
            { label: 'ታሪካዊው ህንፃ', desc: 'ለብዙ ዓመታት ያገለገለው የቀድሞው ባለቀለም ቤተክርስቲያን።' }
          ]
        }
      ]
    },
    contact: {
      title: 'እውቂያ',
      name: 'ስም',
      email: 'ኢሜይል',
      message: 'መልዕክት',
      send: 'ላክ',
      findUs: 'በካርታ ያግኙን',
      phone: 'ስልክ፡ +251 94 021 5521',
      displayEmail: 'wolo51@gmail.com',
      madeBy: 'በድረ-ገጽ አልሚ አብሳለው በላይነህ የተሰራ',
      followUs: 'ተከታተሉን',
    },
    developer: {
      title: 'ስለ ድረ-ገጽ አልሚው',
      name: 'ስም፡ አብሳለው በላይነህ',
      age: 'ዕድሜ፡ 17',
      experience: 'የሥራ ልምድ፡ 3 ዓመት',
      bio: 'አብሳለው በላይነህ በቴክኖሎጂ እና በድረ-ገጽ ልማት ላይ ከፍተኛ ፍላጎት ያለው ወጣት አልሚ ነው። ይህንን ድረ-ገጽ ለወሎ ሰፈር ቤተክርስቲያን በበጎ ፈቃደኝነት አዘጋጅቷል።',
      role: 'ሙሉ-ስታክ ድረ-ገጽ አልሚ',
      phone: '+251 94 177 1950',
      email: 'absalew1234@gmail.com',
      github: 'https://github.com/absalew1234-netizen',
      linkedin: 'https://www.linkedin.com/in/absalew-belaynah-a15197406/',
      journeyTitle: 'የእኔ ጉዞ',
      journeyText: 'የጀመርኩት ገና በልጅነቴ ኮምፒውተሮች እንዴት እንደሚሰሩ በመጓጓት ነበር። ባለፉት ጥቂት ዓመታት ውስጥ የተለያዩ ቴክኖሎጂዎችን በማጥናት ለቤተክርስቲያናችን ይህን ዘመናዊ ድረ-ገጽ ለመገንባት በቅቻለሁ። እያንዳንዱ ኮድ ለቤተክርስቲያናችን አገልግሎት እንዲውል በመፈለጌ በደስታ ሰርቼዋለሁ።',
      skillsTitle: 'የቴክኒክ ብቃቶች',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Firebase'],
      philosophyTitle: 'የእኔ እምነት',
      philosophyText: 'ምንም እንኳን ቴክኖሎጂ ቢቀየርም፣ ዓላማው ሰዎችን ማገናኘት እና ማገልገል መሆን አለበት ብዬ አምናለሁ። ይህ ድረ-ገጽ ምዕመናንን ከቤተክርስቲያናችን ጋር ለማቀራረብ የሚጠቀም ድልድይ ነው።',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      developer: 'Developer',
    },
    auth: {
      signUp: 'Sign Up',
      logIn: 'Log In',
      logOut: 'Log Out',
    },
    hero: {
      title: 'Wolo Sefer Kidist Mariam & Kidus Gebriel Church',
      subtitle: 'Welcome to our spiritual home. Join us in prayer and community.',
      cta: 'Learn More',
    },
    home: {
      welcome: 'Welcome',
      intro: 'An Ethiopian Orthodox Tewahedo Church dedicated to Saint Mary and Saint Gabriel the Archangel.',
      recentAnnouncements: 'Recent Announcements',
      announcement1: 'Annual St. Mary Feast Celebration - Ginbot 21.',
      announcement2: 'Sunday School registration is now open.',
    },
    about: {
      title: 'About the Church',
      fullName: 'Full Name: Wolo Sefer Kidist Mariam and Kidus Gebriel Ethiopian Orthodox Tewahedo Church',
      churchType: 'Type: Ethiopian Orthodox Tewahedo Church',
      address: 'Address: Addis Ababa, Wolo Sefer (Kirkos Sub-city)',
      plusCode: 'Plus Code: XQQF+9GJ',
      hours: 'Services: Prayers, Holidays, Community Activities (Open 24/7)',
      historyTitle: 'Short History',
      historyText: 'This holy place has served as a spiritual hub for the community for many years. It is a historic church uniquely dedicated to both Saint Mary and Saint Gabriel.',
      appreciationTitle: 'Community Appreciation',
      likedBy: 'Liked by Absalew Belayneh and many others.',
    },
    services: {
      title: 'Services & Events',
      liturgy: 'Liturgy (Kidassie)',
      liturgyDesc: 'Daily Divine Liturgy starting from 5:00 AM.',
      prayer: 'Community Prayer',
      prayerDesc: 'Every Wednesday and Friday afternoon.',
      choir: 'Choir & Education',
      choirDesc: 'Sunday School hymns and spiritual teachings.',
      eventsTitle: 'Holiday Calendar',
      events: [
        { date: 'Dec 28', title: 'St. Gabriel Annual Feast' },
        { date: 'May 9', title: 'Birth of St. Mary (Lideta)' },
        { date: 'Aug 23', title: 'Filseta (Assumption of Mary)' },
      ],
    },
    gallery: {
      title: 'Photo Gallery',
      description: 'Browse our parish history, beauty, and community through our interactive albums.',
      quote: '"Awesome is God in his sanctuary; the God of Israel."',
      quoteSource: 'Psalm 68:35',
      quoteTitle: 'Spiritual Beauty',
      albums: [
        {
          title: 'Church Exterior',
          images: [
            { label: 'Future Design (3D)', desc: 'Architectural vision of the new church structure.' },
            { label: 'Current View', desc: 'The actual present-day appearance of our church.' }
          ]
        },
        {
          title: 'Church Perspectives',
          images: [
            { label: 'Spiritual Scene 1', desc: 'Captured moments of spiritual significance.' },
            { label: 'Spiritual Scene 2', desc: 'Captured moments of spiritual significance.' },
            { label: 'Spiritual Scene 3', desc: 'Captured moments of spiritual significance.' }
          ]
        },
        {
          title: 'Holiday Celebrations',
          images: [
            { label: 'Congregation', desc: 'Spiritual participation of the community during major feasts.' },
            { label: 'Epiphany', desc: 'Vibrant outdoor celebration of the Epiphany (Timkat).' },
            { label: 'Festive Atmosphere', desc: 'Joyful celebration within the parish.' }
          ]
        },
        {
          title: 'Historical Images',
          images: [
            { label: 'Original Chapel', desc: 'The original colorful building that served the parish for many years.' }
          ]
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      findUs: 'Find Us on Map',
      phone: 'Phone: +251 94 021 5521',
      displayEmail: 'wolo51@gmail.com',
      madeBy: 'MADE BY WEB DEVELOPER ABSALEW BELAYNEH',
      followUs: 'Follow Us',
    },
    developer: {
      title: 'About the Developer',
      name: 'Name: Absalew Belayneh',
      age: 'Age: 17',
      experience: 'Experience: 3 Years',
      bio: 'Absalew Belayneh is a young and passionate developer with a deep interest in technology and web development. He built this website as a volunteer project for the Wolo Sefer Church.',
      role: 'Full-Stack Web Developer',
      phone: '+251 94 177 1950',
      email: 'absalew1234@gmail.com',
      github: 'https://github.com/absalew1234-netizen',
      linkedin: 'https://www.linkedin.com/in/absalew-belaynah-a15197406/',
      journeyTitle: 'My Journey',
      journeyText: "My fascination with technology began with a simple curiosity about how digital worlds are built. Over the past three years, I've dedicated myself to mastering modern web tools. Building this platform for Wolo Sefer Church was more than a project—it was a way to use my skills for a greater purpose, ensuring our community has a welcoming digital home.",
      skillsTitle: 'Technical Expertise',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vite'],
      philosophyTitle: 'Design Philosophy',
      philosophyText: 'I believe that great software should be invisible—it should simply work and empower the user. My focus is on creating clean, accessible, and high-performance interfaces that bridge the gap between faith and technology.',
    },
  },
};
