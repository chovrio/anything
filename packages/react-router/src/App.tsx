import { Outlet, Link, useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Link to={'/home'}>home</Link>
      <br />
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/dashboard'}>dashboard</Link>
      <br />
      <button onClick={() => navigate('/home')}>home</button>
      <br />
      <button onClick={() => navigate('/about')}>about</button>
      <br />
      <button onClick={() => navigate('/dashboard')}>dashboard</button>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <Outlet />
    </div>
  );
}

export default App;
