import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-16 w-full bg-saafe text-white flex items-center px-6 sticky top-0 z-50">
      <Link
        to="/"
        >
      <img src={logo} alt="SAAFE CRC logo"  style={{"width": "150px"}} />
      </Link>
    </header>
  )
}
