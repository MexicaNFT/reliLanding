import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms&conditions" className="text-gray-600 hover:text-gray-900">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:contact@reli.com" className="text-gray-600 hover:text-gray-900">
                  contact@reli.com
                </Link>
              </li>
              <li>
                <Link href="tel:123-456-7890" className="text-gray-600 hover:text-gray-900">
                  123-456-7890
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://facebook.com/reli" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/reli" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
