import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      origin={contact.origin}
      type={contact.type}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Valorant Agents</h1>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].origin}
        type={contacts[0].type}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].origin}
        type={contacts[1].type}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].origin}
        type={contacts[2].type}
      /> */}
    </div>
  );
}

export default App;
