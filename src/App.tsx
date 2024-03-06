import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


import './App.css';

//Objektdata
const data = [
  {
    name: 'Sandra Larsson',
    skill: 'FrontendDeveloper',
    city: 'Stockholm',
    picture: 'https://randomuser.me/api/portraits/med/women/35.jpg',
    born: '1980',
  },
  {
    name: 'Karl Karlsson',
    skill: 'BackendDeveloper',
    city: 'Göteborg',
    picture: 'https://randomuser.me/api/portraits/med/men/35.jpg',
    born: '1985',
  },
];

function App() {
  return (
    <div>
      <Header />
      <main>
        {data.map((person) => {
          return (
            <ProfileCard
              name={person.name}
              skills={person.skill}
              city={person.city}
              picture={person.picture}
              born={person.born}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

/*function App() {
  return (
    <div>
      <Header />
      <main>
          <ProfileCard
            // Props - information till kompoenten - som argument till funktionen!
            name="Sandra"
            skills="JS React"
            city="Stockholm"
            born={1980}
          />  
      </main>
      <Footer />
    </div>
  );
}*/

function Header() {
  return (
    <header>
      <h1>Developer</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>@copyrighttjossan</p>
    </footer>
  );
}

// Med destrucering av props
function ProfileCard({ name, skills, city, born, picture }) {
  // Logic (JS) goes here or inside {}
  // Här är det ok med if, for osv,
  const yearNow = new Date().getFullYear();
  /* if (props) {
    console.log(name, skills, city, born);
  }*/

  return (
    // Här inom {} kan du inte använda for, if, switch, men ternary och logiska operatorer som && mfl
    // Attribut heter lite annorlunda ex class => className
    <article className="card" style={{ borderRadius: '20px' }}>
      <h2>{name}</h2>
      <p>Skills: {skills}</p>
      <p>{city}</p>
      <img src={picture} />
      <p>Age: {yearNow - born}</p>
    </article>
  );
}
/*
function ProfileCard(props) {
  // Logic (JS) goes here or inside {}
  // Här är det ok med if, for osv,
  const yearNow = new Date().getFullYear();
  if (props) {
    console.log(props.name, props.skills, props.city, props.age);
  }


  return (
    // Här inom {} kan du inte använda for, if, switch, men ternary och logiska operatorer som && mfl
    // Attribut heter lite annorlunda ex class => className
    <article className="card" style={{ borderRadius: '20px' }}>
      <h2>{props.name}</h2>
      <p>Skills: {props.skills}</p>
      <p>{props.city}</p>
      <img />
      <p>Age: {yearNow - props.born}</p>
    </article>
  );
}*/

export default App;


export default App
