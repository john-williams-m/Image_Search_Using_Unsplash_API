import { Container, useMediaQuery } from "@mui/material";

export default function Images(props) {
  const isMobileScreenSize = useMediaQuery("(max-width:600px)");

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
        margin: "1rem 0rem",
      }}
    >
      {props.images.map((image) => {
        return (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description}
            width={isMobileScreenSize ? "150px" : "300px"}
            height={isMobileScreenSize ? "150px" : "300px"}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        );
      })}
    </Container>
  );
}
