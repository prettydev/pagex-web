import {
    PUBLISH_CONTRIBUTION,
    PUBLISH_WORK,
    GET_ALL_USER_WORKS,
    GET_ALL_USER_CONTRIBUTIONS,
    GET_ALL_CONTENT
} from '../ActionType';
import axios from "axios/index";


export function PublishWork(data, token, dispatch) {
    axios.post(process.env.REACT_APP_API_URL + `/api/v1/content/work/new`,
        data, {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + token,
        }
    })
        .then(results => {
            dispatch({
                type: PUBLISH_WORK,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: PUBLISH_WORK,
                payload: false,
            })
        });
}

export function PublishWorkAction(data, token) {
    return async function (dispatch) {
        const dataHttp = new FormData()
        dataHttp.append('contentUserId', data.userId);
        dataHttp.append('contentTitle', data.title);
        dataHttp.append('contentDescription', data.description);
        dataHttp.append('contentArtist', data.author);
        
        if (data.photo !== "") 
            await dataHttp.append('file', data.photo, data.photo.name)
        await PublishWork(dataHttp, token, dispatch)
    }

};

function getWorksByUser(page, limit, userId, dispatch) {

    axios.get(process.env.REACT_APP_API_URL + `/api/v1/content/work/all/limit/${limit}/page/${page}/user/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            dispatch({
                type: GET_ALL_USER_WORKS,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_USER_WORKS,
                payload: false,
            })
        });
}

export function getWorksByUserAction(page, limit, userId) {

    return async function (dispatch) {
        await getWorksByUser(page, limit, userId, dispatch)
    }

};

export function PublishContribution(data, token, dispatch) {
    axios.post(process.env.REACT_APP_API_URL + `/api/v1/content/contribution/new`,
        data, {
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + token,
        }
    })
        .then(results => {
            dispatch({
                type: PUBLISH_CONTRIBUTION,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: PUBLISH_CONTRIBUTION,
                payload: false,
            })
        });
}

export function PublishContributionAction(data, token) {

    return async function (dispatch) {
        const dataHttp = new FormData()
        dataHttp.append('contentUserId', data.userId);
        dataHttp.append('contentTag', data.tag);
        dataHttp.append('contentDescription', data.description);
        
        if (data.photo !== "") 
            await dataHttp.append('file', data.photo, data.photo.name)
        await PublishContribution(dataHttp, token, dispatch)
    }
};

function getContributionsByUser(page, limit, userId, dispatch) {

    axios.get(process.env.REACT_APP_API_URL + `/api/v1/content/contribution/all/limit/${limit}/page/${page}/user/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            dispatch({
                type: GET_ALL_USER_CONTRIBUTIONS,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_USER_CONTRIBUTIONS,
                payload: false,
            })
        });
}

export function getContributionByUserAction(page, limit, userId) {

    return async function (dispatch) {
        await getContributionsByUser(page, limit, userId, dispatch)
    }

};


function getContents(page, limit, dispatch) {

    axios.get(process.env.REACT_APP_API_URL + `/api/v1/content/all/limit/${limit}/page/${page}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(results => {
            dispatch({
                type: GET_ALL_CONTENT,
                payload: results.data,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_CONTENT,
                payload: false,
            })
        });
}

export function getContentsAction(page, limit) {

    return async function (dispatch) {
        await getContents(page, limit, dispatch)
    }

};