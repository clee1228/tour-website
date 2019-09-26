import React, { Component, Fragment} from 'react';
import './../App.css';

//Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';



const styles = (theme) => ({
    ...theme.spreadThis,
    title:{
        paddingBottom: 20,
    }
    
});





class ContactForm extends Component {
    state = {
        selectedDate: null,
    };

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
      };
   

    render() {
        return (
            <Fragment>
                <Typography className="classes.title" gutterBottom="true" variant="h4">
                    Contact Us
                </Typography>
                <div className="classes.form" style={{padding: '18px', border: '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '15px'}}>

             
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
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>E-mail Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
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

