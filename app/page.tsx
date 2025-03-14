import LinkList from "../components/LinkList.js";
import LinkItem from "../components/LinkItem.js";
import Divider from "../components/Divider.js";
import { autogestion, apuntes, horarios, grupos } from "../data/link.js";

export default function Home() {
  return (
    <div className="text-center items-center justify-center min-h-screen">
      <div className="mt-15">
        <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl mb-1">
          UTN Mendoza
        </h1>
        <h2 className="text-3xl font-bold tracking-tight text-blue-500 mb-5">
          Links Útiles
        </h2>
      </div>
      <LinkItem text={autogestion.text} href={autogestion.href}></LinkItem>
      <Divider text="Apuntes"></Divider>
      <LinkList linkitems={apuntes} />
      <Divider text="Horarios"></Divider>
      <LinkList linkitems={horarios} />
      <Divider text="Grupos"></Divider>
      <LinkList linkitems={grupos} />
    </div>
  );
}
