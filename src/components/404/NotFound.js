import indexjpg from "./index.jpg";
import canape from "./canape_convertible.jpg";

const NotFound = () => {
  return (
    <>
      <h1> Not Found </h1>
      <div>
        <img src={indexjpg} alt="voiture convertible" />
      </div>
      <div>
        <img src={canape} alt="canape convertible" />
      </div>
      <p>
        Nous n'avons pas trouvez le convertisseur mais nous vous proposons
        d'autre types de convertible{" "}
      </p>
    </>
  );
};

export default NotFound;
