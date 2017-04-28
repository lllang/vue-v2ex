import {
  CHANGE_INDEX,
  CHANGE_LIST,
} from './types';

export default {
  [CHANGE_INDEX](state, index) {
    state.selectTab = index;
  },
  [CHANGE_LIST](state, list) {
    state.contentList = list;
  },
};
