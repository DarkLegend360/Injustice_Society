(this.webpackJsonpmyheros=this.webpackJsonpmyheros||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),s=n.n(c),o=n(3),i=n(4),l=n(5),u=n(6);n(12);var m=function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h1",null,e.monster.name),a.a.createElement("p",null,e.monster.email))};n(13);var h=function(e){return a.a.createElement("div",{className:"cardList"},e.list.map((function(e){return a.a.createElement(m,{key:e.id,monster:e})})))};n(14);var d=function(e){var t=e.placeHolder,n=e.myFn;return a.a.createElement("input",{className:"search",type:"search",placeHolder:t,onChange:n})},f=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return a.a.createElement("div",null,a.a.createElement("h1",{className:"top"},"The Injustice Society Of America"),a.a.createElement(d,{placeHolder:"Search Monsters",myFn:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(h,{list:c}))}}]),n}(r.Component));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ddda239c.chunk.js.map