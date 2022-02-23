function List({ people }) {
  return (
    <div className="list--component">
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="list--person">
            <img className="list--image" src={image} alt="person image" />
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
