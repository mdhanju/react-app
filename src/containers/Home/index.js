import React from 'react';
import { Container } from 'reactstrap';
import SearchRow from './SearchRow';
import SearchProject from './SearchProject';
import SearchResults from './SearchResults';

class Home extends React.Component {
    render() {
      return (
        <Container>
          <SearchRow />
          <SearchProject />
          <SearchResults />
        </Container>
      )
    }
}

export default Home;
