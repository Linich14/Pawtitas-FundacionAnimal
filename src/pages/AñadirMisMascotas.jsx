import React, { useState } from 'react';
import { UserAuth } from '../components/Autenticacion';
import { doc, collection, addDoc } from '@firebase/firestore';
import { db } from '../firebase';

function AñadirMisMascotas({ agregarMascota, onCancel }) {
  const { user } = UserAuth();

  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [raza, setRaza] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [historia, setHistoria] = useState('');
  const [imagen, setImagen] = useState('');

  const manejarAñadirMascota = async (event) => {
    event.preventDefault();

    try {
      // Obtener la referencia del documento del usuario
      const usuarioRef = doc(db, 'Usuarios', user.uid);
      // Obtener la referencia de la colección "MisMascotas" dentro del documento del usuario
      const misMascotasRef = collection(usuarioRef, 'MisMascotas');

      // Añadir la nueva mascota a la colección "MisMascotas"
      await addDoc(misMascotasRef, {
        NombreMascota: nombre,
        TipoMascota: tipo,
        RazaMascota: raza,
        SexoMascota: sexo,
        EdadMascota: parseInt(edad),
        HistoriaMascota: historia,
        ImagenMascota: imagen,
      });

      // Limpiar el formulario después de agregar la mascota
      setNombre('');
      setTipo('');
      setRaza('');
      setSexo('');
      setEdad('');
      setHistoria('');
      setImagen('');

      alert('Mascota añadida exitosamente.');
    } catch (error) {
      console.error('Error al añadir la mascota a MisMascotas:', error);
    }
  };

  if (!user) {
    return <div>No estás autenticado.</div>;
  }

  return (
    <div className='formulario-agregar-mascota'>
      <h2>Añadir Nueva Mascota</h2>
      <form onSubmit={manejarAñadirMascota}>
        <label htmlFor="nombre">Nombre de la Mascota:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="tipo">Tipo de Mascota:</label>
        <input type="text" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required />

        <label htmlFor="raza">Raza de la Mascota:</label>
        <input type="text" id="raza" value={raza} onChange={(e) => setRaza(e.target.value)} required />

        <label htmlFor="sexo">Sexo de la Mascota:</label>
        <input type="text" id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} required />

        <label htmlFor="edad">Edad de la Mascota:</label>
        <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />

        <label htmlFor="historia">Historia de la Mascota:</label>
        <textarea id="historia" value={historia} onChange={(e) => setHistoria(e.target.value)} required />

        <label htmlFor="imagen">URL de la Imagen de la Mascota:</label>
        <input type="text" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required />

        <button type="button" onClick={onCancel}>Volver</button>

        <button type="submit">Añadir Mascota</button>
      </form>
    </div>
  );
}

export default AñadirMisMascotas;
