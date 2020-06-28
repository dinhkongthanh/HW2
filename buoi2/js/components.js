const components = {};
components.welcomeScreen = `
<div>Welcome to chat app</div>
`;
components.registerScreen = `

        <div class="register-container">
          <div class="register-form">
            <div class="title">Mindx Chat</div>
            <form id="form-register">
              <div class="name-wrapper">
                <div class="input-wrapper">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
                  />
                  <div class="error" id="error-first-name"></div>
                </div>
                <div class="input-wrapper">
                  <input type="text" name="lastName" placeholder="last name" />
                  <div class="error" id="error-last-name"></div>
                </div>
              </div>

              <div class="input-wrapper">
                <input type="email" name="email" placeholder="email" />
                <div class="error" id="error-email-name"></div>
              </div>
              <div class="input-wrapper">
                <input type="password" name="password" placeholder="password" />
                <div class="error" id="error-password-name"></div>
              </div>
              <div class="input-wrapper">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
                <div class="error" id="error-confirm-password-name"></div>
              </div>

              <div class="submit-wrapper">
                <div > Already have an account? <span class="cursor-pointer" id="redirect-to-login">Login</span></div>
                <button class="btn" type="submit" >register</button>
              </div>
            </form>
          </div>
        </div>
      `;
      
      
      components.loginScreen=`
      
      <div class="login-container">
      <div class="login-form">
        <div class="title">Mindx Chat</div>
        <form id="login-form">
          <div class="login-wrapper">
            <input type="email" name="email" placeholder="Email"/>
            <div class="error" id="error-email"></div>
          </div>
          <div class="login-wrapper">
            <input type="password" name="password" placeholder="Password"/>
            <div class="error" id="error-password"></div>
          </div>
         <div class="register-wrapper">
           <div>Don't have an account?<span class="cursor-pointer" id="redirect-to-register">Register</span></div>
           <button class="btn" type="submit" >Login</button>
         </div>
        </form>
      </div>
    </div>
    
      `;

      components.chatScreen = `
      <div id="welcome-user">  </div>
      <div><button id="log-out">Log out</button></div>
      `