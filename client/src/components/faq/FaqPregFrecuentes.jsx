import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import './Faqs.css'
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function FaqPregFrecuentes(props) {
    return (
        <div>
             <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='typographyTitle'>{props.title1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.text1}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='typographyTitle'>{props.title2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.text2}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='typographyTitle'>{props.title3}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.text3}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className='typographyTitle'>{props.title4}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {props.text4}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    )
}

export default FaqPregFrecuentes
