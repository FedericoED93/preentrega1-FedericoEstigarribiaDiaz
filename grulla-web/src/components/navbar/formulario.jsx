import React from 'react';

const Formulario = ({ busqueda }) => {
    return (
        <>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder={busqueda} aria-label="Search" />
                <button className="btn btn-outline-success buttonMod" type="submit">Buscar</button>
            </form>
        </>
    );
}

export default Formulario;
