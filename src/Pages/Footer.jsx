import "./../styles/pages/footer.scss";
import logo from "./../websites/Logo.png"


function Footer() {
  // const year = new Date.getFullYear();
  return (
    <footer className="footer">
      <div className="container-parts">
      <img src={logo} alt="" />
        <p>&copy; {new Date().getFullYear() } <span>H Programmer</span> - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;