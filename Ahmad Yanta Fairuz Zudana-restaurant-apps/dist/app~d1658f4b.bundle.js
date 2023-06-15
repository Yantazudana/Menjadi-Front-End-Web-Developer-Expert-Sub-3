(()=>{"use strict";var n,A={389:(n,A,r)=>{r.d(A,{Z:()=>a});var e=r(537),t=r.n(e),i=r(645),o=r.n(i)()(t());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700;800;900&display=swap);"]),o.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Montserrat", sans-serif;\n  font-size: 15px;\n  color: #6d5d6e;\n  background-color: #6d5d6e;\n}\n\n.skip {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #6d5d6e;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip:focus {\n  top: 0;\n}\n\nheader {\n  min-height: 56px;\n  transition: min-height 0.3s;\n  background-color: #393646;\n}\n\n.headerinner {\n  display: inline-flex;\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0;\n  background-color: #393646;\n  align-content: center;\n  align-items: center;\n  padding: 15px;\n}\n\n.headertitle {\n  width: 90%;\n  font-size: 2em;\n  font-weight: 900;\n  margin: 0.2em 0.2em;\n  color: #ffffff;\n  display: inline-block;\n\n}\n\n.menu_drawer {\n  font-size: 31px;\n  margin: 10px auto;\n  display: block;\n  width: 44px;\n}\n\n.nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.navlist {\n  width: 90%;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n\n.navitem {\n  display: inline-block;\n  width: 24%;\n  font-size: 15px;\n  line-height: 44px;\n  text-align: center;\n  text-transform: uppercase;\n  box-sizing: border-box;\n}\n\n.nav a {\n  display: inline-block;\n  text-decoration: none;\n  color: #ffffff;\n  padding: 0rem 1rem;\n}\n\n.nav a:hover {\n  text-decoration: double;\n  font-weight: bold;\n  background-color: #171717;\n  border-radius: 5px;\n  transition: all 0.2s ease-in-out;\n}\n\n.hero {\n  display: flex;\n  min-height: 500px;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n  background-position: top;\n  background-color: rgb(0, 0, 0);\n  background-image: url("../images/hero-image_2-xl.jpg");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.hero_inner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero_title {\n  color: #ffffff;\n  font-size: 80px;\n  font-weight: 900;\n}\n\n.hero_desc {\n  color: #ffffff;\n  margin-top: 16px;\n  font-size: 30px;\n  font-weight: 400;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 25px;\n  text-align: left;\n  overflow: auto;\n}\n\n.latest {\n  width: 100%;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.latesthead {\n  padding-top: 40px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.contentlist {\n  margin: 10px 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.contentlist a{\n  text-decoration: none;\n  color: #393646;\n}\n\n.image {\n  max-height: 190px;\n  width: 100%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.restaurant_info {\n  padding: 18px 32px 32px 32px;\n  color: #393646;\n}\n\n.info_title:hover {\n  opacity: 0.7;\n}\n\n.info_city {\n  margin-top: 1px;\n}\n\n.info_desc {\n  margin-top: 5px;\n  text-align: justify;\n}\n\n.info_rates {\n  color: #FFFFFF;\n  text-align: center;\n  margin-top: 5px;\n  padding: 5px;\n  font-style: italic;\n  border-radius: 5px 20px 5px;\n  background-color: #393646;\n}\n\nfooter {\n  background-color: #393646;\n  color: #ffffff;\n  text-align: center;\n  padding: 40px;\n  font-size: medium;\n}\n\n/*\n  Detail\n*/\n\n.detail_container {\n  width: 100%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.detail_head {\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.detail_content {\n  padding: 0px 25px 25px 25px;\n  overflow: auto;\n}\n\n.contentdetail {\n  margin: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 80%;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n}\n\n.detail_title {\n  font-weight: 800;\n  margin-bottom: px;\n  text-align: center;\n}\n\nul {\n  list-style-type: none;\n}\n\n.info_list {\n  text-align: left;\n  margin: 15px auto;\n  padding: 25px 0;\n  border-top: 1px solid #850E35;\n  border-bottom: 1px solid #850E35;\n}\n\n.foods_detail {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.restaurant_info_detail {\n  padding: 18px 32px 32px 32px;\n}\n\n.restaurant_menu {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 20px;\n  margin: 15px auto;\n  padding: 15px 0;\n  border-top: 1px solid #850E35;\n  border-bottom: 1px solid #850E35;\n}\n\n.image_detail {\n  width: 100%;\n  max-height: 500px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.foods_detail {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.drinks_detail {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.list {\n  margin-bottom: 8px;\n}\n\n.restaurant_review {\n  text-align: center;\n}\n\n.review_header {\n  margin-top: 10px;\n}\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.review_header {\n  margin-bottom: 5px;\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700;800;900&display=swap\');\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Montserrat", sans-serif;\n  font-size: 15px;\n  color: #6d5d6e;\n  background-color: #6d5d6e;\n}\n\n.skip {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #6d5d6e;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip:focus {\n  top: 0;\n}\n\nheader {\n  min-height: 56px;\n  transition: min-height 0.3s;\n  background-color: #393646;\n}\n\n.headerinner {\n  display: inline-flex;\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: fixed;\n  top: 0;\n  background-color: #393646;\n  align-content: center;\n  align-items: center;\n  padding: 15px;\n}\n\n.headertitle {\n  width: 90%;\n  font-size: 2em;\n  font-weight: 900;\n  margin: 0.2em 0.2em;\n  color: #ffffff;\n  display: inline-block;\n\n}\n\n.menu_drawer {\n  font-size: 31px;\n  margin: 10px auto;\n  display: block;\n  width: 44px;\n}\n\n.nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.navlist {\n  width: 90%;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n\n.navitem {\n  display: inline-block;\n  width: 24%;\n  font-size: 15px;\n  line-height: 44px;\n  text-align: center;\n  text-transform: uppercase;\n  box-sizing: border-box;\n}\n\n.nav a {\n  display: inline-block;\n  text-decoration: none;\n  color: #ffffff;\n  padding: 0rem 1rem;\n}\n\n.nav a:hover {\n  text-decoration: double;\n  font-weight: bold;\n  background-color: #171717;\n  border-radius: 5px;\n  transition: all 0.2s ease-in-out;\n}\n\n.hero {\n  display: flex;\n  min-height: 500px;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n  background-position: top;\n  background-color: rgb(0, 0, 0);\n  background-image: url("../images/hero-image_2-xl.jpg");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.hero_inner {\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n.hero_title {\n  color: #ffffff;\n  font-size: 80px;\n  font-weight: 900;\n}\n\n.hero_desc {\n  color: #ffffff;\n  margin-top: 16px;\n  font-size: 30px;\n  font-weight: 400;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 25px;\n  text-align: left;\n  overflow: auto;\n}\n\n.latest {\n  width: 100%;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.latesthead {\n  padding-top: 40px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.contentlist {\n  margin: 10px 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.contentlist a{\n  text-decoration: none;\n  color: #393646;\n}\n\n.image {\n  max-height: 190px;\n  width: 100%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.restaurant_info {\n  padding: 18px 32px 32px 32px;\n  color: #393646;\n}\n\n.info_title:hover {\n  opacity: 0.7;\n}\n\n.info_city {\n  margin-top: 1px;\n}\n\n.info_desc {\n  margin-top: 5px;\n  text-align: justify;\n}\n\n.info_rates {\n  color: #FFFFFF;\n  text-align: center;\n  margin-top: 5px;\n  padding: 5px;\n  font-style: italic;\n  border-radius: 5px 20px 5px;\n  background-color: #393646;\n}\n\nfooter {\n  background-color: #393646;\n  color: #ffffff;\n  text-align: center;\n  padding: 40px;\n  font-size: medium;\n}\n\n/*\n  Detail\n*/\n\n.detail_container {\n  width: 100%;\n  margin: 40px auto;\n  text-align: center;\n}\n\n.detail_head {\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.detail_content {\n  padding: 0px 25px 25px 25px;\n  overflow: auto;\n}\n\n.contentdetail {\n  margin: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 80%;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n}\n\n.detail_title {\n  font-weight: 800;\n  margin-bottom: px;\n  text-align: center;\n}\n\nul {\n  list-style-type: none;\n}\n\n.info_list {\n  text-align: left;\n  margin: 15px auto;\n  padding: 25px 0;\n  border-top: 1px solid #850E35;\n  border-bottom: 1px solid #850E35;\n}\n\n.foods_detail {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.restaurant_info_detail {\n  padding: 18px 32px 32px 32px;\n}\n\n.restaurant_menu {\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 20px;\n  margin: 15px auto;\n  padding: 15px 0;\n  border-top: 1px solid #850E35;\n  border-bottom: 1px solid #850E35;\n}\n\n.image_detail {\n  width: 100%;\n  max-height: 500px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.foods_detail {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.drinks_detail {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n}\n\n.list {\n  margin-bottom: 8px;\n}\n\n.restaurant_review {\n  text-align: center;\n}\n\n.review_header {\n  margin-top: 10px;\n}\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n.review_header {\n  margin-bottom: 5px;\n}\n'],sourceRoot:""}]);const a=o},907:(n,A,r)=>{r.d(A,{Z:()=>a});var e=r(537),t=r.n(e),i=r(645),o=r.n(i)()(t());o.push([n.id,"@media screen and (max-width: 450px) {\r\n  .hero {\r\n      min-height: 300px;\r\n      background: url('/images/hero-image_2-small.jpg');\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 451px) {\r\n  .hero {\r\n      background: url('/images/hero-image_2-large.jpg');\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1050px){\r\n  .headertitle {\r\n    font-size: 24px;\r\n  }\r\n  .navitem {\r\n    width: 30%;\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 500px) {\r\n  .headerinner {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    padding: 12px 25px;\r\n    margin-top: 0;\r\n  }\r\n  .nav-mob {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    margin-top: 15px;\r\n    list-style-type: none;\r\n  }\r\n  .headertitle {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    font-size: 24px;\r\n  }\r\n  .menu_drawer {\r\n    line-height: 44px;\r\n    margin-top: 0px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    border: none;\r\n\r\n  }\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #393646;\r\n    width: 100%;\r\n    position: absolute;\r\n    -webkit-transform: translate(100%, 0);\r\n    transform: translate(-100%, 0);\r\n    transition: transform 0.3s ease;\r\n    top: 92px;\r\n  }\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n  .navitem {\r\n    display: list-item;\r\n    border-bottom: 1px solid #ffc4c4;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  .restaurant_menu {\r\n    display: flex;\r\n    grid-template-columns: auto auto;\r\n    gap: 20px;\r\n    margin: 15px auto;\r\n    padding: 15px 0px;\r\n    border-top: 1px solid rgb(133, 14, 53);\r\n    border-bottom: 1px solid rgb(133, 14, 53);\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .nav-mob {\r\n    display: none;\r\n  }\r\n  .info_title {\r\n    font-size: 18px;\r\n  }\r\n  .info_city {\r\n    font-size: 14px;\r\n  }\r\n  .info_desc {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 950px) {\r\n  .content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;MACI,iBAAiB;MACjB,iDAAiD;EACrD;AACF;;AAEA;EACE;MACI,iDAAiD;EACrD;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,UAAU;IACV,eAAe;EACjB;AACF;;;AAGA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;EACf;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;IAChB,qBAAqB;EACvB;EACA;IACE,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,qBAAqB;IACrB,6BAA6B;IAC7B,YAAY;;EAEd;EACA;IACE,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,qCAAqC;IACrC,8BAA8B;IAC9B,+BAA+B;IAC/B,SAAS;EACX;EACA;IACE,kCAAkC;IAClC,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,gCAAgC;IAChC,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,sCAAsC;IACtC,yCAAyC;IACzC,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,aAAa;IACb,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;AACF",sourcesContent:["@media screen and (max-width: 450px) {\r\n  .hero {\r\n      min-height: 300px;\r\n      background: url('/images/hero-image_2-small.jpg');\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 451px) {\r\n  .hero {\r\n      background: url('/images/hero-image_2-large.jpg');\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1050px){\r\n  .headertitle {\r\n    font-size: 24px;\r\n  }\r\n  .navitem {\r\n    width: 30%;\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 500px) {\r\n  .headerinner {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    padding: 12px 25px;\r\n    margin-top: 0;\r\n  }\r\n  .nav-mob {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    margin-top: 15px;\r\n    list-style-type: none;\r\n  }\r\n  .headertitle {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    font-size: 24px;\r\n  }\r\n  .menu_drawer {\r\n    line-height: 44px;\r\n    margin-top: 0px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    border: none;\r\n\r\n  }\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #393646;\r\n    width: 100%;\r\n    position: absolute;\r\n    -webkit-transform: translate(100%, 0);\r\n    transform: translate(-100%, 0);\r\n    transition: transform 0.3s ease;\r\n    top: 92px;\r\n  }\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n  .navitem {\r\n    display: list-item;\r\n    border-bottom: 1px solid #ffc4c4;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  .restaurant_menu {\r\n    display: flex;\r\n    grid-template-columns: auto auto;\r\n    gap: 20px;\r\n    margin: 15px auto;\r\n    padding: 15px 0px;\r\n    border-top: 1px solid rgb(133, 14, 53);\r\n    border-bottom: 1px solid rgb(133, 14, 53);\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .nav-mob {\r\n    display: none;\r\n  }\r\n  .info_title {\r\n    font-size: 18px;\r\n  }\r\n  .info_city {\r\n    font-size: 14px;\r\n  }\r\n  .info_desc {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 950px) {\r\n  .content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=o},15:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),o=r.n(i),a=r(569),d=r.n(a),l=r(565),p=r.n(l),C=r(216),B=r.n(C),s=r(589),E=r.n(s),g=r(389),c={};c.styleTagTransform=E(),c.setAttributes=p(),c.insert=d().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=B(),t()(g.Z,c),g.Z&&g.Z.locals&&g.Z.locals},822:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),o=r.n(i),a=r(569),d=r.n(a),l=r(565),p=r.n(l),C=r(216),B=r.n(C),s=r(589),E=r.n(s),g=r(907),c={};c.styleTagTransform=E(),c.setAttributes=p(),c.insert=d().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=B(),t()(g.Z,c),g.Z&&g.Z.locals&&g.Z.locals}},r={};function e(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={id:n,exports:{}};return A[n](i,i.exports,e),i.exports}e.m=A,n=[],e.O=(A,r,t,i)=>{if(!r){var o=1/0;for(p=0;p<n.length;p++){for(var[r,t,i]=n[p],a=!0,d=0;d<r.length;d++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](r[d])))?r.splice(d--,1):(a=!1,i<o&&(o=i));if(a){n.splice(p--,1);var l=t();void 0!==l&&(A=l)}}return A}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[r,t,i]},e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var r in A)e.o(A,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={954:0};e.O.j=A=>0===n[A];var A=(A,r)=>{var t,i,[o,a,d]=r,l=0;if(o.some((A=>0!==n[A]))){for(t in a)e.o(a,t)&&(e.m[t]=a[t]);if(d)var p=d(e)}for(A&&A(r);l<o.length;l++)i=o[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(p)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),e.nc=void 0;var t=e.O(void 0,[946,2,495,337,268],(()=>e(253)));t=e.O(t)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map