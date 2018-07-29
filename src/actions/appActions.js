import axios from 'axios';
import _get from 'lodash/get';
import * as TYPES from './appActionTypes';
import { BASE_URL } from '../constants';

export function updateToken(value) {
	return {
		type: TYPES.AUTH_TOKEN,
		value
	}
}

export function loading(value) {
	return {
		type: TYPES.LOADING,
		value
	}
}

export function updateError(value) {
	return {
		type: TYPES.LOADING_ERROR,
		value
	}
}

export function updateProjects(value) {
	return {
		type: TYPES.PROJECTS,
		value
	}
}

export function updateProject(value) {
	return {
		type: TYPES.PROJECT,
		value
	}
}

export function updateLanguages(value) {
	return {
		type: TYPES.LANGUAGES,
		value
	}
}

export function updateCode(value) {
	return {
		type: TYPES.SEARCH_CODE,
		value
	}
}

export function getProjects(language) {
	return (dispatch, getState) => {
		dispatch(loading(true));
		dispatch(updateCode());
		dispatch(updateProjects());
		dispatch(updateLanguages());
		return axios({
			url: `${BASE_URL}/search/repositories?q=${language} in:name`,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		}).then((response) => {
			dispatch(updateProjects(_get(response, 'data.items', [])));
		}).catch((error) => {
			dispatch(updateError(true));
		}).then(function () {
			dispatch(loading(false));
		})
	}
};

export function getLanguages(url) {
	return (dispatch, getState) => {
		dispatch(loading(true));
		dispatch(updateLanguages());
		return axios({
			url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		}).then((response) => {
			const languages = _get(response, 'data', {});
			dispatch(updateLanguages(Object.keys(languages)));
		}).catch((error) => {
			dispatch(updateError(true));
		}).then(function () {
			dispatch(loading(false));
		})
	}
};

export function getCodeSearch() {
	return (dispatch, getState) => {
		dispatch(loading(true));
		dispatch(updateCode());
		const params = _get(getState(), 'form.searchForm.values');
		return axios({
			url: `${BASE_URL}/search/code?q=${params.key} in:file+language:${params.language}+repo:${params.projectName}`,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		}).then((response) => {
			dispatch(updateCode(_get(response, 'data.items', [])));
		}).catch((error) => {
			dispatch(updateError(true));
		}).then(function () {
			dispatch(loading(false));
		})
	}
};
