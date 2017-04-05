import React, { Component } from 'react';
import HomePage from './HomePage';
import Navigbar from './Navigbar';
import Projects from './Projects.jsx';
import Invoices from './Invoices.jsx';

/*.home-layout section#intro h1 {
  padding-top: 10px !important;
}

.list-group-item.autoform-array-item > div {
  display: table;
  width: 100%;
}

.list-group-item.autoform-array-item .autoform-remove-item-wrap {
  display: table-cell;
}

.list-group-item.autoform-array-item .autoform-remove-item {
  vertical-align: top;
  margin-right: 15px;
}

.list-group-item.autoform-array-item .autoform-array-item-body {
  display: table-cell;
  vertical-align: top;
  width: 100%;
}

.checkbox-inline.fix-indent,
.checkbox-inline.fix-indent+.checkbox-inline.fix-indent {
  margin-left: 0;
  margin-right: 10px;
}

.checkbox-inline.fix-indent:last-child {
  margin-right: 0;
}

.radio-inline.fix-indent,
.radio-inline.fix-indent+.radio-inline.fix-indent {
  margin-left: 0;
  margin-right: 10px;
}

.radio-inline.fix-indent:last-child {
  margin-right: 0;
}

.form-horizontal .autoform-padding-fix .form-group {
  margin-right: 0;
  margin-left: 0;
}

.checkbox input[type="checkbox"].autoform-checkbox-margin-fix,
.checkbox-inline input[type="checkbox"].autoform-checkbox-margin-fix {
  margin-left: 0;
}

.btn.autoform-inline-align {
  vertical-align: top;
}
*/

/*
@font-face {
  font-family: 'FontAwesome';
  src: url('packages/fortawesome_fontawesome/upstream/fonts/fontawesome-webfont.eot?v=4.5.0');
  src: url('packages/fortawesome_fontawesome/upstream/fonts/fontawesome-webfont.eot?') format('embedded-opentype'), url('packages/fortawesome_fontawesome/upstream/fonts/fontawesome-webfont.woff2?v=4.5.0') format('woff2'), url('packages/fortawesome_fontawesome/upstream/fonts/fontawesome-webfont.woff?v=4.5.0') format('woff'), url('packages/fortawesome_fontawesome/upstream/fonts/fontawesome-webfont.ttf?v=4.5.0') format('truetype'), url('packages/fortawesome_fontawesome/upstream/fonts/fontawesome-webfont.svg?v=4.5.0') format('svg');
  font-weight: normal;
  font-style: normal;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/

/* makes the font 33% larger relative to the icon container */
/*
.fa-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-fw {
  width: 1.28571429em;
  text-align: center;
}

.fa-ul {
  padding-left: 0;
  margin-left: 2.14285714em;
  list-style-type: none;
}

.fa-ul > li {
  position: relative;
}

.fa-li {
  position: absolute;
  left: -2.14285714em;
  width: 2.14285714em;
  top: 0.14285714em;
  text-align: center;
}

.fa-li.fa-lg {
  left: -1.85714286em;
}

.fa-border {
  padding: .2em .25em .15em;
  border: solid 0.08em #eeeeee;
  border-radius: .1em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left {
  margin-right: .3em;
}

.fa.fa-pull-right {
  margin-left: .3em;
}
*/
/*.home-layout nav.navbar {
  background: #d9d9d9;
  width: 100%;
  z-index: 1000;
}

.home-layout nav.navbar .link {
  color: black !important;
}

.home-layout nav.navbar .link:hover {
  background: inherit;
  color: white;
  text-decoration: none;
}

.home-layout nav.navbar .link.btn-hollow {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
}

.home-layout nav.navbar ul.nav {
  list-style: none;
  padding-top: 2px;
}

.home-layout nav.navbar ul.nav > li {
  padding-left: 10px;
  display: inline-block;
  padding-right: 5px;
}

.home-layout nav.navbar ul.nav > .dropdown {
  padding-right: 0;
}

.home-layout nav.navbar ul.nav .open .dropdown-toggle {
  background: none;
  color: white;
}

.home-layout section {
  padding-top: 50px;
  padding-bottom: 100px;
}

.home-layout section.colored {
  background: #eeeeee;
  color: black;
}

.home-layout section#intro {
  background: url(/img/contrack_grande.PNG) !important;
  color: black !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
}


@media (max-width: 768px) {
  .home-layout section#intro h1 {
    padding-top: 10px;
  }
}

.home-layout section#intro a.btn {
  margin-top: 10px;
  color: white;
}

.home-layout section#how-it-works .fa {
  margin-top: 60px;
  margin-bottom: 30px;
}

.home-layout section#how-it-works .icntitle {
  font-size: 14px;
}

.home-layout section#ipad {
  padding-bottom: 0 !important;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .home-layout section#ipad h3 {
    padding-top: 0;
  }
}

.home-layout section#ipad .btn {
  margin: 20px auto 30px;
}

.home-layout section#final {
  padding-bottom: 0;
}

.home-layout section#final .btn {
  margin: 20px auto 30px;
}

.navbar {
  color: black !important;
}

html,
body {
  height: 100%;
}

.layout {
  min-height: 80%;
}

button.navbar-toggle {
  background: inherit;
}

.navbar {
  margin-left: 0;
}

#iron-router-progress {
  background-color: #003f54;
  box-shadow: 0 0 5px #003f54;
}

#iron-router-progress.spinner:before {
  border-color: #003f54;
}

.template-navbar .navbar-toggle {
  background: #222;
  cursor: pointer;
  float: left;
  margin-left: 4px;
  margin-right: 0;
  position: relative;
  z-index: 2;
}

.template-navbar .navbar-toggle .bar {
  border-top: 2px solid white;
  display: block;
  width: 15px;
  transition: 0.2s;
}

.template-navbar .navbar-toggle .icon {
  border-top: 2px solid white;
  display: block;
  width: 15px;
  transition: 0.2s;
  margin-top: 6px;
  padding: 3px 0;
  position: relative;
}

.template-navbar .navbar-toggle .icon::before,
.template-navbar .navbar-toggle .icon::after {
  content: '';
  position: absolute;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  border-top: 2px solid white;
  display: block;
  width: 15px;
  transition: 0.2s;
}

.template-navbar .navbar-toggle .icon::before {
  top: -6px;
}

.template-navbar .navbar-toggle .icon::after {
  top: 2px;
}

.template-navbar .navbar-toggle.xs-mobile-cta {
  float: right;
}

.template-navbar .sliding-menu {
  background: white;
  display: none;
  height: 100vh;
  margin-left: -1px;
  overflow: auto;
  padding: 50px 6px 10px;
  position: fixed;
  transform: translateX(-100vw);
  transition: 0.2s;
  width: 100vw;
  z-index: 1;
}

.template-navbar #sliding-menu-controller:checked ~ .navbar-toggle {
  background: white;
  position: fixed;
}

.template-navbar #sliding-menu-controller:checked ~ .navbar-toggle .icon {
  border-color: transparent;
}

.template-navbar #sliding-menu-controller:checked ~ .navbar-toggle .icon::before,
.template-navbar #sliding-menu-controller:checked ~ .navbar-toggle .icon::after {
  border-color: #222;
  top: -2px;
}

.template-navbar #sliding-menu-controller:checked ~ .navbar-toggle .icon::before {
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}

.template-navbar #sliding-menu-controller:checked ~ .navbar-toggle .icon::after {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.template-navbar #sliding-menu-controller:checked ~ .sliding-menu {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}

.btn-hollow {
  background: transparent;
  border: solid 3px;
}

.btn-hollow:hover {
  background: transparent;
  color: inherit;
}

/* Utils */

