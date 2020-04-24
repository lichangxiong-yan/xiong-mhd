// // 拆分出来的 城市相关的 仓库子模块
// 取 看看 city 有没有值
const city = window.sessionStorage.getItem('city')

const state = {
  // 判断city有没有值 有值就解析出来  没有就null
  curCity: city ? JSON.parse(city) : null // 当前选择的城市
}

const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}
const mutations = {
  SET_CURCITY (state, payload) {
    // 修改掉仓库中的 curCity 数据
    state.curCity = payload
    // 做一下本地的存储
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}

export default {
  namespaced: true, // 命名空间

  state,

  getters,
  // 修改
  mutations
}
