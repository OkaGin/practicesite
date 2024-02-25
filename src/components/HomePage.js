import React from 'react'
import reactImage from "./Images/react.png";
import jsImage from "./Images/js.png";
import firebaseImage from "./Images/firebase.jpg";
import bordImage from "./Images/bord.png";
import washitsuImage from "./Images/room_washitsu.png";
import keiyakuImage from "./Images/keiyaku_contract.png";

import kaisyaImage from "./Images/building_kaisya.png";
import contactImage from "./Images/medical_contact_finger.png";
import mappImage from "./Images/smartphone_map_app_man.png";
import { Navbar,Nav } from 'react-bootstrap'
import {motion} from "framer-motion";


const HomePage = () => {
  return (

    <motion.div className="container text-center"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.8,delay:0.8}}>
      <h1>タナカ室内装飾</h1>

      <img src={bordImage} alt="" className="bordImage" />

      <p>
        内装ならお任せあれ！
      </p>

      <section class="page-section" id="services">
        <div class="text-center">
          <h1 class="title">メニュー</h1>
          <div class="row text-center">
            <Nav.Link href="/CompanyPage">
              {/* <div class="col-md-4 services">
                <img src={kaisyaImage} />
                <h4>会社概要</h4>
              </div> */}
              </Nav.Link>
              <Nav.Link href="/WorkPage">
              <div class="col-md-4 services">
                <img src={keiyakuImage} />
                <h4>取扱業務</h4>
              </div>
              </Nav.Link>
              <Nav.Link href="/AccessPage">
              <div class="col-md-4 services">
                <img src={mappImage} alt='' />
                <h4>アクセス</h4>
              </div>
              </Nav.Link>
              <Nav.Link href="/ContactPage">
              <div class="col-md-4 services">
                <img src={contactImage} alt='' />
                <h4>お問い合わせ</h4>
              </div>
              </Nav.Link>
          </div>
        </div>

      </section>
    </motion.div>

  )
}

export default HomePage