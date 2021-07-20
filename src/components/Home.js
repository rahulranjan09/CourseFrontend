import React, { useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {

    useEffect(() => {
        document.title ="Home || Hello React";
    }, []);

    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Hello React</h1>
                <p>
                    This is a frontend application developed by Rahul Ranjan.
                </p>
                <Container>
                    <Button color="success" outline>Start</Button>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Home;