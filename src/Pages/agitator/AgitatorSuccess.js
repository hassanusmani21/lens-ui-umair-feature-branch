<<<<<<< HEAD
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate, useParams } from 'react-router-dom';


const AgitatorSuccessPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    
    return (
    <Container maxWidth="sm" className="successContainer">
      <CheckCircleOutlineIcon  className="checkIcon"/>
      <Typography variant="h3" className="typoSuccess" gutterBottom >
        Agitator Seal Created Successfully!
      </Typography>
          Agitator DRF Number is <b>: {id}</b>
      <Typography variant="body1" className='typoBody'>
      </Typography>
      <Button variant="contained" color="primary" onClick={()=>navigate('/editAgitator')}>
         Agitator Details
      </Button>
=======
import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const AgitatorSuccessPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get error message from state
  const errorMessage = location.state?.error;

  useEffect(() => {
    throw new Error("Test error!"); // This will trigger the error boundary
  }, []);

  return (
    <Container maxWidth="sm" className="successContainer">
      <CheckCircleOutlineIcon className="checkIcon" />
      {errorMessage ? (
        <Typography variant="body1" color="red">
          {errorMessage} {/* Display error message */}
        </Typography>
      ) : (
        <>
          <Typography variant="h3" className="typoSuccess" gutterBottom>
            Agitator Seal Created Successfully!
          </Typography>
          <Typography>
            Agitator DRF Number is <b>: {id}</b>
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/editAgitator')}>
            Agitator Details
          </Button>
        </>
      )}
>>>>>>> new-change/new-feature
    </Container>
  );
};

export default AgitatorSuccessPage;
<<<<<<< HEAD
 
=======
>>>>>>> new-change/new-feature
