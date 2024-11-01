import "./App.css";
const Title = ({name , color}) => {
  let textColor = {color: color };
  return <h1 style={textColor}>{name}</h1>;
};

export default Title;
