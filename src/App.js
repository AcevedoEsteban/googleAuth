import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText='log in with Google'
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}></GoogleLogin>
      </header>
    </div>
  );
}

export default App;
