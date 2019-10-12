//  固定写法  用户管理 暴露出去
export const state = () => {

  return {
    userInfo: {
      token: "",
      user: {},
    },
  }
}

// 存放的是同步修改state的方法
export const mutations = {
  // mutations下的值必须是一个函数，函数中会有一个固定的参数state，第二个参数是永不调用方法时候传进来
  // data是登陆成功之后返回的的对象数据
  setUserInfo(state, data) {
    state.userInfo = data
  },

  //   清除用户数据
  cleanUserInfo(state, info) {
    if (process.browser) {
      localStorage.removeItem("userInfo");
    }
    state.userInfo = {}
  }
}


// 存放的是异步修改的state的方法
export const actions = {}
