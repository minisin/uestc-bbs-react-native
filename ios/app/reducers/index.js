import {
  INVALIDATE_TOPIC,
  REQUEST_TOPIC,
  RECEIVE_TOPIC
} from '../constants/ActionTypes';

export default function topic(state = {
  isFetching: false,
  didInvalidate: false,
  topic: {
    list: [],
    has_next: false
  }
}, action) {
  switch (action.type) {
    case INVALIDATE_TOPIC:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_TOPIC:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_TOPIC:
      if (action.topic.page !== 1) {
        action.topic.list = state.topic.list.concat(action.topic.list);
      }

      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        topic: action.topic
      });
    default:
      return state;
  }
}