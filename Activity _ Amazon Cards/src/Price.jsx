function Price({ newPrice, oldPrice }) {
  let price = {
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: 'burlywood'
    
  }
  let oldPric = {
    textDecoration: 'line-through'
  }
    return (
      <div style={price}>
        <span style={oldPric}>Rs:{oldPrice.toFixed(2)}</span>
        &nbsp;
        &nbsp;
        &nbsp;
        <span>Rs:{newPrice.toFixed(2)}</span>
      </div>
    );
  }
  
  export default Price;
  