import "./App.css";
import Title  from "./Title.jsx";
const Data = () => {
  return <h1>new component</h1>;
};
function App() {
  return (
    <div>
      <Title name="ali" color="red"/>
      <button>clickMe</button>
    </div>
  );
}
export default App;
