import axios from '../../node_modules/axios';

// 1 - HTTP Request & Response 관련 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2 - API 함수 정리
async function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json')
    try {
        return await axios.get(`${config.baseUrl}news/1.json`);
    } catch (error) {
        console.log(error);        
    }
}

async function fetchAskList() {
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}user/${userName}.json`);
    } catch (error) {
        console.log(error)
    }
}

async function fetchItemInfo(itemId) {
    try {
        return await axios.get(`${config.baseUrl}item/${itemId}.json`);
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}
