import React from "react";

export default function FooterSection({ title, items }) {
  return (
    <div>
      <h2 className="text-[18px] font-bold mb-4">{title}</h2>
      <ul className="text-[16px] text-[#7a7a7a] flex flex-col gap-4 ">
        {items.map((name, index) => (
          <li key={index} >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
