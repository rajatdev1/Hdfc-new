// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import TextField from '@mui/material/TextField';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,FormGroup, Checkbox, FormControlLabel,FormControl,
//   FormLabel, } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import { Radio, RadioGroup } from '@mui/material';


// const Tabsection2  = ({ onNext }) => {
 
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form validation and processing here

//     // Call the onNext function passed from Mainform to move to the next tab
//     onNext('tab3');
//   };
 


//   return (
//     <div className="form-container" >
//        <Accordion expanded={businessExpanded} onChange={handleAccordionToggle}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >

// <h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>Type of Merchant Business (check all that apply)</h2>
// </AccordionSummary>
//         <AccordionDetails>
//       <form style={formStyle}>
    
//         <div style={checkboxGroupStyle}>

//           <div style={checkboxStyle}>

//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="retailer" />
//               Retailer
//             </label>

//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="telecommunication" />
//               Telecommunication
//             </label>

//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="grocery_and_supermarkets" />
//               Grocery and Supermarkets
//             </label>
//           </div>



//           <div style={checkboxStyle}>
            
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="petroleum" />
//               Petroleum
//             </label>

//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="e_commerce" />
//               E-Commerce
//             </label>

//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="moto" />
//               Mail order/telephone order (MOTO)
//             </label>
//           </div>
//           <div style={checkboxStyle}>
//           <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="businessType" value="other" />
//               Others (please specify):
//             </label>

           
           
//           </div>


         
          
//         </div>
        
//        <div style={formSectionStyle}>
//           <h2 style={{ fontWeight: 'bold' }}>What types of payment channels does your business serve?</h2>
//           <div style={checkboxContainerStyle}>
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="paymentChannels" value="moto" />
//               Mail order/telephone order (MOTO)
//             </label>
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="paymentChannels" value="ecommerce" />
//               E-Commerce
//             </label>
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="paymentChannels" value="cardPresent" />
//               Card-present (face-to-face)
//             </label>
//           </div>
//         </div>

        

//         <div style={formSectionStyle}>
//           <h2 style={{ fontWeight: 'bold' }}>Which payment channels are covered by this SAQ?</h2>
//           <div style={checkboxContainerStyle}>
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="saqPaymentChannels" value="moto" />
//               Mail order/telephone order (MOTO)
//             </label>
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="saqPaymentChannels" value="ecommerce" />
//               E-Commerce
//             </label>
//             <label style={checkboxLabelStyle}>
//               <input type="checkbox" name="saqPaymentChannels" value="cardPresent" />
//               Card-present (face-to-face)
//             </label>
//           </div>
//         </div>

//         <div style={noteStyle}>
//           <p>Note: If your organization has a payment channel or process that is not covered by this SAQ, consult your acquirer or payment brand about validation for the other channels.</p>
//         </div>
        
      
//       </form>
//       </AccordionDetails>
//       </Accordion>



//       <Accordion expanded={expandedPanel === 'panelDescription'} onChange={handleAccordionChange('panelDescription')}>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel2b-content"
//         id="panel2b-header"
        
//       >
//         <h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}> Description of Payment Card Business</h2>
//       </AccordionSummary>
//       <AccordionDetails
// style={detailsStyle}>
// <Typography variant="body2" gutterBottom style={{ fontSize: '1rem',fontWeight: 'bold' }}>
// How and in what capacity does your business store, process and/or transmit cardholder data?
// </Typography>
// <TextField
//        fullWidth
//        id="cardholder-data-description"
//        label="Description"
//        multiline
//        rows={4}
//        placeholder="Enter description here"
//        variant="outlined"
//      />
// </AccordionDetails>
// </Accordion>





// <Accordion expanded={expandedPanel === 'panelLocations'} onChange={handleAccordionChange('panelLocations')}>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel2b-content"
//         id="panel2b-header"
        
//       >
// <h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}> Locations</h2>
// </AccordionSummary>
//       <AccordionDetails>
// <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//           <TableRow>
//     <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>
//       Type of facility
//     </TableCell>
//     <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }} align="center">
//       Number of facilities of this type
//     </TableCell>
//     <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }} align="center">
//       Location(s) of facility (city, country)
//     </TableCell>
//   </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   <TextField
//                     value={row.type}
//                     onChange={(e) => handleInputChange(e, index, 'type')}
//                     fullWidth
//                   />
//                 </TableCell>
//                 <TableCell align="right">
//                   <TextField
//                     value={row.number}
//                     type="number
// "
// onChange={(e) => handleInputChange(e, index, 'number')}
// fullWidth
// />
// </TableCell>
// <TableCell align="right">
// <TextField
// value={row.location}
// onChange={(e) => handleInputChange(e, index, 'location')}
// fullWidth
// />
// </TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </TableContainer>


