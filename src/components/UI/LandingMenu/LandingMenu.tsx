import { useUIStore } from "../../../lib/zustandstores/uiStore";
import "./LandingMenu.css";

const Landing = () => {
  const { setIsInLandingMenu } = useUIStore();

  return (
    <main className="landing-page bg-img">
      <div className="menu-container fade-in">
        <hgroup>
          <h1 className="main-title">Car Showroom</h1>
          <h3 className="sub-title"> Trần Quốc An</h3>
          <h3 className="sub-title"> Nguyễn Hải Đăng</h3>
        </hgroup>
        <button className="ui-btn" onClick={() => setIsInLandingMenu(false)}>
          Start
        </button>
      </div>
    </main>
  );
};

export default Landing;
