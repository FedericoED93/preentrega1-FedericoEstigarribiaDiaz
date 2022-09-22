import React from 'react';
import Categorias from './categorias';
import Formulario from './formulario';
import Hamburguesa from './hamburguesa';
import Logo from './logo';
import Secciones from './secciones';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navMod">
        <div className="container-fluid">
          <Logo />
          <Hamburguesa />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Secciones />
              <Categorias />
            </ul>
            <Formulario busqueda="Buscar producto" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
