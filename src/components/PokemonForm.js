import { useState } from 'react';
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    front: "",
    back: ""
  });

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      hp: "",
      front: "",
      back: ""
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.front,
        back: formData.back
      }
    });
    clearForm();
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={onFormChange}
          />
          <Form.Input
            fluid
            label="HP"
            name="hp"
            value={formData.hp}
            placeholder="HP"
            onChange={onFormChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            name="front"
            value={formData.front}
            placeholder="Front Image URL"
            onChange={onFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            name="back"
            value={formData.back}
            placeholder="Back Image URL"
            onChange={onFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
