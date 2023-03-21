export const formatDate = (timestamp: number): string =>
  new Date(timestamp * 1000).toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
