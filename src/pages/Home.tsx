import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

export default function Home() {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-4xl mx-10 py-16 rounded-lg shadow-lg">
          <h1 className="text-5xl text-white font-heading font-bold mb-6">
            Welcome to SAAFE<sup style={{"verticalAlign": "middle","fontSize": "24px"}}>CRC</sup> Data Standardisation Platform
          </h1>
          <div className="flex">
            <Link
              to="/upload"
              className="inline-block bg-saafe-light text-white rounded-lg px-8 py-3 text-md font-medium hover:opacity-90 transition"
            >
              Upload data
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
