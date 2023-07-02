import React, { useEffect, useState } from 'react'
import './Managecategories.css';
import Authuser from './Authuser';

function Managecategories() {

    const { http } = Authuser();

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [editcategoryId, setEditCategoryId] = useState(0);

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const fetchAllCategories = () => {
        http.get('categories').then((res) => {
            console.log(res.data);
            setCategories(res.data);
        }).catch(e => {
            console.error(e);
        });
    }

    const getEditableCategory = (id, name) => {
        setCategory(name);
        setEditCategoryId(id);
    }

    const addCategory = () => {

        setInputs(values => ({ ...values, categoryName: category }));

        http.post('categories', inputs).then((res) => {
            alert("Category Added SuccessFully!")
        }).catch(e => {
            console.log(e);
            alert("Error Occured!");
        })
    }

    const editCategory = () => {

        setInputs({ categoryName: category, });

        http.put('categories/'+editcategoryId, inputs).then((res) => {
            alert("Category updated SuccessFully!");
        }).catch(e => {
            console.log(e);
            alert("Error Occured!");
        })

    }

    return (
        <>
            <div className="categories-form-main">
                <div className="categories-form-sub-main">
                    <div className="categories-form-sub-sub-main">

                        <div className='categories-form-details'>
                            <h1 className='categories-form-heading'>Manage Categories</h1>
                            <div className='categories-form-details'>
                                <input name='category' type="text" placeholder="Category" className="categories-form-name" value={category} onChange={(event) => { setCategory(event.target.value); }} />

                            </div>
                            <div className="categories-form-signup-button">
                                <button onClick={addCategory} className='categories-form-button'>Add Category</button>
                            </div>

                        </div>

                        {/* <div className='categories-form-details'>
                            <div className="categories-form-signup-button">
                                <button onClick={getEditableCategories} className='categories-form-button'>Show Editable Content</button>
                            </div>
                        </div> */}
                        <div className='categories-form-details'>
                            {/* <h1 className='categories-form-heading'>Edit Category</h1>
                            <div className='categories-form-details'>
                                <input defaultValue={editcategoryName} name='Editcategory' type="text" placeholder="Edit Category Name" className="categories-form-name" onChange={(event) => { setEditCategory(event.target.value); }} />

                            </div> */}
                            <div className="categories-form-signup-button">
                                <button onClick={editCategory} className='categories-form-button'>Update Category</button>
                            </div>

                        </div>

                    </div>


                </div>
            </div>

            <div className='category-list'>
                {categories.map((cate) => {
                    return (
                        <>
                            <div className='category-returns'>
                                <h2 className='categories-h2'>{cate.categoryName}</h2>&nbsp;&nbsp;&nbsp;<button className='category-list-btn' onClick={() => getEditableCategory(cate.id, cate.categoryName)}>Edit</button>
                            </div>
                        </>
                    );
                })}
            </div>

        </>
    )
}

export default Managecategories