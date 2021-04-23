import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home =()=>{
    return(
        <div className="container-fluid" >
        <div className="row home">
          <div className="col">
            <div className="header">
              <div className="textheder d-flex">
                
                <div class="wrapper">
          {/* <MetaTags>
            <title>ابراهیم حدادی</title>
            <meta id="meta-description" name="description" content="Some description." />
            <meta id="og-title" property="og:title" content="MyApp" />
            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
          </MetaTags> */}
          <div class="content"> <h3 className="texth">ابراهیم حدادی</h3> </div>
        </div>
              </div>
            </div>
         
            <div className="d-flex justify-content-center align-items-center">
              <img src={require('../img/profile1.JPG')} className="profileimg" />
            </div>
            <div className="body">
              <div className="personal">
                <h5 className="developer">توسعه دهنده وب و اپلیکیشن با ریکت و ریکت نیتیو </h5>
                <div className="line"></div>
  
                <h3 className="textabu">توانایی ها</h3>
                 <div className="container">
                <div className="abiulty row justify-content-center">
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">REACTNATIVE</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={8}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">REACT JS</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={7}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">REDUX</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={5}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">HTML</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={8}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">CSS</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={7}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">JAVASCRIPT</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={7}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">BOOTSTRAP</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={7}
                  />
                  </div>
                  <div className="backgr col col-12 col-sm-6 col-md-4">
                    <h5 className="textab">ASP.NET MVC</h5>
                    <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span><i className="fa fa-star"></i></span>}
                    starCount={10}
                    value={2}
                  />
                  </div>
                </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="maineducation">
                <h3 className="education">تحصیلات</h3>
                <p className="textedu">فارغ التحصیل رشته مهندسی فناوری اطلاعات از دانشگاه پیام نور ساوه </p>
              </div>
              <div className="line"></div>
              <div className="maineducation">
                <h3 className="education">دوره ها</h3>
                <p className="pargrahp">توسعه و طراحی اپلکیشن موبایل با ریکت نیتیو</p>
                <p className="pargrahp">دوره طراحی وب در مجتمع فنی تهران </p>
              </div>
              <div className="line"></div>
              <div className="favor">
                <h3 className="textfavor">درباره من</h3>
                <p className="textfavor">علاقه مند به توسعه و طراحی اپلکیشن موبایل و تکنولوژی های جدید و به روز دنیا استفاده از متدهایی جدید برنامه ریزی</p>
              </div>
              <div className="line"></div>
              {/* project reactnative */}
              <h5 className="d-flex justify-content-center m-3">پروژه ریکت نیتیو</h5>
              <div className="row justify-content-center bg-whitesmoke">
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/40.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/41.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/42.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/43.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/44.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/45.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/46.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/49.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/47.png')} className="imageproject" />
                </div>
                <div className="col col-12 col-sm-6 col-md-4 mainimaigep">
                  <img src={require('../img/48.png')} className="imageproject" />
                </div>
              </div>
              <div className="line"></div>
              {/* Technology used */}
              <h3 className="d-flex justify-content-center mx-3 mt-3">تکنولوژی های مورد استفاده </h3>
              <div className="row image1">
                <div className="col col-12 col-sm-6 col-md-4 imagetechno">
                  <a href="https://facebook.github.io/react-native/" target="_blank">
      
                  <h5 className="texttechno">REACTNATIVE</h5>
                  <img src={require("../img/native.png")} className="image" />
                  </a>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 imagetechno">
                <a href="https://reactjs.org" target="_blank">
                  <h5 className="texttechno">REACT JS </h5>
                  <img src={require("../img/react.png")} className="image bg-white" />
                  </a>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 imagetechno">
                <a href="https://redux.js.org/" target="_blank">
                  <h5 className="texttechno">REDUX</h5>
                  <img src={require("../img/redux.png")} className="image" />
                  </a>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 imagetechno">
                  <a href="https://reactnavigation.org/" target="_blank">
                  <h5 className="texttechno">REACT NAVIGATION</h5>
                  <img src={require("../img/navi.jfif")} className="image" />
                  </a>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 imagetechno">
                  <a href="https://www.w3schools.com/css/" target="_blank">
                  <h5 className="texttechno">CSS</h5>
                  <img src={require("../img/css.png")} className="image" />
                  </a>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 imagetechno">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                  <h5 className="texttechno">JAVASCRIPT</h5>
                  <img src={require("../img/js.png")} className="image" />
                  </a>
                </div>
              </div>
              <div className="line"></div>
              <div className="fun">
              <h5 className="d-flex justify-content-center">سرگرمی ها</h5>
              <div className="d-flex justify-content-center">
                <h>فوتسال و فوتبال </h>
              </div>
            </div>
            </div>
  
            {/* footer */}
            <div className="footer">
              <h5 className="commiction"> ارتباط باما</h5>
              <div className="maintagicon">
                <div className="items"><a href="https://t.me/engineer_it_ebrahim" target="_blank"><i class="fa fa-telegram icon"></i></a></div>
                <div className="items"><a href="https://linkedin.com/in/ebrahim-haddadi-b1b998131" target="_blank"><i class="fa fa-linkedin icon"></i></a></div>
                <div className="items"><a href="https://api.whatsapp.com/send?phone=+989375176420" target="_blank"><i class="fa fa-whatsapp icon"></i></a></div>
                <div className="items"><a href="https://hadadi.ebi@gmail.com" target="_blank"><i class="fa fa-envelope icon"></i></a></div>
                <div className="items"><a href="#" className="contect">شماره تماس:+989375176420</a></div>
  
              </div>
            </div>
          </div>
  
  
        </div>
  
      </div>
    )
   
}
export default Home;