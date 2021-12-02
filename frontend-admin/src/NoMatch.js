import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./NoMatch.css";

function NoMatch() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <Container className="error-template d-flex flex-column justify-content-center align-items-center">
      <img src={'404.jpg'} alt="" className="img-fluid w-50"/>
      <div className="error-details">
        Sorry, an error has occured, Requested page not found!
      </div>
      <div className="mt-4">
        <Button onClick={handleOnClick} className="btn btn-primary btn-lg">
          <i className="fas fa-arrow-left me-2"></i>Go back
        </Button>
      </div>
    </Container>
  );
}

export default NoMatch;