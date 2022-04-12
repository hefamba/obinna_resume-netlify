import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typewriter from 'typewriter-effect';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function EducationPage() {
  return (

    <Container sx={{ marginY:1 , }}>
      <Box padding={3} display="flex"  bgcolor="white" fontSize="50px">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('EDUCATION').start();
          }}
        >
        </Typewriter>
      </Box>

      <Grid
        container spacing={1}
        item xs={12}

      >
        <Paper elevation={16} >
          <Box padding={5} display="flex" justifyContent="center" flexDirection="column" bgcolor="white">
            <Box display="flex" justifyContent="center" bgcolor="white">
              <img className="img" src="https://joelnolette.files.wordpress.com/2017/03/georgetown-law-logo.jpg" style={{ width: 600 }}></img>
            </Box>

            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Georgetown University Law Center -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                GPA: 3.2/4.0 Washington, DC
                J.D. Candidate
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }} >
                Honors: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                Tech Law Scholar – Tech & Society Fritz Family Fellow
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Relevant Coursework: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                Antitrust Law and Economics, Copyright Law, Video Game Law
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Affiliations: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                Student Intellectual Property Law Association, Georgetown Black Law Student Association
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Graduation Date: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                May 2022
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid
        container spacing={1}
        item xs={12}

      >
        <Paper elevation={16} sx={{ marginY: 7, width: 1060 }}>
          <Box padding={5} display="flex" justifyContent="center" flexDirection="column" bgcolor="white">
            <Box display="flex" justifyContent="center" bgcolor="white">
              <img className="img" src="https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/L-2PtwwgS290XNbyeUM_V4ubwyw=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4QG4USFY3JAXRB5YZVDPQUSYOE.jpg" style={{ width: 600 }}></img>
            </Box>

            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Texas Tech University College of Arts and Sciences -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                GPA: 3.49/4.0
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }} >
                Bachelor of Arts: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                Political Science
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Relevant Coursework: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                Technical Writing
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Graduation Date: -
              </Typography>
              <Typography variant="h6" paddingLeft={1}>
                December 2017
              </Typography>
            </Box>

          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}

export default EducationPage;