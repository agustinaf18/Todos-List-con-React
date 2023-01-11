import React, { useState } from "react";

//create your first component
const Home = () => {
  //declaracion de estados
  // espacio de memoria, la funcion que actualiza elvalor inicial
  const [dato, setDatos] = useState(""); //1. creamos un estado del input email
  const [save, setSave] = useState([]);

  function handleSave(e) {
    setSave(save.concat("enviarDatos"));
    setSave = [{ enviarDatos }];
    console.log(handleSave);
  }

  //3.vinculamos la funcion
  function handleDatos(e) {
    setDatos(e.target.value);
  }

  function eliminarDatos(eliminarli) {
    const nuevasTareas = save.filter(function (item, index) {
      return index !== eliminarli;
    });
    console.log(eliminarli);
    console.log(nuevasTareas);
    setSave(nuevasTareas);
  }

  //4. procesamos todos los datos del formulario
  function enviarDatos(e) {
    e.preventDefault(); // detenemos el comportamiento predeterminado para procesar nuestro codigo
    setSave(save.concat(dato));
    setDatos("");
  }
  console.log(save);
  return (
    <>
      <div className="container col-md-4 offset-md-4 mt-4 ">
        <div>
          <h1 className=" container display-1 fw-light d-flex justify-content-center text-secondary text-opacity-50 my-6">
            todos
          </h1>
        </div>

        <form className="container" onSubmit={enviarDatos}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control" 
              aria-label="Recipient's username"
              aria-describedby="button-addon2" id="bckinput"
              onChange={(e) => {
                setDatos(e.target.value);
              }}
              value={dato}
            />
            {/* <button className="btn btn-outline-secondary" type="submit" id="enviar" onClick={enviarDatos}>Button</button> */}
          </div>
        </form>
        
		<div className=" container" >
		<div className="container rounded"  id="hola" >
          <ul>
            {save.map((item, index) => (
              <li key={index}>
                {" "}
                {item}{" "}
                <button
                  className="btn btn-secondary rounded opacity-10 mx-0"
                  type="button"
                  id="eliminar"
                  onClick={() => eliminarDatos(index)}
                >
                  x
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
		</div>
		
    </>
  );
};

export default Home;
