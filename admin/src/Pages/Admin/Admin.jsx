import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

const Admin = () => {
    return(
        <div className="admin">
            <Sidebar></Sidebar>
            <Routes>
                <Route path='/addproduct' element={<AddProduct></AddProduct>}/>
                <Route path='/listproduct' element={<ListProduct></ListProduct>}/>
            </Routes>
        </div>
    )
}

export default Admin