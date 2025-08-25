import { Link } from "react-router";

const Navbar = () => {
  const links = [
    { name: "All books", path: "/books" },
    { name: "Add book", path: "/create-book" },
    { name: "Borrow Summery", path: "/borrow" },
  ];

  return (
    <nav>
      <div className="flex justify-between  items-center h-16">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">Library</Link>

        <div className="flex gap-6"> 
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-bold text-orange-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
