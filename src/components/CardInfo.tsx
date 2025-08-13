import { Card, CardMedia, CardContent } from '@mui/material';

interface CardInfoProps {
    image?: string;
    title?: string;
    gender?: string;
    year?: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({ image, title, gender, year }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={title}
            />
            <CardContent>
                <h2>{title}</h2>
                <p>{year}-{gender}</p>
            </CardContent>
        </Card>
    )
}
