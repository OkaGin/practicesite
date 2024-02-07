import React from 'react'
import reactImage from "./Images/react.png";
import jsImage from "./Images/js.png";
import firebaseImage from "./Images/firebase.jpg";
import bordImage from "./Images/bord.png";
import washitsuImage from "./Images/room_washitsu.png";
import bathImage from "./Images/room_unit_bath.png";
import kabegamiImage from "./Images/kabegami_haru.png";
import koujiImage from "./Images/animal_chara_mogura_kouji.png";
import tenjouImage from "./Images/tenjou.jpg";
const WorkPage = () => {
  return (
    <div className="container text-center">
      <section class="page-section" id="services">
        <div class="text-center">
          <h1 class="title">取扱業務</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={tenjouImage} />
              <h4>天井・床仕上げ工事</h4>
            </div>
            <div class="col-md-4 services">
              <img src={kabegamiImage} />
              <h4>壁張り工事</h4>
            </div>
            <div class="col-md-4 services">
              <img src={washitsuImage} alt='' />
              <h4>たたみ・ふすま工事</h4>
            </div>
            <div class="col-md-4 services">
              <img src={bathImage} alt='' />
              <h4>ユニットバス工事</h4>
            </div>
            <div class="col-md-4 services">
              <img src={koujiImage} alt='' />
              <h4>その他内装工事</h4>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default WorkPage