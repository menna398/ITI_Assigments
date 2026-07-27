import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <p className="mb-0">© 2026 Menna Khaled</p>

        <div className="d-flex gap-3">
          <a href="#" className="text-white text-decoration-none">
            GitHub
          </a>
          <a href="#" className="text-white text-decoration-none">
            LinkedIn
          </a>
          <a href="#" className="text-white text-decoration-none">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;