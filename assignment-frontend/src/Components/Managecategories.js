import React, { useState } from 'react'
import './Managecategories.css';

function Managecategories() {

    const [category, setCategory] = useState("");
    const [editcategory, setEditCategory] = useState("");
    const [editcategoryId, setEditCategoryId] = useState("");
    const [editcategoryName, setEditCategoryName] = useState("");

    const [editableCategories, setEditableCategories] = useState([]);

    const addCategories = async () => {
    }

    const editCategories = async () => {
    }

    const getEditableCategories = async () => {
    };

    const getEditableCategory = async (id, name) => {
        setEditCategoryName(name);
        setEditCategoryId(id);
    };

    return (
        <>
            <div className="categories-form-main">
                <div className="categories-form-sub-main">
                    <div className="categories-form-sub-sub-main">

                        <div className='categories-form-details'>
                            <h1 className='categories-form-heading'>Manage Categories</h1>
                            <div className='categories-form-details'>
                                <input name='category' type="text" placeholder="Category" className="categories-form-name" onChange={(event) => { setCategory(event.target.value); }} />

                            </div>
                            <div className="categories-form-signup-button">
                                <button onClick={addCategories} className='categories-form-button'>Add Category</button>
                            </div>

                        </div>

                        <div className='categories-form-details'>
                            <div className="categories-form-signup-button">
                                <button onClick={getEditableCategories} className='categories-form-button'>Show Editable Content</button>
                            </div>
                        </div>
                        <div className='categories-form-details'>
                            <h1 className='categories-form-heading'>Edit Category</h1>
                            <div className='categories-form-details'>
                                <input defaultValue={editcategoryName} name='Editcategory' type="text" placeholder="Edit Category Name" className="categories-form-name" onChange={(event) => { setEditCategory(event.target.value); }} />

                            </div>
                            <div className="categories-form-signup-button">
                                <button onClick={editCategories} className='categories-form-button'>Edit Category</button>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

            {/* <div>
                {editableCategories.map((cate) => {
                    return (
                        <>
                            <div className='category-returns'>
                                <h2 className='categories-h2'>{cate.categoryName}</h2><button onClick={() => getEditableCategory(cate.id, cate.categoryName)}>Edit</button>
                            </div>
                        </>
                    );
                })}
            </div> */}
        </>
    )
}

export default Managecategories