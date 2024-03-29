import React, { Component, Fragment} from 'react';
import './../App.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import * as emailjs from 'emailjs-com'


//React-animations
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


//Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';

//Icons
import IconButton from '@material-ui/core/IconButton';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';



const styles = (theme) => ({
    ...theme.spreadThis,
    title:{
        paddingBottom: 20,
    },
    calendarIconButton:{
        padding: 0,
    },
    calendarButton:{
        padding: 0,
        display: 'flex',
    },
    half:{
        width: '50%',
        paddingTop: 5,
        paddingRight: 10,
        height: '60px',
        margin: '10px auto 10px auto'
    },
    name:{
        height: 5,
    },
    thankYou:{
        height: '600px',
        paddingTop: '120px',
        textAlign: 'center',
    }
});



const animate = {
    bounceInDown: {
      animation: '1.5s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}



class ContactForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        numPpl: '',
        subject: '',
        message: '',
        selectedDate: null,
        calendar: false,
        validated: false,
        mailSent: false,
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          this.setState({ validated: true});
          const { 
                firstName, 
                lastName, 
                email, 
                location,
                numPpl,
                selectedDate,
                subject, 
                message } = this.state;
        let templateParams = {
            from: email,
            first_name: firstName,
            last_name: lastName,
            location: location,
            people: numPpl,
            date: selectedDate,
            to_name: 'James',
            subject: subject,
            message_html: message,
            }
            var service_id = "caitlinedition";
            var template_id = "template_J8grgi7k";
            var user_id = "user_pKOvMWF5SXk4U1skV4Fen";

            emailjs.send(service_id, template_id, templateParams, user_id)
            this.setState({mailSent: true});

            
            this.resetForm()
        };

    resetForm() {
        this.setState({
            firstName: '',
            lastName: '', 
            email: '', 
            location: '',
            numPpl: '',
            selectedDate: '',
            subject: '',
            message: '',
        })
        }
        

    handleDateClick = (date) => {
        this.setState({selectedDate: date.toLocaleDateString()});
        this.closeCalendar();
      };

    closeCalendar = () => {
        this.setState({calendar: false})
    }

    openCalendar = () => {
        this.setState({calendar: true})
    }

    handleChange = (event) =>{ 
        this.setState({
            [event.target.name]: event.target.value
        })
    };
   

    render() {
        const { calendar } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
                { !this.state.mailSent? (
                    <Fragment>
                     <Typography className={classes.title}  variant="h4">
                     Contact Us
                    </Typography>
                     <div style={{padding: '18px', border: '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '15px'}}>
                     <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                     <Form.Group>
                     <Form.Label>Name</Form.Label>
                         <Form.Row>
                             <Col>
                             <Form.Control 
                                 required
                                 type="text"
                                 name="firstName"
                                 onChange={this.handleChange}
                                 placeholder="First Name" />
                             </Col>
                             <Col>
                             <Form.Control
                                 required
                                 type="text"
                                 name="lastName"
                                 onChange={this.handleChange}
                                 placeholder="Last Name" />
                             </Col>
                         </Form.Row>
                     </Form.Group>
                     
                     <Form.Group>
                         <Form.Label>E-mail Address</Form.Label>
                         <Form.Control 
                             required
                             type="email" 
                             name="email"
                             onChange={this.handleChange}
                             placeholder="name@example.com" />
                     </Form.Group>
 
                     <Form.Group>
                         <Form.Label>Tour Location</Form.Label>
                         <Form.Control 
                             name="location"
                             onChange={this.handleChange}
                             required
                             as="select">
                         <option>Select tour location...</option>
                         <option>Monterey Bay</option>
                         <option>Napa Valley</option>
                         <option>San Francisco</option>
                         <option>Yosemite</option>
                         </Form.Control>
                         <Form.Control.Feedback type="invalid">
                         Please choose a location.
                         </Form.Control.Feedback>
                     </Form.Group>
 
                     <Form.Group>
                             <Form.Label># of People</Form.Label>
                             <Form.Control 
                                 name="numPpl"
                                 onChange={this.handleChange}
                                 required
                                 as="select">
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                             </Form.Control>
                             <Form.Control.Feedback type="invalid">
                             Please choose number of people.
                             </Form.Control.Feedback>
                         </Form.Group>
 
                     <Form.Group>
                     <Form.Label>Select Starting Date</Form.Label>
                         <Form.Row>
                         
                         <Col>
                             <Form.Control
                                 type="textarea" 
                                 placeholder={this.state.selectedDate}/>
                             
                         </Col>
                         <Col>
                              <IconButton
                                 color="inherit"
                                 onClick={this.openCalendar}
                                 className={classes.calendarIconButton}>
                                     <CalendarTodayIcon
                                     className={classes.calendarButton}/>
                             </IconButton>
                         </Col>
 
                         </Form.Row>
 
                         <Dialog onClose={this.closeCalendar} open={calendar}>
                                 <DayPicker onDayClick={this.handleDateClick}/>
                             </Dialog>
                             <Form.Control.Feedback type="invalid">
                         Please choose starting date.
                         </Form.Control.Feedback>
                     </Form.Group>
 
                    
                     <Form.Group >
                         <Form.Label>Subject</Form.Label>
                         <Form.Control 
                             required
                             name="subject"
                             onChange={this.handleChange}
                             type="textarea" />
                     </Form.Group>
 
 
                     <Form.Group>
                         <Form.Label>Message</Form.Label>
                         <Form.Control 
                             name="message"
                             onChange={this.handleChange}
                             required
                             as="textarea" 
                             rows="3" />
                     </Form.Group>
 
                     <Button variant="primary" size="lg" type="submit" block>
                         Submit
                     </Button>
                 </Form>
                 </div>
                 </Fragment>

                ): (

                    <StyleRoot>
                         <div className={classes.thankYou} style={animate.bounceInDown}>
                            <h1 style={{fontSize:'70px'}}>Thank you for contacting us.</h1>
                        </div>
                    </StyleRoot>

                 
                )}
               
           
            </Fragment> 
              
           

             
              
        )
    }
}

export default withStyles(styles)(ContactForm);

