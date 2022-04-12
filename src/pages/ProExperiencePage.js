import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typewriter from 'typewriter-effect';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function ProExperiencePage() {
  return (
    <Container sx={{ marginY: 1 }}>
      <Box padding={5} display="flex" bgcolor="white" fontSize="50px">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('PROFESSIONAL EXPERIENCE').start();
          }}
        >
        </Typewriter>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Intellectual Property and Information Policy Clinic -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Student Attorney

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                August 2021 - December 2021

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Washington, DC

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Produced quality work-product on the client’s behalf consistently throughout the course of representation

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Built on knowledge of intellectual property law protection through in-class participation and experiential learning

              </Typography>
            </Box>

          </Paper>
        </Grid>


        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Georgetown University -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Legal Research Asst. for Professor Tanina Rostain

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                May 2021 – Present

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Washington, DC

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Provided in-house legal support for an interdisciplinary court data aggregation project
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Extensive counseling on existing cybersecurity measures like the CCPA, CFAA and GDPR

              </Typography>
            </Box>

          </Paper>
        </Grid>


        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Georgetown Law Institute for Tech. Law and Policy -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Research Fellow

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                May 2020 - August 2020

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Washington, DC

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Drafted internal legal memoranda on communications-based technology policy areas like broadband internet access
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Research on state privacy measures like BIPA, CCPA, etc. concerning facial recognition software, drones and cell-site simulators

              </Typography>
            </Box>
          </Paper>
        </Grid>


        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Reddy & Neumann P.C. -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Litigation Paralegal

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                May 2019 - September 2019

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Houston, TX

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Reviewed periodic filings on clients’ behalf for employment-based immigration via the federal H1-B Visa Program
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Prepared and filed lawsuits for clients looking to overcome immigration denials and visa delays

              </Typography>
            </Box>

          </Paper>
        </Grid>


        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Reddy & Neumann P.C. -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Litigation Paralegal

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                May 2019 - September 2019

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Houston, TX

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Reviewed periodic filings on clients’ behalf for employment-based immigration via the federal H1-B Visa Program
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Prepared and filed lawsuits for clients looking to overcome immigration denials and visa delays

              </Typography>
            </Box>

          </Paper>
        </Grid>


        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                CS DISCO -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Sales Development Representative

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                March 2018 – August 2018

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Houston, TX

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Utilized interpersonal skills and eDiscovery platform knowledge to build and leverage sales relationships
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Gained valuable insight regarding the common practices of the legal and technology industries

              </Typography>
            </Box>
          </Paper>
        </Grid>


        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Miguel Levario for Congress Campaign -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Political Research Intern

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                October 2017 – March 2018

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Lubbock, TX

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Specialized in opposition research and media strategies
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Drafted press releases, newsletters, policy statements and opinion pieces

              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={6} >
          <Paper elevation={16}>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Office of Congressman Green -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Congressional Intern

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Dates -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                January 2017 – May 2017

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="center" padding={1}>
              <Typography variant="h7" style={{ fontWeight: 'bold' }}>
                Location -
              </Typography>
              <Typography variant="p" color={"textSecondary"} paddingLeft={1}>
                Washington, D.C.

              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Drafted memoranda, short speeches, press releases concerning salient policy topics
              </Typography>
            </Box>
            <Box bgcolor="whitesmoke" display="flex" justifyContent="left" padding={1}>
              <Typography variant="p" paddingLeft={1} style={{ fontWeight: 'bold' }}>
                * Developed an interest in technology policy after exposure to various trade associations and NGOs

              </Typography>
            </Box>
          </Paper>
        </Grid>

      </Grid>

    </Container>

  );
}

export default ProExperiencePage;