//   <Button
//     startIcon={<AddIcon />}
//     onClick={handleAddRow}
//     variant="contained"
//     color="primary"
//     sx={{ mt: 2 }}
//   >
//     Add Row
//   </Button>
//   </AccordionDetails>
// </Accordion>





// <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel2d-content"
//         id="panel2d-header"
       
//       >
//          <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>Payment Application</h2>
//       </AccordionSummary>
//       <AccordionDetails>

//       <Typography style={{ fontWeight: 'bold', fontSize: '1rem' }}>
//       Does the organization use one or more Payment Applications?
//       <RadioGroup
//         row
//         aria-label="uses-payment-apps"
//         name="usesPaymentApps"
//         value={usesPaymentApps}
//         onChange={(e) => setUsesPaymentApps(e.target.value)}
//       >
//         <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//         <FormControlLabel value="no" control={<Radio />} label="No" />
//       </RadioGroup>
//     </Typography>

//         <Typography style={{ fontWeight: 'bold', fontSize: '1rem',  }}>Provide the following information regarding the Payment Applications your organization uses:</Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Payment Application Name</TableCell>
//                 <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Version Number</TableCell>
//                 <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Application Vendor</TableCell>
//                 <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Is application PA-DSS Listed?</TableCell>
//                 <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>PA-DSS Listing Expiry date (if applicable)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {applications.map((app, index) => (
//                 <TableRow key={index}>
//                   <TableCell>
//                     <TextField
//                       value={app.name}
//                       onChange={(e) =>
// handleInputChange1(e, index, 'name')}
// fullWidth
// />
// </TableCell>
// <TableCell>
// <TextField
// value={app.version}
// onChange={(e) => handleInputChange1(e, index, 'version')}
// fullWidth
// />
// </TableCell>
// <TableCell>
// <TextField
// value={app.vendor}
// onChange={(e) => handleInputChange1(e, index, 'vendor')}
// fullWidth
// />
// </TableCell>
// <TableCell>
// <FormGroup row>
// <FormControlLabel
// control={<Checkbox
// checked={app.isListed === true}
// onChange={() => handleCheckboxChange(index, true)}
// />}
// label="Yes"
// />
// <FormControlLabel
// control={<Checkbox
// checked={app.isListed === false}
// onChange={() => handleCheckboxChange(index, false)}
// />}
// label="No"
// />
// </FormGroup>
// </TableCell>
// <TableCell>
// <TextField
// type="date"
// value={app.expiryDate}
// onChange={(e) => handleInputChange(e, index, 'expiryDate')}
// fullWidth
// />
// </TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </TableContainer>
// <Button
//   startIcon={<AddIcon />}
//   onClick={addApplicationRow}
//   variant="contained"
//   color="primary"
//   style={{ marginTop: '10px' }}
// >
//   Add Application
// </Button>

// </AccordionDetails>
// </Accordion>






//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel2e-content"
//         id="panel2e-header"
//       >
//          <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}> Description of Environment</h2>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography paragraph style={{ fontWeight: 'bold' }}>
//           Provide a high-level description of the environment covered by this assessment.
//         </Typography>
//         <Typography paragraph>
//           For example:
//           <ul>
//             <li>Connections into and out of the cardholder data environment (CDE).</li>
//             <li>Critical system components within the CDE, such as POS devices, databases, web servers, etc., and any other necessary payment components, as applicable.</li>
//           </ul>
//         </Typography>
//         <TextField
//           fullWidth
//           multiline
//           rows={4}
//           placeholder="Enter high-level description here"
//           variant="outlined"
//         />
//         <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//           <FormLabel component="legend" style={{ fontWeight: 'bold' }}>Does your business use network segmentation to affect the scope of your PCI DSS environment?</FormLabel>
//           <RadioGroup
//             row
//             aria-label="network-segmentation"
//             name="networkSegmentation"
//             value={networkSegmentation}
//             onChange={(e) => setNetworkSegmentation(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>
         
//         </FormControl>
//       </AccordionDetails>
//     </Accordion>





//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel2f-content"
//         id="panel2f-header"
//       >
//         <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}> Third-Party Service Providers</h2>
//       </AccordionSummary>
//       <AccordionDetails>


