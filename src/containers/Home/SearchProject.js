import React from 'react';
import _get from 'lodash/get';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

const STYLES = {
  WRAPPER: {
    padding: 10,
    borderRadius: 5,
    border: '1px solid #dee2e6'
  }
};

class SearchProject extends React.Component {
    render() {
      const project = _get(this.props, 'project', {});
      const owner = _get(this.props, 'project.owner', {});

      if (!project.owner) {
        return null;
      }

      return (<Row style={STYLES.WRAPPER}>
                {owner.avatar_url && <Col xs="1">
                        <img
                          alt={'Avatar'}
                          src={owner.avatar_url}
                          style={{ height: 75 }}
                        />
                </Col>}
                <Col xs="3">
                  <div>Name:- {project.name}</div>
                  <div>Branch:- {project.default_branch}</div>
                  <div>Fullname:- {project.full_name}</div>
                </Col>
                <Col xs="8">
                  <div>URL:- {project.url}</div>
                  <div>Description:- {project.description}</div>
                  <div>Homepage:- {project.homepage}</div>
                </Col>
              </Row>)
    }
}

const mapStateToProps = state => ({
  project: _get(state, 'app.project'),
});

export default connect(mapStateToProps, {})(SearchProject);
