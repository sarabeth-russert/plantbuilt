import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

export default function CorporateSponsors() {
  return (
    <ImageList
      sx={{ width: "90%", height: 600, margin: "20px auto 20px auto" }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          {/* <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          /> */}
          <Card styles={{ width: 121 * item.cols, height: 121 * item.rows }}>
            <CardMedia
              component="img"
              sx={{
                // height: "80%",
                width: "80%",
                margin: "5% 10% 5% 10%",
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
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/Ultima_Wordmark_White-w.png",
    title: "Ultima Replenisher",
    description:
      "Your daily zero sugar hydrating electrolyte drink, water enhancer and all around refresher!",
    link: "https://www.ultimareplenisher.com/",
    rows: 1,
    cols: 1,
  },
  {
    img: "/Unisoy-wholesome_500x.webp",
    title: "Unisoy",
    description:
      "Choose something delicious and amazing Unisoy Vegan Jerky flavors. No meat, no bull, no junk...",
    link: "https://unisoyjerky.com/",
    rows: 1,
    cols: 1,
  },
  {
    img: "/Zhou__Primary.png",
    title: "Zhou Nutrition",
    description:
      "By combining the best of nature’s nutrients with science-backed formulas, we create clean, effective supplements tailored to your unique needs.",
    link: "https://www.zhounutrition.com/",
    rows: 2,
    cols: 2,
  },
];
