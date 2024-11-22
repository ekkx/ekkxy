import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "ekkx" },
    { name: "description", content: "ekkx's website." },
  ];
};

export default function Index() {
  return (
    <div className="dark">
      <Hero />
    </div>
  );
}
