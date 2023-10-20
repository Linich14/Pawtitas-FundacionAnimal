import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { collection, query, getDocs } from '@firebase/firestore';
import AnimalCard from "./tarjetaAnimal";


const AnimalList = ({ terminoDeBusqueda }) => {
  const [animalIds, setAnimalIds] = useState([]);

  useEffect(() => {
    // Se llama a la db a travez de collection para poder hacer las consultas a la tabla Animales
    const animalCollectionRef = collection(db, 'Animales');
    // crea la consulta
    const consulta = query(animalCollectionRef);
  
    getDocs(consulta).then((querySnapshot) => {
      const ids = [];
      querySnapshot.forEach((doc) => {
        ids.push(doc.id);
      });
  
      // Filtra los documentos basados en el término de búsqueda
      const filteredIds = ids.filter((animalId) => {
        // Encuentra el documento correspondiente
        const doc = querySnapshot.docs.find((doc) => doc.id === animalId); 
        if (doc) {
          // Obtén los datos del documento
          const animalData = doc.data(); 
      
          // Filtro de busqueda 
          return (
            animalData.Animal_Nombre.toLowerCase().includes(terminoDeBusqueda.toLowerCase()) ||
            animalData.Animal_Edad.toLowerCase().includes(terminoDeBusqueda.toLowerCase()) ||
            animalData.Animal_Tipo.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
          );
        }
      
        //En caso de que no se encuentre la busqueda, este no regresa ningun valor
        return false; 
      });
      
      //Actualiza la pagina con el valor solicitado
      setAnimalIds(filteredIds);
    });
  }, [terminoDeBusqueda]);

  return (
    <div>
      {animalIds.map((animalId) => (
        <AnimalCard key={animalId} animalId={animalId} />
      ))}
    </div>
  );
};

export default AnimalList;