/* Views */
/*
.home-layout nav.navbar {
  background: #d9d9d9;
  width: 100%;
  z-index: 1000;
}

.home-layout nav.navbar .link {
  color: white;
}

.home-layout nav.navbar .link:hover {
  background: inherit;
  color: white;
  text-decoration: none;
}

.home-layout nav.navbar .link.btn-hollow {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
}

.home-layout nav.navbar ul.nav {
  list-style: none;
  padding-top: 2px;
}

.home-layout nav.navbar ul.nav > li {
  padding-left: 10px;
  display: inline-block;
  padding-right: 5px;
}

.home-layout nav.navbar ul.nav > .dropdown {
  padding-right: 0;
}

.home-layout nav.navbar ul.nav .open .dropdown-toggle {
  background: none;
  color: white;
}

*/



// App component - represents the whole app
export default class Appx extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'home',
      page:1,
      pageL:[],
      currentProject: 'prueba'
    } // Cambiar status a invoices para ver las facturas
    this.goProjects = this.goProjects.bind(this);
    this.changePage = this.changePage.bind(this);
    this.goInvoices = this.goInvoices.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  retrievePage(i){
    axios.get("http://datos.colombiacompra.gov.co:8000/releases/contract/?page="+i, {
    }).then(response => {
        console.log(response);
        if (response.data === null) {
            alert("no hay contratos para esta pagina");
        }
        else
        {
            //los proyectos estan en releases
            var list = response.data.releases;
            this.setState({pageL:list,page:i});
        }
    });
  }

  renderComponent() {
    if(this.state.status === 'home') {
      return (
        <HomePage goProjects={this.goProjects} />
      );
    } else if (this.state.status === 'invoices') {
      return this.renderInvoices(this.state.currentProject);
    } else if (this.state.status === 'projects') {
      return (
        <Projects page={this.state.page}
          lista={this.state.pageL} changePage={this.changePage}
          goHome={this.goHome}/>
      );
    } else {
      return (
        <p>Hola</p>
      )
    }
  }

  goProjects() {
    console.log("GO PROJECTS");
    this.setState({status:'projects'});
  }
  goHome() {
    this.setState({status:'home'});
  }
  changePage(i){
    this.retrievePage(i);
  }
  goInvoices(project){
    console.log("llega el llamado invoices");
    this.setState({
      status:'invoices',
      currentProject: project
    });
  }
  renderInvoices(project) {
    console.log("llega a crear invoices");
    return (
      <Invoices project={project} goHome={this.goHome}/>
    )
  }

  render() {
    if(this.state.pageL.length === 0)
    {
      this.retrievePage(1);
    }
    return (
      <div className="container">
        {this.renderComponent()}
      </div>
    );
  }
}
