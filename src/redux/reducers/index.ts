import { combineReducers, Reducer, CombinedState, AnyAction } from "redux";

// Types
import { NewsState } from "./news";

// Reducers
import newsReducer from "./news";

const rootReducer: Reducer<
  CombinedState<{
    news: NewsState;
  }>,
  AnyAction
> = combineReducers({
  news: newsReducer,
});

export default rootReducer;
