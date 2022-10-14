//----------------import components---------------------
import BannerHeader from './components/BannerHeader';
import PraticeAreas from './components/PraticeAreas';
import PraticeAdvice from './components/PraticeAdvice';
import WhoWeAre from './components/WhoWeAre';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

//----------------import imgs--------------------------


const App = () => {
  return (
  <>
    <BannerHeader />

    <main className="flex-grow-1 dark-bg-color">
      <PraticeAreas />

      <PraticeAdvice />

      <WhoWeAre />

      <ContactUs />

    </main>
    <Footer />
  </>
)};

export default App;
