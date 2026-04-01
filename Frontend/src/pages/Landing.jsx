import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Landing() {
  return (
    <div className="landingPageContainer">
     <nav>
<div className="navHeader">
<h2>Apna video call</h2>
</div>

<div className="navList">
<p>Join as guest</p>
<p>Register</p>

<div role="button">

<p>Login</p>

</div>
</div>
      </nav>
<div className="landingMainContainer">
<div>
<h1><span style={{color:"#FF9839"}}>Connect</span> with your loved once</h1>
<p>Cover your distance with apna video call</p>
<div role="button">
<Link to={`/auth`}>Get started</Link>
</div>
</div>
<div>
<img src="/mobile.png" />
</div>
</div>
    </div>
  );
}
