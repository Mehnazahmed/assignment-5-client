export default function Footer() {
  return (
    <div>
      {" "}
      <footer className=" text-gray-400 py-6 bg-[rgb(9,20,35)] ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-bold text-white">SpoertsGen</h5>
              <p>&copy; 2024 Sport Gen. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/about" className="hover:text-white">
                About
              </a>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
