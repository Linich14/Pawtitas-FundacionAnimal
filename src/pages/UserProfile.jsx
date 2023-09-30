import React, { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { Card, Form, Image, Button } from "react-bootstrap";
import "../components/css/UserProfile.css";
import image1 from "../assets/perro2.jpg";
import image2 from "../assets/perro3.jpg";

const defaultImage1 = image1;
const defaultImage2 = image2;

function UserProfile(props) {
  const { name, rut, email, phoneNumber, photo, bio, pets } = props;

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    bio: bio,
  });

  const [petsData, setPetsData] = useState(pets);
  const [isAddPetFormVisible, setIsAddPetFormVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedPetIndex, setSelectedPetIndex] = useState(null);
  const [petImages, setPetImages] = useState({});
  const [showGallery, setShowGallery] = useState(false);
  const [isEditingPet, setIsEditingPet] = useState(false);
  const [editedPetData, setEditedPetData] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleEditedPetChange = (event) => {
    const { name, value } = event.target;
    setEditedPetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const saveEditedPet = () => {
    if (selectedPetIndex !== null && editedPetData) {
      handleEditPet(selectedPetIndex, editedPetData);
    }
    setIsEditingPet(false);
    setSelectedPet(null); 
  };
  

  const handleEditPet = (index, editedPet) => {
    const updatedPets = petsData.map((pet, i) =>
      i === index ? editedPet : pet
    );
    setPetsData(updatedPets);
  };
  

  const handleAddPet = (newPet) => {
    setPetsData([...petsData, newPet]);
    setIsAddPetFormVisible(false);
  };

  const handleUpload = (event) => {
    console.log(event.target.files[0]);
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (selectedPet) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedPetImages = { ...petImages };
        if (!updatedPetImages[selectedPet.id]) {
          updatedPetImages[selectedPet.id] = [];
        }
        updatedPetImages[selectedPet.id].push(e.target.result);
        setPetImages(updatedPetImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const showSection = (section) => {
    setActiveSection(section);
    setSelectedPet(null);
    setShowGallery(false);
    setIsEditingPet(false);
  };

  const selectPet = (pet) => {
    setSelectedPet(pet);
    setShowGallery(false);
    setIsEditingPet(false);
  };

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const goBackToPets = () => {
    setSelectedPet(null);
    setIsEditingPet(false);
  };

  const startEditingPet = () => {
    setIsEditingPet(true);
    setSelectedPetIndex(petsData.indexOf(selectedPet));
    setEditedPetData({ ...selectedPet });
  };


  
  const petDetails = selectedPet && (
  
    <div className="pet-details-container">
      {isEditingPet ? (
        <div className="edit-pet-form">
          <h4>Editar Mascota</h4>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
  type="text"
  name="name"
  value={editedPetData.name}
  onChange={handleEditedPetChange}
/>
            </Form.Group>
            <Form.Group controlId="breed">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                name="breed"
                value={editedPetData.breed}
                onChange={handleEditedPetChange}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Género</Form.Label>
              <Form.Control
                type="text"
                name="gender"
                value={editedPetData.gender}
                onChange={handleEditedPetChange}
              />
            </Form.Group>
            <Form.Group controlId="story">
              <Form.Label>Historia</Form.Label>
              <Form.Control
                as="textarea"
                name="story"
                value={editedPetData.story}
                onChange={handleEditedPetChange}
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="text"
                name="age"
                value={editedPetData.age}
                onChange={handleEditedPetChange}
              />
            </Form.Group>
            <Form.Group controlId="weight">
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="text"
                name="weight"
                value={editedPetData.weight}
                onChange={handleEditedPetChange}
              />
            </Form.Group>
            <Button variant="danger" onClick={() => setIsEditingPet(false)}>
              Cancelar
            </Button>
            <Button variant="success" onClick={saveEditedPet}>
  Guardar
</Button>
          </Form>
        </div>
       ) : (
        <>
          <h4>Detalles de {selectedPet.name}</h4>
          <p>Raza: {selectedPet.breed}</p>
          <p>Género: {selectedPet.gender}</p>
          <p>Historia: {selectedPet.story}</p>
          <p>Edad: {selectedPet.age}</p>
          <p>Peso: {selectedPet.weight}</p>
          <Button variant="info" onClick={toggleGallery}>
            Galería de Imágenes
          </Button>
          {showGallery && (
  <div className="image-gallery">
    {petImages[selectedPet.id]?.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Mascota ${selectedPet.id} - Imagen ${index + 1}`}
        className="gallery-image" 
      />
    ))}
    <label className="add-image-button">
      Añadir Imagen
      <input
        type="file"
        accept="image/*"
        onChange={handleAddImage}
      />
    </label>
  </div>
)}
          <Button variant="secondary" onClick={goBackToPets}>
            Volver
          </Button>
          <Button variant="primary" onClick={startEditingPet}>
            Editar {selectedPet.name}
          </Button>
        </>
      )}
    </div>
  );

  let content;
  if (activeSection === "pets") {
    content = (
      <>
        <h5 className="titulos">Mis Mascotas </h5>
      
        {isAddPetFormVisible && <AddPetForm onAddPet={handleAddPet} />}
        <ul className="pet-list">
          {petsData &&
            petsData.map((pet, index) => (
              <PetThumbnail
                key={index}
                pet={pet}
                onSelect={() => selectPet(pet)}
              />
            ))}
        </ul>
        <Button
          variant="info"
          className="add-pet-button"
          onClick={() => setIsAddPetFormVisible(!isAddPetFormVisible)}
        >
          Agregar Mascota
        </Button>
      </>
    );
  } else if (activeSection === "history") {
    content = <h5 className="titulos">Historial de Solicitudes</h5>;
  } else if (activeSection === "activeRequests") {
    content = <h5 className="titulos">Solicitudes Activas</h5>;
  }

  return (

    <Card className="background-image">
      <Card.Body>
      <NavBar/>
        <div className="user-profile-container">
          <div className="user-profile">
            <Form onSubmit={handleSubmit} className="user-form">
            <div className="user-avatar">
            <Image
              src={photo}
              roundedCircle
              width="100"
              height="100"
              className="profile-image"
            />
            <Button variant="primary" size="sm" className="ml-3">
              Subir foto
              <input type="file" onChange={handleUpload} hidden />
            </Button>
          </div>
              <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleEditedPetChange}
                />
              </Form.Group>
              <Form.Group controlId="rut">
                <Form.Label>RUT</Form.Label>
                <Form.Control type="text" name="rut" value={rut} readOnly />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleEditedPetChange}
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Número de Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleEditedPetChange}
                />
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>Biografía</Form.Label>
                <Form.Control
                  as="textarea"
                  name="bio"
                  value={formData.bio}
                  onChange={handleEditedPetChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Guardar cambios
              </Button>
            </Form>
            <div className="button-container">
              <Button variant="primary" onClick={() => showSection("pets")}>
                Mis Mascotas
              </Button>
              <Button variant="primary" onClick={() => showSection("history")}>
                Historial de Solicitudes
              </Button>
              <Button
                variant="primary"
                onClick={() => showSection("activeRequests")}
              >
                Solicitudes Activas
              </Button>
            </div>
            {petDetails ? petDetails : content}
          </div>
        </div>
        <Footer/>
      </Card.Body>
    </Card>
  );
}

function PetThumbnail({ pet, onSelect }) {
  return (
    <div className="pet-thumbnail">
      <img
        src={pet.image1}
        alt={pet.name}
        className="pet-thumbnail-image" 
      />
      <Button variant="info" onClick={() => onSelect(pet)}>
        Ver Detalles ({pet.name})
      </Button>
    </div>
  );
}

function AddPetForm({ onAddPet }) {
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    gender: "",
    story: "",
    age: "",
    weight: "",
    image1: image1,
    image2: image2,
  });

  const handleAddPet = () => {
    onAddPet(newPet);
    setNewPet({
      name: "",
      breed: "",
      gender: "",
      story: "",
      age: "",
      weight: "",
      image1: image1,
      image2: image2,
    });
  };

  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setNewPet({ ...newPet, image1: e.target.result });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="add-pet-form">
      <h4>Agregar Nueva Mascota</h4>
      <input
        type="text"
        placeholder="Nombre"
        value={newPet.name}
        onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Raza"
        value={newPet.breed}
        onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
      />
      <input
        type="text"
        placeholder="Género"
        value={newPet.gender}
        onChange={(e) => setNewPet({ ...newPet, gender: e.target.value })}
      />
      <input
        type="text"
        placeholder="Historia"
        value={newPet.story}
        onChange={(e) => setNewPet({ ...newPet, story: e.target.value })}
      />
      <input
        type="text"
        placeholder="Edad"
        value={newPet.age}
        onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Peso"
        value={newPet.weight}
        onChange={(e) => setNewPet({ ...newPet, weight: e.target.value })}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <Button variant="success" onClick={handleAddPet}>
        Agregar Mascota
      </Button>
    </div>
  );
}

export default UserProfile;
