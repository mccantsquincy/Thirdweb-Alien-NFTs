import React, { useEffect, useState } from "react";
import "./Main.css";
import openseaLogo from "../assets/opensea.png";
import githubLogo from "../assets/github.png";
import moreIcon from "../assets/more.png";

function Main({ selectedAlien, alienListData }) {
  const [activeAlien, setActiveAlien] = useState(alienListData[0]);

  useEffect(() => {
    setActiveAlien(alienListData[selectedAlien]);
  }, [alienListData, selectedAlien]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="alienHighlight">
          <div className="alienContainer">
            <img
              className="selectedAlien"
              src={activeAlien.image_url}
              alt="Alien-img"
            />
          </div>
        </div>

        <div className="alienDetails">
          <div className="title">
            <h1>{activeAlien.name}</h1>
            <span className="itemNumber">*#{activeAlien.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerDetails">
              <div className="ownerImgContainer">
                <img
                  className="avatarImg"
                  src={
                    "https://i.seadn.io/gae/3jvd62Awl48Cq6kkHWxzEcTJX0rfGyaRJOX2qK20LRbbD-vMYmR6iCCNy8qZ-HXevzFTUn5aHQx7I453eOVr3Fkwcw7kl646HPDwiQ?w=500&auto=format"
                  }
                  alt=""
                />
                <div className="ownerNameAndHandle">
                <div className="address">
                  0x8F32EA7f3E3286dFe23012FD6bfC0556778BCF91
                </div>
                <div className="ownerHandle">@mccantsquincy</div>
              </div>
              </div>
              
              <div className="icons">
                <div className="ownerLink">
                  <a href="https://testnets.opensea.io/0x8F32EA7f3E3286dFe23012FD6bfC0556778BCF91" target="_blank">
                    <img clasName="icon" src={openseaLogo} alt="" />
                  </a>
                </div>
                <div className="ownerLink">
                  <a href="https://github.com/mccantsquincy" target="_blank">
                   <img clasName="icon" src={githubLogo} alt="" /> 
                  </a>  
                </div>
                <div className="ownerLink nodrop">
                  <img clasName="icon" src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
