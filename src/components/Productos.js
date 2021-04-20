import React, { useState, useEffect } from 'react';
import APIInvoker from "./utils/APIInvoker";
import Swal from "sweetalert2";
import {useForm} from "../hooks/useForm";

export const Productos = () => {

    const [productos, setProductos] = useState([]);

    const [category, setCategory] = useState([]);

    const [formValues, handleInputChange, reset] = useForm({
        nombre: '',
        precio: '',
        cantidad: '',
        categoria: '',
        descripcion: ''
    });
    const {nombre, precio, cantidad, categoria, descripcion} = formValues;

    const [editValues, handleInputChangeEdit, resetEdit, setEditValues] = useForm({
        id: '',
        editNombre: '',
        editPrecio: '',
        editCantidad: '',
        editCategoria: '',
        editDescripcion: ''
    });
    const {id, editNombre, editPrecio, editCantidad, editCategoria, editDescripcion} = editValues;

    useEffect(() => {
        handleListProduct();
        handleListCategory()
    }, []);



    const handleListProduct = () => {
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
    }

    const handleListCategory = () => {
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
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        let product = {
            nombre: nombre,
            precio: precio,
            cantidadExistente: cantidad,
            idCategoria: categoria,
            descripcion: descripcion
        }

        APIInvoker.invokePOST('/products/createProduct', product, data => {
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }
            );
            handleListProduct();
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );

        })

        reset();
    }

    const handleDeleteProduct = (id, e) => {
        e.preventDefault();

        let product = {
            id: id
        }

        APIInvoker.invokeDELETE('/products/deleteProduct', product, data => {
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar",
                }
            );
            handleListProduct();

        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        });

    }

    const handleEditing = (id, e) => {
        e.preventDefault();

        APIInvoker.invokeGET(`/products/findProduct/${id}`, data => {

            setEditValues({
                id: data.data.idProducto,
                editNombre: data.data.nombre,
                editPrecio: data.data.precio,
                editCantidad: data.data.cantidadExistente,
                editCategoria: data.data.idCategoria,
                editDescripcion: data.data.descripcion
            })

        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Ok"
                }
            );
        })

    }

    const handleEditProduct = (e) => {
        e.preventDefault();

        let product = {
            idProducto: id,
            nombre: editNombre,
            precio: editPrecio,
            cantidadExistente: editCantidad,
            idCategoria: editCategoria,
            descripcion: editDescripcion
        }

        APIInvoker.invokePUT('/products/updateProduct', product, data => {
            Swal.fire({
                    title: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar",
                }
            );
            handleListProduct();
        }, error => {
            Swal.fire({
                    title: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                }
            );
        })
        resetEdit();
    }

    return (
        <>
            <div className="container mt-4">

                <div className="row">
                    <div className="col-8">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                productos.map((product) => (
                                    <div className="col " key={product.idProducto}>
                                        <div className="card h-100" >
                                            <div className="card-header"><h3>{product.nombre}</h3></div>
                                            <div className="card-body">
                                                <h6 className="card-title">Precio: ${product.precio}</h6>
                                                <h6 className="card-text">Cantidad: {product.cantidadExistente}</h6>
                                                <p className="card-text">{product.descripcion}</p>
                                            </div>
                                            <div className="card-footer">
                                                <button
                                                    className="btn btn-outline-primary me-3 my-sm-2 "
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#editModal"
                                                    onClick={(e) => handleEditing(product.idProducto, e)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger me-3"
                                                    onClick={(e) => handleDeleteProduct(product.idProducto, e)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-4">

                        <form className="container d-grid gap-2" onSubmit={handleAddProduct}>
                            <h4>Agregar Producto</h4>
                            <hr />

                            <input
                                type="text"
                                name="nombre"
                                value={nombre}
                                className="form-control "
                                placeholder="nombre"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />

                            <input
                                type="text"
                                name="precio"
                                value={precio}
                                className="form-control"
                                placeholder="precio"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />

                            <input
                                type="text"
                                name="cantidad"
                                value={cantidad}
                                className="form-control "
                                placeholder="cantidad"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />

                            <div className="input-group ">
                                <select
                                    className="form-select"
                                    name="categoria"
                                    value={categoria}
                                    onChange={handleInputChange}
                                >
                                    <option value={-1} >Seleccione una categoria</option>
                                    {
                                        category.map((cat) => (
                                            <option key={cat.idCategoria} value={cat.idCategoria} >
                                                {cat.nombre}
                                            </option>
                                        ))
                                    }

                                </select>
                            </div>

                            <input
                                type="text"
                                name="descripcion"
                                value={descripcion}
                                className="form-control "
                                placeholder="descripcion"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />

                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Agregar
                            </button>

                        </form>


                    </div>

                </div>

            </div>

            <div
                className="modal fade"
                id="editModal"
            >
                <div className="modal-dialog" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Porducto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                name="editNombre"
                                value={editNombre}
                                className="form-control my-4"
                                placeholder="Nombre"
                                autoComplete="off"
                                onChange={handleInputChangeEdit}
                            />

                            <input
                                type="text"
                                name="editPrecio"
                                value={editPrecio}
                                className="form-control my-4"
                                placeholder="Precio"
                                autoComplete="off"
                                onChange={handleInputChangeEdit}
                            />

                            <input
                                type="text"
                                name="editCantidad"
                                value={editCantidad}
                                className="form-control my-4"
                                placeholder="Cantidad"
                                autoComplete="off"
                                onChange={handleInputChangeEdit}
                            />

                            <div className="input-group ">
                                <select
                                    className="form-select"
                                    name="editCategoria"
                                    value={editCategoria}
                                    onChange={handleInputChangeEdit}
                                >
                                    <option value={-1} >Seleccione una categoria</option>
                                    {
                                        category.map((cat) => (
                                            <option key={cat.idCategoria} value={cat.idCategoria} >
                                                {cat.nombre}
                                            </option>
                                        ))
                                    }

                                </select>
                            </div>

                            <input
                                type="text"
                                name="editDescripcion"
                                value={editDescripcion}
                                className="form-control my-4"
                                placeholder="Descripcion"
                                autoComplete="off"
                                onChange={handleInputChangeEdit}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleEditProduct} data-bs-dismiss="modal" >Confirmar edición</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


