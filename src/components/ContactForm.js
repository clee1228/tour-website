import React, { Component, Fragment} from 'react';
import './../App.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

//Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
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
    }
});



class ContactForm extends Component {
    state = {
        selectedDate: null,
        calendar: false,
    };


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
   

    render() {
        const { calendar } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography className={classes.title} gutterBottom="true" variant="h4">
                    Contact Us
                </Typography>
                <div style={{padding: '18px', border: '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '15px'}}>

             
                <Form>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                        <Form.Row>
                            <Col>
                            <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>E-mail Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tour Location</Form.Label>
                        <Form.Control as="select">
                        <option>Select tour location...</option>
                        <option>Monterey Bay</option>
                        <option>Napa Valley</option>
                        <option>San Francisco</option>
                        <option>Yosemite</option>
                      
                        </Form.Control>
                    </Form.Group>

                    <Form.Group >
                        
                        <Form.Label>Choose Starting Date</Form.Label>
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
                                     className={classes.calendarButton}
                                     />
                            </IconButton>
                           
                            </Col>
                        </Form.Row>

                       
                            <Dialog onClose={this.closeCalendar} open={calendar}>
                                <DayPicker onDayClick={this.handleDateClick}/>
                            </Dialog>
                
                        
                       
                    </Form.Group>


                      

                    <Form.Group >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="textarea" />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </Fragment>
           
        )
    }
}

export default withStyles(styles)(ContactForm);

