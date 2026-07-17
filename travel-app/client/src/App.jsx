// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = React.lazy(() => import('./components/About'));
const BookingForm = React.lazy(() => import('./components/booking/BookingForm'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "DLS Travels",
    "url": "https://dls-travels-gief.vercel.app",
    "areaServed": [
      "Parappanangadi",
      "Malappuram",
      "Kozhikode",
      "Tirur",
      "Kerala"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Parappanangadi",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    }
  };

  return (
    <>
      <Helmet>
        <title>DLS Travels | Taxi Booking in Parappanangadi, Malappuram</title>
        <meta name="description" content="Book reliable taxi services in Parappanangadi, Malappuram, Kerala. DLS Travels offers airport pickup, local taxi, outstation trips and 24/7 cab booking." />
        <link rel="canonical" href="https://dls-travels-gief.vercel.app/" />
        <meta property="og:title" content="DLS Travels | Taxi Booking in Parappanangadi, Malappuram" />
        <meta property="og:description" content="Book reliable taxi services in Parappanangadi, Malappuram, Kerala. DLS Travels offers airport pickup, local taxi, outstation trips and 24/7 cab booking." />
        <meta property="og:url" content="https://dls-travels-gief.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DLS Travels | Taxi Booking in Parappanangadi, Malappuram" />
        <meta name="twitter:description" content="Book reliable taxi services in Parappanangadi, Malappuram, Kerala. DLS Travels offers airport pickup, local taxi, outstation trips and 24/7 cab booking." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <main>
        <Navbar />
        <Hero />
        
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <BookingForm />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;