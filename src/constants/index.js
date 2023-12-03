// import { meta, shopify, starbucks, tesla, startap } from '../assets/images';
import { startap } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  // motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend'
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend'
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control'
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control'
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend'
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend'
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database'
  },
  // {
  //   imageUrl: motion,
  //   name: 'Motion',
  //   type: 'Animation'
  // },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend'
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend'
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend'
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend'
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management'
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend'
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend'
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend'
  }
];

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'WebEvery',
    icon: startap,
    iconBg: '#accbe1',
    date: 'March 2023 - continue',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#fbc3bc',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.'
  //   ]
  // },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#b7e4c7',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.'
  //   ]
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#a2d2ff',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.'
  //   ]
  // }
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact'
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/myroslav-kozar/'
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/myroslav111'
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Petly',
    description:
      'The application solves the problem of finding or selling animals. It is a full-stack application with a Front-End (React) and Back-End (Node.js, MongoDB). Repo: ',
    link: 'https://pets-app-client-side-ag5ofq52b-myroslav111.vercel.app',
    repo: 'https://github.com/myroslav111/pets-app-client-side'
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Schop',
    description:
      'This is an eCommerce platform currently in development, with many features already operational. It includes a mobile version and utilizes the Next.js/TypeScript stack for the front end, while the backend is powered by Node.js and MongoDB for the database. Product images are hosted on Cloudinary. The front end is deployed on Vercel, and the back end is hosted on Render. Repo: ',
    link: 'https://shop-phi-ruddy.vercel.app/',
    repo: 'https://github.com/myroslav111/shop'
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Language cards',
    description:
      'Add words for learning (you can use two languages for learning here). When you finish, delete them. The app features Google authorization and includes a translator. The app is still in progress (to get more functionality you need to register). Adapted for mobile devices. Repo: ',
    link: 'https://myroslav111.github.io/Language_cards/',
    repo: 'https://github.com/myroslav111/Language_cards'
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Kinogo',
    description:
      'The project focuses on searching for movies and adding favorite movies to a client"s library. It is built using pure JS, npm packages, and The Movie Database (themoviedb) API. The stack includes HTML, SCSS for styling, Handlebars templates, YouTube iframe integration, MockAPI as the back-end, CSS animations, and infinity scroll for mobile. Repo: ',
    link: 'https://myroslav111.github.io/kino-go/',
    repo: 'https://github.com/myroslav111/kino-go'
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Phone Book',
    description:
      'The app is a Phone Book with authorization, built using the React stack. It includes React, react-router-dom for routing, react-redux toolkit for state management, TypeScript (ts), Axios for HTTP requests, react-transition for transitions, and i18next for internationalization. Repo: ',
    link: 'https://myroslav111.github.io/goit-react-hw-08-phonebook/',
    repo: 'https://github.com/myroslav111/goit-react-hw-08-phonebook'
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Gallery by React',
    description:
      'A simple gallery project that allows searching by name using the Pixabay API. The stack includes React, Axios for API requests, react-transition-group for transitions, and CSS animations. Repo: ',
    link: 'https://myroslav111.github.io/goit-react-hw-04-images/',
    repo: ' https://github.com/myroslav111/goit-react-hw-04-images'
  }
];

export const projectsWithoutStyle = [
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Converter currency',
    description:
      'A currency converter project that utilizes (navigator.geolocation). Repo: ',
    link: 'https://myroslav111.github.io/converter_currency/',
    repo: ' https://github.com/myroslav111/converter_currency'
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Hronometr',
    description:
      'An app designed to count how much time it takes to read a given text. Repo: ',
    link: 'https://myroslav111.github.io/hronomer_to_misha/',
    repo: 'https://github.com/myroslav111/hronomer_to_misha'
  }
];

export const projectOnlyDesign = [
  {
    iconUrl: snapgram,
    theme: 'btn-back-yellow',
    name: 'WebStudio',
    description:
      'Basic visitor website showcasing a layout example for a service advertising page. The stack includes HTML, SCSS for styling, and JavaScript. Repo: ',
    link: 'https://myroslav111.github.io/project-web-html-scss/',
    repo: 'https://github.com/myroslav111/project-web-html-scss'
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-yellow',
    name: 'BarberShop',
    description:
      'BarberShop - A basic visitor website featuring a layout example for a service advertising page. The stack includes HTML, SCSS for styling, and JavaScript. Repo: ',
    link: 'https://myroslav111.github.io/barbershop-html-scss/',
    repo: 'https://github.com/myroslav111/barbershop-html-scss'
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-yellow',
    name: '100% natural',
    description:
      'Landing page for an ice cream company, designed to be responsive. The stack includes HTML, SCSS for styling, pure JavaScript, and Parcel for bundling. The page features a slider and animations. Repo: ',
    link: 'https://myroslav111.github.io/100-natural/',
    repo: 'https://github.com/myroslav111/100-natural'
  }
];

export const projectsOther = [
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Rick and Morty',
    description:
      'Pet project using multifunction relative to sort written on MUI. Repo: ',
    link: 'https://myroslav111.github.io/rick_and_morty/',
    repo: 'https://github.com/myroslav111/rick_and_morty'
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Old portfolio',
    description: 'My first Portfolio. Repo: ',
    link: 'https://myroslav111.github.io/Portfolio/#/',
    repo: 'https://github.com/myroslav111/Portfolio'
  }
];
