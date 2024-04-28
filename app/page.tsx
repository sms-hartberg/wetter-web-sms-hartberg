import styles from "./main.module.css";
import SearchElement from "./components/search_element";
import Background from "./components/bg_element";
import Logo from "./components/logo";

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
      <div className="z-[3]">
        <Logo/>
      </div>
      <Background/>
      <div className={"absolute flex flex-col justify-center items-center align-middle w-[100vw] h-[100vh] z-[2] overflow-hidden"}>
        <SearchElement/>
      </div>
    </main>
  );
}