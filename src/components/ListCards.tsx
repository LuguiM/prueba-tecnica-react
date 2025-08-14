import { useState, useEffect } from "react";
import { CardInfo } from "./CardInfo";
import { Pagination } from "@mui/material";

interface ListCardsProps {
  titleList?: string;
  loading?: string;
  error?: string;
  results?: Array<any>;
  total_pages?: number;
  page?: number;
  onNewPage?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const ListCards: React.FC<ListCardsProps> = ({
  titleList,
  loading,
  error,
  results = [],
  total_pages = 0,
  page = 1,
  onNewPage,
}) => {
  const [totalPage, setTotalPage] = useState<number>(total_pages);

  useEffect(() => {
    setTotalPage(total_pages >= 500 ? 500 : total_pages);
  }, [total_pages]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Ha orrido un error</p>}

      {results && (
        <div className="flex flex-col gap-6">
          <h2 className="text-h6">{titleList}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 ">
            {results.map((item: any) => (
              <CardInfo
                key={item.id}
                id={item.id}
                image={item.poster_path}
                gender="d"
                title={item.name || item.original_title}
                year={item.first_air_date || item.release_date}
                size="large"
              />
            ))}
          </div>

          <Pagination
            className="!text-white mx-auto"
            count={totalPage}
            page={page}
            color="primary"
            onChange={onNewPage}
            showFirstButton
            showLastButton
          />
        </div>
      )}
    </>
  );
};
