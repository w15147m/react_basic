import Price from "./Price";

function Product() {
  const products = [
    {
      name: "Casual Shirt",
      description: "Men's comfortable casual shirt.",
      oldPrice: 30.00,
      newPrice: 25.00
    },
    {
      name: "Summer Dress",
      description: "Women's lightweight summer dress.",
      oldPrice: 50.00,
      newPrice: 40.00
    },
    {
      name: "Leather Handbag",
      description: "Elegant leather handbag for daily use.",
      oldPrice: 100.00,
      newPrice: 85.00
    },
    {
      name: "Running Shoes",
      description: "Durable running shoes for athletes.",
      oldPrice: 75.00,
      newPrice: 60.00
    }
  ];
let card = {
  border: "1px solid ghostwhite",
  padding: "10px",
  borderRadius: "20px",
  height: "250px",
  margin: "10px",
  width: "200px",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}
  return (
    <>
      {products.map((product, index) => (
        <div key={index} style={card}>
          <span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          </span>
          <Price newPrice={product.newPrice} oldPrice={product.oldPrice} />
        </div>
      ))}
    </>
  );
}

export default Product;
