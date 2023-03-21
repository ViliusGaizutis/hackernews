import { FunctionComponent, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, List, Divider } from "antd";
import { StarOutlined } from "@ant-design/icons";

// Store
import { useAppSelector } from "../../redux/hooks";
import { getAllNews } from "../../redux/actionCreators/news";

// Components
import Icon from "../Icon/Icon";

// Styles
import "../../styles/global.css";
import "./home.css";

// Utils
import { formatDate } from "../../utils/helpers";

const HomePage: FunctionComponent = () => {
  const { data, loading } = useAppSelector((state) => state.news.list);

  const dispatch = useDispatch();

  const handleGetAllNews = useCallback(
    () => dispatch(getAllNews()),
    [dispatch]
  );

  useEffect(() => {
    handleGetAllNews();
  }, [handleGetAllNews]);

  useEffect(() => {
    const interval = setInterval(() => handleGetAllNews(), 60000);
    return () => clearInterval(interval);
  }, [handleGetAllNews]);

  return (
    <main>
      <div className="container">
        <Button type="primary" onClick={handleGetAllNews}>
          Refresh
        </Button>
        <List
          loading={loading}
          itemLayout="vertical"
          size="large"
          className="list"
          pagination={{
            pageSize: 10,
          }}
          dataSource={data}
          renderItem={(item) => {
            const slug = `stories/${item.id}`;

            return (
              <>
                <Link to={slug}>
                  <List.Item
                    key={item.id}
                    actions={[
                      <Icon
                        icon={StarOutlined}
                        text={`${item.score}`}
                        key="list-vertical-star-o"
                      />,
                    ]}
                  >
                    <List.Item.Meta
                      title={item.title}
                      description={`${item.by} | ${formatDate(item.time)}`}
                    />
                  </List.Item>
                </Link>
                <Divider />
              </>
            );
          }}
        />
      </div>
    </main>
  );
};

export default HomePage;
