import { ReactNode } from "react";

export default function Header({ id, children, className }: Props) {
  return (
    <h1
      id={id}
      className={`font-bold underline text-3xl my-4 ${className}`}
    >
      {children}
    </h1>
  );
}

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};
