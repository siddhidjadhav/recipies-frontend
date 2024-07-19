import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Main"
import Header from "./Components/Header";
import CreateRecipie from "./Components/CreateRecipie";
import Welcome from "./Components/Welcome";
import RecipeDetails from "./Components/RecipieDetails";

function App() {
  return (
    <div style={{
      height: "100%",
      overflow: "hidden",
      width: "80%", 
      margin: "auto"
    }}>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1, 
      }}>
        <Header />
      </div>
      <div style={{
        position: "relative",
        paddingTop: "50px",
        top: "20px", 
      }}>
        
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="recipies" element={<Home />} />
            <Route path="create" element={<CreateRecipie />} />
            <Route path="recipies/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
