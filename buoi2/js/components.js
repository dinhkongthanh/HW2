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

components.loginScreen = `
      
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
      
<div class="header">
MindX chat
</div>
<div class="chat-container">
<div class="aside-left">
<div class="new-conversation">
<button class="btn" id="new-conversation">+ New Conversation</button>
</div>
<div class="list-conversations">
  
</div>
</div>
<div class="main">
<div class="conversation-detail">
  <div class="conversation-title">First conversation</div>
  <div class="list-message">
  </div>
  <form id="sendMessageForm">
    <input class="input" autocomplete="off" type="text" name="message" placeholder="Type a message">
    <button class="btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
  </form>
</div>
</div>
<div class="aside-right">
                <div class="list-users">
                </div>
                <form id="addEmailForm">                  
                    <div class="input-wrapper">
                        <input type="text" name="email" placeholder="Email">
                        <div class="error" id="conversation-email-error"></div>
                    </div>
                    <div class="button-wrapper">
                        <button class = "btn" type="submit">Add more</button>
                    </div>
                </form>              
            </div>                  
            </div>
</div>`;

components.createConversationScreen = `
<div class="create-conversation-wrapper">
        
          <div class="header"> Mindx Chat</div>
          <div class="main">
           <h3>Create a new conversation</h3>
            
            <form id="create-conversation-form">
            <div class="input-wrapper">
              <input type="text" name="title" placeholder="Conversation name">
              <div class="error" id="conversation-name-error"></div>
              
              </div>
              <div class="input-wrapper">
              <input type="text" name="email" placeholder="Friend email">
              <div class="error" id="conversation-email-error"></div>
              
              </div>
              <div class="button-wrapper">
              <button class="btn" type="submit" id="create">Create</button>
              <button class="btn" type="button" id="back-to-chat">cancel</button>
            </div>
            </form>
          </div>
        
      </div>`;
