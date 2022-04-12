import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typewriter from 'typewriter-effect';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



function IntroCard() {
    return (
        <Grid
            item xs={12}

        >
            <Paper elevation={16}>
                <Box padding={5} display="flex" justifyContent="center" flexDirection="column" bgcolor="whitesmoke">
                    <Box display="flex" justifyContent="center" bgcolor="whitesmoke">
                        <img className="img" style={{ borderRadius: 150 }} src="https://media-exp1.licdn.com/dms/image/C5103AQHfI9fXpZiLWQ/profile-displayphoto-shrink_800_800/0/1516879815360?e=2147483647&v=beta&t=apjg1-4YX31KEr8nRjUdJrH7nzw01jX_nWUPunLGNa4"></img>
                    </Box>

                    <Box padding={5} display="flex" justifyContent="center" bgcolor="whitesmoke" fontSize="40px">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Hi!')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('My name is Obinna Iloani')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('Welcome to my Resume')
                                    .start();
                            }}
                        >
                        </Typewriter>
                    </Box>
                    <Box bgcolor="whitesmoke" color="red" paddingTop={2} display="flex" justifyContent="center">
                        <Typography variant="h6">
                            contact :
                        </Typography>
                    </Box>
                    <Box bgcolor="whitesmoke" paddingTop={2} display="flex" justifyContent="center">
                        <Typography variant="h6">
                            oci5@georgetown.edu - (832) 971-1174 - <Link href="https://www.linkedin.com/in/iloani/">LinkIn</Link>
                        </Typography>
                    </Box>

                </Box>
            </Paper>
        </Grid>

    );
}

export default IntroCard;