import {React, createContext, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TextField ,Button,  Container, Grid, InputLabel , IconButton } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {searchFilter,deleteDetail } from '../../apis/RotaryApi'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { getAllRotary } from '../../apis/RotaryApi';



export default function EditRotary() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);  
  const [isDeleted, setIsDeleted] = useState(false);  
  const [itemsPerPage, setItemsPerPage] = useState(5); // Adjust as needed
  const navigate = useNavigate();  
  const [rotaryDrfNumber, setRotaryDrfNumber] = useState();
  const [customerName, setcustomerName] = useState();
<<<<<<< HEAD
  const [shaftSize, setShaftSize] = useState();
=======
>>>>>>> new-change/new-feature
  const [branch, setBranch] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  useEffect(() => {
    getAllRotary(setData, setIsDeleted);
  }, []);

  
  useEffect(() => {
    searchFilter(startDate, endDate, branch, customerName, rotaryDrfNumber, currentPage, itemsPerPage, setData);
  }, [currentPage, itemsPerPage]);

  const handleSearch = () => {
    setCurrentPage(0);  // Reset to first page on new search
    searchFilter(startDate, endDate, branch, customerName, rotaryDrfNumber, 0, itemsPerPage, setData);
  };

    
    const editDetail = (detail) => {
      // setEditData(detail.customerReferenceNumber);
      console.log("edit detail is ", detail.rotaryDrfNumber);
      navigate(`/createRotary/${detail.rotaryDrfNumber}`)
    };

    

    const handleItemsPerPageChange = (e) => {
      setItemsPerPage(Number(e.target.value));
      setCurrentPage(0);  // Reset to first page when items per page change
    };



