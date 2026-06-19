import HbSLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div style={{ display: 'flex' }}>
      <img src={HbSLogo} alt="holberton logo" style={{ width: '15%' }} />
      <h1 style={{ alignContent: 'center', marginLeft: '1rem', color: '#e1003c', fontFamily: 'Arial, Helvetica, sans-serif' }}>School dashboard</h1>
    </div>
  )
}

export default Header;
