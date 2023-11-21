// Importa React y el componente de autenticación UserAuth
import React, { useState } from 'react';
import { UserAuth } from '../components/Autenticacion';

// Importa funciones específicas de Firestore y la instancia de la base de datos
import { doc, collection, addDoc } from '@firebase/firestore';
import { db } from '../firebase';

// Función del componente para agregar nuevas mascotas
function AñadirMisMascotas({ agregarMascota, onCancel }) {
  // Obtiene la información del usuario autenticado
  const { user } = UserAuth();

  // Estados para almacenar la información de la nueva mascota
  const [animalDatos, setAnimalDatos] = useState('');
  const [animalEdad, setAnimalEdad] = useState('');
  const [animalEstadoSalud, setAnimalEstadoSalud] = useState('');
  const [animalImagen, setAnimalImagen] = useState('');
  const [animalFechaAdopcion, setAnimalFechaAdopcion] = useState('');
  const [animalNombre, setAnimalNombre] = useState('');
  const [animalRaza, setAnimalRaza] = useState('');
  const [animalSexo, setAnimalSexo] = useState('');
  const [animalTipo, setAnimalTipo] = useState('');
  const [unidad, setUnidad] = useState('');

  // Función para manejar el proceso de añadir una nueva mascota
  const manejarAñadirMascota = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    try {
      // Obtiene la referencia del documento del usuario y de la colección "MisMascotas"
      const usuarioRef = doc(db, 'Usuarios', user.uid);
      const misMascotasRef = collection(usuarioRef, 'MisMascotas');

      // Añade una nueva mascota a la colección "MisMascotas"
      await addDoc(misMascotasRef, {
        Animal_Datos: animalDatos,
        Animal_Edad: animalEdad,
        Animal_Estado_Salud: animalEstadoSalud,
        Animal_Imagen: animalImagen,
        Animal_Fecha_Adopcion: animalFechaAdopcion,
        Animal_Nombre: animalNombre,
        Animal_Raza: animalRaza,
        Animal_Sexo: animalSexo,
        Animal_Tipo: animalTipo,
        unidad: unidad,
      });

      // Limpia el formulario después de agregar la mascota
      setAnimalDatos('');
      setAnimalEdad('');
      setAnimalEstadoSalud('');
      setAnimalImagen('');
      setAnimalFechaAdopcion('');
      setAnimalNombre('');
      setAnimalRaza('');
      setAnimalSexo('');
      setAnimalTipo('');
      setUnidad('');

      alert('Mascota añadida exitosamente.'); // Muestra un mensaje de éxito
    } catch (error) {
      console.error('Error al añadir la mascota a MisMascotas:', error); // Registra errores en la consola
    }
  };

  // Si el usuario no está autenticado, muestra un mensaje
  if (!user) {
    return <div>No estás autenticado.</div>;
  }

  // Estructura del formulario con campos de entrada y botones
  return (
    <div className='formulario-agregar-mascota'>
      <h2>Añadir Nueva Mascota</h2>
      <form onSubmit={manejarAñadirMascota}>
        {/* Campos de entrada para la información de la nueva mascota */}
        <label htmlFor="animalNombre">Nombre del Animal:</label>
        <input type="text" id="animalNombre" value={animalNombre} onChange={(e) => setAnimalNombre(e.target.value)} required />

        <label htmlFor="animalDatos">Datos del Animal:</label>
        <input type="text" id="animalDatos" value={animalDatos} onChange={(e) => setAnimalDatos(e.target.value)} required />

        <label htmlFor="animalEdad">Edad del Animal:</label>
        <input type="number" id="animalEdad" value={animalEdad} onChange={(e) => setAnimalEdad(e.target.value)} required />

        <label htmlFor="unidad">Unidad:</label>
        <input type="text" id="unidad" value={unidad} onChange={(e) => setUnidad(e.target.value)} required />

        <label htmlFor="animalEstadoSalud">Estado de Salud del Animal:</label>
        <input type="text" id="animalEstadoSalud" value={animalEstadoSalud} onChange={(e) => setAnimalEstadoSalud(e.target.value)} required />

        <label htmlFor="animalImagen">URL de la Imagen del Animal:</label>
        <input type="text" id="animalImagen" value={animalImagen} onChange={(e) => setAnimalImagen(e.target.value)} required />

        <label htmlFor="animalRaza">Raza del Animal:</label>
        <input type="text" id="animalRaza" value={animalRaza} onChange={(e) => setAnimalRaza(e.target.value)} required />

        <label htmlFor="animalSexo">Sexo del Animal:</label>
        <input type="text" id="animalSexo" value={animalSexo} onChange={(e) => setAnimalSexo(e.target.value)} required />

        <label htmlFor="animalTipo">Tipo del Animal:</label>
        <input type="text" id="animalTipo" value={animalTipo} onChange={(e) => setAnimalTipo(e.target.value)} required />

        {/* Botones para cancelar y enviar el formulario */}
        <button type="button" onClick={onCancel}>Volver</button>
        <button type="submit">Añadir Mascota</button>
      </form>
    </div>
  );
}

export default AñadirMisMascotas;
