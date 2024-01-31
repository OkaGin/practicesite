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

const HomePage = () => {
  return (
    
    <div className="container text-center">
    <h1>田中室内装飾</h1>

    <img src={bordImage} alt="" className="bordImage" />

    <p>
      内装ならお任せあれ！
    </p>

    <section class="page-section" id="services">
      {/* <div className="service">
        <div class="text-center">
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">レスポンシブサイト</h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">ウェブセキュリティ</h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="skill"> */}
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
            <img src={washitsuImage} alt=''/>
            <h4>たたみ・ふすま工事</h4>
          </div>
          <div class="col-md-4 services">
            <img src={bathImage} alt=''/>
            <h4>ユニットバス工事</h4>
          </div>
          <div class="col-md-4 services">
            <img src={koujiImage} alt=''/>
            <h4>その他内装工事</h4>
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          スキル一覧
        </button>
      </div>
    </section>
  </div>
    /* <div class="container py-4" id="works">
        <h2>Works</h2>
        <p>This is sample description.This is sample description.This is sample description.This is sample description.This is sample description.This is sample description.</p>
        <div class="card-deck">
            <div class="card">
              <img src="img/sample4.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Work1</h5>
                <p class="card-text">This is sample description.This is sample description.This is sample description.This is sample description.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img src="img/sample4.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Work2</h5>
                <p class="card-text">This is sample description.This is sample description.This is sample description.This is sample description.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img src="img/sample4.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Work3</h5>
                <p class="card-text">This is sample description.This is sample description.This is sample description.This is sample description.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
        </div> */
    // </div>

  )
}

export default HomePage