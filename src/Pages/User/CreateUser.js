import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Autocomplete, InputLabel, IconButton, RadioGroup, Radio } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getDesignation, getBranches, getDepartments, getuser, handleSubmit, handleUpdate } from '../../apis/SignupApi';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CreateUser() {
  const [designation, setDesignation] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [branches, setBranches] = useState([]);
  const [showAddBranch, setShowAddBranch] = useState(false);
  const navigate = useNavigate();
  const { uId } = useParams();
  const [display, setDisplay]=useState(uId !== undefined)
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    empId: "",
    password: "",
    designation: '',
    title:"",
    insertedByUseuId: "",
    lastUpdatedByUseuId: "",
    resetPasswordRequired: false,
    departments: [
      {
        departmentName: ""
      }
    ],
    branches: [
      {
        branchName: "",
        region: ""
      }
<<<<<<< HEAD
    ],
    designation: [
      {
        designationName: "",
      }
    ]
  });



=======
    ]
  });

>>>>>>> new-change/new-feature
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };


<<<<<<< HEAD

=======
>>>>>>> new-change/new-feature
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // If the radio button is for password update and value is 'yes', redirect
    if (name === 'passwordUpdate' && value === 'yes') {
      navigate('/updatePassword');
    }
    else if(name === 'passwordUpdate' && value === 'no'){
      setDisplay(false)
    }
  };


  const handleAddBranch = () => {
    setFormData(prevState => ({
      ...prevState,
      branches: [...prevState.branches, { branchName: "", region: "" }]
    }));
  };

  
  const handleDeleteBranch = (index) => {
    setFormData(prevState => {
      const updatedBranches = [...prevState.branches];
      updatedBranches.splice(index, 1);
      return { ...prevState, branches: updatedBranches };
    });
  };

  useEffect(() => {
    if (uId !== undefined) {
      getuser(uId, setFormData);
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        middleName: "",
        empId: "",
        password: "",
        designation: '',
        title:"",
        insertedByUseuId: "",
        lastUpdatedByUseuId: "",
        resetPasswordRequired: false,
        departments: [
          {
            departmentName: ""
          }
        ],
        branches: [
          {
            branchName: "",
            region: ""
          }
        ]
      });
    }
  }, [uId]);


  useEffect(() => {
    const departmentName = formData.departments[0].departmentName;
    setShowAddBranch(departmentName === "MARKETING" || departmentName === "SALES");
  }, [formData.departments]);


  return (
<<<<<<< HEAD
      <Container className="container" sx= {{marginTop:"10px", backgroundColor:"rgb(250, 251, 251)"}} >
        <div className='card'>              
        
            <Box component="form" noValidate onSubmit={(e) => handleSubmit(e, formData, navigate)}>
                          <Typography component="h5" variant="h5">
                            {uId ? <h1>Update User</h1> : <h1>Create User</h1>} 
                          </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={1}>
=======
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <div className='card' sx={{
          padding: "2px", marginBottom: "5rem", borderRadius: "8px", border: "1px solid #ddd",
          backgroundColor: "white", boxShadow: "rgba(90, 114, 123, 0.11) 0px 7px 30px 0px"
        }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>

            <Typography component="h5" variant="h5">
              {uId ? <>Update</> : <>Create</>} User
            </Typography>
            
            <Box component="form" noValidate onSubmit={(e) => handleSubmit(e, formData, navigate)} sx={{ mt: 2 }}>
              <Grid container spacing={1.3}>
                <Grid item xs={12} sm={2}>
>>>>>>> new-change/new-feature
                <select
            name="title"
            value={formData.title}
            onChange={handleChange}
<<<<<<< HEAD
            style={{ width: '100%',border:"1px solid #D6D6D6",cursor:'pointer', height: '40px', fontSize:"0.9em",borderRadius:'5px' }}>
              
=======
            style={{ width: '100%',border:"1px solid #D6D6D6",cursor:'pointer', height: '40px', fontSize:"0.9em",borderRadius:'5px' }}

          >
>>>>>>> new-change/new-feature
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
          </Grid>
<<<<<<< HEAD

          
          <Grid item xs={12} sm={5.5}>
                  <TextField
                  className='custom-text-field'
=======
          <Grid item xs={12} sm={5}>
                  <TextField
>>>>>>> new-change/new-feature
                    size="small"
                    autoComplete="given-name"
                    name="firstName"
                    required
                    value={formData.firstName}
                    fullWidth
                    id="firstName"
                    onChange={(e) => handleChange(e)}
                    label="First Name"
                    autoFocus
                  />
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12} sm={5.5}>
                  <TextField
                  className='custom-text-field'
=======
                <Grid item xs={12} sm={5}>
                  <TextField
>>>>>>> new-change/new-feature
                    value={formData.lastName}
                    size="small"
                    onChange={(e) => handleChange(e)}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12} sm={4}>
                  <TextField
                  className='custom-text-field'
