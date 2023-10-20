import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import AñadirMisMascotas from "./AñadirMisMascotas";
import { doc, collection, addDoc, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../components/Autenticacion";
import "../components/css/UserProfile.css"; // Importa el archivo CSS

function MisMascotas() {
  const { user } = UserAuth();
  const [mascotas, setMascotas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerMisMascotas = async () => {
      if (user) {
        const usuarioRef = doc(db, "Usuarios", user.uid);
        const misMascotasRef = collection(usuarioRef, "MisMascotas");
        const snapshot = await getDocs(misMascotasRef);
        const listaMascotas = [];
        snapshot.forEach((doc) => {
          listaMascotas.push({ id: doc.id, ...doc.data() });
        });
        setMascotas(listaMascotas);
      }
    };

    obtenerMisMascotas();
  }, [user]);

  const manejarAgregarMascota = async (nuevaMascota) => {
    try {
      if (user) {
        const usuarioRef = doc(db, "Usuarios", user.uid);
        const misMascotasRef = collection(usuarioRef, "MisMascotas");
        await addDoc(misMascotasRef, nuevaMascota);
        setMascotas([...mascotas, nuevaMascota]);
        setMostrarFormulario(false);
        alert("Mascota añadida exitosamente.");
      }
    } catch (error) {
      console.error("Error al añadir la mascota:", error);
    }
  };
  const manejarCancelar = () => {
    setMostrarFormulario(false);
  };
  return (
    <div className="contenedor-mis-mascotas">
      <h5 className="titulos">Mis Mascotas</h5>
      {/* Muestra las miniaturas de las mascotas */}
      <div className="contenedor-mascotas">
        {mascotas &&
          mascotas.map((mascota) => (
            <div className="miniatura-mascota" key={mascota.id}>
              <img src={mascota.ImagenMascota} alt={mascota.NombreMascota} />
              {/* Detalles de la mascota seleccionada */}
              {mascotaSeleccionada && mascotaSeleccionada.id === mascota.id && (
                <div className="contenedor-detalles-mascota">
                  {/* Detalles de la mascota */}
                  <h2>{mascotaSeleccionada.NombreMascota}</h2>
                  <p>Tipo: {mascotaSeleccionada.TipoMascota}</p>
                  <p>Raza: {mascotaSeleccionada.RazaMascota}</p>
                  <p>Sexo: {mascotaSeleccionada.SexoMascota}</p>
                  <p>Edad: {mascotaSeleccionada.EdadMascota}</p>
                  <p>Historia: {mascotaSeleccionada.HistoriaMascota}</p>
                  <Button onClick={() => setMascotaSeleccionada(null)}>Cerrar Detalles</Button>
                </div>
              )}
              {/* Botón para ver detalles de la mascota */}
              <Button
                variant="info"
                className="boton-ver-detalles"
                onClick={() => setMascotaSeleccionada(mascota)}
              >
                Ver Detalles de {mascota.NombreMascota}
              </Button>
            </div>
          ))}
      </div>
      {/* Botón para agregar nueva mascota */}
      <Button className="boton-agregar-mascota" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        Agregar Mascota
      </Button>
      {/* Renderiza el formulario si mostrarFormulario es true */}
      {mostrarFormulario && <AñadirMisMascotas agregarMascota={manejarAgregarMascota} onCancel={manejarCancelar}/>}
    </div>
  );
}

export default MisMascotas;
