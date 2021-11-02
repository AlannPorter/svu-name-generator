import React, { useState } from 'react'
import {  Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputLabel, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
// import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';

//import knightLast from './data/knightLast.json'
import maleFemale from './data/MaleFemale.json'
import monthsList from '../data/monthsList.json'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function NameGen({closeFunction}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [firstName, setFirstName] = useState("")
  const [birthMonth, setBirthMonth] = useState("JAN")
  const [knightName, setKnightName] = useState("")
  //const [gender, setGender] = useState("DTS")

  function getVillianHero() {
    const firstLetter = firstName.substring(0,1).toUpperCase()
    console.log(firstLetter)
    const vilHer = ''
    if (firstLetter in ['A','B','C','D','E','F','G','H','I','J','K','L','M'])
      vilHer = 'Villian'
    else
      vilHer = "Hero"
    return vilHer
  }

  function getMaleFemale(){
    const MF = maleFemale[birthMonth]
    return MF
  }

  function getNewName() {
    const firstPart = getVillianHero()
    const lastPart = ''//getLastPart()
    const title = getMaleFemale()
    
    setKnightName(title + " " + firstPart + " " + lastPart)
    setCurrentPage(2)

    /*                   <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                      <FormControlLabel value="F" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                      <FormControlLabel value="M" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />
                      <FormControlLabel value="DTS" onChange={e => setGender(e.target.value)} control={<Radio />} label="Other" />

                    </RadioGroup>
                  </FormControl> */
  }
   


  return (
    <>
    <Grid container  spacing={0}>
        <Grid item xs={12}>
          <Box sx={style}>
          <Box textAlign="right" alignContent="end">
              <IconButton onClick={closeFunction}  >
                  <CancelIcon sx={{color:"blue"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Disney Name
            </Typography>
            <Divider/>
            {(currentPage === 1) ? (
              <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Find out your Disney Character Name.
              </Typography>
              <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                >




                <TextField value={firstName} onChange={e => setFirstName(e.target.value)} id="first-name" label="Last Name" variant="outlined" />

                <FormControl>
                      <InputLabel htmlFor="birthMonth">Birth Month</InputLabel>
                      <Select
                      
                      native
                      value={birthMonth}
                      onChange={e => setBirthMonth(e.target.value)}
                      inputProps={{
                          name: 'birthMonth',
                          id: 'birthMonth',
                      }}
                      >
                        {monthsList.map((option) => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}

                      </Select>
                  </FormControl>
                
                
                <Button onClick={getNewName} variant="outlined">Get Your Knight Name</Button>
              </Box>
              </>  
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{marginTop:"1em"}}>
                  Your Disney Character Name is...
                </Typography>
                <Typography id="modal-modal-title" variant="h3" component="h2" sx={{marginTop:"1em"}}>
                  {knightName}
                </Typography>
              </>
              
            )}
          </Box>
        </Grid>
    </Grid> 
    </>
  )
}

export default NameGen