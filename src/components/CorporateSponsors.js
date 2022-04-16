import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const size = {
  small: "23%",
  medium: "48%",
  large: "98%",
};

export default function CorporateSponsors() {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "20px auto 20px auto",
        flexWrap: "wrap",
      }}
    >
      {itemData.map((item) => (
        <Card sx={{ maxWidth: item.level, margin: "1%" }}>
          <CardMedia
            component="img"
            sx={{
              // height: "80%",
              width: "90%",
              margin: "5% 5% 5% 5%",
            }}
            image={item.img}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="success"
              href={item.link}
              target="_blank"
              size="small"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

const itemData = [
  {
    img: "/vegan-proteins.png",
    title: "Vegan Proteins",
    description: "We coach you to build a strong, lean body on plants!",
    link: "https://www.veganproteins.com/",
    level: size.large,
  },
  {
    img: "/Zhou__Primary.png",
    title: "Zhou Nutrition",
    description:
      "By combining the best of nature’s nutrients with science-backed formulas, we create clean, effective supplements tailored to your unique needs.",
    link: "https://www.zhounutrition.com/",
    level: size.large,
  },
  {
    img: "/Ultima_Wordmark_White-w.png",
    title: "Ultima Replenisher",
    description:
      "Your daily zero sugar hydrating electrolyte drink, water enhancer and all around refresher!",
    link: "https://www.ultimareplenisher.com/",
    level: size.medium,
  },
  {
    img: "/unisoy_logo.png",
    title: "Unisoy",
    description:
      "Choose something delicious and amazing Unisoy Vegan Jerky flavors. No meat, no bull, no junk...",
    link: "https://unisoyjerky.com/",
    level: size.medium,
  },
];
