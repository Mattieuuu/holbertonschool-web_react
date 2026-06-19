import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  const currentYear = getCurrentYear();
  const footerText = getFooterCopy(true);
  return (
    <div style={{ textAlign: 'center', fontStyle: 'italic', borderTop: '#e1003c solid 2.5px' }}>
      <p>Copyright {currentYear} - {footerText}</p>
    </div>
  )
}

export default Footer;
