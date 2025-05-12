import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Cine Vibe Check. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
