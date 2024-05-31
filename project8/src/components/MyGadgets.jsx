import { useState } from "react";

const MyGadgets = ({ products }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="text-center p-2 w-200">
      <h1 className=" font-bold text-2xl p-2">MyGadets List</h1>
      <ol>
        {products.map((product,index) => (
          <div
            className=" w-[40%] m-auto"
            style={{
              backgroundColor:
                show && product.price > 5000 ? "lightgreen" : "none",
            }}
            key={index}
          >
            <h1 >{product.name}</h1>
            <h1>{product.description}</h1>
            <h1>{product.price}</h1>
            <button
              onClick={() => setshow(!show)}
              className=" p-2 bg-blue-400 rounded-sm m-3"
            >
              Highlight Expensive Gadget
            </button>
            <hr />
            <hr />
          </div>
        ))}
      </ol>
    </div>
  );
};

export default MyGadgets;