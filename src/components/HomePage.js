import React from 'react'
import reactImage from "./Images/react.png";
import jsImage from "./Images/js.png";
import firebaseImage from "./Images/firebase.jpg";
import profileImage from "./Images/sibainu.jpg";
const HomePage = () => {
  return (
    
    <div className="container text-center">
    <h1>田中室内装飾</h1>

    <img src={profileImage} alt="" className="profileImage" />

    <p>
      ShinCodeです普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
      ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
    </p>

    <section class="page-section" id="services">
      <div className="service">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">ECサイト</h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
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

    <section id="skill">
      <div class="text-center">
        <h1 class="title">スキル</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>React</h4>
            <p>Reactがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} />
            <h4>HTML/CSS</h4>
            <p>HTML/CSSがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={firebaseImage} alt=''/>
            <h4>Firebase</h4>
            <p>Firebaseがつかえます</p>
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