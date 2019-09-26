import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Container from '@material-ui/core/Container';


class home extends Component {
    render() {
        return (
            
               <Container>
                <Carousel/>
                <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>

                </Container>
                
            
        )
    }
}

export default home
