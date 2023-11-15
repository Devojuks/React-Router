import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { info } from "../App"

const Description = () => { 
  const { title } = useParams();

  const movie = info.find(movie => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { posterURL, title: movieTitle, rating, description, img } = movie;

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Card style={{ margin: '0.5rem' }}>
            <iframe
              width="100%"
              height="421"
              src={posterURL} // Use the trailer link here
              title={movieTitle}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <Card.Body>
              <Card.Title>{movieTitle}</Card.Title>
              <Card.Text>Description: {description}</Card.Text>
              <Card.Text>Rating: {rating}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <img
            style={{ maxWidth: '100%' }}
            src={img}
            alt={movieTitle}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
