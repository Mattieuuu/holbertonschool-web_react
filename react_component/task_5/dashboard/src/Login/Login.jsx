import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div style={{ textAlign: 'justify', flex: 1 }}>
      <p style={{ marginLeft: '1rem' }}>Login to access the full dashboard</p>

      <label htmlFor="email" style={{ marginLeft: '0.5rem', display: 'block' }}>Email :</label>
      <input type="email" name="email" id="email" style={{ marginLeft: '0.5rem' }} />

      <label htmlFor="password" style={{ marginLeft: '0.5rem', display: 'block' }}>Password :</label>
      <input type="password" name="password" id="password" style={{ marginLeft: '0.5rem' }} />

      <button style={{ marginLeft: '1rem' }}>OK</button>
    </div>
  )
}

const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
