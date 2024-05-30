const Phones = ({products}) => {
    const phoneData=products.filter(
        (product)=>product.name=="mobile");
  return (
    <>
    <div>
    <h1>Mobile phones </h1>
    <ul>
    {phoneData.map((phone) => (
        <li key={phone.phone} >
        <h2>{phone.name}</h2>
        <h2>{phone.description}</h2>
        <h2>price : {phone.price}</h2></li>
    ))}
    
    </ul>
    </div>
    </>
  )
}

export default Phones;