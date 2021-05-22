import React from "react";

import { scrollDown } from "../../img/svg";

const EarnMoney = require("../../img/illustration_earn_money.jpg");
const WhaleCatchsFish = require("../../img/illustration_true_ownership.png");
const Decentralization = require("../../img/illustration_decentralization.png");
const MechanicFish = require("../../img/illustration_open_source.png");
const FishOne = require("../../img/fish-1.png");
const FishTwo = require("../../img/fish-2.png");
const FishThree = require("../../img/fish-3.png");
const FishFour = require("../../img/fish-4.png");
const FishFive = require("../../img/fish-5.png");
const DownloadAndroid = require("../../img/icon_android.png");
const DownloadIPhone = require("../../img/icon_apple.svg");
const DownloadWindows = require("../../img/icon_windows.svg");
const OurHistory = require("../../img/our-history.png");
const OurVision = require("../../img/our-vision.png");
const OurTeam = require("../../img/our-team.png");
const JuniorFish = require("../../img/fish-junior.png");
const SeniorFish = require("../../img/fish-senior.png");
const FounderImg = require("../../img/feruz.png");
const DevopsImg = require("../../img/talhasch.png");
const DesignGuru = require("../../img/design-guru.png");
const FooterYoutube = require("../../img/footer-youtube.svg");
const FooterTwitter = require("../../img/footer-twitter.svg");
const FooterTelegram = require("../../img/footer-telegram.svg");
const FooterDiscord = require("../../img/footer-discord.svg");
const LogoCircle = require("../../img/logo-circle.svg");

