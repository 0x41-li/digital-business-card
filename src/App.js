import CardImage from "./components/CardImage";
import PersonalInfo from "./components/PersonalInfo";
import ContactMeButtons from "./components/ContactMeButtons";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="card">
      <CardImage />

      <div className="card-body">
        <PersonalInfo />
        <ContactMeButtons />
        <About />
        <Interests />
      </div>

      <Footer />
    </div>
  );
}
