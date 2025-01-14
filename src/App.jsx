import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 black-gradient'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
