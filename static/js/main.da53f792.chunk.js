(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/party-popper.4580939b.jpg"},43:function(e,t,a){e.exports=a(86)},48:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a.n(c),o=a(15),s=a(16),l=a(18),u=a(17),h=a(19),p=a(88),m=a(90),d=a(89),y=(a(48),a(37)),b=a.n(y),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"timeSince",value:function(e){var t=(new Date).getTime(),a=new Date(e).getTime(),n=Math.abs(t-a),r=Math.floor(n/864e5),c=Math.floor(r/365);r-=365*c;var i=Math.floor(r/31);return r-=31*i,"".concat(c," years, ").concat(i," months, and ").concat(r," days")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Today you are ",this.timeSince(this.props.date)," old!"),r.a.createElement("img",{src:b.a,alt:"party-popper",className:"party-popper"}))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={newDate:"",birthday:"",showStats:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"changeBirthday",value:function(){this.setState({birthday:this.state.newDate,showStats:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{inline:!0},r.a.createElement("h2",null,"Input Your Birthday!"),r.a.createElement(m.a,{type:"date",onChange:function(t){return e.setState({newDate:t.target.value})}}),"",r.a.createElement(d.a,{onClick:function(){return e.changeBirthday()}},"Submit"),this.state.showStats?r.a.createElement("div",{className:"fade age-stats"},r.a.createElement(f,{date:this.state.birthday})):r.a.createElement("div",null)))}}]),t}(n.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.da53f792.chunk.js.map