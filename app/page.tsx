import styles from "./main.module.css";
import SearchElement from "./components/search_element";
import Background from "./components/bg_element";
import Logo from "./components/logo";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="z-[2]">
        <Logo/>
      </div>
      <div className="absolute flex h-screen w-screen flex-col justify-center items-center">      
        <div className={"flex flex-col justify-center items-center align-middle overflow-hidden h-full"}>
          <SearchElement/>
        </div>
        <Footer/>
      </div>
      <Background/>
    </main>
  );
}