import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './AuthContext/UserContext';
import { router } from './Routes/Routes';

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div style={dark ? {backgroundColor: "black"} : {backgroundColor:'white'}}>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