=======
                <Grid item xs={12}>
                  <TextField
>>>>>>> new-change/new-feature
                    value={formData.middleName}
                    size="small"
                    required
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    name="middleName"
                  />
                </Grid>

<<<<<<< HEAD
                <Grid item xs={12} sm={4}>
                  <TextField
                  className='custom-text-field'
=======
                <Grid item xs={12} >
                  <TextField
>>>>>>> new-change/new-feature
                    value={formData.empId}
                    size="small"
                    required
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    id="empId"
                    label="Employee ID"
                    name="empId"
                    autoComplete="family-name"
                  />
                </Grid>

<<<<<<< HEAD

=======
                {
                  uId === undefined && (
                    <>
                      <Grid item xs={12}>
                        <TextField
                          value={formData.email}
                          size="small"
                          required
                          onChange={(e) => handleChange(e)}
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                    </>
                  )}
>>>>>>> new-change/new-feature

{uId&&(display) &&<Grid container alignItems="center" spacing={1} style={{ display: 'flex', justifyContent:'center', marginLeft:'1%'}}>
  <Grid item>
    <b >Want to Update a Password?</b>
  </Grid>
<<<<<<< HEAD
  <Grid item xs={12} sm={4}>
=======
  <Grid item>
>>>>>>> new-change/new-feature
    <RadioGroup row name="passwordUpdate" onChange={handleChange} style={{ display: 'flex', alignItems: 'center' }}>
      <FormControlLabel
        value="yes"
        control={<Radio size="small" />}
        label="Yes"
      />
      <FormControlLabel
        value="no"
        control={<Radio size="small" />}
        label="No"
      />
    </RadioGroup>
  </Grid>
</Grid>}


