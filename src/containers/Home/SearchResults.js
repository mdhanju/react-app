import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import _get from 'lodash/get';

const STYLES = {
  WRAPPER: {
    padding: 10,
    borderRadius: 5,
    border: '1px solid #dee2e6',
    marginTop: 10
  },
  ROW_ITEM: {
    display: 'inline-block',
    width: 95
  }
};

class SearchResults extends React.Component {
    rederRows(item){
      return (<Col key={item.sha} xs="12" style={{ borderBottom: '1px solid grey',padding: 10}}>
                <div><span style={STYLES.ROW_ITEM}>Name:</span>{item.name}</div>
                <div><span style={STYLES.ROW_ITEM}>Path:</span>{item.path}</div>
                <div><span style={STYLES.ROW_ITEM}>URL:</span>{item.url}</div>
                <div><span style={STYLES.ROW_ITEM}>GIT UTL:</span>{item.git_url}</div>
                <div>
                  <span style={STYLES.ROW_ITEM}>HTML URL:</span>
                  <a href={item.git_url} target={'_blank'}>{item.html_url}</a>
                </div>
              </Col>
      )
    }

    render() {
      const codes = _get(this, 'props.codes');
      if (!codes){
        return null
      }
      return (<Row style={ STYLES.WRAPPER}>
                <Col xs="12">COUNT: {codes.length}</Col>
                {codes.map((item) => this.rederRows(item))}
              </Row>)
    }
}

const mapStateToProps = state => ({
  codes: _get(state, 'app.codes'),
});

export default connect(mapStateToProps, {})(SearchResults);
