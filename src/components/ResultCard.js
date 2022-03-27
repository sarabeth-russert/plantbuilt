import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ResultCard = ({ card }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {card.title}
        </Typography>
        {card.subtitle && (
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {card.subtitle}
          </Typography>
        )}
        {card.list.map((li) => (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {li}
          </Typography>
        ))}
        {card.total && <Typography variant="body2">{card.total}</Typography>}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
