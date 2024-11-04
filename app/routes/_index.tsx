import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "ekkx" },
    { name: "description", content: "ekkx's website." },
  ];
};

export default function Index() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Link to="https://github.com/ekkx" target="_blank" rel="noreferrer">
        ekkx
      </Link>
    </div>
  );
}
