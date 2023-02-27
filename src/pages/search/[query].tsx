import Articles from "@/components/main/Articles";
import { useSearchQuery } from "@/utils/api";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Search() {
  const router = useRouter();
  let { query } = router.query;
  const { data, isLoading, error, refetch } =
    useSearchQuery(query);
  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query]);
  if (error) {
    console.log(query, error, data);
  }
  return (
    <div>
      <p>{query} results:</p>
      <Articles
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default Search;
