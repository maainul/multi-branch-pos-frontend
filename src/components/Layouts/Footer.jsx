import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
        <p className="text-sm">Built with ❤️ using React and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
