(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(40),r=a.n(i),s=(a(48),a(3)),l=a.p+"static/media/Casa.15956730.png",o=(a(31),a(49),a(81)),j=a(83),d=a(82),u=a.p+"static/media/fightClub.2068f635.jpeg",h=a.p+"static/media/OnceUponATimeInAmerica.39ccafe3.jpeg",b=a.p+"static/media/unProphet.6a385869.jpeg",p=a.p+"static/media/usualSuspect.8a771b64.jpeg",m=a.p+"static/media/ProfessorAndTheMadman.8229d181.jpeg",g=a(0);function x(){return Object(g.jsx)(o.a,{xs:1,md:2,className:"g-4",children:Array.from({length:1}).map((function(e,t){return Object(g.jsxs)(j.a,{children:[Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Img,{variant:"top",src:u,alt:"fightClub"}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Title,{children:"Card title"}),Object(g.jsx)(d.a.Text,{children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Img,{variant:"top",src:h,alt:"OnceUponTimeInAmerica"}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Title,{children:"Card title"}),Object(g.jsx)(d.a.Text,{children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Img,{variant:"top",src:b,alt:"unProphet"}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Title,{children:"Card title"}),Object(g.jsx)(d.a.Text,{children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Img,{variant:"top",src:p,alt:"usualSuspect"}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Title,{children:"Card title"}),Object(g.jsx)(d.a.Text,{children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(d.a.Img,{variant:"top",src:m,alt:"ProfessorAndTheMadman"}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Title,{children:"Card title"}),Object(g.jsx)(d.a.Text,{children:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]})]})}))})}a(51);function O(){return Object(g.jsx)("div",{children:"Button"})}var v=function(){return Object(g.jsxs)("div",{className:"custom__hero-container d-flex align-items-center",children:[Object(g.jsx)("div",{className:"hero__bg"}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"row d-flex justify-content-center",children:Object(g.jsxs)("div",{className:"hero__content col-lg-6 col-md-10 col-sm-12 text-center d-flex flex-column align-items-center",children:[Object(g.jsx)("h1",{className:"hero__h mb-4",children:"Casa Cinema"}),Object(g.jsx)("p",{className:"hero__p mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, augue non auctor pellentesque, lectus nunc dignissim diam, non condimentum magna lorem vitae eros."}),Object(g.jsx)(O,{})]})})})]})};function f(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)(x,{}),Object(g.jsxs)("div",{className:"home page",children:[Object(g.jsx)("img",{className:"home-cover",src:l,alt:"Casablanca"}),Object(g.jsx)("h1",{className:"page-title",children:"CasablancaStory"})]})]})}var y=a(7),N=a.n(y),C=a(18),k=a(13),w=a(14),T=a(16),A=a(15),S=a(4),D=a(24),_=a.n(D).a.create({baseURL:"https://YOUR-HEROKU-APP-URL.heroku.com",withCredentials:!0}),F=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={article:[]},e.fetchArticle=Object(C.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.match.params.id,t.next=3,_.get("/article");case 3:a=t.sent,e.setState({article:a.data});case 5:case"end":return t.stop()}}),t)}))),e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.fetchArticle()}},{key:"render",value:function(){var e=this.state.article;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"articleDasboard",children:"(ArticleDasboard)"}),Object(g.jsx)("ul",{className:"articles",children:e.map((function(e,t){return Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{children:e.title}),Object(g.jsx)(S.b,{to:{pathname:"/dashboard/update-article/"+e._id,id:e._id},children:Object(g.jsx)("button",{children:" update new article "})})]},t)}))})]})}}]),a}(n.Component),I=a(20),L=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(C.a)(N.a.mark((function e(t){var a,c,i,r,s,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(n.state),a=n.state,c=a.title,i=a.category,r=a.description,null!==i){e.next=5;break}return e.abrupt("return",alert("missing category"));case 5:return s=n.state.images.current.files[0],(l=new FormData).append("title",c),l.append("category",i),l.append("description",r),l.append("images",s),e.prev=11,e.next=14,_.post("/article",l);case 14:n.props.history.push("/dashboard"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(t){return e.apply(this,arguments)}}(),n.handleCategoryChange=function(e){console.log("what is it ???"),console.log(e),n.setState({category:e.target.value})},n.handleChange=function(e){n.setState(Object(I.a)({},e.target.name,e.target.value))},n.state={title:"article",category:null,categories:["actor","music","movies","culture"],description:"post",images:c.a.createRef()},n}return Object(w.a)(a,[{key:"render",value:function(){return console.log(this.props),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("h1",{children:"create a new post"}),Object(g.jsx)("input",{name:"title",type:"text",placeholder:"title",value:this.state.title,onChange:this.handleChange}),Object(g.jsxs)("select",{title:"select the category",name:"category",id:"title",onChange:this.handleCategoryChange,children:[Object(g.jsx)("option",{value:"-1",selected:!0,disabled:!0,children:"please choose cat"}),this.state.categories.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))]}),Object(g.jsx)("textarea",{name:"description",type:"text",value:this.state.description,onChange:this.handleChange}),Object(g.jsx)("input",{ref:this.state.images,name:"images",type:"file"}),Object(g.jsx)("button",{children:"Submit"})]})}}]),a}(n.Component),B=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={title:"",category:"",categories:["actor","music","movies","culture"],description:"",images:"",inputFile:c.a.createRef()},e.fetcharticle=function(){console.log(),_.get("/article/"+e.props.match.params.id).then((function(t){var a=t.data,n=a.title,c=a.category,i=a.categories,r=a.description,s=a.images;e.setState({title:n,category:c,categories:i,description:r,images:s})}))},e.handleSubmit=function(){var t=Object(C.a)(N.a.mark((function t(a){var n,c,i,r,s,l;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log(e.state),n=e.state,c=n.title,i=n.category,r=n.description,null!==i){t.next=5;break}return t.abrupt("return",alert("missing category"));case 5:return s=e.state.images,(l=new FormData).append("title",c),l.append("category",i),l.append("description",r),l.append("images",s),t.prev=11,t.next=14,_.post("/article",l);case 14:e.props.article(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(11),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[11,17]])})));return function(e){return t.apply(this,arguments)}}(),e.handleCategoryChange=function(t){console.log("what is it ???"),console.log(t),e.setState({category:t.target.value})},e.handleChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.fetcharticle()}},{key:"render",value:function(){return console.log(this.state),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("h1",{children:"update a post"}),Object(g.jsx)("input",{name:"title",type:"text",placeholder:"title",value:this.state.title,onChange:this.handleChange}),Object(g.jsxs)("select",{title:"select the category",name:"category",id:"title",onChange:this.handleCategoryChange,children:[Object(g.jsx)("option",{value:"-1",selected:!0,disabled:!0,children:"please add cat"}),this.state.categories.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))]}),Object(g.jsx)("textarea",{name:"description",type:"text",value:this.state.description,onChange:this.handleChange}),Object(g.jsx)("input",{ref:this.state.inputFile,name:"images",type:"file"}),Object(g.jsx)("button",{children:"Submit"})]})}}]),a}(n.Component),M=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={articles:[]},e.fetchArticles=Object(C.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(a=e.props.match.params.category)){t.next=8;break}return console.log("ya pas de cat"),t.next=5,_.get("/article");case 5:n=t.sent,t.next=12;break;case 8:return console.log("ya une cat"),t.next=11,_.get("/article",{params:{category:a}});case 11:n=t.sent;case 12:e.setState({articles:n.data}),console.log(n.data);case 14:case"end":return t.stop()}}),t)}))),e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.fetchArticles()}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.fetchArticles()}},{key:"render",value:function(){var e=this.state.articles;return console.log("Category: ",this.props.match.params.category),Object(g.jsxs)("div",{children:[!e,"? ",Object(g.jsx)("p",{children:"If there is no article we write one for you"}),Object(g.jsx)("h1",{className:"article",children:"(Articles)"}),Object(g.jsx)("ul",{className:"articles",children:e.map((function(e,t){return Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{children:e.title}),Object(g.jsx)(S.b,{to:"/article/details/"+e._id,children:"articles link"})]},t)}))})]})}}]),a}(n.Component),P=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"contact"})}}]),a}(n.Component);function U(){return Object(g.jsx)("div",{children:"OH NO 404"})}var R=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={articledetails:null},e.fetchArticleDetails=Object(C.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,_.get("/article/"+a);case 3:n=t.sent,e.setState({articledetails:n.data});case 5:case"end":return t.stop()}}),t)}))),e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.fetchArticleDetails()}},{key:"render",value:function(){var e=this.state.articledetails;return console.log("in render"),console.log(e),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"Article for you"}),Object(g.jsx)("h1",{className:"ArticleDetails",children:null===e||void 0===e?void 0:e.title})]})}}]),a}(n.Component),H=(a(79),function(){return Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{background:"#1F2128"},children:Object(g.jsxs)("div",{className:"container-fluid container-lg",children:[Object(g.jsx)(S.b,{className:"navbar-brand custom__logo",to:"/",children:"Home"}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(g.jsxs)("ul",{className:"navbar-nav",children:[Object(g.jsx)("li",{className:"nav-item mx-3",children:Object(g.jsx)(S.b,{className:"nav-link active","aria-current":"page",to:"/article",children:"All Articles"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(O,{})})]}),Object(g.jsxs)("ul",{className:"navbar-nav",style:{marginLeft:"auto"},children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/article/movies",children:"Movies"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/article/music",children:"Music"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/article/actor",children:"Actors"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/article/culture",children:"Cultures"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/article/contact",children:"Contuct-us"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/logout",children:"Logout"})})]}),")}",Object(g.jsxs)("ul",{className:"navbar-nav",style:{marginLeft:"auto"},children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link","aria-current":"page",to:"/login",children:"Login"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(S.b,{className:"nav-link",to:"/signup",children:"Sign up"})})]}),")}"]})]})})});function E(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(H,{}),Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{exact:!0,path:"/",component:f}),Object(g.jsx)(s.a,{exact:!0,path:"/article",component:M}),Object(g.jsx)(s.a,{path:"/article/:category(movies|music|actor|culture)",component:M}),Object(g.jsx)(s.a,{path:"/article/details/:id",component:R}),Object(g.jsx)(s.a,{exact:!0,path:"/dashboard",component:F}),Object(g.jsx)(s.a,{path:"/dashboard/create-article",component:L}),Object(g.jsx)(s.a,{patch:"/dashboard/update-article/:id",component:B}),Object(g.jsx)(s.a,{path:"/contact-us",component:P}),Object(g.jsx)(s.a,{path:"*",component:U})]})]})}var J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(S.a,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),J()}},[[80,1,2]]]);
//# sourceMappingURL=main.01e0e4fd.chunk.js.map