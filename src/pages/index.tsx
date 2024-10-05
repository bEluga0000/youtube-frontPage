import AppBar from "../components/Appbar";
import MainComponent from "../components/Main";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
      <div>
        <AppBar />
        <div className="pt-16">
          <MainComponent />
        </div>
      </div>
  );
}
