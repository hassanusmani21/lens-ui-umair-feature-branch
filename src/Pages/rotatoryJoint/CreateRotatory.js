import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { TextField, Button, Container, MenuItem, Grid, InputLabel, Autocomplete, Select, InputAdornment, FormControl, FormControlLabel, Radio, FormLabel, RadioGroup, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getRotary, handleSubmit, handleUpdate } from '../../apis/RotaryApi';
import { useAuth } from '../../contextApi/AuthContext';
import moment from 'moment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
=======
import { TextField ,Button,  Container, Grid, InputLabel, Autocomplete} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getRotary, handleSubmit, handleUpdate } from '../../apis/RotaryApi';
>>>>>>> new-change/new-feature



export default function CreateRotatory() {

  const navigate = useNavigate();
<<<<<<< HEAD
  let { rjId } = useParams();
  const { authState } = useAuth();
  const dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
=======
  let {rjId} = useParams();
>>>>>>> new-change/new-feature


  const [formData, setFormData] = useState({
    branch: "",
<<<<<<< HEAD
    createdOn: dateTime,
    updatedOn: dateTime,
    createdByUser: authState?.sub,
    updatedByUser: authState?.sub,
=======
>>>>>>> new-change/new-feature
    enquiryNumber: "",
    customerName: "",
    customerAddress: "",
    costingRequirement: true,
    equipment: "",
<<<<<<< HEAD
    erjMake: "",
    erjModelType: "",
    prjMake: "",
    prjModelType: "",
    radioJointType: "",
    inletConnectionSize: '',
    outletConnectionSize: '',
    inletFlangedSize: '',
    outletFlangedSize: '',
    radioConnectionType: '',
    attachment: '',
=======
    make: "",
    model: "",
>>>>>>> new-change/new-feature
    fluid: "",
    operatingTemperature: "",
    operatingTemperatureUnit: "",
    flowRate: "",
    speed: "",
    operatingPressure: "",
    operatingPressureUnit: "",
<<<<<<< HEAD
    modelType: "",
    connectionType: "",
    connectionSize: "",
    jointType: "",
=======
    existingMake: "",
    existingModel: "",
    connectionType: "",
    connectionSize: "",
    flangeType: "",
>>>>>>> new-change/new-feature
    centerType: "",
    rotaryJointType: "",
    syphonPipeType: "",
    syphonPipeDiameter: ""
  });
<<<<<<< HEAD



  useEffect(() => {
    if (rjId !== undefined) {
      getRotary(rjId, setFormData);

    } else {
      setFormData(
        {
          branch: "",
          createdOn: dateTime,
          updatedOn: dateTime,
          createdByUser: authState?.sub,
          updatedByUser: authState?.sub,
          enquiryNumber: "",
          customerName: "",
          customerAddress: "",
          costingRequirement: true,
          equipment: "",
          erjMake: "",
          erjModelType: "",
          prjMake: "",
          prjModelType: "",
          radioJointType: "",
          inletConnectionSize: '',
          outletConnectionSize: '',
          inletFlangedSize: '',
          outletFlangedSize: '',
          radioConnectionType: '',
          attachment: '',
          fluid: "",
          operatingTemperature: "",
          flowRate: "",
          speed: "",
          operatingPressure: "",
          operatingPressureUnit: "",
          erjMxistingMake: "",
          existingModel: "",
          connectionType: "",
          connectionSize: "",
          flangeType: "",
          centerType: "",
          rotaryJointType: "",
          syphonPipeType: "",
          syphonPipeDiameter: ""
        })

    }


  }, [rjId, authState])


  const handleFileChange = (event) => {
    setFormData({ ...formData, attachment: event.target.files[0] });
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };
=======
  
  

   useEffect(()=>{
    if(rjId!==undefined){
     getRotary(rjId,setFormData);

    }else{
      setFormData(
        {
            branch: "",
            enquiryNumber: "",
            customerName: "",
            customerAddress: "",
            costingRequirement: true,
            equipment: "",
            make: "",
            model: "",
            fluid: "",
            operatingTemperature: "",
            operatingTemperatureUnit: "",
            flowRate: "",
            speed: "",
            operatingPressure: "",
            operatingPressureUnit: "",
            existingMake: "",
            existingModel: "",
            connectionType: "",
            connectionSize: "",
            flangeType: "",
            centerType: "",
            rotaryJointType: "",
            syphonPipeType: "",
            syphonPipeDiameter: ""
          })

    }
    
    
  },[rjId])


>>>>>>> new-change/new-feature

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


<<<<<<< HEAD
  const handleTemperatureChange = (event) => {
    const selectedUnit = event.target.innerText; // Get the selected unit from the event
    setFormData({
      ...formData,
      operatingTemperature: `${formData.operatingTemperature} ${selectedUnit}`, // Concatenate value
    });
  };



  const cancelUpdate = () => {

    const confirmCancel = window.confirm("Are you sure you want to cancel the update?");
    // If user confirms, navigate to the home page and reload the window
    if (confirmCancel) {
      navigate('/');
      window.location.reload();
    }
=======
  const cancelUpdate = ()=>{

      const confirmCancel = window.confirm("Are you sure you want to cancel the update?");
   // If user confirms, navigate to the home page and reload the window
  if (confirmCancel) {
    navigate('/');
    window.location.reload();
  }
>>>>>>> new-change/new-feature
  }



<<<<<<< HEAD

  return (
    <Container className="container">
      {/* <form > */}
      <div className='card'>
        {!rjId ? <h1>New Rotary Joint </h1> : <h1>Update Rotary Joint </h1>}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              size="small"
              id="disableItem"
              className="custom-text-field"
              name="drfNumber"
              InputLabelProps={{
                shrink: Boolean(formData.drfNumber),
              }}
              autoFocus={!formData.drfNumber}
              value={formData.drfNumber}
              InputProps={{
                readOnly: true,  // Prevent user input
              }}
              label="Drf Number"
              onChange={handleChange} />
          </Grid>



          <Grid item xs={12} sm={4}>
            <Autocomplete
              size="small"
              value={formData?.branch || ''}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  branch: newValue
                });
              }}

              inputValue={formData?.branch || ''}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  branch: newInputValue
                });
              }}
              options={Array.isArray(authState?.branchs) ? authState.branchs.map((b) => b.branchName) : []}

              // onFocus={() => getDepartments(setDepartments)}

              renderInput={(params) => (
                <TextField
                  required
                  className="custom-text-field"
                  {...params}
                  size="small"
                  label="Branch"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>



          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Enquiry Number</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="enquiryNumber"
              value={formData.enquiryNumber}
              onChange={handleChange}
              label="Enquiry Number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              size="small"
              className="custom-text-field"
              value={formData.createdOn}
              label="Created On"
              id="disableItem"
              fullWidth
              InputProps={{
                readOnly: true,  // Prevent user input
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              size="small"
              className="custom-text-field"
              value={formData.updatedOn}
              label="Updated On"
              id="disableItem"
              fullWidth
              InputProps={{
                readOnly: true,  // Prevent user input
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              size="small"
              className="custom-text-field"
              id="disableItem"
              value={formData.createdByUser}
              label="Created By User"
              InputLabelProps={{
                shrink: Boolean(formData.createdByUser),
              }}
              autoFocus={!formData.createdByUser} // Autofocus if the value exists
              InputProps={{
                readOnly: true,  // Prevent user input
              }}
            />
          </Grid>


          <Grid item xs={4}>
            <TextField
              required
              size="small"
              className="custom-text-field"
              id="disableItem"
              value={formData.updatedByUser}
              label="Updated By User"
              InputLabelProps={{
                shrink: Boolean(formData.updatedByUser),
              }}
              autoFocus={!formData.updatedByUser} // Autofocus if the value exists
              InputProps={{
                readOnly: true,  // Prevent user input
              }}
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Customer</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              label="Customer Name"
            />
          </Grid>

          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Customer</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="endUser"
              value={formData.endUser}
              onChange={handleChange}
              label="End User"
            />
          </Grid>







          <Grid item xs={4}>
            <Autocomplete
              size="small"
              value={formData.costingRequirement || ''}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  costingRequirement: newValue || ''
                });
              }}

              inputValue={formData.costingRequirement || ''}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  costingRequirement: newInputValue || ''
                });
              }}

              options={["true", "false"].map((src) => src)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  variant="outlined"
                  placeholder='select Costing Requirement'
                  fullWidth
                  className='custom-text-field'
                  label="Costing Requirement"
                />
              )}
            />
          </Grid>

        </Grid>
      </div>



      <div className="card">
        <div className="MuiBox-root css-2e6lci">
          <svg
            width="20"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle"
          >
            <g>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </g>
          </svg>
          <div className="MuiBox-root css-1isemmb" style={{ fontSize: '14px' }}> {/* Adjust the font size here */}
            Application Detail
          </div>
        </div>


        <Grid container spacing={2}>
          <Grid item xs={4}>

            {/* <InputLabel className="ip-label" >Equipment</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              label="Equipment"
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >erjMake</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="erjMake"
              value={formData.erjMake}
              onChange={handleChange}
              label="Make"
            />
          </Grid>

          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Model</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="model"
              value={formData.model}
              onChange={handleChange}
              label="Model"
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Fluid</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="fluid"
              value={formData.fluid}
              onChange={handleChange}
              label="Fluid"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              size="small"
              className="custom-text-field"
              name="operatingTemperature"
              value={formData.operatingTemperature}
              onChange={handleChange}
              label="Operating Temperature"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FormControl size="small" variant="outlined">
                      {/* <InputLabel id="temperature-unit-label">Unit</InputLabel> */}
                      <Select
                        // labelId="temperature-unit-label" // Link the label to the select
                        onChange={(e) => {
                          const selectedUnit = e.target.value;
                          setFormData((prev) => ({
                            ...prev, operatingTemperature: `${prev.operatingTemperature.split(' ')[0]} ${selectedUnit}`
                          }))
                        }}

                        displayEmpty
                        disabled={!formData.operatingTemperature}
                        disableUnderline
                        sx={{
                          height: '100%', // Set the dropdown height to match the TextField
                          borderLeft: '1px solid rgba(0, 0, 0, 0.23)', // Only show left border
                          borderRadius: 0, // Remove other borders
                          '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Disable outline
                          '& .MuiSelect-select': {
                            padding: '0 8px',
                            outline: 'none',
                            border: 'none',
                            height: '100%', // Match height to TextField
                            display: 'flex',
                            alignItems: 'center',
                          },
                          minWidth: 60, // Width of dropdown
                        }}>

                        {!formData.operatingTemperature && <MenuItem>Unit</MenuItem>}
                        <MenuItem value="°C">°C</MenuItem>
                        <MenuItem value="°F">°F</MenuItem>
                      </Select>
                    </FormControl>
                  </InputAdornment>
                )
              }}
            />
          </Grid>





          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Flow Rate</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="flowRate"
              value={formData.flowRate}
              onChange={handleChange}
              label="Flow Rate"
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Speed</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="speed"
              value={formData.speed}
              onChange={handleChange}
              label="Speed"
            />
          </Grid>


          <Grid item xs={4}>
            <TextField
              size="small"
              className="custom-text-field"
              name="operatingPressure"
              value={formData.operatingPressure}
              onChange={handleChange}
              label="Operating Pressure"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FormControl size="small" variant="outlined">
                      {/* <InputLabel id="temperature-unit-label">Unit</InputLabel> */}
                      <Select
                        // labelId="temperature-unit-label" // Link the label to the select
                        onChange={(e) => {
                          const selectedUnit = e.target.value;
                          setFormData((prev) => ({
                            ...prev, operatingPressure: `${prev.operatingPressure.split(' ')[0]} ${selectedUnit}`
                          }))
                        }}

                        displayEmpty
                        disabled={!formData.operatingPressure}
                        disableUnderline
                        sx={{
                          height: '100%', // Set the dropdown height to match the TextField
                          borderLeft: '1px solid rgba(0, 0, 0, 0.23)', // Only show left border
                          borderRadius: 0, // Remove other borders
                          '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Disable outline
                          '& .MuiSelect-select': {
                            padding: '0 8px',
                            outline: 'none',
                            border: 'none',
                            height: '100%', // Match height to TextField
                            display: 'flex',
                            alignItems: 'center',
                          },
                          minWidth: 60, // Width of dropdown
                        }}>

                        {!formData.operatingPressure && <MenuItem>Unit</MenuItem>}
                        <MenuItem value="kg/cm2">kg/cm2</MenuItem>
                        <MenuItem value="kg/cm2 a">kg/cm2 a</MenuItem>
                        <MenuItem value="kg/cm2 g">kg/cm2 g</MenuItem>
                        <MenuItem value="bar">bar</MenuItem>
                        <MenuItem value="bar (a)">bar (a)</MenuItem>
                        <MenuItem value="bar (g)">bar (g)</MenuItem>
                        <MenuItem value="Mpa">Mpa</MenuItem>
                        <MenuItem value="Mpa (a)">Mpa (a)</MenuItem>
                        <MenuItem value="Mpa (g)">Mpa (g)</MenuItem>
                        <MenuItem value="Kpa">Kpa</MenuItem>
                        <MenuItem value="Kpa (g)">Kpa (g)</MenuItem>
                        <MenuItem value="PSI">PSI</MenuItem>
                        <MenuItem value="PSIG">PSIG</MenuItem>
                        <MenuItem value="MLC">MLC</MenuItem>
                        <MenuItem value="MWC">MWC</MenuItem>
                        <MenuItem value="Meter">Meter</MenuItem>
                        <MenuItem value="kgf/cm2">kgf/cm2</MenuItem>

                      </Select>
                    </FormControl>
                  </InputAdornment>
                )
              }}
            />
          </Grid>

        </Grid>
      </div>


      <div className='card'>
        <div className="MuiBox-root css-2e6lci">
          <svg
            width="20"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle"
          >
            <g>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </g>
          </svg>
          <div className="MuiBox-root css-1isemmb" style={{ fontSize: '14px' }}> {/* Adjust the font size here */}
            Existing Rotary Joint Detail
          </div>
        </div>

        <Grid container spacing={2}>

          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Existing erjMake</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="erjMake"
              value={formData.erjMake}
              onChange={handleChange}
              label="Make"
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <Autocomplete
              size="small"
              value={formData?.erjModelType || ''}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  erjModelType: newValue
                });
              }}

              inputValue={formData?.erjModelType || ''}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  erjModelType: newInputValue
                });
              }}
              options={["Dual Flow", "Mono Flow"].map((b) => b)}
              // onFocus={() => getDepartments(setDepartments)}

              renderInput={(params) => (
                <TextField
                  className="custom-text-field"
                  {...params}
                  size="small"
                  label="Model Type"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Connection Type</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="connectionType"
              value={formData.connectionType}
              onChange={handleChange}
              label="Connection Type"
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Connection Size</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="connectionSize"
              value={formData.connectionSize}
              onChange={handleChange}
              label="Connection Size"
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <Autocomplete
              size="small"
              value={formData?.jointType || ''}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  jointType: newValue
                });
              }}

              inputValue={formData?.jointType || ''}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  jointType: newInputValue
                });
              }}
              options={["Threaded", "Flanged"].map((b) => b)}

              renderInput={(params) => (
                <TextField
                  className="custom-text-field"
                  {...params}
                  size="small"
                  label="Joint Type"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>

        </Grid>
      </div>

      <div className="card">
        <div className="MuiBox-root css-2e6lci">
          <svg
            width="20"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle"
          >
            <g>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </g>
          </svg>
          <div className="MuiBox-root css-1isemmb" style={{ fontSize: '14px' }}>
            Proposed Rotatory Joint Detail
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Existing erjMake</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="prjMake"
              value={formData.prjMake}
              onChange={handleChange}
              label="Make"
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <Autocomplete
              size="small"
              value={formData?.prjModelType || ''}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  prjModelType: newValue
                });
              }}

              inputValue={formData?.prjModelType || ''}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  erjModelType: newInputValue
                });
              }}
              options={["Dual Flow", "Mono Flow"].map((b) => b)}
              // onFocus={() => getDepartments(setDepartments)}

              renderInput={(params) => (
                <TextField
                  className="custom-text-field"
                  {...params}
                  size="small"
                  label="Model Type"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl style={{ display: 'flex' }} component="fieldset">
              <FormLabel component="legend" sx={{ fontSize: '0.7rem', fontWeight: 700 }}>Joint Type</FormLabel>
              <RadioGroup
                aria-label="radioJointType"
                name="radioJointType"
                row // Use this prop to align items horizontally
                value={formData?.radioJointType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Flanged"
                  control={<Radio />}
                  label="Flanged"
                />
                <FormControlLabel
                  value="Threaded"
                  control={<Radio />}
                  label="Threaded"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>

      {formData.radioJointType === 'Threaded' &&

        <div className="card">

          <div className="MuiBox-root css-2e6lci">
            <svg
              width="20"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-alert-circle"
            >
              <g>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </g>
            </svg>
            <div className="MuiBox-root css-1isemmb" style={{ fontSize: '14px' }}> Threaded </div>
          </div>


          <Grid container spacing={2}>

            <Grid item xs={4}>
              {/* <InputLabel className="ip-label" >Connection Type</InputLabel > */}
              <TextField
                size="small"
                className="custom-text-field"
                name="inletConnectionSize"
                value={formData.inletConnectionSize}
                onChange={handleChange}
                label="Inlet Connection Size"
              />
            </Grid>


            <Grid item xs={4}>
              {/* <InputLabel className="ip-label" >Connection Type</InputLabel > */}
              <TextField
                size="small"
                className="custom-text-field"
                name="outletConnectionSize"
                value={formData.outletConnectionSize}
                onChange={handleChange}
                label="Outlet Connection Size"
              />
            </Grid>


            <Grid item xs={4}>
              {/* <InputLabel className="ip-label" >Connection Size</InputLabel > */}
              <TextField
                size="small"
                className="custom-text-field"
                name="radioConnectionType"
                value={formData.radioConnectionType}
                onChange={handleChange}
                label="Connection Type"
              />
            </Grid>


            <Grid item xs={4}>
              {/* <InputLabel className="ip-label" >Connection Size</InputLabel > */}
              <TextField
                size="small"
                className="custom-text-field"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                label="Heading"
              />
            </Grid>

          </Grid>
        </div>

      }


      {formData.radioJointType === 'Flanged' && <div className="card">

        <div className="MuiBox-root css-2e6lci">
          <svg
            width="20"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle"
          >
            <g>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </g>
          </svg>
          <div className="MuiBox-root css-1isemmb" style={{ fontSize: '14px' }}> Flanged</div>
        </div>


        <Grid container spacing={2}>

          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Connection Type</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="inletFlangedSize"
              value={formData.inletFlangedSize}
              onChange={handleChange}
              label="Inlet Flanged Size"
            />
          </Grid>


          <Grid item xs={4}>
            {/* <InputLabel className="ip-label" >Connection Size</InputLabel > */}
            <TextField
              size="small"
              className="custom-text-field"
              name="outletFlangedSize"
              value={formData.outletFlangedSize}
              onChange={handleChange}
              label="Outlet Flanged Size"
            />
          </Grid>

        </Grid>
      </div>

      }

      <div className="card">

        <div className="MuiBox-root css-2e6lci">
          <svg
            width="20"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle"
          >
            <g>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </g>
          </svg>
          <div className="MuiBox-root css-1isemmb" style={{ fontSize: '14px' }}> Attachment </div>
        </div>



        <Grid container direction="column" alignItems="flex-start" spacing={1}>
          <Grid item>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Button
              variant="contained"
              startIcon={<AttachFileIcon />}
              onClick={handleButtonClick}
              component="span"
            >
              Attach File
            </Button>
          </Grid>
          {formData.attachment && (
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                Selected File: {formData.attachment?.name}
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>

      <Grid item xs={4}>
        <Grid item xs={4}>

          {!rjId ? (<Button className="submit-btn" type="submit" style={{ margin: "20px" }} onClick={(e) => handleSubmit(e, formData, navigate)} variant="contained" >Submit</Button>) : (
            <>
              <Button className="update-btn" variant="contained" onClick={(e) => handleUpdate(e, formData, rjId, navigate)} >Update</Button>
              <Button className="cancel-btn" variant="contained" onClick={cancelUpdate} >Cancel</Button> </>)}
        </Grid>
      </Grid>
=======
 
  return (
    <Container className="container">
   {/* <form > */}
        <div className='card'>
   {!rjId ? <h1>New Rotary Joint :</h1> : <h1>Update Rotary Joint :</h1>}
          <h3>Rotary Joint New Mode:-</h3>
          <Grid container spacing={2}>
            {rjId && <Grid item xs={4}>
              {/* <InputLabel className="ip-label" >Rotatory Joint Drf Number</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="rotaryDrfNumber"
                InputLabelProps={{
                  shrink: Boolean(formData.rotaryDrfNumber),
                }}
                autoFocus={!formData.rotaryDrfNumber}
                value={formData.rotaryDrfNumber}
                label="Rotatory Joint Drf Number"
                onChange={handleChange} />
            </Grid>
            } 

<Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >branch</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                label="branch"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Enquiry Number</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="enquiryNumber"
                value={formData.enquiryNumber}
                onChange={handleChange} 
                label="Enquiry Number"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Customer</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange} 
                label="Customer"
                />
            </Grid>



            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Customer Address</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="customerAddress"
                value={formData.customerAddress}
                onChange={handleChange} 
                label="Customer Address"
                />
            </Grid>


               

            <Grid item xs={4}>
  <Autocomplete
    size="small"
    value={formData.costingRequirement || ''}
    onChange={(event, newValue) => {
      setFormData({
        ...formData,
        costingRequirement: newValue || ''
      });
    }}

    inputValue={formData.costingRequirement || ''}
    onInputChange={(event, newInputValue) => {
      setFormData({
        ...formData,
        costingRequirement: newInputValue || ''
      });
    }}

    options={["true","false"].map((src) => src)}
    renderInput={(params) => (
      <TextField
        {...params}
        size="small"
        variant="outlined"
        placeholder='select Costing Requirement'
        fullWidth
        className='custom-text-field'
        label="Costing Requirement"
      />
    )}
  />
  </Grid>

            </Grid>
            </div>



            <div className="card">
            <h3>Application Details :-</h3>
          <Grid container spacing={2}>
            <Grid item xs={4}>     

                {/* <InputLabel className="ip-label" >Equipment</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                label="Equipment"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Make</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="make"
                value={formData.make}
                onChange={handleChange} 
                label="Make"
                />
            </Grid>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Model</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="model"
                value={formData.model}
                onChange={handleChange} 
                label="Model"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Fluid</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="fluid"
                value={formData.fluid}
                onChange={handleChange} 
                label="Fluid"
                />
            </Grid>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Operating Temprature</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="operatingTemperature"
                value={formData.operatingTemperature}
                onChange={handleChange}
                label="Operating Temprature"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Operating Temprature Unit</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="operatingTemperatureUnit"
                value={formData.operatingTemperatureUnit}
                onChange={handleChange} 
                label="Operating Temprature Unit"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Flow Rate</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="flowRate"
                value={formData.flowRate}
                onChange={handleChange} 
                label="Flow Rate"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Speed</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="speed"
                value={formData.speed}
                onChange={handleChange} 
                label="Speed"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Operating Pressure</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="operatingPressure"
                value={formData.operatingPressure}
                onChange={handleChange} 
                label="Operating Pressure"
                />
            </Grid>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Operating Pressure Unit</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="operatingPressureUnit"
                value={formData.operatingPressureUnit}
                onChange={handleChange} 
                label="Operating Pressure Unit"
                />
            </Grid>

            </Grid>
                </div>    


           <div className='card'>    
           <h3>Existing Rotary Joint Details</h3>

                      <Grid container spacing={2}>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Existing Make</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="existingMake"
                value={formData.existingMake}
                onChange={handleChange} 
                label="Existing Make"
                />
            </Grid>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Existing Model</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="existingModel"
                value={formData.existingModel}
                onChange={handleChange} 
                label="Existing Model"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Connection Type</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="connectionType"
                value={formData.connectionType}
                onChange={handleChange} 
                label="Connection Type"
                />
            </Grid>
            

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Connection Size</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="connectionSize"
                value={formData.connectionSize}
                onChange={handleChange} 
                label="Connection Size"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label" >Flange Type</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="flangeType"
                value={formData.flangeType}
                onChange={handleChange} 
                label="Flange Type"
                />
            </Grid>
            </Grid>
</div>

            <div className="card">
                <h3>Inlet Connection</h3>
            <Grid container spacing={2}>
            <Grid item xs={4}>  

                {/* <InputLabel className="ip-label">Center Type</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="centerType"
                value={formData.centerType}
                onChange={handleChange} 
                label="Center Type"
                />
            </Grid>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label">Rotary Joint Type</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="rotaryJointType"
                value={formData.rotaryJointType}
                onChange={handleChange} 
                label="Rotary Joint Type"
                />
            </Grid>

            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label">Syphon Pipe Type</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="syphonPipeType"
                value={formData.syphonPipeType}
                onChange={handleChange} 
                label="Syphon Pipe Type"
                />
            </Grid>


            <Grid item xs={4}>      
                {/* <InputLabel className="ip-label">Syphon Pipe Diameter</InputLabel > */}
              <TextField
              size="small"
                className="custom-text-field"
                name="syphonPipeDiameter"
                value={formData.syphonPipeDiameter}
                onChange={handleChange} 
                label="Syphon Pipe Diameter"
                />
            </Grid>

            </Grid>
            </div>

          <Grid item xs={4}>
          <Grid item xs={4}>
        
        {!rjId ?( <Button className="submit-btn" type="submit" style={{margin:"20px"}} onClick ={(e)=>handleSubmit(e,formData,navigate)} variant="contained" >Submit</Button>) : (
          <>
            <Button className="update-btn" variant="contained" onClick={(e)=>handleUpdate(e,formData,rjId,navigate)} >Update</Button>
            <Button className="cancel-btn"  variant="contained" onClick={cancelUpdate} >Cancel</Button> </>)}
          </Grid>
        </Grid>
>>>>>>> new-change/new-feature
      {/* </form> */}
    </Container>
  );

}