return (
  <div >

<<<<<<< HEAD
<div className="editContainer">
<h2>Search and Filter</h2>

<Grid container spacing={2} >

<Grid container spacing={2} alignItems="center" sx={{mx:3, my:1}}>
=======
<div className='editContainer'>
    <h2>Search and Filter</h2>
<div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",gap:"18px",padding:"25px",}}>
>>>>>>> new-change/new-feature
<Grid item xs={12} sm={4}>
{/* <InputLabel className="ip-label">Rotary Drf No</InputLabel> */}
    <TextField
      size="small"
      className="custom-text-field"
<<<<<<< HEAD
      fullWidth
=======
>>>>>>> new-change/new-feature
      name="rotaryDrfNumber"
      label="Rotary Drf No"
      value={rotaryDrfNumber}
      onChange={(e)=>setRotaryDrfNumber(e.target.value)}
    />
  </Grid>
<Grid item xs={12} sm={4}>
  {/* <InputLabel className="ip-label">Branch</InputLabel> */}
  <TextField
    size="small"
    className="custom-text-field"
<<<<<<< HEAD
    fullWidth
=======
>>>>>>> new-change/new-feature
    name="branch"
    value={branch}
    label="Branch"
    onChange={(e)=>setBranch(e.target.value)}
  />
</Grid>

<Grid item xs={12} sm={4}>
  {/* <InputLabel className="ip-label">Customer Name</InputLabel> */}
  <TextField
    size="small"
    className="custom-text-field"
<<<<<<< HEAD
    fullWidth
=======
>>>>>>> new-change/new-feature
    name="customerName"
    label="Customer Name"
    value={customerName}
    onChange={(e)=>setcustomerName(e.target.value)}
  />
</Grid>

<<<<<<< HEAD
<Grid item xs={12} sm={4}>
  {/* <InputLabel className="ip-label">Customer Name</InputLabel> */}
  <TextField
    size="small"
    className="custom-text-field"
    fullWidth
    name="shaftSize"
    label="Shaft Size"
    value={shaftSize}
    onChange={(e)=>setShaftSize(e.target.value)}
  />
</Grid>
</Grid>


<Button onClick={handleSearch}  style={{width:"15%",margin:"0.8rem 2.5rem", color:"white", backgroundColor:"#03C9D7"}} variant="contained">
=======
<Grid item xs={4}>
  <TextField
    size="small"
    type="datetime-local"
    className="custom-text-field"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    label="Start Date"
    InputLabelProps={{
      shrink: true, // This will keep the label from overlapping
      className: startDate ? 'label-focused' : 'label-default', // Conditional class based on value
    }}
    inputProps={{
      placeholder: startDate ? "" : "dd-mm-yyyy", // Show date format when empty
    }}
  />
</Grid>

<Grid item xs={3}>
        <TextField
        className='custom-text-field'
        size="small"
        type="datetime-local"
        value={endDate}
        InputLabelProps={{
          shrink: true, // This will keep the label from overlapping
          className: endDate ? 'label-focused' : 'label-default', // Conditional class based on value
        }}
        inputProps={{
          placeholder: endDate ? "" : "dd-mm-yyyy", // Show date format when empty
        }}
        onChange={(e)=>setEndDate(e.target.value)}
        label="End Date"
      />
      </Grid>

</div>

<Button onClick={handleSearch}  style={{width:"15%",margin:"1rem 2rem", color:"white", backgroundColor:"#03C9D7"}} variant="contained">
>>>>>>> new-change/new-feature
  Search
</Button>





    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead className="table-header">
          <TableRow>
            <TableCell>Sr No</TableCell>
<<<<<<< HEAD
            <TableCell align="right">Drf Number</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">Shaft Size</TableCell>
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right">Created By</TableCell>
            <TableCell align="right">Updated On</TableCell>
            <TableCell align="right">Updated By</TableCell>
=======
            <TableCell align="right">Rotary Drf Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">Inserted On</TableCell>
            <TableCell align="right">Last Updated On</TableCell>
>>>>>>> new-change/new-feature
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>


        {data?.length ? (
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={index} className="table-row">
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.rotaryDrfNumber}</TableCell>
                <TableCell align="right">{row.customerName}</TableCell>
                <TableCell align="right">{row.branch}</TableCell>
<<<<<<< HEAD
                <TableCell align="right">{row?.shaftSize}</TableCell>
                <TableCell align="right">{row?.insertedOn}</TableCell>
                <TableCell align="right">{row.createdBy}</TableCell>
                <TableCell align="right">{row.lastUpdatedOn}</TableCell>
                <TableCell align="right">{row?.UpdatedBy}</TableCell>
=======
                <TableCell align="right">{row.insertedOn}</TableCell>
                <TableCell align="right">{row.lastUpdatedOn}</TableCell>
>>>>>>> new-change/new-feature
                <TableCell align="right">
                  <button onClick={() => editDetail(row)} style={{ margin: '0px 3px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                    <EditIcon style={{ color: 'blue' }} />
                  </button>
                  <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }} onClick={() => deleteDetail(row.rotaryDrfNumber, data, setData)}>
                    <DeleteIcon style={{ color: 'red' }} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <h2 style={{ textAlign: 'center' }}>No More Data Found!</h2>
        )}
      </Table>
      <hr style={{ border: '1px solid lightGray' }} />

      <div className="pagination-container">
        <label className="pagination-label">Items Per Page:</label>
        <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="pagination-select">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>

        <label className="pagination-label">Select Page:</label>
        <button className="pagination-button" disabled={currentPage <= 0}  onClick={() =>setCurrentPage(currentPage-1)}>
          <KeyboardDoubleArrowLeftIcon style={{ height: '0.9rem', marginTop:'0.1rem' }} />
        </button>
        <span className="pagination-span">{currentPage + 1}</span>
        <button className="pagination-button" disabled={data.length < itemsPerPage && !isDeleted} onClick={() =>setCurrentPage(currentPage+1) }>
          <KeyboardDoubleArrowRightIcon style={{ height: '0.9rem', marginTop:'0.1rem' }} />
        </button>
      </div>
      <hr style={{ border: '1px solid lightGray' }} />
    </TableContainer>
<<<<<<< HEAD
    </Grid>
    </div>
    </div>
=======
    
    </div>
  </div>
>>>>>>> new-change/new-feature
);
}





