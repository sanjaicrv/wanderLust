import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/checkout';

interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState<SearchData | undefined>(undefined);

  const handleSearch = (searchData: SearchData) => {
    setSearchQuery(searchData);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero onSearch={handleSearch} />
            <Destinations searchQuery={searchQuery} />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;