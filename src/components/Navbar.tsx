import type React from "react"
import { Github } from "lucide-react"
import "./ui/Navbar.css"
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="https://resai.resilientdb.com" target="_blank" rel="noopener noreferrer">
            <img src="ResAI transparent.png" alt="Logo" className="logo-image" />
          </a>
        </div>

        {/* Center Brand Section */}
        <Link to="/" className="navbar-brand" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
          <h1 className="brand-title">Contract Forge</h1>
          <p className="brand-subtitle">Powered by ResilientDB</p>
        </Link>

        {/* GitHub Link */}
        <div className="navbar-actions">
          <a
            href="https://github.com/Bismanpal-Singh/ContractForge"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Repository"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      {/* Animated background gradient */}
      <div className="navbar-gradient"></div>
    </nav>
  )
}

export default Navbar
