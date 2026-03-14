const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Gowri Sankaran R. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
