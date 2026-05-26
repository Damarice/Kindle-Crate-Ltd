export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="contact-info">
          <span><i className="fas fa-phone"></i> +254 XXX XXX XXX</span>
          <span><i className="fas fa-envelope"></i> info@kindleandcrate.com</span>
        </div>
        <div className="social-links">
          <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  )
}