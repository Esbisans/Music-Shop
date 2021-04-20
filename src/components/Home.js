import React, {useEffect, useState} from 'react';
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";
import {FaBoxes, FaHome, FaTags, FaUserTag} from "react-icons/fa";

export const Home = () => {

    const [productos, setProductos] = useState([]);

    const [category, setCategory] = useState([]);

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        handleList();
    }, []);

    const handleList = () => {

        APIInvoker.invokeGET('/products/showproduct', data => {
            setProductos(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })

        APIInvoker.invokeGET('/category/showCategory', data => {
            setCategory(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })

        APIInvoker.invokeGET('/roles/showRol', data => {
            setRoles(data.data)
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })

    }

    return(
        <>

            <div className="row">


                    <h1 className="my-4">
                        <FaHome size={40} />
                        Home
                    </h1>

            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card text-white bg-dark mb-3" >
                        <div className="card-header"><FaBoxes/></div>
                        <div className="card-body">
                            <h5 className="card-title">Productos: {productos.length}</h5>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-white bg-dark mb-3" >
                        <div className="card-header"><FaTags/></div>
                        <div className="card-body">
                            <h5 className="card-title">Categorias: {category.length}</h5>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card text-white bg-dark mb-3" >
                        <div className="card-header"><FaUserTag/></div>
                        <div className="card-body">
                            <h5 className="card-title">Roles: {roles.length}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


