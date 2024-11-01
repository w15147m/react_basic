import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import { useState, useEffect } from "react";

export default function InfoBox({ data }) {
  const [img_url, setImgUrl] = useState(
    "https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const rain_url =
    "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1551280786-f0b0bf055a1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hot_url =
    "https://images.unsplash.com/photo-1580051859262-017717989ae8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const changeImg = () => {
      if (data.humidity > 50) {
        setImgUrl(rain_url);
      } else if (data.temp > 20) {
        setImgUrl(hot_url);
      } else {
        setImgUrl(cold_url);
      }
    };
    changeImg();
  }, [data]);

  return (
    <div className="infoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img_url}
          alt="weather condition image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature: {data.temp}&deg;C</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Weather: {data.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
