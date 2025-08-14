import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav className="section-spacing text-white flex justify-between items-center border-b border-gray-700 py-4">
        <h1 className="text-2xl font-bold">Cine Archivo</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/favorites">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
