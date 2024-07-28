import logo from '../../images/LOGO_footer.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
