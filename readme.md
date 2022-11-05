root folder: git init

open 02 terminals and change directory to server & client folders
- server: npm install & npm run server
- client: npm install & npm start

client side:
- components:
  - auth:
    - LoginForm import AlertMessage, AuthContext
    - RegisterForm import AlertMessage, AuthContext
  - layout:
    - AlertMessage
    - Header, landing page's header
    - Landing, the landing page showing threads + comments
    - NavbarUserMenu, user page's header
  - post:
    - ActionButtons import PostContext
    - AddPostModal import PostContext
    - SinglePost import ActionButtons
    - UpdatePostModal import PostContext
  - routing:
    - ProtectedRoute
- contexts: a store of states related to actions
  - AuthContext
  - constants
  - PostContent import postReducer
- reducers: a store of actions
  - authReducer
  - postReducer import constants
- utils:
  - setAuthToken
- views:
  - About (ongoing)
  - Auth
  - CV, an HTML resume
  - Dashboard (import AuthContext,PostContext,SinglePost,AddPostModal,UpdatePostModal) shows user's modules with NavbarUserMenu
  - Roadmap (ongoing)

Client dependencies:
  "axios": "communicate with backend",
  "bootstrap": "UI framework",
  "react": "Build HTML tags, render backend responses",
  "react-bootstrap": "UI related React framework",
  "react-dom": "Build HTML tags",
  "react-router-dom": "control between pages: login/register/landing pages...",
  "react-scripts": "4.0.3",
  "web-vitals": "^1.0.1"
  
  "devDependencies": {
    "cross-env": "set chrome as default browser when npm start"
  }

Server side:
- Middleware acts as a guard to verify the credential info of users, once it matches, authentification & authorization passed, the next processes will be carried out

Server dependencies:
  "argon2": "harsh users password in database",    
  "cors": "allow frontend communicate to backend",
  "dotenv": "get env variable for deployment",
  "express": "server side, connect database & frontend",
  "jsonwebtoken": "authorization & authentication",
  "mongoose": "ORM - connect to MongoDB",
  "nodemon": "auto update server once change"