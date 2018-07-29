import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Alert, Row, Col, Button, Label } from 'reactstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import WdInput from '../../components/WdInput';
import WdSelect from '../../components/WdSelect';
import _get from 'lodash/get';
import { getProjects, updateProject, getLanguages, getCodeSearch } from '../../actions/appActions';

const STYLES = {
  WRAPPER: {
    padding: 10,
  }
};

class SearchRow extends React.Component {
    handleSelected = (selected) => {
      const project = _get(selected, '[0]', {})

      this.props.updateProject(project);
      this.props.change('projectName', project.full_name);
      this.props.getLanguages(project.languages_url);
    }

    handleProjectBlur = (key) => {
      this.props.getProjects(key);
    }

    renderOptions = (option) => {
      const owner = option.owner || {};
      return (<div>
                {owner.avatar_url && <img
                          alt={'Logo'}
                          src={owner.avatar_url}
                          style={{ width: 25, heigth: 25, marginRight: 5 }}/>
                }
                {option.name}
              </div>)
    }

    handleClick = () => {
      this.props.getCodeSearch();
    }

    render() {
      const { projectName, key, language } = this.props.searchForm;
      const { languages, loading, loadingError } = this.props;
      const isValid = projectName && key && language;
      return (<Row
                style={STYLES.WRAPPER}>
                <Col md={4}>
                  <Label htmlFor={'project'}>Project name</Label>
                  <AsyncTypeahead
                    isLoading={this.props.loading}
                    labelKey={'name'}
                    minLength={3}
                    onSearch={this.handleProjectBlur}
                    placeholder={'Project name'}
                    options={this.props.projects}
                    onChange={this.handleSelected}
                    renderMenuItemChildren={(option, props) => (
                      this.renderOptions(option)
                    )}
                  />
                </Col>
                <WdInput
                  name={'key'}
                  label={'Keyword'}
                />
                <WdSelect
                  name={'language'}
                  label={'Language'}
                  items={languages}
                />
                {loadingError && <Col md={12}>
                  <Alert color="danger">Something went wrong, please try after some time.</Alert>
                </Col>}
                <Col md={12} style={{ padding: 5, textAlign: 'center' }}>
                  {loading ?
                    <Button disabled={true}>Searching...</Button> :
                    <Button
                      onClick={this.handleClick}
                      color="primary"
                      disabled={!isValid}>
                      SEARCH
                    </Button>
                  }
                </Col>
              </Row>)
    }
}

SearchRow = reduxForm({ form: 'searchForm', })(SearchRow)

const mapStateToProps = state => ({
  searchForm: _get(state, 'form.searchForm.values', {}),
  loading: _get(state, 'app.loading', {}),
  projects: _get(state, 'app.projects', []),
  languages: _get(state, 'app.languages', [])
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getProjects, updateProject, getLanguages, getCodeSearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchRow);
