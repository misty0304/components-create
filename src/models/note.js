
export default {

  namespace: 'note',

  state: {
    foo: 'open',
    showText: false,
  },

  subscriptions: {

  },

  effects: {
    *query({ payload }, { call, put }) {
      yield put({
        type: 'querySuccess',
        payload: {
          showText: true,
        },
      });
    },
  },

  reducers: {
    // 使用服务器数据返回
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
  },

};
