import { PropsWithChildren } from "react";
import { Alert } from "antd";

// Styles
import "../../styles/global.css";

interface ErrorBoundaryProps<T> {
  data?: T | T[];
  loading?: boolean;
  error?: string | null;
}

const ErrorBoundary = <T extends unknown>({
  data,
  loading,
  error,
  children,
}: PropsWithChildren<ErrorBoundaryProps<T>>) => {
  if (data || loading) {
    return <>{children}</>;
  }

  if (error) {
    return <Alert className="alert" message={error} type="error" closable />;
  }

  return null;
};

export default ErrorBoundary;
