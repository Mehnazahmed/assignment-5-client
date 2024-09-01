import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <div>
      {" "}
      <footer className=" text-gray-400 py-8   bg-[rgb(9,20,35)] ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-bold text-white">SpoertsGen</h5>
              <p>&copy; 2024 Sport Gen. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/about" className="hover:text-white text-lg">
                About
              </a>
              <a href="/contact" className="hover:text-white text-lg">
                Contact
              </a>
              <a href="/privacy" className="hover:text-white text-lg">
                Privacy Policy
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xxl hover:text-orange-500 w-10"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xxl hover:text-orange-500 w-10"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xxl hover:text-orange-500 w-10"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
