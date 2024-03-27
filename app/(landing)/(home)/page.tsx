import Blog from "./_components/blog";
import Faq from "./_components/faq";
import FinancialStack from "./_components/financial-stack";
import Footer from "./_components/footer";
import GetStarted from "./_components/get-started";
import HeroPage from "./_components/hero-page";
import Navbar from "./_components/navbar";
import Services from "./_components/services";
import Support from "./_components/support";
import Testimonials from "./_components/testimonials";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <FinancialStack />
      <Services />
      <Testimonials />
      <Blog />
      <Support />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default LandingPage;
