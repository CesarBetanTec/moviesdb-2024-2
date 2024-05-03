import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Show: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // llamar el endpoint de detalles de una pelicula con el id de params
  }, []);

  //  use effects
  return (
    <div>
      <div>Show id: {id} </div>
      <div>Titulo desde el state: {location.state.name} </div>
      <button onClick={goBack}>Ir atrás</button>
    </div>
  );
};

export default Show;
