import { useNavigate, useSearchParams } from "react-router-dom";

const useSearchAlbums = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const term = searchParams.get("term") || "All";

  const onSearch = (value: string) => {
    if (value) {
      navigate(`/search?term=${value}`);
    } else {
      navigate(`/search`);
    }
  };

  return {
    term,
    onSearch,
  };
};

export default useSearchAlbums;
