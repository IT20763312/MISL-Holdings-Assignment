import React, { useState, useEffect } from 'react'
import './Manageproducts.css';
import Authuser from './Authuser';

function Manageproducts() {

    const { http } = Authuser();

    

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(0);
    const [title, setTitle] = useState("");
    const [stock, setStock] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [itemCode, setItemCode] = useState("");
    const [editableProductId , setEditableProductId] = useState[0];

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        fetchAllCategories();
        fetchAllProducts();
    }, []);

    const fetchAllCategories = () => {
        http.get('categories').then((res) => {
            console.log(res.data);
            setCategories(res.data);
        }).catch(e => {
            console.error(e);
        });
    }

    const fetchAllProducts = () => {
        http.get('products').then((res) => {
            console.log(res.data);
            setProducts(res.data);
        }).catch(e => {
            console.error(e);
        });
    }

    const addProduct = () => {
        setInputs({ categoryId: category, itemCode: itemCode, productName: title, stock: stock, price: productPrice });

        http.post('products', inputs).then((res) => {
            alert("Product Added SuccessFully!")
        }).catch(e => {
            console.log(e);
            alert("Error Occured!");
        })
    }

    const getEditableProduct = (id, itemCode, name, stock, price, cate) => {
        setEditableProductId(id);
        setCategory(cate);
        setItemCode(itemCode);
        setTitle(name);
        setStock(stock);
        setProductPrice(price);
    }

    const updateProduct = () => {

        setInputs({ categoryId: category, itemCode: itemCode, productName: title, stock: stock, price: productPrice });

        http.put('products/'+editableProductId, inputs).then((res) => {
            alert("Category updated SuccessFully!");
        }).catch(e => {
            console.log(e);
            alert("Error Occured!");
        })

    }

    return (
        <>
            <div className="products-form-main">
                <div className="products-form-sub-main">
                    <div className="products-form-sub-sub-main">
                        <div className='products-form-details'>
                            <h1 className='products-form-heading'>Manage Products</h1>
                            <select required value={category} onChange={(event) => (setCategory(event.target.value))}>
                                <option>Select Category</option>
                                {categories.map((cate) => {
                                    return (
                                        <option value={cate.id}>{cate.categoryName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='products-form-details'>
                            <input required name='itemcode' value={itemCode} type="text" placeholder="Item Code" className="products-form-name" onChange={(event) => (setItemCode(event.target.value))} />
                        </div>
                        <div className='products-form-details'>
                            <input required name='title' value={title} type="text" placeholder="Product Title" className="products-form-name" onChange={(event) => (setTitle(event.target.value))} />
                        </div>
                        <div className='products-form-details'>
                            <input required name='price' defaultValue={productPrice} step={0.01} type="number" placeholder='Product Price' className="products-form-name" onChange={(event) => (setProductPrice(event.target.value))} />
                        </div>
                        <div className='products-form-details'>
                            <input required name='stock' defaultValue={stock} type="number" placeholder='Product Qty' className="products-form-name" onChange={(event) => (setStock(event.target.value))} />
                        </div>
                        <br></br>
                        <div className="products-form-signup-button">
                            <button className='products-form-button' onClick={addProduct}>Add Product</button>
                        </div>
                        <div className="products-form-signup-button">
                            <button className='products-form-button' onClick={updateProduct}>Update Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-form-main-table">
                <table>
                    <tr>
                        <th>
                            <td className='products-form-main-table-td1'>Item Code</td>
                            <td className='products-form-main-table-td1'>Item Name</td>
                            <td className='products-form-main-table-td1'>Qty</td>
                            <td className='products-form-main-table-td1'>Price</td>
                            <td className='products-form-main-table-td1'>Action</td>
                        </th>
                    </tr>
                    {products.map((pro) => {
                        return (
                            <>
                                <tr>
                                    <td className='products-form-main-table-td'>{pro.itemCode}</td>
                                    <td className='products-form-main-table-td'>{pro.productName}</td>
                                    <td className='products-form-main-table-td'>{pro.stock}</td>
                                    <td className='products-form-main-table-td'>{pro.price}</td>
                                    <td className='products-form-main-table-td'><button className='category-list-btn' onClick={() => getEditableProduct(pro.id, pro.itemCode, pro.productName, pro.stock, pro.price, pro.categoryId)}>Edit</button></td>
                                </tr>
                            </>
                        );
                    })}
                </table>
            </div>
        </>
    )
}

export default Manageproducts
