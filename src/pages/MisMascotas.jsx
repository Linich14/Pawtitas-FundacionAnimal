import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DetallesMascota from "./PetDetail";
import usuario from "./user";
import EditarMisMascotas from "./EditarMisMascotas";
import AñadirMisMascotas from "./AñadirMisMascotas"; 
import "../components/css/UserProfile.css";
import imagen1 from "../assets/perro2.jpg";

const imagenPorDefecto = imagen1;

function MisMascotas() {
  // Estados para almacenar datos de mascotas, mascota seleccionada, imágenes y más.
  const [datosMascotas, setDatosMascotas] = useState(usuario.mascotas);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [imagenesMascota, setImagenesMascota] = useState({});
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [estoyEditando, setEstoyEditando] = useState(false);
  const [mostrarFormularioAgregarMascota, setMostrarFormularioAgregarMascota] = useState(false); 

  // Función para manejar la adición de una nueva mascota.
  const manejarAgregarMascota = (nuevaMascota) => {
    setDatosMascotas([...datosMascotas, nuevaMascota]);
    setMostrarFormularioAgregarMascota(false); // Cierra el formulario después de agregar la mascota
  };

  // Función para manejar la edición de una mascota existente.
  const manejarClickEditar = (mascota) => {
    setMascotaSeleccionada(mascota);
    setEstoyEditando(true);
  };

  // Función para manejar la edición de una mascota seleccionada.
  const manejarEditarMascota = (indice, mascotaEditada) => {
    const mascotasActualizadas = datosMascotas.map((mascota, i) =>
      i === indice ? mascotaEditada : mascota
    );
    setDatosMascotas(mascotasActualizadas);
    setEstoyEditando(false);
  };

  // Función para manejar la adición de una imagen a la galería de una mascota.
  const manejarAgregarImagen = (evento) => {
    const archivo = evento.target.files[0];
    if (mascotaSeleccionada) {
      const lector = new FileReader();
      lector.onload = (e) => {
        const imagenesMascotasActualizadas = { ...imagenesMascota };
        if (!imagenesMascotasActualizadas[mascotaSeleccionada.id]) {
          imagenesMascotasActualizadas[mascotaSeleccionada.id] = [];
        }
        imagenesMascotasActualizadas[mascotaSeleccionada.id].push(e.target.result);
        setImagenesMascota(imagenesMascotasActualizadas);
      };
      lector.readAsDataURL(archivo);
    }
  };

  // Función para alternar la visibilidad de la galería de imágenes de la mascota.
  const alternarGaleria = () => {
    setMostrarGaleria(!mostrarGaleria);
  };

  // Efecto de useEffect (aunque actualmente está vacío, se puede llenar si es necesario).
  useEffect(() => {
    // Código de efecto (si es necesario)...
  }, []);

  // Renderiza la interfaz de usuario con comentarios explicativos.
  return (
    <div className="contenedor-mis-mascotas">
      <h5 className="titulos">Mis Mascotas</h5>
      {/* Condición para mostrar el formulario de agregar mascota */}
      {mostrarFormularioAgregarMascota && <AñadirMisMascotas agregarMascota={manejarAgregarMascota} onCancel={() => setMostrarFormularioAgregarMascota(false)} />}
      {/* Muestra las miniaturas de las mascotas */}
      <div className="contenedor-mascotas">
        {datosMascotas &&
          datosMascotas.map((mascota, indice) => (
            <div className="miniatura-mascota" key={indice}>
              <img
                src={mascota?.imagen1 || imagenPorDefecto}
                alt={mascota?.nombre || "Nombre de Mascota"}
                className="imagen-miniatura-mascota"
              />
              {/* Botón para ver detalles de la mascota */}
              <Button variant="info" className="boton-ver-detalles" onClick={() => setMascotaSeleccionada(mascota)}>
               {mascota?.nombre || "Nombre de Mascota"}
              </Button>
            </div>
          ))}
      </div>
      {/* Botón para agregar nueva mascota */}
      <Button
  variant="info"
  style={{
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "block",
    padding: "0.5rem 1rem",
    width: "fit-content",
    margin: "0 auto",
    marginTop: "10px"
  }}
  onClick={() => setMostrarFormularioAgregarMascota(!mostrarFormularioAgregarMascota)}
>
  Agregar Mascota
</Button>
      {/* Sección para mostrar detalles, botones de acción y galería de imágenes de la mascota seleccionada */}
      {mascotaSeleccionada && (
        <div className="contenedor-detalles-mascota">
          {/* Componente para mostrar detalles de la mascota seleccionada */}
          <DetallesMascota mascota={mascotaSeleccionada} onClose={() => setMascotaSeleccionada(null)} />
          {/* Contenedor para botones de acción */}
          <div className="contenedor-botones">
            {/* Botón para volver atrás */}
            <Button onClick={() => setMascotaSeleccionada(null)}>Volver</Button> 
            {/* Botón para alternar la visibilidad de la galería de imágenes */}
            <Button variant="info" onClick={alternarGaleria}>
              Galería de Imágenes
            </Button>
            {/* Botón para editar la mascota seleccionada */}
            <Button variant="primary" onClick={() => manejarClickEditar(mascotaSeleccionada)}>
              Editar {mascotaSeleccionada && mascotaSeleccionada.nombre}
            </Button>
          </div>
          {/* Sección para mostrar galería de imágenes de la mascota */}
          {mascotaSeleccionada && estoyEditando && (
            <EditarMisMascotas
              mascotaSeleccionada={mascotaSeleccionada}
              manejarEditarMascota={manejarEditarMascota}
            />
          )}
          {/* Sección para mostrar galería de imágenes de la mascota */}
          {mostrarGaleria && (
            <div className="galeria-imagenes">
              {/* Muestra imágenes de la mascota seleccionada */}
              {imagenesMascota[mascotaSeleccionada.id]?.map((imagen, indice) => (
                <img
                  key={indice}
                  src={imagen}
                  alt={`Mascota ${mascotaSeleccionada.id} - Imagen ${indice + 1}`}
                  className="imagen-galeria"
                />
              ))}
              {/* Botón para añadir una nueva imagen a la galería */}
              <label className="boton-agregar-imagen">
                Añadir Imagen
                <input type="file" accept="image/*" onChange={manejarAgregarImagen} />
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Exporta el componente MisMascotas.
export default MisMascotas;
