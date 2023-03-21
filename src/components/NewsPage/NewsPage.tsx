import { FunctionComponent, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "antd";
import { MessageOutlined, ReloadOutlined } from "@ant-design/icons";

// Store
import { useAppSelector } from "../../redux/hooks";
import { getNewsStory } from "../../redux/actionCreators/news";

// Components
import Icon from "../Icon/Icon";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// Styles
import "../../styles/global.css";
import "./news.css";

// Utils
import { formatDate } from "../../utils/helpers";

const NewsPage: FunctionComponent = () => {
  const { data, loading, error } = useAppSelector(
    (state) => state.news.current
  );

  const { storyId } = useParams();
  const dispatch = useDispatch();

  const handleGetNewsStory = useCallback(
    () => storyId && dispatch(getNewsStory(storyId)),
    [dispatch, storyId]
  );

  useEffect(() => {
    handleGetNewsStory();
  }, [handleGetNewsStory]);

  return (
    <main>
      <div className="container container--story">
        <Link to="/">
          <Button type="primary">Go Back</Button>
        </Link>
        <ErrorBoundary data={data} loading={loading} error={error}>
          <Card
            className="card"
            loading={loading}
            extra={<a href={data?.url}>Read more</a>}
            actions={[
              <Icon
                icon={MessageOutlined}
                text={`${data?.descendants}`}
                key="list-vertical-message"
              />,
              <ReloadOutlined onClick={handleGetNewsStory} />,
            ]}
          >
            <Card.Meta
              title={data && data.title}
              description={data && `${data.by} | ${formatDate(data.time)}`}
            />
            <div className="card__no-data">
              {data?.text ? data.text : <span>No text available</span>}
            </div>
          </Card>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default NewsPage;
