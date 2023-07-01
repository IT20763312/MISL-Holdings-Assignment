import React, { useState } from 'react'
import './Manageproducts.css';

function Manageproducts() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [stock, setStock] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [itemCode, setItemCode] = useState("");

  return (
    <>
            <div className="products-form-main">
                <div className="products-form-sub-main">
                    <div className="products-form-sub-sub-main">
                        <div className='products-form-details'>
                            <h1 className='products-form-heading'>Manage Products</h1>
                            {/* <select required onChange={(event) => (setCategory(event.target.value))}>
                                <option>Select Category</option>
                                {categories.map((cate) => {
                                    return (
                                        <option value={cate.id}>{cate.categoryName}</option>
                                    )
                                })}
                            </select> */}
                        </div>
                        <div className='products-form-details'>
                            <input required name='itemcode' type="text" placeholder="Item Code" className="products-form-name" onChange={(event) => (setItemCode(event.target.value))} />
                        </div>
                        <div className='products-form-details'>
                            <input required name='title' type="text" placeholder="Product Title" className="products-form-name" onChange={(event) => (setTitle(event.target.value))} />
                        </div>
                        <div className='products-form-details'>
                            <input required name='price' step={0.01} type="number" placeholder='Product Price' className="products-form-name" onChange={(event) => (setProductPrice(event.target.value))} />
                        </div>
                        <div className='products-form-details'>
                            <input required name='stock' type="number" placeholder='Product Qty' className="products-form-name" onChange={(event) => (setStock(event.target.value))} />
                        </div>
                        <br></br>
                        <div className="products-form-signup-button">
                            <button className='products-form-button'>Add Product</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
  )
}

export default Manageproducts
