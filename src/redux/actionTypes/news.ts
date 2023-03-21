export enum ActionType {
  GET_ALL_NEWS_PENDING = "GET_ALL_NEWS_PENDING",
  GET_ALL_NEWS_SUCCESS = "GET_ALL_NEWS_SUCCESS",
  GET_ALL_NEWS_FAIL = "GET_ALL_NEWS_FAIL",

  GET_NEWS_STORY_PENDING = "GET_NEWS_STORY_PENDING",
  GET_NEWS_STORY_SUCCESS = "GET_NEWS_STORY_SUCCESS",
  GET_NEWS_STORY_FAIL = "GET_NEWS_STORY_FAIL",
}

interface ActionPending {
  type: ActionType.GET_ALL_NEWS_PENDING | ActionType.GET_NEWS_STORY_PENDING;
}

interface ActionSuccess<T> {
  type: ActionType.GET_ALL_NEWS_SUCCESS | ActionType.GET_NEWS_STORY_SUCCESS;
  payload: T;
}

interface ActionFail {
  type: ActionType.GET_ALL_NEWS_FAIL | ActionType.GET_NEWS_STORY_FAIL;
  payload: string;
}

export type Action<T> = ActionPending | ActionSuccess<T> | ActionFail;
