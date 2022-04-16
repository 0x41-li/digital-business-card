import twitter from "../assets/icons/twitter.png";
import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";
import github from "../assets/icons/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <img src={twitter} alt="" />
      </a>
      <a href="#">
        <img src={fb} alt="" />
      </a>
      <a href="#">
        <img src={ig} alt="" />
      </a>
      <a href="#">
        <img src={github} alt="" />
      </a>
    </div>
  );
}
