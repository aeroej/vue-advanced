import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo
} from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response
  //     })
  //     .catch(error => console.log(error));
  // },

  // async
  async FETCH_NEWS(context) {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data)
      return response;
  },

  async FETCH_ASK(context) {
    const response = await fetchAskList();
    context.commit('SET_ASK', response.data);
    return response;
  },

  // { commit } = context.commit
  // { data } = response.data
  async FETCH_JOBS({ commit }){
    const { data } = await fetchJobsList();
    commit('SET_JOBS', data)
    return { data };
  },

  async FETCH_USER({ commit }, name) {
    const { data } = await fetchUserInfo(name);
    commit ('SET_USER', data);
    return { data };
  },

  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_LIST({ commit }, pageName){
    return fetchList(pageName)
      .then(({ data }) => {
        commit('SET_LIST', data)
      })
      .catch(error => console.log(error))
  },
}
