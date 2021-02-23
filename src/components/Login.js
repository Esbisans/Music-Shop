import React from 'react';

const Login = () => {
    return (
        <>
         <div className="container">
             <h1>Login</h1>
             <div className="row">
                 <div className="form-group mt-3">
                     <input
                         className="form-control"
                         type="text"
                         placeholder="Usuario"
                         name="user"
                     />
                 </div>
             </div>
             <div className="row">
                 <form className="form-group mt-3">
                     <input
                         className="form-control"
                         type="password"
                         placeholder="Contraseña"
                         name="password"
                     />
                 </form>
             </div>
             <div className="row">
                 <div className="col">
                     <button className="btn btn-primary mt-3">
                         Iniciar Sesión
                     </button>
                 </div>

             </div>
         </div>
        </>
    );
};

export default Login;
