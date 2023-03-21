import { ActionType, Action } from "../actionTypes/news";
import { NewsStory } from "../../types";

export interface NewsState {
  data: NewsStory[] | undefined;
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: undefined,
  loading: false,
  error: null,
};

const newsReducer = (
  state: NewsState = initialState,
  action: Action
): NewsState => {
  switch (action.type) {
    case ActionType.GET_ALL_NEWS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionType.GET_ALL_NEWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case ActionType.GET_ALL_NEWS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
