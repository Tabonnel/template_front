import React, { useState } from "react";

interface Props {
  menuContent: React.ReactNode;
  triggerContent: React.ReactNode;
}

export default function Dropdown({ triggerContent, menuContent }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <button className="hover:bg-primary" onClick={toggle}>
          {triggerContent}
        </button>
        <div
          className={`absolute top-8 z-30  flex flex-col p-4 bg-secondary rounded-md ${transClass}`}
        >
          {menuContent}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
