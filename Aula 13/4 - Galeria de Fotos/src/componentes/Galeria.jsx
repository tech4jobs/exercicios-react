import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Galeria = () => {
  const imagens = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
    "https://picsum.photos/400/300?random=6",
    "https://picsum.photos/400/300?random=7",
    "https://picsum.photos/400/300?random=8",
    "https://picsum.photos/400/300?random=9",
    "https://picsum.photos/400/300?random=10",
    "https://picsum.photos/400/300?random=11",
    "https://picsum.photos/400/300?random=12",
  ];

  return (
    <Container>
      <h1>Galeria de Fotos</h1>
      <Grid>
        {imagens.map((src, index) => (
          <Card key={index}>
            <Imagem src={src} alt={`Imagem ${index + 1}`} />
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Galeria;