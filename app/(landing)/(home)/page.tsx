import Blog from "./_components/blog";
import Contact from "./_components/contact";
import Faq from "./_components/faq";
import FinancialStack from "./_components/financial-stack";
import Footer from "./_components/footer";
import GetStarted from "./_components/get-started";
import HeroPage from "./_components/hero-page";
import Navbar from "./_components/navbar";
import ScrollToTop from "./_components/scroll-to-top";
import Services from "./_components/services";
import Support from "./_components/support";
import Testimonials from "./_components/testimonials";

const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroPage />
      <FinancialStack />
      <Services />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Support />
      <Faq />
      <Contact />
      <GetStarted />
      {/* <Footer /> */}
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
