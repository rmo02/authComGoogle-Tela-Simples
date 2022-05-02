import React, {useState} from "react";
import GoogleLogin from 'react-google-login'

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    const {
      profileObj: {name, email, imageUrl},
  } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setisLoggedIn(true);
   };

	return (
		<div className="container">
			<GoogleLogin 
      clientId="XXXXXXXXXXXX" //colocar seu ID CLiente Gerado pela Google
      buttonText ="Continuar com o Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />

    { isLoggedIn ? ( <div>
      <h1>User Information</h1>
      <img className="profile" src={profilePic} alt="Profile"/>
    <p>Name: { name } </p>
    <p>Email: { email } </p>
    </div>) : ('')}
    
    </div>
	);
}

export default App;