import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

export default function Home() {
  return (
    <section
      className="min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-xl mx-10 pb-40 rounded-lg">
          <h1 className="text-5xl text-white font-heading font-bold mb-6 bg-neutral-950/30 p-5 rounded-md">
            Welcome to SAAFE<sup style={{"verticalAlign": "middle","fontSize": "24px"}}>CRC</sup> Data Standardisation Platform
          </h1>
          <div className="flex">
            <Link
              to="/upload"
              className="inline-block bg-saafe-light text-white rounded-lg px-5 py-3 text-md font-semibold hover:opacity-90 transition"
            >
              Upload data
            </Link>
            <Link
              to="/docs"
              className="inline-block outline hover:bg-white hover:text-black text-white rounded-lg ml-5 px-5 py-3 text-md font-semibold hover:opacity-90 transition"
            >
              See documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
