import AdoptTheDream from '../../assets/AdoptTheDream.jpeg';
import TodoApp from '../../assets/TodoApp.jpeg';
import BeatBazaar from '../../assets/BeatBazaar.jpeg';
import StarWars from '../../assets/StarWars.jpeg';

const ProjectsList = [
  {
    imgsrc: AdoptTheDream,
    title: 'Adopt The Dream',
    text: 'Team project "Adopt the Dream App" is a web application that connects pet enthusiasts with lovable animals in search of forever homes. This user-friendly application offers features such as registration, user profiles, pet browsing, favorites, advanced search, and adoption processing.',
    builtWith:
      'React, React Router, React Reducer, Axios, React Auth Context, HTML5, CSS3, React bootstrap, JavaScript, Petfinder.com API, Stripe, Node.js, Express, JWT, MongoDB, Swagger UI, Nodemailer, Jest',
    view: 'https://adoptthedream.alona.dev',
    source: 'https://github.com/AlonaVladymyrovaTrinity/AdoptTheDreamApp-Front',
  },
  {
    imgsrc: BeatBazaar,
    title: 'BeatBazaar',
    text: 'Discover BeatBazaar, a remarkable team project where creativity meets technology. This user-friendly Music e-commerce app offers an array of features. Users can easily register, personalize profiles, explore music albums, search, stream tracks, curate wishlists, and effortlessly purchase their favorite songs. Welcome to a seamless music experience!',
    builtWith:
      'React, React Router, Redux, Axios, React Auth Context, HTML5, CSS3, Material-ui, JavaScript, APIs, Stripe, Node.js, Express, JWT, MongoDB, socket.io, bcrypt, Swagger UI, Nodemailer, Jest',
    view: 'https://beatbazaar.alona.dev',
    source: 'https://github.com/AlonaVladymyrovaTrinity/BeatBazaarApp-Front',
  },
  {
    imgsrc: TodoApp,
    title: 'Todo List App',
    text: 'Personal project Todo List App designed for effortless task management, this project streamlines user to-do list experience. It offers a user-friendly interface and features like creating custom to-do lists, easy editing and deletion, seamless sorting and searching, dark mode, an intuitive navigation menu, a dedicated notes section, and responsive design for all devices.',
    builtWith: 'React, React Router, HTML5, CSS3, JavaScript, APIs, Airtable',
    view: 'https://todoapp.alona.dev/',
    source: 'https://github.com/AlonaVladymyrovaTrinity/ToDoApp-Airtable',
  },
  {
    imgsrc: StarWars,
    title: 'Starwars World',
    text: "Introducing the Starwars World App—a personal project which is fetching the data and displayed on the page using JavaScript to access the Star Wars API (https://swapi.dev/). It offers detailed data on characters, planets, films, species, vehicles, and starships. With a user-friendly interface, pagination, data verification, and collapsible cards, it's your gateway to the Star Wars universe.",
    builtWith: 'HTML5, CSS3, JavaScript, Bootstrap, APIs',
    view: 'https://starwars.alona.dev/',
    source: 'https://github.com/AlonaVladymyrovaTrinity/star-wars-api',
  },
];

export default ProjectsList;
