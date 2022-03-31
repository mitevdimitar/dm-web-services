import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import frontEnd from "../Assets/img/front-end.jpg";
import Avatar from '@mui/material/Avatar';

export default function ServiceCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
            avatar={
            <Avatar aria-label="front-end-service" alt="computer" src={frontEnd} />
            }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Front end services
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}