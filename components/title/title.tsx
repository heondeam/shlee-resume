"use client";

import H2 from "../typography/h2";
import Neon from "../typography/neon";

type TitleProps = {
  title: string;
  idx: string;
};

export default function Title({ title, idx }: TitleProps) {
  return (
    <div className="flex items-center gap-2">
      <Neon>{idx}.</Neon>
      <H2 className="text-white">{title}</H2>
    </div>
  );
}
