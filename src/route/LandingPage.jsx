import Header from "../components/Header";
import Summary from "../components/Summary";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";
import Technical from "../components/Technical";

const LandingPage = () => {
  return (
    <div className="font-poppins mx-2 sm:mx-16 md:mx-40 lg:mx-60 xl:mx-96 my-14 px-4">
      <Header />
      <Summary />
      <hr className="my-3" />
      <ExperienceCard />
      <hr className="my-3" />
      <Technical />
      <hr className="my-3" />
      <Footer />
    </div>
  );
};

export default LandingPage;
