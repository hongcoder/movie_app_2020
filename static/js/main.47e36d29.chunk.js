(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{19:function(e,a,t){e.exports=t(43)},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),c=t(2),m=t.n(c),o=t(13),l=t(14),u=t(15),v=t(17),p=t(18),d=t(16),g=t.n(d);var y=function(e){var a=e.title,t=e.summary,n=e.poster,s=e.year,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:n,alt:a,title:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},s),r.a.createElement("ul",{className:"genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},t.slice(0,180),"... ")))},_=(t(42),function(e){Object(p.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movie:[]},e.getMovies=Object(o.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.now.sh/list_movies_json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.47e36d29.chunk.js.map