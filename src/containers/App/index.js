import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Home from '../Home';

class App extends React.Component {
    render() {
      return (<Container>
                <h4 style={{ padding: 20, textAlign: 'center' }}>GITHUB SEARCH</h4>
                <Row>
                  <Col>
                    <Route exact path="/" component={Home} />
                  </Col>
                </Row>
              </Container>
      )
    }
}

export default App;
