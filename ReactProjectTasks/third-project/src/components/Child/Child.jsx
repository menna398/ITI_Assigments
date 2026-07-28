import React from "react";

function Child({ product , deleteProduct }) {
  // console.log(products);
  let { id, pName, price, onSale, desc, count } = product;

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>{pName}</span>
            {onSale && <span className="badge bg-danger">On Sale!</span>}
          </div>
          <div className="card-body">
            <h5 className="card-title">Price : {price}</h5>
            <p className="card-text">{desc}</p>
            <hr />
            <p>Items in Stock : {count}</p>
            <div className="d-flex gap-4 justify-content-center">
              <button className="btn btn-success">Add to Cart</button>
              <button className="btn btn-danger" onClick={() => deleteProduct(id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Child;
