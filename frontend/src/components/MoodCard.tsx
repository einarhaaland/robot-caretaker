import { Card, CardActionArea, Typography } from '@mui/material';

interface MoodProps {
    title: string,
}


function MoodCard(props: MoodProps) {
    
    const handleClick = () => {
        console.log(`SENDING MOOD ${props.title}..`)
        fetch(`/mood/${props.title}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(`..${data.mood} HAS BEEN PERFORMED`)
            })
    }

    return (
        <Card variant='outlined' sx={{ maxWidth: 275, minHeight: 200 }}>
            <CardActionArea onClick={handleClick} sx={{ maxWidth: 275, minHeight: 200 }}>
                <Typography align='center'>{props.title}</Typography>
            </CardActionArea>
        </Card>
    );
}

export default MoodCard;
