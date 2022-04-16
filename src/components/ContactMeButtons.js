import email from "../assets/icons/email.png";
import linkedin from "../assets/icons/linkedin.png";

export default function ContactMeButtons() {
  return (
    <div className="contact-buttons">
      <button>
        <img src={email} alt="" />
        <span>Email</span>
      </button>
      <button>
        <img src={linkedin} alt="" />
        <span>LinkedIn</span>
      </button>
    </div>
  );
}
