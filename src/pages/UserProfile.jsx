import React, { useState } from "react";
import { Card, Form, Image, Button, Container, Row, Col } from "react-bootstrap";
import './UserProfile.css';

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleEditPet = (index, editedPet) => {
    const updatedPets = [...petsData];
    updatedPets[index] = editedPet;
    setPetsData(updatedPets);
  };

  const handleAddPet = (newPet) => {
    setPetsData([...petsData, newPet]);
    setIsAddPetFormVisible(false);
  };

  const handleUpload = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <Card className="background-image">
      <Card.Header>
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
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit} className="user-form">
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Número de Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Biografía</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Guardar cambios
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row>
            <Col>
              <h4>Mascotas</h4>
              <ul className="pet-list">
                {petsData && petsData.map((pet, index) => (
                  <PetInfo
                    key={index}
                    pet={pet}
                    onEdit={(editedPet) => handleEditPet(index, editedPet)}
                  />
                ))}
              </ul>
            </Col>
            <Col>
              <h4>Agregar Mascota</h4>
              <div>
                <Button
                  variant="info"
                  className="add-pet-button"
                  onClick={() => setIsAddPetFormVisible(!isAddPetFormVisible)}
                >
                  Agregar Mascota
                </Button>
                {isAddPetFormVisible && <AddPetForm onAddPet={handleAddPet} />}
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}

function PetInfo({ pet, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPet, setEditedPet] = useState(pet);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedPet);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedPet.name}
            onChange={(e) => setEditedPet({ ...editedPet, name: e.target.value })}
          />
          <input
            type="text"
            value={editedPet.breed}
            onChange={(e) => setEditedPet({ ...editedPet, breed: e.target.value })}
          />
          <input
            type="text"
            value={editedPet.gender}
            onChange={(e) => setEditedPet({ ...editedPet, gender: e.target.value })}
          />
          <input
            type="text"
            value={editedPet.story}
            onChange={(e) => setEditedPet({ ...editedPet, story: e.target.value })}
          />
          <input
            type="text"
            value={editedPet.age}
            onChange={(e) => setEditedPet({ ...editedPet, age: e.target.value })}
          />
          <input
            type="text"
            value={editedPet.weight}
            onChange={(e) => setEditedPet({ ...editedPet, weight: e.target.value })}
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <div>
          <h5>{pet.name}</h5>
          <p>Raza: {pet.breed}</p>
          <p>Género: {pet.gender}</p>
          <p>Historia: {pet.story}</p>
          <p>Edad: {pet.age}</p>
          <p>Peso: {pet.weight}</p>
          <button onClick={handleEditClick}>Editar</button>
        </div>
      )}
    </li>
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
  });

  const handleAddClick = () => {
    onAddPet(newPet);
    setNewPet({
      name: "",
      breed: "",
      gender: "",
      story: "",
      age: "",
      weight: "",
    });
  };

  return (
    <div className="add-pet-form">
      <input
        type="text"
        placeholder="Nombre de la mascota"
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
      <button onClick={handleAddClick}>Agregar</button>
    </div>
  );
}

export default UserProfile;
