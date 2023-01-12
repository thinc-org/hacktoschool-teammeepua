import { useRouter } from "next/router";
import { LeftArrow } from "../SVGIcon/LeftArrow";
import { RightArrow } from "../SVGIcon/RightArrow";

export const PageSelector = ({ pageCount, currentPage }) => {
  const router = useRouter();

  let pages = generatePages(pageCount, currentPage, 7);

  const setPage = (page) => {
    let nextPage = page;

    if (page < 1) nextPage = 1;
    else if (page > pageCount) nextPage = pageCount;

    router.push(`/browse/${nextPage}`);
  };

  return (
    <div className="flex flex-row gap-8 p-6">
      <PageButton onClick={() => setPage(currentPage - 1)}>
        <LeftArrow />
      </PageButton>

      {pages.map((e, i) =>
        e > 0 ? (
          <PageButton
            key={i}
            selected={e === currentPage}
            onClick={() => setPage(e)}
          >
            {e}
          </PageButton>
        ) : (
          <div
            className="w-11 h-11 flex items-end justify-center text-xl tracking-widest"
            key={i}
          >
            ...
          </div>
        )
      )}

      <PageButton onClick={() => setPage(currentPage + 1)}>
        <RightArrow />
      </PageButton>
    </div>
  );
};

const generatePages = (pageCount, currentPage, limit) => {
  let offset = 0;

  if (pageCount <= limit)
    return Array.from({ length: pageCount }, (_, i) => i + 1);

  currentPage = currentPage < 4 ? 4 : currentPage;
  currentPage = currentPage > pageCount - 3 ? pageCount - 3 : currentPage;
  offset = currentPage - 3;

  let pages = Array.from({ length: limit }, (_, i) => i + offset);

  // Place ... at the beginning
  pages[0] = 1;
  if (pages[1] != 2) pages[1] = 0;

  // Place ... at the end
  pages[limit - 1] = pageCount;
  if (pages[limit - 2] != pageCount - 1) pages[limit - 2] = 0;

  return pages;
};

const PageButton = (props) => {
  if (props.selected) {
    return (
      <button
        className="rounded-full border-[3px] border-cyan-700 bg-cyan-700 w-11 h-11 flex items-center justify-center font-bold text-base text-white"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  } else
    return (
      <button
        className="rounded-full border-[3px] border-cyan-700 w-11 h-11 flex items-center justify-center font-bold text-base text-cyan-700 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white hover:ease-linear transition"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
};
