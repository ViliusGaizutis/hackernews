import axios from "axios";
import { Dispatch } from "redux";

import type { NewsAllResponse, NewsStory } from "../../types";
import { ActionType, Action } from "../actionTypes/news";
import { BASE_URL } from "../../constants";

export const getAllNews =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    const stories: NewsStory[] = [];

    dispatch({ type: ActionType.GET_ALL_NEWS_PENDING });

    try {
      const response = await axios.get<NewsAllResponse>(
        `${BASE_URL}/newstories.json?print=pretty&orderBy="$priority"&limitToFirst=100`
      );

      await Promise.all(
        (response.data as unknown as number[]).map(async (storyId: number) => {
          const res = await axios.get<NewsStory>(
            `${BASE_URL}/item/${storyId}.json?print=pretty`
          );
          stories.push(res.data);
        })
      );

      dispatch({ type: ActionType.GET_ALL_NEWS_SUCCESS, payload: stories });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.GET_ALL_NEWS_FAIL,
          payload: error.message,
        });
      }
    }
  };
