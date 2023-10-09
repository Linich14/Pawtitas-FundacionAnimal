import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DetallesMascota from "./PetDetail";
import usuario from "./user";
import EditarMisMascotas from "./EditarMisMascotas";
import AñadirMisMascotas from "./AñadirMisMascotas"; // Importa el nuevo componente
import "../components/css/UserProfile.css";
import imagen1 from "../assets/perro2.jpg";

const imagenPorDefecto = imagen1;

function MisMascotas() {
  const [datosMascotas, setDatosMascotas] = useState(usuario.mascotas);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [imagenesMascota, setImagenesMascota] = useState({});
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [estoyEditando, setEstoyEditando] = useState(false);
  const [mostrarFormularioAgregarMascota, setMostrarFormularioAgregarMascota] = useState(false); 

  const manejarAgregarMascota = (nuevaMascota) => {
    setDatosMascotas([...datosMascotas, nuevaMascota]);
  };

  const manejarClickEditar = (mascota) => {
    setMascotaSeleccionada(mascota);
    setEstoyEditando(true);
  };

  const manejarEditarMascota = (indice, mascotaEditada) => {
    const mascotasActualizadas = datosMascotas.map((mascota, i) =>
      i === indice ? mascotaEditada : mascota
    );
    setDatosMascotas(mascotasActualizadas);
    setEstoyEditando(false);
  };

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

  const alternarGaleria = () => {
    setMostrarGaleria(!mostrarGaleria);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="contenedor-mis-mascotas">
      <h5 className="titulos">Mis Mascotas</h5>
      {mostrarFormularioAgregarMascota && <AñadirMisMascotas onAgregarMascota={manejarAgregarMascota} onCancel={() => setMostrarFormularioAgregarMascota(false)} />}
      <ul className="lista-mascotas">
        {datosMascotas &&
          datosMascotas.map((mascota, indice) => (
            <MiniaturaMascota
              key={indice}
              mascota={mascota}
              alSeleccionar={() => setMascotaSeleccionada(mascota)}
            />
          ))}
      </ul>
      <Button
        variant="info"
        className="boton-agregar-mascota"
        onClick={() => setMostrarFormularioAgregarMascota(!mostrarFormularioAgregarMascota)}
      >
        Agregar Mascota
      </Button>
      {mascotaSeleccionada && (
        <div className="contenedor-detalles-mascota">
          <DetallesMascota mascota={mascotaSeleccionada} onClose={() => setMascotaSeleccionada(null)} />
          <Button onClick={() => setMascotaSeleccionada(null)}>Volver</Button> 
          <Button variant="info" onClick={alternarGaleria}>
            Galería de Imágenes
          </Button>
          <Button variant="primary" onClick={() => manejarClickEditar(mascotaSeleccionada)}>
            Editar {mascotaSeleccionada && mascotaSeleccionada.nombre}
          </Button>

          {mascotaSeleccionada && estoyEditando && (
            <EditarMisMascotas
              mascotaSeleccionada={mascotaSeleccionada}
              manejarEditarMascota={manejarEditarMascota}
            />
          )}
          {mostrarGaleria && (
            <div className="galeria-imagenes">
              {imagenesMascota[mascotaSeleccionada.id]?.map((imagen, indice) => (
                <img
                  key={indice}
                  src={imagen}
                  alt={`Mascota ${mascotaSeleccionada.id} - Imagen ${indice + 1}`}
                  className="imagen-galeria"
                />
              ))}
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

function MiniaturaMascota({ mascota, alSeleccionar }) {
  return (
    <div className="miniatura-mascota">
      <img
        src={mascota?.imagen1 || imagenPorDefecto}
        alt={mascota?.nombre || "Nombre de Mascota"}
        className="imagen-miniatura-mascota"
      />
      <Button variant="info" onClick={() => alSeleccionar(mascota)}>
        Ver Detalles ({mascota?.nombre || "Nombre de Mascota"})
      </Button>
    </div>
  );
}

export default MisMascotas;
