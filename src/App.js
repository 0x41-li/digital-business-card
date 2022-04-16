import CardImage from "./components/CardImage";
import PersonalInfo from "./components/PersonalInfo";
import ContactMeButtons from "./components/ContactMeButtons";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CardImage />
      <PersonalInfo />
      <ContactMeButtons />
      <About />
      <Interests />
      <Footer />
    </>
  );
}
