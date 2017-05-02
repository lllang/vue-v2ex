import {
  CHANGE_INDEX,
  CHANGE_LIST,
  DEL_LIST,
} from './types';

export default {
  [CHANGE_INDEX](state, index) {
    state.selectTab = index;
  },
  [CHANGE_LIST](state, list) {
    state.contentList = list;
  },
  [DEL_LIST](state, index) {
    state.contentList.splice(index, 1);
  },
};
