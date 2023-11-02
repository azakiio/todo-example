import { ReactNode } from "react";

export default function Footer({ id, children, className }: Props) {
  return (
    <div
      id={id}
      className={`font-bold underline text-3xl my-4 ${className}`}
    >
      {children}
    </div>
  );
}

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};
