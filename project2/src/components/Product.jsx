import "./Product.css";
const Product = (props) => {
  return (
    <>
    <h2>Product Details</h2>
    <div className="prod"> Name : {props.name}  </div>
    <div className="prices">Price: ({ props.price } )</div>  
  </>
  )
}

export default Product