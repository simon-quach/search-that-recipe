import './footer.css'

const Footer = () => {
  return (
      <div className="footer text-center py-3">
          &copy; {new Date().getFullYear()} Simon Quach
      </div>
  );
}

export default Footer;