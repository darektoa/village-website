import '../../styles/components/Footer.css';
import StringHelper from '../utils/string-helper.js';

const Footer = (props) => {
  const className = StringHelper.join(' ', 'footer', props.className);

  return(
    <footer className={className}>
      <div className="container">
        <p>&copy; Designed &amp; developed by PT Solusi Intek Indonesia all right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;