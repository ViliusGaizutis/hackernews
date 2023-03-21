import { NewsStory } from "../../types";

export enum ActionType {
  GET_ALL_NEWS_PENDING = "GET_ALL_NEWS_PENDING",
  GET_ALL_NEWS_SUCCESS = "GET_ALL_NEWS_SUCCESS",
  GET_ALL_NEWS_FAIL = "GET_ALL_NEWS_FAIL",
}

interface ActionPending {
  type: ActionType.GET_ALL_NEWS_PENDING;
}

interface ActionSuccess {
  type: ActionType.GET_ALL_NEWS_SUCCESS;
  payload: NewsStory[];
}

interface ActionFail {
  type: ActionType.GET_ALL_NEWS_FAIL;
  payload: string;
}

export type Action = ActionPending | ActionSuccess | ActionFail;
