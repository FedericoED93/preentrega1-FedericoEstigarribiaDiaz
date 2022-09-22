import React from 'react';

const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu dropdownCat">
                <li><a className="dropdownLink" href="#">Juegos de mesa</a></li>
                <li><a className="dropdownLink" href="#">Construccion</a></li>
                <li><a className="dropdownLink" href="#">Rompecabezas</a></li>
                <li><a className="dropdownLink" href="#">Ciencia</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdownLink" href="#">Primera Infancia</a></li>
            </ul>
        </li>
        </>
    );
}

export default Categorias;