<<<<<<< HEAD
{!uId&&<Grid item xs={12} sm={4}>
                  <TextField
                  className='custom-text-field'
=======
{!uId&&<Grid item xs={12}>
                  <TextField
>>>>>>> new-change/new-feature
                    value={formData.password}
                    size="small"
                    required
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
}

<<<<<<< HEAD

<Grid item xs={12} sm={4}>
  <Autocomplete
    size="small"
    value={formData.designation?.designationName || ''} // Use designationName here
    onChange={(event, newValue) => {
      setFormData({
        ...formData,
        designation: { designationName: newValue || '' } // Store designationName
      });
    }}
    inputValue={formData.designation?.designationName || ''}
    onInputChange={(event, newInputValue) => {
      setFormData({
        ...formData,
        designation: { designationName: newInputValue || '' }
      });
    }}
    options={designation.map((d) => d)} // Ensure options are strings
    getOptionLabel={(option) => (typeof option === 'string' ? option : option?.designationName || '')} // Ensure string return
    onFocus={() => getDesignation(setDesignation)}
    renderInput={(params) => (
      <TextField
        className="custom-text-field"
=======
  <Grid item xs={12} >
  <Autocomplete
    size="small"
    value={formData.designation || ''}
    onChange={(event, newValue) => {
      setFormData({
        ...formData,
        designation: newValue || '' // Fallback to empty string
      });
    }}
    inputValue={formData.designation || ''}
    onInputChange={(event, newInputValue) => {
      setFormData({
        ...formData,
        designation: newInputValue || '' // Fallback to empty string
      });
    }}
    options={designation}
    onFocus={() => getDesignation(setDesignation)}
    renderInput={(params) => (
      <TextField
>>>>>>> new-change/new-feature
        {...params}
        size="small"
        label="Designation"
        variant="outlined"
        fullWidth
      />
    )}
  />
</Grid>


<<<<<<< HEAD

<Grid item xs={12} sm={4}>
  <Autocomplete
    size="small"
    value={formData.departments[0]?.departmentName || ''}
    onChange={(event, newValue) => {
      const updatedDepartments = [{ departmentName: newValue || '' }];
      setFormData({
        ...formData,
        departments: updatedDepartments
      });
    }}
    inputValue={formData.departments[0]?.departmentName || ''}
    onInputChange={(event, newInputValue) => {
      const updatedDepartments = [{ departmentName: newInputValue || '' }];
      setFormData({
        ...formData,
        departments: updatedDepartments
      });
    }}
    options={departments.map((d) => d.departmentName)}
    getOptionLabel={(option) => (typeof option === 'string' ? option : option.departmentName || '')}
    onFocus={() => getDepartments(setDepartments)}
    renderInput={(params) => (
      <TextField
        className="custom-text-field"
=======
<Grid item xs={12}>
  <Autocomplete
    size="small"
    value={formData.departments[0].departmentName || ''}
    onChange={(event, newValue) => {
      setFormData({
        ...formData,
        departments: [{ departmentName: newValue || '' }]
      });
    }}
    inputValue={formData.departments[0].departmentName || ''}
    onInputChange={(event, newInputValue) => {
      setFormData({
        ...formData,
        departments: [{ departmentName: newInputValue || '' }]
      });
    }}
    options={departments.map((department) => department.departmentName)}
    onFocus={() => getDepartments(setDepartments)}
    renderInput={(params) => (
      <TextField
>>>>>>> new-change/new-feature
        {...params}
        size="small"
        label="Department"
        variant="outlined"
        fullWidth
      />
    )}
  />
</Grid>

<<<<<<< HEAD


{formData.branches.map((branch, index) => (
  <Grid item xs={12} sm={4}  key={index} style={{ display: 'flex', alignItems: 'center' }}>
    <Autocomplete
      size="small"
      style={{ width: '100%' }}
      value={branch?.branchName || ''}
      onChange={(event, newValue) => {
        const updatedBranches = [...formData.branches];
        updatedBranches[index] = { branchName: newValue || '', region: '' }; // Update branchName
=======
{formData.branches.map((branch, index) => (
  <Grid item xs={12} key={index} style={{ display: 'flex', alignItems: 'center' }}>
    <Autocomplete
      size="small"
      style={{ width: '100%' }}
      value={branch.branchName || ''}
      onChange={(event, newValue) => {
        const updatedBranches = [...formData.branches];
        updatedBranches[index] = { branchName: newValue || '', region: newValue || '' };
>>>>>>> new-change/new-feature
        setFormData({
          ...formData,
          branches: updatedBranches
        });
      }}
<<<<<<< HEAD
      inputValue={branch?.branchName || ''}
      onInputChange={(event, newInputValue) => {
        const updatedBranches = [...formData.branches];
        updatedBranches[index] = { branchName: newInputValue || '', region: '' };
=======
      inputValue={branch.branchName || ''}
      onInputChange={(event, newInputValue) => {
        const updatedBranches = [...formData.branches];
        updatedBranches[index] = { branchName: newInputValue || '', region: newInputValue || '' };
>>>>>>> new-change/new-feature
        setFormData({
          ...formData,
          branches: updatedBranches
        });
      }}
<<<<<<< HEAD
      options={branches.map((b) => b.branchName)}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.branchName || '')}
      onFocus={() => getBranches(setBranches)}
      renderInput={(params) => (
        <TextField
          className="custom-text-field"
          {...params}
          size="small"
          label={`Branch ${index > 0 ? index + 1 : ''}`}
=======
      options={branches.map((branch) => branch.branchName)}
      onFocus={() => getBranches(setBranches)}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label={`Branch ${index + 1}`}
>>>>>>> new-change/new-feature
          variant="outlined"
          fullWidth
        />
      )}
    />
    {showAddBranch && index === formData.branches.length - 1 && (
      <IconButton
        onClick={handleAddBranch}
<<<<<<< HEAD
        aria-label="add branch"
        style={{ backgroundColor: '#1976D2', color: 'white', borderRadius: '0px 5px 5px 0px' }}
      >
=======
        aria-label="add branch" style={{backgroundColor:"#1976D2",color:"white",borderRadius:"0px 5px 5px 0px"}}>
>>>>>>> new-change/new-feature
        <AddIcon />
      </IconButton>
    )}
    {index > 0 && (
<<<<<<< HEAD
      <IconButton onClick={() => handleDeleteBranch(index)} aria-label="delete branch" color="error">
=======
      <IconButton onClick={() => handleDeleteBranch(index)}  aria-label="delete branch" color="error">
>>>>>>> new-change/new-feature
        <DeleteIcon />
      </IconButton>
    )}
  </Grid>
))}
<<<<<<< HEAD

              </Grid>
              {!uId ? <Button
                type="submit"
                className='submit-btn'
                variant="contained"
                // onClick={(e) => handleSubmit(e, formData, navigate)}
                // onClick={handleSubmit} 
                >
=======
              </Grid>
              {!uId ? <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={(e) => handleSubmit(e, formData, navigate)}
                sx={{ mt: 1, mb: 1 }}
              >
>>>>>>> new-change/new-feature
                Create User
              </Button>
                :
                <Button
<<<<<<< HEAD
                type="submit"
                className='submit-btn'
                variant="contained"
                  onClick={(e) => handleUpdate(e, formData, navigate)}
=======
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={(e) => handleUpdate(e, formData, navigate)}
                  sx={{ mt: 1, mb: 1 }}
>>>>>>> new-change/new-feature
                >
                  Update User
                </Button>
              }
<<<<<<< HEAD
          </Box>
        </div>
      </Container>

=======
            </Box>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
>>>>>>> new-change/new-feature
  );
}