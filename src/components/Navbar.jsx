function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Pranay Raj</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
