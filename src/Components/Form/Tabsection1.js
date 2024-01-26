import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import axios from 'axios';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from 'date-fns/format';
// import TextField from '@mui/material/TextField';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormLabel,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const useStyles = makeStyles((theme) => ({
  accordionHeader: {
    backgroundColor: "#f5f5f5",
    color: "#333",
    fontWeight: "bold",
  },

  submitButton: {
    backgroundColor: "#4caf50",
    color: "white",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  // Additional custom styles...
}));

const Tabsection1 = ({ onNext }) => {
  const [merchantExpanded, setMerchantExpanded] = useState(true); // State for Merchant Organization Information
  const [qsaExpanded, setQsaExpanded] = useState(true); // State for Qualified Security Assessor Information
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [parentAccordionExpanded, setParentAccordionExpanded] = useState(true);
  const [isFormEditable, setIsFormEditable] = useState(false);
  const [isQsaAccordionExpanded, setIsQsaAccordionExpanded] = useState(true);
  const classes = useStyles();
  const [websiteUrl, setWebsiteUrl] = useState('');
const [erpName, setErpName] = useState('');
const [paymentGateway, setPaymentGateway] = useState('');
const [thirdPartyService, setThirdPartyService] = useState('');
const [submissionDate, setSubmissionDate] = useState('');
const [executiveName, setExecutiveName] = useState('');
const [executiveTitle, setExecutiveTitle] = useState('');
const [signatureImage, setSignatureImage] = useState(null); // For the uploaded file



  //  ................................part 2 code states........................................

  const [businessExpanded, setBusinessExpanded] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [applications, setApplications] = useState([
    { name: "", version: "", vendor: "", isListed: null, expiryDate: "" },
  ]);
  const [rows, setRows] = useState([
    // Start with one empty row
    { type: "", number: "", location: "" },
  ]);
  const [usesPaymentApps, setUsesPaymentApps] = useState("");
  const [networkSegmentation, setNetworkSegmentation] = useState("");
  const [useQIR, setUseQIR] = useState("");
  const [shareData, setShareData] = useState("");
  const [serviceProviders, setServiceProviders] = useState([
    { name: "", description: "" },
  ]);
  const [expandedPanel, setExpandedPanel] = useState(null);


  // ..............................................part 3...................................
 

  const handleInputChange2 = (e, index, fieldName) => {
    console.log("Selected Date for Application:", e.target.value); // Debugging: Log selected date
    const newApplications = applications.map((app, appIndex) => {
      if (appIndex === index) {
        return { ...app, [fieldName]: e.target.value };
      }
      return app;
    });
    setApplications(newApplications);
  };

  const handleDateChange = (event) => {
    console.log("Selected Date:", event.target.value); // Debugging: Log selected date
    setSubmissionDate(event.target.value);
  };
  
  const handleExecutiveNameChange = (event) => {
    setExecutiveName(event.target.value);
  };
  
  const handleExecutiveTitleChange = (event) => {
    setExecutiveTitle(event.target.value);
  };
  
  const handleSignatureChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setSignatureImage(URL.createObjectURL(file));
      // Consider setting up state for the file itself if you need to submit the file
    }
  };
  
  

  // const handleSignatureChange = (event) => {
  //   setSignatureImage(URL.createObjectURL(event.target.files[0]));
  // };

  const handleParentAccordionToggle = () => {
    setParentAccordionExpanded(!parentAccordionExpanded);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and processing here

    // Call the onNext function passed from Mainform to move to the next tab
    onNext("tab2");
  };

  const handleMerchantAccordionToggle = () => {
    setMerchantExpanded(!merchantExpanded);
  };

  const handleQsaAccordionToggle = () => {
    setQsaExpanded(!qsaExpanded);
  };

  const accordionStyle = {
    width: "100%", // Ensure full width
    marginTop: "15px",
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    // Reset state when country changes
    setState("");
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  // Sample list of states for India (add more as needed)
  const indianStates = [
    "Bihar",
    "Uttar Pradesh",
    "Andhra Pradesh",
    "Maharashtra",
    "Karnataka",
    // ... other states
  ];

  //   ..................................part 2 code (function and styles)...................................

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const handleAddRow = () => {
    const newRow = { type: "", number: "", location: "" };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (e, index, field) => {
    const newRows = [...rows];
    newRows[index][field] = e.target.value;
    setRows(newRows);
  };

  const handleAccordionToggle = () => {
    setBusinessExpanded(!businessExpanded);
  };

  const handleCheckboxChange = (index, value) => {
    // Set the selected checkbox and make sure the other one is unchecked
    setApplications(
      applications.map((app, i) => {
        if (i === index) {
          return { ...app, isListed: value };
        }
        return app;
      })
    );
  };

  const handleInputChange1 = (e, index, field) => {
    const newApplications = [...applications];
    newApplications[index][field] = e.target.value;
    setApplications(newApplications);
  };

  const addApplicationRow = () => {
    setApplications([
      ...applications,
      { name: "", version: "", vendor: "", isListed: null, expiryDate: "" },
    ]);
  };

  const handleAddServiceProvider = () => {
    setServiceProviders([...serviceProviders, { name: "", description: "" }]);
  };

  const handleServiceProviderChange = (index, field, value) => {
    const updatedProviders = [...serviceProviders];
    updatedProviders[index][field] = value;
    setServiceProviders(updatedProviders);
  };

  const handleRemoveRow = (index) => { 
    if(index>0){
      const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
      setRows(newRows);
    }
   
  };

  const handleRemoveApplication = (index) => { 
    if(index>0){
      const newApplications = applications.filter(
        (_, appIndex) => appIndex !== index
      );
      setApplications(newApplications);
    }

  };

  // styles .................................................................................................................

  const formStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    // backgroundColor: '#f2f2f2',
    border: "1px solid #ccc",
    marginBottom: "10px",
  };

  const checkboxGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  };

  const checkboxStyle = {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: '#fff',
    padding: "10px",
    // border: '1px solid #ccc',
    borderRadius: "4px",
  };
  const formSectionStyle = {
    // backgroundColor: '#f2f2f2',
    padding: "20px",
    marginBottom: "10px",
  };

  const checkboxContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  };

  const checkboxLabelStyle = {
    display: "block",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  };

  const noteStyle = {
    backgroundColor: "lightyellow",
    borderLeft: "5px solid #ffeb3b",
    padding: "10px",
    marginTop: "20px",
  };
  const inputTextStyle = {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box", // So padding doesn't add to the width
  };

  // Style object for the accordion details
  const detailsStyle = {
    padding: "20px",
    borderTop: "1px solid #000", // This creates the black border line seen in the image
  };



  const handleSubmitpost = async (event) => {
    event.preventDefault();
  
    // Define an array to hold all parts of the form
    const staticParts = [
     
      {
        partName: 'Company Name',
        partResponse: document.getElementById('company-name').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },

      {
        partName: 'DBA',
        partResponse: document.getElementById('dba').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Contact Name',
        partResponse: document.getElementById('contact-name').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Title',
        partResponse: document.getElementById('title').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Telephone',
        partResponse: document.getElementById('telephone').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'E-mail',
        partResponse: document.getElementById('email').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Country',
        partResponse: document.getElementById('country').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'State/Province',
        partResponse: document.getElementById('state-province').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'City',
        partResponse: document.getElementById('city').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
  
      {
        partName: 'URL',
        partResponse: document.getElementById('url').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Pincode',
        partResponse: document.getElementById('Pincode').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Business Address',
        partResponse: document.getElementById('business-address').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Transaction Handler',
        partResponse: document.getElementById('transaction-handler').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: 'Card Details Entry',
        partResponse: document.getElementById('card-details-entry').value,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
    ];

    const constructPayload = () => {
      // Assuming 'rows' is your state that holds the table data
      return rows.map((row, index) => ({
        partName: `Facility ${index + 1}`, // Unique name for each facility part
        partResponse: JSON.stringify({
          type: row.type, // Facility type from the row
          number: row.number, // Number of facilities of this type from the row
          location: row.location, // Location(s) of the facility from the row
        }),
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8", // Your form ID
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02", // Your merchant ID
        status: "submitted", // Status of the part
      }));
    };

    const constructApplicationsPayload = () => {
      return applications.map((app, index) => ({
        partName: `Payment Application ${index + 1}`, // Unique name for each payment application part
        partResponse: JSON.stringify({
          name: app.name, // Application name from the row
          version: app.version, // Version number from the row
          vendor: app.vendor, // Application vendor from the row
          isListed: app.isListed, // PA-DSS Listed status from the row
          expiryDate: app.expiryDate, // PA-DSS Listing Expiry date from the row
        }),
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8", // Your form ID
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02", // Your merchant ID
        status: "submitted", // Status of the part
      }));
    };

    const newFieldParts = [
      {
        partName: "Merchant's Website URL",
        partResponse: websiteUrl,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: "ERP Name",
        partResponse: erpName,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: "Payment Gateway",
        partResponse: paymentGateway,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
      {
        partName: "Third Party Service Provider",
        partResponse: thirdPartyService,
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      },
    ];

    const constructServiceProvidersPayload = () => {
      return serviceProviders.map((provider, index) => ({
        partName: `Service Provider ${index + 1}`,
        partResponse: JSON.stringify({
          name: provider.name,
          description: provider.description
        }),
        formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
        merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
        status: "submitted"
      }));
    };
    
    const executivePart = {
      partName: "Executive Information",
      partResponse: JSON.stringify({
        submissionDate,
        executiveName,
        executiveTitle,
        // For signature, you might need to handle file upload differently based on your backend
        // signature: [You may need to convert the image to a suitable format or handle file uploads separately]
      }),
      formId: "de7bbd28-c07f-43d4-3628-08dc1c41daf8",
      merchantId: "e6d5544b-cb35-4be6-0388-08dc1c2ffe02",
      status: "submitted"
    };
    
    

    const dynamicFacilityParts = constructPayload();

  // Generate dynamic parts from the payment applications table
  const dynamicApplicationParts = constructApplicationsPayload();
  const serviceProvidersPayload = constructServiceProvidersPayload();

  const combinedParts = [...staticParts, ...dynamicFacilityParts, ...dynamicApplicationParts, ...newFieldParts , ...serviceProvidersPayload, executivePart];

  // API endpoint and posting logic
  const apiUrl = 'http://192.168.1.13:8181/api/CreateMerchantFormParts';

  for (const part of combinedParts) {
    try {
      const response = await axios.post(apiUrl, part);
      console.log(`Response for ${part.partName}:`, response.data);
    } catch (error) {
      console.error(`Error posting ${part.partName}:`, error);
    }
  }
};


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1 },
        }}
      >
        {/* Parent Accordion */}
        <Accordion
          expanded={parentAccordionExpanded}
          onChange={handleParentAccordionToggle}
          sx={{ width: "100%", marginTop: "15px" }}
        >
          <AccordionSummary
            className={classes.accordionHeader}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="parent-panel-content"
            id="parent-panel-header"
          >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ color: "text.secondary", my: 2 }}
            >
              Part 1: Merchant and Qualified Security Assessor Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: 'center',
                "& > :not(style)": { m: 1 },
              }}
            >
              <Accordion
                expanded={merchantExpanded}
                onChange={handleMerchantAccordionToggle}
                sx={accordionStyle}
              >
                <AccordionSummary
                  className={classes.accordionHeader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="merchant-panel-content"
                  id="merchant-panel-header"
                >
                  <Typography
                    variant="h5" // Adjust the variant as needed
                    component="h1" // The semantic element to be used
                    gutterBottom // Adds a bottom margin to the Typography
                    sx={{
                      color: "text.secondary", // Attractive light black color
                      my: 2, // Margin top and bottom, adjust as needed
                    }}
                  >
                    1.A: Merchant Organization Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        className={classes.formField}
                        fullWidth
                        id="company-name"
                        label="Company Name"
                        helperText=" " // Blank helper text to align fields
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        id="dba"
                        label="DBA (doing business as)"
                        helperText=" "
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        id="contact-name"
                        label="Contact Name"
                        helperText=" "
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        id="title"
                        label="Title"
                        helperText=" "
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        id="telephone"
                        label="Telephone"
                        helperText=" "
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        id="email"
                        label="E-mail"
                        helperText=" "
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        id="country"
                        label="Country"
                        helperText=" "
                        value={country}
                        onChange={handleCountryChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <FormControl fullWidth>
                        <InputLabel id="state-province-label">
                          State/Province
                        </InputLabel>
                        <Select
                          labelId="state-province-label"
                          id="state-province"
                          value={state}
                          label="State/Province"
                          onChange={handleStateChange}
                          disabled={country !== "India"} // Disable if country is not India
                        >
                          {indianStates.map((indianState, index) => (
                            <MenuItem key={index} value={indianState}>
                              {indianState}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        id="city"
                        label="City"
                        helperText=" "
                      />
                    </Grid>

                

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="url"
                        label="URL"
                        helperText=" "
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        id="Pincode"
                        label="Pincode"
                        helperText=" "
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        id="business-address"
                        label="Business Address"
                        helperText=" "
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems: 'center',
                "& > :not(style)": { m: 1 },
              }}
            >
              {/* 
<Accordion
  expanded={isQsaAccordionExpanded}
  onChange={() => setIsQsaAccordionExpanded(!isQsaAccordionExpanded)}
  sx={accordionStyle}
>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="qsa-panel-content"
            id="qsa-panel-header"
          >

        <Typography
          variant="h5" // Adjust the variant as needed
          component="h1" // The semantic element to be used
          gutterBottom // Adds a bottom margin to the Typography
          sx={{
            color: 'text.secondary', // Attractive light black color
            my: 2, // Margin top and bottom, adjust as needed
          }}
        >
         1.B: Qualified Security Assessor Company Information (if applicable)


        </Typography>
        <FormControlLabel
    control={
        <Checkbox
          checked={isFormEditable}
          onChange={(e) => setIsFormEditable(e.target.checked)}
          onClick={(e) => e.stopPropagation()} // Prevent the event from affecting the accordion
        />
      }
    label="Edit"
    sx={{ marginLeft: '5px', alignItems:'center' }} // Position the checkbox to the right
  />
        </AccordionSummary>
        <AccordionDetails>

        

     
   <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="company-name"
            label="Company Name"
            helperText=" " // Blank helper text to align fields
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="QSA"
            label="Lead QSA Contact Name:"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="contact-name"
            label="Contact Name"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="title"
            label="Title"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="telephone"
            label="Telephone"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="email"
            label="E-mail"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>

        <Grid item xs={12} md={4}>
        <TextField
            fullWidth
            id="country"
            label="Country"
            value={country}
            onChange={handleCountryChange}
            helperText=" "
            disabled={!isFormEditable}
          />
</Grid>


<Grid item xs={12} md={4}>
<FormControl fullWidth >
            <InputLabel id="state-province-label">State/Province</InputLabel>
            <Select
              labelId="state-province-label"
              id="state-province"
              value={state}
              label="State/Province"
              onChange={handleStateChange}
          
              disabled={!isFormEditable}
            >
              {indianStates.map((indianState, index) => (
                <MenuItem key={index} value={indianState}>
                  {indianState}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="city"
        label="City"
        helperText=" "
        disabled={!isFormEditable}
/>
</Grid>

<Grid item xs={12} md={4}>
          <TextField
            fullWidth id="Zipcode"
        label="Zipcode"
        helperText=" "
        disabled={!isFormEditable}
/>
</Grid>


        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            id="business-address"
            label="Business Address"
            helperText=" "
            disabled={!isFormEditable}
          />
        </Grid>


  
<Grid item xs={12} md={4}>
<TextField
         fullWidth
         id="url"
         label="URL"
         helperText=" "
         disabled={!isFormEditable}
       />
</Grid>
</Grid>
</AccordionDetails>
      </Accordion> */}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* .........................................../* part 2 jsx code ................................................  */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Accordion sx={{ width: "100%", marginTop: "15px" }}>
          <AccordionSummary
            className={classes.accordionHeader}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="executive-summary-content"
            id="executive-summary-header"
          >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ color: "text.secondary", my: 2 }}
            >
              Part 2: Executive Summary
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="form-container">
              {/* <Accordion expanded={businessExpanded} onChange={handleAccordionToggle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

<h2 style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.A: Type of Merchant Business (check all that apply)</h2>
</AccordionSummary>
        <AccordionDetails>
      <form style={formStyle}>
    
        <div style={checkboxGroupStyle}>

          <div style={checkboxStyle}>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="retailer" />
              Retailer
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="telecommunication" />
              Telecommunication
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="grocery_and_supermarkets" />
              Grocery and Supermarkets
            </label>
          </div>



          <div style={checkboxStyle}>
            
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="petroleum" />
              Petroleum
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="e_commerce" />
              E-Commerce
            </label>

            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="moto" />
              Mail order/telephone order (MOTO)
            </label>
          </div>
          <div style={checkboxStyle}>
          <label style={checkboxLabelStyle}>
              <input type="checkbox" name="businessType" value="other" />
              Others (please specify):
            </label>

           
           
          </div>


         
          
        </div>

        <div style={{display:'flex' , flexDirection:'row', justifyContent:'space-between'}}>
       <div style={formSectionStyle}>
          <h2 style={{ fontWeight: 'bold' }}>What types of payment channels does your business serve?</h2>
          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="paymentChannels" value="moto" />
              Mail order/telephone order (MOTO)
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="paymentChannels" value="ecommerce" />
              E-Commerce
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="paymentChannels" value="cardPresent" />
              Card-present (face-to-face)
            </label>
          </div>
        </div>

        

        <div style={formSectionStyle}>
          <h2 style={{ fontWeight: 'bold' }}>Which payment channels are covered by this SAQ?</h2>
          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="saqPaymentChannels" value="moto" />
              Mail order/telephone order (MOTO)
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="saqPaymentChannels" value="ecommerce" />
              E-Commerce
            </label>
            <label style={checkboxLabelStyle}>
              <input type="checkbox" name="saqPaymentChannels" value="cardPresent" />
              Card-present (face-to-face)
            </label>
          </div>
        </div>
        </div>

        <div style={noteStyle}>
          <p>Note: If your organization has a payment channel or process that is not covered by this SAQ, consult your acquirer or payment brand about validation for the other channels.</p>
        </div>
        
      
      </form>
      </AccordionDetails>
      </Accordion> */}

              <Accordion
                expanded={expandedPanel === "panelDescription"}
                onChange={handleAccordionChange("panelDescription")}
              >
                <AccordionSummary
                  className={classes.accordionHeader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2b-content"
                  id="panel2b-header"
                >
                  <h2 style={{ fontSize: "1.2rem", fontWeight: "bold",marginLeft:'7px' }}>
                   Description of Payment Card Business
                  </h2>
                </AccordionSummary>
                <AccordionDetails style={detailsStyle}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    How and in what capacity does your business store, process
                    and/or transmit cardholder data?
                  </Typography>
                  {/* <TextField
                    className={classes.formField}
                    fullWidth
                    id="cardholder-data-description"
                    label="Description"
                    multiline
                    rows={4}
                    helperText=" Provide a detailed description of how your business manages cardholder data. Include specifics on data storage locations, processing activities, and the methods used for transmitting data. Mention any security measures in place to protect this data throughout its lifecycle in your organization."
                    placeholder="Provide a detailed description here ."
                    variant="outlined"
                  /> */}
                  <br />

                  <Typography component="div" gutterBottom>
                    We do not Store, Process or Transmit any Card Holder Data.
                    Payment processing has been fully outsourced. Transactions
                    involving Debit / Credit cards are handled by
                    <TextField
                      className={classes.formField}
                      size="small"
                      id="transaction-handler"
                      variant="outlined"
                      placeholder="Razorpay / CC Avenues"
                      style={{
                        width: "auto",
                        marginTop: "-8px",
                        marginLeft: "8px",
                        marginRight: "8px",
                        marginBottom: "10px",
                      }}
                    />
                    For Payment, Card details are entered on
                    <TextField
                      className={classes.formField}
                      size="small"
                      id="card-details-entry"
                      variant="outlined"
                      placeholder=" Mention here card details"
                      style={{
                        width: "auto",
                        marginTop: "-8px",
                        marginLeft: "8px",
                        marginRight: "8px",
                      }}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expandedPanel === "panelLocations"}
                onChange={handleAccordionChange("panelLocations")}
              >
                <AccordionSummary
                  className={classes.accordionHeader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2b-content"
                  id="panel2b-header"
                >
                  <h2 style={{ fontSize: "1.2rem", fontWeight: "bold",marginLeft:'7px' }}>
                   Locations
                  </h2>
                </AccordionSummary>
                <p style={{marginLeft:'20px'}}>
                  List types of facilities (for example, retail outlets,
                  corporate offices, data centers, call centers, etc.) and a
                  summary of locations included in the PCI DSS review.
                </p>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                          >
                            Type of facility
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                            align="center"
                          >
                            Number of facilities of this type
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                            align="center"
                          >
                            Location(s) of facility (city, country)
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              <TextField
                                value={row.type}
                                onChange={(e) =>
                                  handleInputChange(e, index, "type")
                                }
                                fullWidth
                              />
                            </TableCell>
                            <TableCell align="right">
                              <TextField
                                value={row.number}
                                type="number
"
                                onChange={(e) =>
                                  handleInputChange(e, index, "number")
                                }
                                fullWidth
                              />
                            </TableCell>
                            <TableCell align="right">
                              <TextField
                                className={classes.formField}
                                value={row.location}
                                onChange={(e) =>
                                  handleInputChange(e, index, "location")
                                }
                                fullWidth
                              />
                            </TableCell>

                            <TableCell align="right">
                              {index >0 && (
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRemoveRow(index)}
                                sx={{ ml: 1 }} // Add some left margin for spacing
                              >
                                Remove
                              </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Button
                    startIcon={<AddIcon />}
                    onClick={handleAddRow}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Add Row
                  </Button>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  className={classes.accordionHeader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <h2 style={{ fontSize: "1.2rem", fontWeight: "bold",marginLeft:'7px' }}>
                     Payment Application
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
         

                  <Typography style={{ fontWeight: "bold", fontSize: "1rem",marginLeft:'5px' }}>
                    Provide the following information regarding the Payment
                    Applications your organization uses:
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                          >
                            Payment Application Name
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                          >
                            Version Number
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                          >
                            Application Vendor
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                          >
                            Is application PA-DSS Listed?
                          </TableCell>
                          <TableCell
                            style={{
                              fontWeight: "bold",
                              fontSize: "1rem",
                              textAlign: "center",
                            }}
                          >
                            PA-DSS Listing Expiry date (if applicable)
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {applications.map((app, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <TextField
                                className={classes.formField}
                                value={app.name}
                                onChange={(e) =>
                                  handleInputChange1(e, index, "name")
                                }
                                fullWidth
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                value={app.version}
                                onChange={(e) =>
                                  handleInputChange1(e, index, "version")
                                }
                                fullWidth
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                value={app.vendor}
                                onChange={(e) =>
                                  handleInputChange1(e, index, "vendor")
                                }
                                fullWidth
                              />
                            </TableCell>
                            <TableCell>
                              <FormGroup row>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={app.isListed === true}
                                      onChange={() =>
                                        handleCheckboxChange(index, true)
                                      }
                                    />
                                  }
                                  label="Yes"
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={app.isListed === false}
                                      onChange={() =>
                                        handleCheckboxChange(index, false)
                                      }
                                    />
                                  }
                                  label="No"
                                />
                              </FormGroup>
                            </TableCell>
                            <TableCell>

                           <TextField
                             fullWidth
                              type="date"
                         value={app.expiryDate || ''} 
                        onChange={(e) => handleInputChange2(e, index, "expiryDate")}/>




                            </TableCell>
                            <TableCell>
                              {index >0 && (
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRemoveApplication(index)}
                                sx={{ ml: 1 }} // Add some left margin for spacing
                              >
                                Remove
                              </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Button
                    startIcon={<AddIcon />}
                    onClick={addApplicationRow}
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Add Application
                  </Button>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  className={classes.accordionHeader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2e-content"
                  id="panel2e-header"
                >
                  <h2 style={{ fontSize: "1.2rem", fontWeight: "bold",marginLeft:'7px' }}>
                   Description of Environment
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                

                  <Typography variant="subtitle1" gutterBottom>
                    Please mention the following here:
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Brief the IT infrastructure of the Merchant's organization:
                  </Typography>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                      <TextField
  className={classes.formField}
  fullWidth
  label="Merchant's website URL"
  variant="outlined"
  placeholder="http://www.example.com"
  value={websiteUrl}
  onChange={(e) => setWebsiteUrl(e.target.value)}
/>
                      </Grid>
                      <Grid item xs={6}>
                      <TextField
  className={classes.formField}
  fullWidth
  label="Name of ERP - If any"
  variant="outlined"
  placeholder="e.g., Octopot"
  value={erpName}
  onChange={(e) => setErpName(e.target.value)}
/>
                      </Grid>
                      <Grid item xs={6}>
                      <TextField
  className={classes.formField}
  fullWidth
  label="Payment Gateway"
  variant="outlined"
  placeholder="e.g., CC Avenues / Razorpay / Billdesk"
  value={paymentGateway}
  onChange={(e) => setPaymentGateway(e.target.value)}
/>
                      </Grid>
                      <Grid item xs={6}>
                      <TextField
  className={classes.formField}
  fullWidth
  label="Any other third party service Provider"
  variant="outlined"
  placeholder="e.g., Juspay"
  value={thirdPartyService}
  onChange={(e) => setThirdPartyService(e.target.value)}
/>
                      </Grid>
                      {/* Add any additional fields as necessary */}
                    </Grid>
                  </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  className={classes.accordionHeader}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2f-content"
                  id="panel2f-header"
                >
                  <h2 style={{ fontSize: "1.2rem", fontWeight: "bold",marginLeft:'7px' }}>
                     Third-Party Service Providers
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
           

   

                  <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel
                      component="legend"
                      style={{ fontWeight: "bold", fontSize: "1rem" }}
                    >
                      Does your company share cardholder data with any
                      third-party service providers?
                    </FormLabel>
                  </FormControl>

                  <>
                    <TableContainer
                      component={Paper}
                      variant="outlined"
                      margin="normal"
                    >
                      <Table aria-label="service providers table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                              }}
                            >
                              Name of service provider
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                              }}
                            >
                              Description of services provided
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {serviceProviders.map((provider, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <TextField
                                  value={provider.name}
                                  onChange={(e) =>
                                    handleServiceProviderChange(
                                      index,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  value={provider.description}
                                  onChange={(e) =>
                                    handleServiceProviderChange(
                                      index,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    <Button
                      startIcon={<AddIcon />}
                      onClick={handleAddServiceProvider}
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px" }}
                    >
                      Add Service Provider
                    </Button>
                  </>
                </AccordionDetails>
              </Accordion>

              {/* 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2g-content"
          id="panel2g-header"
        >
          <h2  style={{ fontSize: '1.2rem',fontWeight: 'bold' }}>2.G: Eligibility to Complete SAQ A</h2>
       
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="notPresentTransactions" />}
              label="Merchant accepts only card-not-present (e-commerce or mail/telephone-order) transactions;"
            />
            <FormControlLabel
              control={<Checkbox name="outsourcedProcessing" />}
              label="All processing of cardholder data is entirely outsourced to PCI DSS validated third-party service providers;"
            />
            <FormControlLabel
              control={<Checkbox name="noElectronicStorage" />}
              label="Merchant does not electronically store, process, or transmit
any cardholder data on merchant systems or premises, but relies entirely on a third party(s) to handle all these functions;"
/>
<FormControlLabel
control={<Checkbox name="thirdPartyCompliance" />}
label="Merchant has confirmed that all third party(s) handling storage, processing, and/or transmission of cardholder data are PCI DSS compliant; and"
/>
<FormControlLabel
control={<Checkbox name="dataOnPaper" />}
label="Any cardholder data the merchant retains is on paper (for example, printed reports or receipts), and these documents are not received electronically."
/>
<Typography variant="subtitle2" style={{ marginTop: '10px' }}>Additionally, for e-commerce channels:</Typography>
<FormControlLabel
control={<Checkbox name="ecommercePayments" />}
label="All elements of the payment page(s) delivered to the consumer’s browser originate only and directly from a PCI DSS validated third-party service provider(s)."
/>
</FormGroup>
</AccordionDetails>
</Accordion> */}
            </div>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ color: "text.secondary", my: 2 }}
          >
            Part 3. PCI DSS Validation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                3A. Merchant Attestation
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    flex: "1 1 auto",
                    marginRight: "16px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ width: "auto" }}
                    >
                      Date:
                    </Typography>
                    
                    <TextField
                     fullWidth
                     type="date"
                    value={submissionDate || ''} 
                     onChange={handleDateChange}
                   className={classes.formField}
                    sx={{ width: 200 }}/>


                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ width: "auto" }}
                    >
                      Merchant Executive Officer Name:
                    </Typography>
                    <TextField
  value={executiveName}
  onChange={handleExecutiveNameChange}
  label="Executive Officer Name"
  className={classes.formField}
  sx={{ width: 200 }}
/>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    flex: "1 1 auto",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ width: "auto" }}
                    >
                      Title:
                    </Typography>
                    <TextField
  value={executiveTitle}
  onChange={handleExecutiveTitleChange}
  className={classes.formField}
  label="Title"
  sx={{ width: 200 }}
/>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body1"
                      gutterBottom
                      component="div"
                      sx={{ width: "auto" }}
                    >
                      Signature of Merchant Executive Officer:
                    </Typography>
                    <Button
  variant="contained"
  component="label"
  className={classes.uploadButton}
  startIcon={<CloudUploadIcon />}
>
  Upload Signature
  <input
    type="file"
    hidden
    accept="image/*"
    onChange={handleSignatureChange}
  />
</Button>
                    {signatureImage && (
                      <Box
                        component="img"
                        src={signatureImage}
                        alt="Signature"
                        sx={{ maxHeight: "100px", mt: 2, ml: 2 }}
                      />
                    )}
                  </Box>
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
      <Button
  variant="contained"
  color="primary"
  onClick={handleSubmitpost} 
  style={{ width: "150px", height: "40px" }} 
>
  Save 
</Button>
      </Box>
    </>
  );
};

export default Tabsection1;
