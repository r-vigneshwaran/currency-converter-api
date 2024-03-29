import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
const Header = () => {
    const {loginWithRedirect,logout,isAuthenticated}= useAuth0();
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Currency Converter</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <div class="form-inline my-2 my-lg-0">
          {isAuthenticated ? (<button class="btn btn-outline-success my-2 my-sm-0" onClick={()=>logout()}>Logout</button>):(

              <button class="form-control mr-sm-2" onClick={()=>loginWithRedirect()}>Login</button>
          )}
            
          </div>
        </div>
        </nav>
        </div>
    )
}

export default Header
