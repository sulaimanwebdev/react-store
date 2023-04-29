import { Link } from "react-router-dom"
import { ContentContainer } from "../components/ContentContainer";
import SideBar from "../components/SideBar";

const Shop = () => {
  return (
    <>
      <ContentContainer>
        
        <div className="grid grid-cols-[1fr,230px]">

          <div className="h-screen min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] overflow-y-auto">

          </div>

          <div className="px-2 py-4 0 h-screen min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] overflow-y-auto">
            <SideBar/>
          </div>
        </div>


      </ContentContainer>
    </>
  );
};

export { Shop };
