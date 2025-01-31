import { Link } from "react-router-dom"
import logo from "../../assets/sportivo logo.png"
const Footer = () => {
    return (
    <footer className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <img src={logo} alt="Sportivo Logo" width={80} height={80} className="w-20 h-20" />
            <p className="font-medium">Play Together, Grow Stronger!</p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/activity" className="transition-colors hover:text-gray-600">
                  Sparring
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>marketing@sportivo.com</li>
              <li>+62 256 78767</li>
              <li>Jakarta | Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center text-gray-600 border-t">© 2025 Sportivo. All right reserved. Made with ❤️ in Indonesia</div>
      </div>
    </footer>
    )
}
export default Footer