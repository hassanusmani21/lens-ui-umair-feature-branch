<<<<<<< HEAD
import { useState } from "react";
import Topbar from "./components/global/TopBar";
import CustomSidebar from "./components/global/SideBar";
import './App.css'                                                                              
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AllRoute from './router/allRoute.js'
import { useEffect } from "react";
import { useAuth } from "./contextApi/AuthContext.js";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "./contextApi/useToken.js";
import Cookies from "js-cookie";





=======
import { useState, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Topbar from "./components/global/TopBar";
import CustomSidebar from "./components/global/SideBar";
import AllRoute from './router/allRoute.js';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import useToken from "./contextApi/useToken.js";

// Fallback UI for errors
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ padding: "1em", color: "red" }}>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};
>>>>>>> new-change/new-feature

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  const location = useLocation();
<<<<<<< HEAD
  const isLogin = location.pathname === '/login';
  const resetPath = location.pathname === '/reset';
  const savedToken = Cookies.get('access_token');
  

  const navigate = useNavigate();
  const token = useToken();

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }

  },[])





  console.log("isSidebar is ",isSidebar)

  return (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
        {!isSidebar&&(savedToken!=='null' && savedToken)&&!resetPath&&<CustomSidebar  isSidebar={isSidebar} setIsSidebar={setIsSidebar} />}
      {(isLogin===false&&resetPath==false)?(<Topbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />):null }
          <AllRoute  isSidebar={isSidebar}/> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;

=======
  const navigate = useNavigate();
  
  const isLogin = location.pathname === '/login';
  const resetPath = location.pathname === '/reset';
  const savedToken = Cookies.get('access_token');
  const token = useToken();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Error Boundary wrapping the whole app */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="app">
            <main className="content">
              {!isSidebar && savedToken && savedToken !== 'null' && !resetPath &&
                <CustomSidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
              }
              {!isLogin && !resetPath &&
                <Topbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
              }
              <AllRoute isSidebar={isSidebar} />
            </main>
          </div>
        </ErrorBoundary>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
>>>>>>> new-change/new-feature
