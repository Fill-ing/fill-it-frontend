import SwiperAction from "./components/ui/swiperAction/SwiperAction";
import "./styles/global.css";

const App = () => {
  return (
    <div style={{ width: "320px" }}>
      <SwiperAction
        swiperElement={[
          <div
            onClick={() => console.log("슬라이더 클릭 이벤트")}
            style={{ backgroundColor: "#000", width: "200px", height: "100px" }}
          />,
          <div
            onClick={() => console.log("슬라이더 클릭 이벤트")}
            style={{ backgroundColor: "#000", width: "200px", height: "100px" }}
          />,
          <div
            onClick={() => console.log("슬라이더 클릭 이벤트")}
            style={{ backgroundColor: "#000", width: "200px", height: "100px" }}
          />,
        ]}
      />
    </div>
  );
};

export default App;
