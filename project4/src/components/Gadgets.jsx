const Gadgets = ({ products }) => {
  return (
    <div>
      <h1>Gadgets App</h1>
      <ol>
        {products.map((product) => (
          <li key={product.id} 
            style={{
              border: product.price > 50000 ? '2px solid blue' : 'none',
              padding: '10px',
              margin: '10px 0'
            }}
          >
            <h2>{product.name}</h2>
            <h5>{product.description}</h5>
            <h2>Price: {product.price}</h2>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Gadgets;
