(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(2),l=t.n(c),r=(t(11),t(3)),i=t(4),m=t(6),u=t(5),o=(t(12),function(e){return s.a.createElement("form",null,s.a.createElement("input",{className:"search-box",type:"text",value:e.value,onChange:e.change,placeholder:"enter city name"}))}),d=(t(13),t(14),function(e){var a=e.weather,t=a.date,n=a.city,c=a.sunrise,l=a.sunset,r=a.temp,i=a.pressure,m=a.humidity,u=a.clouds,o=a.wind,d=a.err,h=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""},s.a.createElement("h2",null,"Find your city and check the weather.")));if(!d&&n){var f=new Date(1e3*c).toLocaleTimeString(),v=new Date(1e3*l).toLocaleTimeString();h=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"result-box"},s.a.createElement("div",{className:"result-header"},s.a.createElement("div",null,n),s.a.createElement("div",null,t)),s.a.createElement("div",{className:"weather-details-container"},s.a.createElement("div",{className:"weather-detail-box temp-box"},s.a.createElement("div",{className:"temp-icon"},s.a.createElement("i",{className:"fas fa-thermometer-half"})),s.a.createElement("div",{className:"temp-detail"},r," \xb0C")),s.a.createElement("div",{className:"weather-detail-box other-details"},s.a.createElement("div",{className:"suntime"},s.a.createElement("div",{className:"details-box"},s.a.createElement("i",{className:"fas fa-sort-up"}),s.a.createElement("i",{className:"fas fa-sun"})," ",f),s.a.createElement("div",{className:"details-box"},s.a.createElement("i",{className:"fas fa-sort-down"}),s.a.createElement("i",{className:"fas fa-sun"})," ",v)),s.a.createElement("div",{className:"other-details-container"},s.a.createElement("div",{className:"details-box"},s.a.createElement("i",{className:"fab fa-cloudscale"})," ",i," hPa"),s.a.createElement("div",{className:"details-box"},s.a.createElement("i",{className:"fas fa-tint"})," ",m," %"),s.a.createElement("div",{className:"details-box"},s.a.createElement("i",{className:"fas fa-wind"})," ",o," m/s"),s.a.createElement("div",{className:"details-box"},s.a.createElement("i",{className:"fas fa-cloud"})," ",u," %"))))))}return s.a.createElement("div",{className:"result-container"},d?"Not in database ".concat(n):h)}),h=(t(15),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",humidity:"",clouds:"",wind:"",err:!1},e.handleInputChange=function(a){e.setState({value:a.target.value})},e}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;if(0!==this.state.value.length&&a.value!==this.state.value){var n="http://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.value,"&appid=").concat("f27143c9ba3302311a2c4596d74c5dc0","&units=metric");fetch(n).then((function(e){if(e.ok)return e;throw Error("failed to get data")})).then((function(e){return e.json()})).then((function(e){var a=(new Date).toLocaleString();t.setState((function(t){return{err:!1,date:a,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,clouds:e.clouds.all,wind:e.wind.speed,city:t.value}}))})).catch((function(e){console.log(e),t.setState((function(e){return{err:!0,city:e.value}}))}))}}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"header-container"},s.a.createElement("h1",null,"Weather App")),s.a.createElement("div",{className:"searchBox-container"},s.a.createElement(o,{value:this.state.value,change:this.handleInputChange})),s.a.createElement(d,{weather:this.state}))}}]),t}(n.Component));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.16684f51.chunk.js.map