const LandingPage = (props: any) => {
  //   console.log("props", props);
  return (
    <div className="landing-wrapper">
      <div className="top-bg" />
      <div className="sections first-section">
        <h1>Welcome to Ecency!</h1>
        <div>
          <p>Blockchain-based social network</p>
          <p>powered by Hive</p>
        </div>
        <button
          className="get-started"
          onClick={() => props.changeState({ step: 2 })}
        >
          Get started
        </button>
        <button className="scroll-down">{scrollDown}</button>
      </div>
      <div className="sections second-section">
        <div className="part-top">
          <div className="inner">
            <img src={EarnMoney} alt="earn-money" />
            <div className="text-group visible">
              <h2>Earn money</h2>
              <p>
                Blockchain-based social network,{" "}
                <span>
                  <a href="#">join us</a>
                </span>{" "}
                and earn various digital tokens, reward others and build a
                rewarding community.
              </p>
              <a className="link-read-more" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
        <img
          className="landing-floating-image"
          src={WhaleCatchsFish}
          alt="whale"
        />

        <div className="part-bottom">
          <div className="inner">
            <div className="text-group">
              <h2>True ownership</h2>
              <p>
                Ecency is the next generation social network for Web 3.0.
                Blockchain technology gives you a real free speech experience,
                without any censorship or banning. Only you control your own
                account, content, communities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sections third-section">
        <div className="part-top">
          <div className="inner">
            <img
              className="decentralization-img"
              src={Decentralization}
              alt="decentralization"
            />
            <div className="text-group visible">
              <h2>Decentralization</h2>
              <p>
                <span>
                  <a href="#">Hive blockchain</a>
                </span>{" "}
                has many social and gaming apps that you can access with a
                single account you own. Access your social network account and
                content from any other 3rd party apps.
              </p>
            </div>
          </div>
        </div>
        <img
          className="landing-floating-image mechanic"
          src={MechanicFish}
          alt="mechanic"
        />
        <div className="part-bottom">
          <div className="inner">
            <div className="text-group">
              <h2>Open source</h2>
              <p>
                Join and be part of the building team on Web 3.0. Everything
                that we build is blockchain-based and open source. We welcome
                tech talents, developers, creators, entrepreneurs{" "}
                <span>
                  <a className="no-break" href="#">
                    feel free to join us!
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sections fourth-section">
        <div className="part-top">
          <div className="inner">
            <div className="fish-container">
              <img className="fish three" src={FishThree} alt="earn-money" />
              <img className="fish five" src={FishFive} alt="earn-money" />
              <img className="fish four" src={FishFour} alt="earn-money" />
            </div>
            <div className="fish-container">
              <img className="fish one" src={FishOne} alt="earn-money" />
              <img className="fish two" src={FishTwo} alt="earn-money" />
            </div>
            <ul>
              <li>
                <h3>92M</h3>
                <p>Posts</p>
              </li>
              <li>
                <h3>300K</h3>
                <p>Unique visitors</p>
              </li>
            </ul>
            <ul>
              <li>
                <h3>15M</h3>
                <p>Points distributed</p>
              </li>
              <li>
                <h3>25K</h3>
                <p>New users</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="part-bottom">
          <div className="inner">
            <span />
            <span />
            <div className="text-group">
              <h2>Download our application</h2>
              <p>
                Looking for a unique experience? The social network with real
                free speech experience on your mobile phone or desktop.
                Blockchain's powerful benefits now always under your fingertips.
              </p>
              <a className="windows" href="#">
                <img src={DownloadWindows} alt="" />
                Download for Windows
              </a>
              <a href="#">
                <img src={DownloadIPhone} alt="" />
                Download for IPhone
              </a>
              <a href="#">
                <img src={DownloadAndroid} alt="" />
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sections fifth-section">
        <div className="part-top">
          <div className="inner">
            <div className="text-group">
              <h2>Our History</h2>
              <p>
                <b>Ecency</b> (previously Esteem) was rebranded in 2020,
                initially starting out in 2016, founder{" "}
                <span>
                  <a href="#">@good-karma</a>
                </span>{" "}
                started implementing a mobile application that would
                revolutionize the way you interact and create, build, engage
                online.
              </p>
              <p>
                Since then we have been continuing to build for Web 3.0 and
                improve our blockchain-based social network, making sure apps
                are as accessible as possible, secure in many languages the
                world speaks.
              </p>
            </div>
            <img className="our-history" src={OurHistory} alt="Our History" />
          </div>
        </div>
        <div className="part-bottom">
          <div className="inner">
            <img className="our-vision" src={OurVision} alt="Our Vision" />

            <div className="text-group">
              <h2>Our Vision</h2>
              <p>
                We want to bring a secure and rewarding blockchain experience to
                all people. Social media without any limits and censorship,
                where only you control your own account and communities. Top
                security of your account with{" "}
                <span>
                  <a href="#">Hivesigner</a>
                </span>
                .
              </p>
              <p>
                <b>Our main principles:</b> Bring rewarding communities, true
                ownership, empowered creators, free speech into the hands of
                millions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sections sixth-section">
        <div className="part-top">
          <div className="inner">
            <div className="text-group">
              <h2>Our Team</h2>
              <ul>
                <li>
                  <img src={FounderImg} alt="Founder" />
                  <div className="text-wrapper">
                    <a href="#">@good-karma</a>
                    <p>Founder</p>
                  </div>
                </li>
                <li>
                  <img src={DevopsImg} alt="Devops" />
                  <div className="text-wrapper">
                    <a href="#">@talhasch</a>
                    <p>Devops guru</p>
                  </div>
                </li>
                <li>
                  <img src={DesignGuru} alt="Designer" />
                  <div className="text-wrapper">
                    <a href="#">@dunsky</a>
                    <p>Design guru</p>
                  </div>
                </li>
                <li className="last-element">
                  <a href="#">Community Contributors</a>
                  <a href="#">Blockchain Witnesses</a>
                </li>
              </ul>
            </div>

            <div className="image-container">
              <img className="our-team together" src={OurTeam} alt="Our Team" />
              <img
                className="our-team senior"
                src={SeniorFish}
                alt="Senior Fish"
              />
              <img
                className="our-team junior"
                src={JuniorFish}
                alt="Junior Fish"
              />
            </div>
          </div>
        </div>
        <div className="part-bottom">
          <div className="inner">
            <div className="links-and-form">
              <div className="links">
                <ul className="first-column">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <ul className="second-column">
                  <li>
                    <a href="#">Discover</a>
                  </li>
                  <li>
                    <a href="#">Sign in</a>
                  </li>
                  <li>
                    <a href="#">Communities</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
                <div className="subscribe-form">
                  <h2>Subscribe Us</h2>
                  <form>
                    <input
                      type="email"
                      placeholder="Enter your email adress"
                      required
                    />
                    <button>Send</button>
                  </form>
                  <div className="socials">
                    <p>
                      Be first to know what's happening in decentralized web.
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <img src={FooterYoutube} alt="youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={FooterTwitter} alt="twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={FooterTelegram} alt="telegram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={FooterDiscord} alt="discord" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-icon">
              <a href="#">
                <img src={LogoCircle} alt="ecency logo" />
              </a>
              <div className="copy-right">©2021 Ecency. All right reserved.</div>
            </div>
          </div>
          <span className="left-fishes" />
          <span className="main-fish" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
