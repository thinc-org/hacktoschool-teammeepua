import { useState } from "react";
import { Button } from "../Button";
import LeftArrow from "../SVGIcon/LeftArrow";
import RightArrow from "../SVGIcon/RightArrow";

export default function PageSelector({ pageCount }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const setPage = (page) => {
    if (page < 1) setCurrentPage(1);
    else if (page > pageCount) setCurrentPage(pageCount);
    else setCurrentPage(page);
  };

  return (
    <div className="flex flex-row gap-8 p-6">
      <PageButton onClick={() => setPage(currentPage - 1)}>
        <LeftArrow />
      </PageButton>

      {pages.map((i) => (
        <PageButton
          key={i}
          selected={i === currentPage}
          onClick={() => setPage(i)}
        >
          {i}
        </PageButton>
      ))}

      <PageButton onClick={() => setPage(currentPage + 1)}>
        <RightArrow />
      </PageButton>
    </div>
  );
}

const pageButtonHandler = (e) => {};

const PageButton = (props) => {
  if (props.selected) {
    return (
      <div
        className="rounded-full border-[3px] border-cyan-700 bg-cyan-700 w-11 h-11 flex items-center justify-center font-bold text-base text-white"
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  } else
    return (
      <div
        className="rounded-full border-[3px] border-cyan-700 w-11 h-11 flex items-center justify-center font-bold text-base text-cyan-700 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
};
