import Tp1Calcu from "./My Comp/TP1/Tp1Calcu";
import Tp3Todo from "./My Comp/Tp3/Tp3Todo";
import Useeffect from "./My Comp/TP4/Useeffect";
import {Routes,Route} from  'react-router-dom'
import Menu from "./My Comp/Menu";
import Slider from "./My Comp/TP2/Slider";
import ThemeContextProvider from "./Drk/ThemeContext";
import Content from './Drk/Content/Content'

function App() {
  
  return (
    <div>
      <Menu></Menu>

       <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
      <Routes>
         <Route path="/" element={<Tp1Calcu></Tp1Calcu>}></Route>
         <Route path="/Tp3Todo" element={<Tp3Todo></Tp3Todo>}></Route>
         <Route path="/Useeffect" element={<Useeffect></Useeffect>}></Route>
         <Route path="/Slider" element={<Slider></Slider>}></Route>
         <Route
  path="*"
  element={
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', flexDirection: 'column' }}>
      <h1 style={{ color: 'red', fontSize: '2em' }}>404</h1>
      <p style={{ textAlign: 'center',width:'600px',fontSize: '20px' }}>File not found

The site configured at this address does not contain the requested file.

If this is your site, make sure that the filename 
case matches the URL as well as any file permissions.
For root URLs (like http://example.com/)
 you must provide an index.html file.

Read the full documentation for
 more information about using GitHub Pages.

</p>
    </div>
  }
/>


      </Routes>
     
    </div>
  );
}

export default App;