//       <FormControl component="fieldset" fullWidth margin="normal">
//   <FormLabel component="legend" style={{ fontWeight: 'bold', fontSize: '1rem',  }}>
//     Does your company use a Qualified Integrator & Reseller (QIR)?
//   </FormLabel>
//   <RadioGroup
//     row
//     aria-label="use-qir"
//     name="useQIR"
//     value={useQIR}
//     onChange={(e) => setUseQIR(e.target.value)}
//   >
//     <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="end" />
//     <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="end" />
//   </RadioGroup>
// </FormControl>

// {useQIR === 'yes' && (
//   <>
//     <TextField fullWidth label="Name of QIR Company" margin="normal" />
//     <TextField fullWidth label="QIR Individual Name" margin="normal" />
//     <TextField
//       fullWidth
//       label="Description of services provided by QIR"
//       margin="normal"
//     />
//   </>
// )}

// <FormControl component="fieldset" fullWidth margin="normal">
//   <FormLabel component="legend" style={{ fontWeight: 'bold', fontSize: '1rem',  }}>
//     Does your company share cardholder data with any third-party service providers?
//   </FormLabel>
//   <RadioGroup
//     row
//     aria-label="share-data"
//     name="shareData"
//     value={shareData}
//     onChange={(e) => setShareData(e.target.value)}
//   >
//     <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="end" />
//     <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="end" />
//   </RadioGroup>
// </FormControl>


   
// {shareData === 'yes' && (
// <>
// <TableContainer component={Paper} variant="outlined" margin="normal">
// <Table aria-label="service providers table">
// <TableHead>
// <TableRow>
// <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Name of service provider</TableCell>
// <TableCell style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center' }}>Description of services provided</TableCell>
// </TableRow>
// </TableHead>
// <TableBody>
// {serviceProviders.map((provider, index) => (
// <TableRow key={index}>
// <TableCell>
// <TextField
// value={provider.name}
// onChange={(e) => handleServiceProviderChange(index, 'name', e.target.value)}
// fullWidth
// />
// </TableCell>
// <TableCell>
// <TextField
// value={provider.description}
// onChange={(e) => handleServiceProviderChange(index, 'description', e.target.value)}
// fullWidth
// />
// </TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </TableContainer>


// <Button
// startIcon={<AddIcon />}
// onClick={handleAddServiceProvider}
// variant="contained"
// color="primary"
// style={{ marginTop: '10px' }}
// >
// Add Service Provider
// </Button>

// </>
// )}
// </AccordionDetails>
// </Accordion>







//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2g-content"
//           id="panel2g-header"
//         >
//           <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>Eligibility to Complete SAQ A</h2>
       
//         </AccordionSummary>
//         <AccordionDetails>
//           <FormGroup>
//             <FormControlLabel
//               control={<Checkbox name="notPresentTransactions" />}
//               label="Merchant accepts only card-not-present (e-commerce or mail/telephone-order) transactions;"
//             />
//             <FormControlLabel
//               control={<Checkbox name="outsourcedProcessing" />}
//               label="All processing of cardholder data is entirely outsourced to PCI DSS validated third-party service providers;"
//             />
//             <FormControlLabel
//               control={<Checkbox name="noElectronicStorage" />}
//               label="Merchant does not electronically store, process, or transmit
// any cardholder data on merchant systems or premises, but relies entirely on a third party(s) to handle all these functions;"
// />
// <FormControlLabel
// control={<Checkbox name="thirdPartyCompliance" />}
// label="Merchant has confirmed that all third party(s) handling storage, processing, and/or transmission of cardholder data are PCI DSS compliant; and"
// />
// <FormControlLabel
// control={<Checkbox name="dataOnPaper" />}
// label="Any cardholder data the merchant retains is on paper (for example, printed reports or receipts), and these documents are not received electronically."
// />
// <Typography variant="subtitle2" style={{ marginTop: '10px' }}>Additionally, for e-commerce channels:</Typography>
// <FormControlLabel
// control={<Checkbox name="ecommercePayments" />}
// label="All elements of the payment page(s) delivered to the consumer’s browser originate only and directly from a PCI DSS validated third-party service provider(s)."
// />
// </FormGroup>
// </AccordionDetails>
// </Accordion>



// <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={handleSubmit}
//           style={{ width: '150px', height: '40px' }} // Fixed width and height
//         >
//           Save and Next
//         </Button>
//       </Box>


//     </div>
//   );
// }

// export default Tabsection2;




import React from 'react'

const Tabsection2 = () => {
  return (
    <div>Tabsection2</div>
  )
}

export default Tabsection2