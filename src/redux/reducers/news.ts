import { ActionType, Action } from "../actionTypes/news";
import { NewsStory } from "../../types";

interface NewsResponse<T> {
  data: T | undefined;
  loading: boolean;
  error: string | null;
}

export interface NewsState {
  list: NewsResponse<NewsStory[]>;
  current: NewsResponse<NewsStory>;
}

const initialState = {
  list: {
    data: undefined,
    loading: false,
    error: null,
  },
  current: {
    data: undefined,
    loading: false,
    error: null,
  },
};

const newsReducer = (
  state: NewsState = initialState,
  action: Action<NewsStory & NewsStory[]>
): NewsState => {
  switch (action.type) {
    case ActionType.GET_ALL_NEWS_PENDING: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    }
    case ActionType.GET_ALL_NEWS_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: action.payload,
        },
      };
    }
    case ActionType.GET_ALL_NEWS_FAIL: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionType.GET_NEWS_STORY_PENDING: {
      return {
        ...state,
        current: {
          ...state.current,
          loading: true,
        },
      };
    }
    case ActionType.GET_NEWS_STORY_SUCCESS: {
      return {
        ...state,
        current: {
          ...state.current,
          loading: false,
          data: action.payload,
        },
      };
    }
    case ActionType.GET_NEWS_STORY_FAIL: {
      return {
        ...state,
        current: {
          ...state.current,
          loading: false,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default newsReducer;
