(this["webpackJsonpdatavis-final"]=this["webpackJsonpdatavis-final"]||[]).push([[4],{455:function(e,t,n){},467:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return se}));var r=n(104),a=(n(455),n(240)),i=n(0),c=n(227),o=n(473),s=n(471),l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),u=function(e,t,n,r,i){var c=e.filter((function(e){return Number(e[t])===i})),o=Object(a.l)().domain(Object(a.d)(c,(function(e){return Number(e[r])}))).interpolator(a.g),s=c.reduce((function(e,t){var a,i;return e.push({state:null!==(a=null===(i=t[n])||void 0===i?void 0:i.toString())&&void 0!==a?a:"",value:Number(t[r]),color:o(Number(t[r]))}),e}),[]),l=s.reduce((function(e,t){return e?t.value>e.max?{max:t.value,min:e.min}:t.value<e.min?{max:e.min,min:t.value}:e:{max:t.value,min:t.value}}),null);return{colorSaturationScale:o,filteredRows:c,states:s,colorExtent:l,findFieldByStateOrDefault:function(e,t,n){var r,a;return null!==(r=null===(a=s.find((function(t){return t.state===e})))||void 0===a?void 0:a[t])&&void 0!==r?r:n}}},d=n(13),j=c.a.Text,b=function(e){for(var t,n=e.timeField,r=e.stateField,a=e.colorRepresentation,i=e.chosenTimeField,c=e.rows,b=u(c,n,r,a,i),f=b.colorExtent,m=b.colorSaturationScale,h=[],O=(null===f||void 0===f?void 0:f.max)||0,x=(null===f||void 0===f?void 0:f.min)||0,g=(O-x)/8;h.length<8;)h.push(m(x)),x+=g;var p=200/h.length,v=h.map((function(e){return Object(d.jsx)(o.a,{span:3,style:{height:"25px",width:p,backgroundColor:e}},e)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{justify:"end",children:v}),Object(d.jsxs)(s.a,{justify:"space-between",children:[Object(d.jsx)(j,{children:l.format(null!==(t=null===f||void 0===f?void 0:f.min)&&void 0!==t?t:0)}),Object(d.jsx)(j,{children:l.format(O)})]})]})},f=n(319),m=n(460),h=n(106),O=n(470),x=n(237),g=n.n(x),p=n(261),v="https://gist.githubusercontent.com/apetit2/",y={MinimumWageCSV:"".concat(v,"212a7cd715f8ba34eb637d014fffb12f/raw/0cc5e300ed1747be91ec391f4546e1a44c90d810/minimum-wage-data.csv"),RentCSV:"".concat(v,"aaa39169ab48ff313cfb2bfe12486fef/raw/6d5308a46301f7f2b08c6974a3be7e7e138434f8/rent.csv"),WorldMap:"https://unpkg.com/world-atlas@1.1.4/world/110m.json",USMap:"https://unpkg.com/us-atlas@3.0.0/states-10m.json"},w=function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y.USMap);case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=n(244),S=function(e,t){return t*e/260.28},k=function(e){return{year:Number(e.Year),state:e.State,stateMinWage:Number(e["State.Minimum.Wage"]),stateMinWageTodayDollars:Number(e["State.Minimum.Wage.2020.Dollars"]),federalMinWage:Number(e["Federal.Minimum.Wage"]),federalMinWageTodayDollars:Number(e["Federal.Minimum.Wage.2020.Dollars"]),effectiveMinWage:Number(e["Effective.Minimum.Wage"]),effectiveMinWageTodayDollars:Number(e["Effective.Minimum.Wage.2020.Dollars"]),cpiAverage:Number(e["CPI.Average"]),depLaborUncleanData:e["Department.Of.Labor.Uncleaned.Data"],depLaborCleanedLowValue:Number(e["Department.Of.Labor.Cleaned.Low.Value"]),depLaborCleanedLowValueTodayDollars:Number(e["Department.Of.Labor.Cleaned.Low.Value.2020.Dollars"]),depLaborCleanedHighValue:Number(e["Department.Of.Labor.Cleaned.High.Value"]),depLaborCleanedHighValueTodayDollars:Number(e["Department.Of.Labor.Cleaned.High.Value.2020.Dollars"]),footnote:e.Footnote,rowType:"MinWage"}},C=function(e){return{state:e.State,year:Number(e.Year),studio:Number(e["Rent 0 BR"]),oneBedroom:Number(e["Rent 1 BR"]),twoBedroom:Number(e["Rent 2 BR"]),threeBedroom:Number(e["Rent 3 BR"]),fourBedroom:Number(e["Rent 4 BR"]),population:Number(e.Population),rowType:"Rent"}},D=function(e,t){return t.map((function(t){var n=e.find((function(e){return e.year===t.year&&e.state===t.state}));return n?Object(M.a)(Object(M.a)({},t),{},{studio:S(t.cpiAverage,n.studio),oneBedroom:S(t.cpiAverage,n.oneBedroom),twoBedroom:S(t.cpiAverage,n.twoBedroom),threeBedroom:S(t.cpiAverage,n.threeBedroom),fourBedroom:S(t.cpiAverage,n.fourBedroom),population:n.population}):t}))},T=function(){var e=Object(p.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.b)(y.MinimumWageCSV,k);case 2:return t=e.sent,e.next=5,Object(a.b)(y.RentCSV,C);case 5:return n=e.sent,e.abrupt("return",D(n,t));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=c.a.Text,N=function(){var e,t,n=Object(O.a)("usMap",w,e),r=n.data,a=n.isError;return n.isLoading&&(t=Object(d.jsx)(h.a,{})),!a&&r||(t=Object(d.jsx)(A,{children:"Some error"})),{data:r,fallback:t}},W=function(e){var t=e.width,n=e.height,c=e.rows,l=e.timeField,j=e.stateField,h=e.colorRepresentation,O=e.chosenTimeField,x=e.showLegend,g=void 0!==x&&x,p=e.onMouseOver,v=e.onClick,y=e.renderToolTip,w=Object(i.useState)(),M=Object(r.a)(w,2),S=M[0],k=M[1],C=Object(i.useState)(null),D=Object(r.a)(C,2),T=D[0],A=D[1],W=N(),L=W.data,R=W.fallback;Object(i.useEffect)((function(){f.a.rebuild()}),[]),function(e,t,n){Object(i.useEffect)((function(){if(e){var r=Object(a.n)();r.on("zoom",(function(e){return Object(a.m)("#states").attr("transform",e.transform)})),r.scaleExtent([1,8]),r.translateExtent([[0,t-400],[n,t]]),Object(a.m)(e).call(r)}}),[e,t,n])}(T,n,t);var B=u(c,l,j,h,O).findFieldByStateOrDefault;if(R)return R;var F=L,V=Object(a.e)().translate([t/2,n/2]).scale(t/1.3>800?800:t/1.3),Y=Object(a.f)().projection(V),E=Object(m.a)(F,F.objects.states).features;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("svg",{height:n,width:t,ref:A,children:Object(d.jsx)("g",{id:"states",children:E.map((function(e){return Object(d.jsx)("path",{"data-event":"mouseover","data-event-off":"mouseout","data-tip":e.properties.name,"data-for":"states-tooltip",className:S===e.properties.name?"state clicked":"state",d:Y(e),stroke:"black",strokeWidth:.5,onClick:function(t){v&&(k(e.properties.name),v(t,e.properties.name))},onMouseOver:p?function(t){return p(t,e.properties.name)}:void 0,fill:B(e.properties.name,"color","green")},"".concat(e.properties.name))}))})}),y&&Object(d.jsx)(f.a,{id:"states-tooltip",getContent:function(e){var t=B(e,"value",0);return y(e,t)}}),g&&Object(d.jsx)(s.a,{style:{width:t},justify:"center",children:Object(d.jsx)(o.a,{children:Object(d.jsx)(b,{timeField:l,stateField:j,colorRepresentation:h,chosenTimeField:O,rows:c})})})]})},L=n(221),R=n(474),B=n(468),F=c.a.Text,V=function(e){var t=e.defaultYear,n=e.minYear,r=e.maxYear,a=e.incrementYearDisabled,i=e.onChange,c=e.toggleIncrementYear;return Object(d.jsxs)(L.b,{style:{width:"100%"},direction:"vertical",children:[Object(d.jsxs)(L.b,{direction:"horizontal",style:{justifyContent:"space-between",width:"100%"},children:[Object(d.jsxs)(F,{strong:!0,children:["Select a Year: ",Object(d.jsx)(F,{style:{color:"green"},children:t})]}),Object(d.jsxs)(L.b,{direction:"horizontal",size:"small",children:[Object(d.jsx)(R.a,{onChange:function(e){return c(!e)},checked:!a}),Object(d.jsxs)(F,{strong:!0,children:[a?"Enable":"Disable"," Auto Increment"]})]})]}),Object(d.jsx)(B.a,{min:n,max:r,value:t,onChange:i})]})},Y=n(465),E=n(67),I="https://gist.github.com/apetit2/212a7cd715f8ba34eb637d014fffb12f",z=n(458),U={height:400,width:0,marginTop:10,marginRight:10,marginBottom:40,marginLeft:75},H=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(U.width),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(U.height),s=Object(r.a)(o,2),l=s[0],u=s[1];Object(i.useEffect)((function(){var t=new z.a((function(e){if(Array.isArray(e)&&e.length){var t=e[0];a!==t.contentRect.width&&c(t.contentRect.width),l!==t.contentRect.height&&u(t.contentRect.height)}}));if(e.current){var n=e.current;return t.observe(n),function(){return t.unobserve(n)}}return function(){return null}}),[l,a]);var d=function(e){var t=Object(M.a)(Object(M.a)({},e),{},{marginTop:e.marginTop||10,marginRight:e.marginRight||10,marginBottom:e.marginBottom||40,marginLeft:e.marginLeft||75});return Object(M.a)(Object(M.a)({},t),{},{boundedHeight:Math.max(t.height-t.marginTop-t.marginBottom,0),boundedWidth:Math.max(t.width-t.marginLeft-t.marginRight,0)})}(Object(M.a)(Object(M.a)({},U),{},{width:a,height:l}));return{ref:e,dimensions:d}},P=c.a.Text,K=function(e){var t=e.pageTitle,n=e.menuItems,r=e.description,a=e.generateChart,i=e.showDescriptionTitle,c=void 0===i||i,l=H(),u=l.ref,j=l.dimensions;return Object(d.jsx)("div",{style:{width:"100%"},ref:u,children:Object(d.jsxs)(L.b,{direction:"vertical",size:"large",style:{width:"100%"},children:[Object(d.jsxs)(s.a,{style:{width:"100%"},justify:n?"space-between":"center",gutter:[0,24],children:[Object(d.jsx)(o.a,{flex:1,style:{textAlign:"center"},children:Object(d.jsx)(P,{strong:!0,style:{fontSize:32},children:t})}),n&&Object(d.jsx)(o.a,{flex:1,children:n})]}),a(j),Object(d.jsxs)(L.b,{direction:"vertical",children:[c&&Object(d.jsx)(P,{strong:!0,style:{fontSize:24},children:"Description"}),Object(d.jsx)(P,{style:{fontSize:14},children:r})]})]})})},G=c.a.Text,J=function(e,t,n,r,a){Object(i.useEffect)((function(){if(n){var i=setInterval((function(){a(r===e?t:r+1)}),500);return function(){return clearInterval(i)}}}),[r,n,a,e,t])},X=function(e){var t=e.xScale,n=e.height,r=e.tickOffset,a=void 0===r?3:r;return Object(d.jsx)(d.Fragment,{children:t.ticks().map((function(e){return Object(d.jsxs)("g",{style:{stroke:"#C0C0BB"},transform:"translate(".concat(t(e),", 0)"),children:[Object(d.jsx)("line",{y2:n}),Object(d.jsx)("text",{dy:".71em",textAnchor:"middle",y:n+a,children:e})]},e)}))})},$=function(e){var t=e.yScale,n=e.width,r=e.tickOffset,a=void 0===r?3:r;return Object(d.jsx)(d.Fragment,{children:t.ticks().map((function(e){return Object(d.jsxs)("g",{style:{stroke:"#C0C0BB"},transform:"translate(0,".concat(t(e),")"),children:[Object(d.jsx)("line",{x2:n}),Object(d.jsx)("text",{textAnchor:"end",x:-a,dy:".32em",children:e})]},e)}))})},Z=n(462),_=n(456),q=["children"],Q=Object(i.forwardRef)((function(e,t){var n=e.children,r=Object(Z.a)(e,q),a=Object(_.useSpring)({opacity:1,from:{opacity:0},delay:300}).opacity;return Object(d.jsx)(_.animated.g,Object(M.a)(Object(M.a)({ref:t},r),{},{opacity:a,children:n}))})),ee=function(e,t,n,r,a){var i=[],c=0;return e.filter((function(e){return r&&a?(void 0===n||n(e))&&e[a]>=r[0]&&e[a]<=r[1]:void 0===n||n(e)})).sort((function(e,n){return e[t].localeCompare(n[t])})).forEach((function(e,n,r){n>=1&&e[t]!==r[n-1][t]?(i.push([e]),c+=1):0===n?i.push([e]):i[c].push(e)})),i},te=function(e){var t=e.filter,n=e.grouping,c=e.width,o=e.height,s=void 0===o?400:o,l=e.margin,u=e.x,j=e.y,b=e.xLabel,f=e.yLabel,m=e.data,h=e.opacity,O=void 0===h?".3":h,x=e.strokeWidth,g=void 0===x?3:x,p=e.stroke,v=e.focusable,y=void 0===v||v,w=e.cords,S=Object(i.useState)(),k=Object(r.a)(S,2),C=k[0],D=k[1],T=Object(i.useRef)(null),A=Object(i.useCallback)((function(e){return e[u]}),[u]),N=Object(i.useCallback)((function(e){return e[j]}),[j]),W=Object(i.useCallback)((function(e){return e[n]}),[n]),L=Object(i.useMemo)((function(){return.2*s}),[s]),R=Object(i.useMemo)((function(){return Object(a.d)(m,N)}),[m,N]),B=Object(i.useMemo)((function(){return Object(a.d)(m,A)}),[m,A]),F=Object(i.useMemo)((function(){return Object(a.d)(m,A)}),[m,A]),V=Object(i.useMemo)((function(){return s-l.top-l.bottom}),[s,l]),Y=Object(i.useMemo)((function(){return c-l.left-l.right}),[c,l]),E=Object(i.useMemo)((function(){return Object(a.j)().domain(C||B).range([0,Y]).nice()}),[Y,B,C]),I=Object(i.useMemo)((function(){return Object(a.j)().domain(R).range([V,0])}),[V,R]),z=Object(i.useMemo)((function(){return Object(a.j)().domain(F).range([0,Y]).nice()}),[Y,F]),U=Object(i.useMemo)((function(){return Object(a.j)().domain(R).range([.2*s,0])}),[R,s]),H=Object(i.useMemo)((function(){var e=Array.from(new Set(m.map(W))),t=e.length,n=e.map((function(e,n){return Object(a.h)(n/t)}));return Object(a.k)().domain(m.map(W)).range(n)}),[m,W]),P=Object(i.useMemo)((function(){return Object(M.a)(Object(M.a)({},l),{},{left:8.75*R[1].toString().length+20})}),[l,R]),K=Object(i.useMemo)((function(){return 8.75*R[1].toString().length+10}),[R]),G=Object(i.useMemo)((function(){return Object(a.i)().x((function(e){return E(A(e))})).y((function(e){return I(N(e))})).curve(a.c)}),[E,I,N,A]),J=Object(i.useMemo)((function(){return Object(a.i)().x((function(e){return z(A(e))})).y((function(e){return U(N(e))})).curve(a.c)}),[z,U,N,A]);Object(i.useEffect)((function(){if(T.current&&Y>0){var e=Object(a.a)().extent([[0,0],[Y,L]]);e(Object(a.m)(T.current)),e.on("brush end",(function(e){D(e.selection&&e.selection.map(z.invert))}))}}),[Y,L,T,z]);var Z=Object(i.useMemo)((function(){return ee(m,n,t,C,u)}),[m,n,t,C,u]),_=Object(i.useMemo)((function(){if(y)return ee(m,n,t)}),[m,n,t,y]);return Object(d.jsxs)("svg",{width:c,height:y?s+.2*s+50:s,children:[Object(d.jsxs)("g",{transform:"translate(".concat(P.left,",").concat(P.top,")"),children:[Object(d.jsx)(X,{xScale:E,height:V,tickOffset:10}),Object(d.jsx)("text",{className:"axis-label",textAnchor:"middle",transform:"translate(".concat(-K,",").concat(V/2,") rotate(-90)"),children:f}),Object(d.jsx)($,{yScale:I,width:Y,tickOffset:5}),!y&&Object(d.jsx)("text",{className:"axis-label",x:Y/2,y:V+50,textAnchor:"middle",children:b}),Object(d.jsxs)(Q,{children:[Z.map((function(e){return Object(d.jsx)("path",{d:G(e),stroke:p||H(W(e[0])),strokeWidth:g,opacity:O,fill:"none"},e[0][n])})),w&&w.map((function(e){var t=e.x,n=e.y;return Object(d.jsx)("circle",{cx:E(t),cy:I(n),fill:"red",opacity:"0.4",r:8},"cord-".concat(t,"-").concat(n))}))]})]}),y&&Object(d.jsxs)(Q,{ref:T,transform:"translate(".concat(P.left,", ").concat(s+l.bottom+l.top-L,")"),children:[Object(d.jsx)(X,{xScale:z,height:L,tickOffset:10}),null===_||void 0===_?void 0:_.map((function(e){return Object(d.jsx)("path",{d:J(e),stroke:p||H(W(e[0])),strokeWidth:g,opacity:O,fill:"none"},e[0][n])}))]})]})},ne=n(469),re=(c.a.Text,ne.a.Option,function(e){var t=e.xScale,n=e.yScale,r=e.width,a=e.tickOffset,i=void 0===a?3:a,c=e.isDollarValue,o=void 0!==c&&c;return Object(d.jsx)(d.Fragment,{children:t.ticks().map((function(e){return Object(d.jsxs)("g",{style:{stroke:"#C0C0BB"},transform:"translate(0, ".concat(n.range()[0]/2,")"),children:[Object(d.jsx)("line",{x1:0,x2:r}),Object(d.jsx)("line",{y1:-i,y2:i,x1:t(e),x2:t(e)}),Object(d.jsx)("text",{dy:".71em",textAnchor:"middle",y:i,x:t(e),children:o?l.format(e):e})]},e)}))})}),ae=function(e){var t=e.xScale,n=e.yScale,r=e.height,a=e.tickOffset,i=void 0===a?3:a,c=e.isDollarValue,o=void 0!==c&&c,s=n.ticks().slice().reverse();return Object(d.jsx)(d.Fragment,{children:s.map((function(e){return Object(d.jsxs)("g",{style:{stroke:"#C0C0BB"},transform:"translate(".concat(t.range()[1]/2,", 0)"),children:[Object(d.jsx)("line",{y1:0,y2:r}),Object(d.jsx)("line",{x1:-i,x2:i,y1:n(e),y2:n(e)}),Object(d.jsx)("text",{textAnchor:"end",x:-i,y:n(e),dy:".32em",children:o?l.format(e):e})]},e)}))})},ie=function(e){var t=e.width,n=e.height,r=void 0===n?400:n,c=e.margin,o=e.x,s=e.y,l=e.xLabel,u=e.yLabel,j=e.color,b=e.radius,m=e.data,h=e.opacity,O=void 0===h?".3":h,x=e.isXAxisDollarValue,g=e.isYAxisDollarValue,p=e.circleText,v=e.renderToolTip,y=Object(i.useCallback)((function(e){return e[o]}),[o]),w=Object(i.useCallback)((function(e){return e[s]}),[s]),S=Object(i.useCallback)((function(e){return j?e[j]:void 0}),[j]),k=Object(i.useMemo)((function(){return Object(a.d)(m,y)}),[y,m]),C=Object(i.useMemo)((function(){return Object(a.d)(m,w)}),[w,m]),D=Object(i.useMemo)((function(){return r-c.top-c.bottom}),[r,c]),T=Object(i.useMemo)((function(){return t-c.left-c.right}),[t,c]),A=Object(i.useMemo)((function(){return Object(a.j)().domain(k).range([0,T]).nice()}),[k,T]),N=Object(i.useMemo)((function(){return Object(a.j)().domain(C).range([D,0])}),[C,D]),W=Object(i.useMemo)((function(){if(j){var e=Array.from(new Set(m.map(S))),t=e.length,n=e.map((function(e,n){return Object(a.h)(n/t)}));return{colorRange:n,colorScale:Object(a.k)().domain(m.map(S)).range(n)}}return{colorRange:void 0,colorScale:void 0}}),[S,m,j]).colorScale,L=Object(i.useMemo)((function(){return Object(M.a)(Object(M.a)({},c),{},{left:8.75*C[1].toString().length+20})}),[C,c]),R=Object(i.useMemo)((function(){return 8.75*C[1].toString().length+10}),[C]),B=Object(i.useMemo)((function(){return Object(d.jsx)("text",{className:"axis-label",textAnchor:"middle",transform:"translate(".concat(-R,",").concat(D/2,") rotate(-90)"),children:u})}),[R,D,u]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("svg",{width:t,height:r,children:Object(d.jsxs)("g",{transform:"translate(".concat(L.left,",").concat(L.top,")"),children:[Object(d.jsx)(re,{xScale:A,yScale:N,width:T,tickOffset:10,isDollarValue:x}),B,Object(d.jsx)(ae,{xScale:A,yScale:N,height:D,tickOffset:5,isDollarValue:g}),Object(d.jsx)("text",{className:"axis-label",x:T/2,y:D+50,textAnchor:"middle",children:l}),Object(d.jsx)(Q,{children:m.map((function(e,t){return Object(d.jsxs)("g",{"data-tip":S(e),"data-for":"tooltip",children:[Object(d.jsx)("circle",{cx:A(y(e)),cy:N(w(e)),r:b,opacity:O,fill:W?W(S(e)):"green"}),p&&Object(d.jsx)("text",{x:A(y(e)),y:N(w(e)),textAnchor:"middle",strokeWidth:"1px",opacity:O,dy:".3em",style:{cursor:"pointer"},children:p(S(e))})]},t)}))})]})}),v&&Object(d.jsx)(f.a,{id:"tooltip",place:"top",effect:"solid",getContent:function(e){var t=function(e){var t=m.find((function(t){return t[j]===e}));return t?{x:t[o],y:t[s]}:{x:0,y:0}}(e);return v(t.x,t.y,e)}})]})},ce=(c.a.Text,ne.a.Option,{alabama:"AL",alaska:"AK",arizona:"AZ",arkansas:"AR",california:"CA",colorado:"CO",connecticut:"CT",delaware:"DE","district of colombia":"DC",florida:"FL",georgia:"GA",hawaii:"HI",idaho:"ID",illinois:"IL",indiana:"IN",iowa:"IA",kansas:"KS",kentucky:" KY",louisiana:"LA",maine:"ME",maryland:"MD",massachusetts:"MA",michigan:"MI",minnesota:"MN",mississippi:"MS",missouri:"MO",montana:"MT",nebraska:"NE",nevada:"NV","new hampshire":"NH","new jersey":"NJ","new mexico":"NM","new york":"NY","north carolina":"NC","north dakota":"ND",ohio:"OH",oklahoma:"OK",oregon:"OR",pennsylvania:" PA","rhode island":"RI","south carolina":"SC","south dakota":"SD",tennessee:"TN",texas:"TX",utah:"UT",vermont:"VT",virginia:"VA",washington:"WA","west virginia":"WV",wisconsin:"WI",wyoming:"WY","american samoa":"AS",guam:"GU","northern mariana islands":"MP","puerto rico":"PR","u.s. virgin islands":"VI","u.s. minor outlying islands":"UM","marshall islands":"MH",micronesia:"FM",palau:"PW"}),oe=c.a.Text,se=function(){var e,t,n=Object(O.a)("minWage",T,t),a=n.data,c=n.isError,u=n.isLoading,j=(null===a||void 0===a?void 0:a[0].year)||1968,b=(null===a||void 0===a||null===(e=a[a.length-1])||void 0===e?void 0:e.year)||2020,f=2001,m=Object(i.useState)(!0),x=Object(r.a)(m,2),g=x[0],p=x[1],v=Object(i.useState)(!0),y=Object(r.a)(v,2),w=y[0],M=y[1],S=Object(i.useState)(j),k=Object(r.a)(S,2),C=k[0],D=k[1],A=Object(i.useState)(f),N=Object(r.a)(A,2),R=N[0],B=N[1],F=Object(i.useState)("all"),z=Object(r.a)(F,2),U=z[0],H=z[1],P=Object(i.useMemo)((function(){return null===a||void 0===a?void 0:a.filter((function(e){return e.studio&&e.year===R}))}),[a,R]),X=function(e,t,n){var r=null;return t&&(r=Object(d.jsx)(G,{strong:!0,style:{color:"red"},children:"Failed To Load Dataset."})),e&&(r=Object(d.jsx)(h.a,{})),n||e||(r=Object(d.jsx)(G,{strong:!0,children:"No Data Found."})),{fallback:r}}(u,c,a).fallback;J(b,j,!g,C||1968,D),J(2020,f,!w,R,B);if(X||!a||!P)return X;var $=Object(d.jsxs)(L.b,{direction:"vertical",children:[Object(d.jsx)(Y.a,{}),Object(d.jsx)(oe,{strong:!0,style:{fontSize:24},children:"Description"}),Object(d.jsxs)(oe,{children:["A geospatial chart depicting effective minimum wage data for all U.S states and territories since 1968. It visualizes data supplied by the U.S Department of Labor. All data can be found in the"," ",Object(d.jsx)(E.b,{to:{pathname:I},target:"_blank",children:"Minimum Wage Dataset"}),"."]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Dollar amounts shown are in 2020 dollars."}),Object(d.jsx)("li",{children:"Darker state colors represent higher minimum wages."})]}),Object(d.jsx)(Y.a,{}),Object(d.jsx)(oe,{strong:!0,style:{fontSize:24},children:"What's New"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Toggle that automates incrementing year"}),Object(d.jsx)("li",{children:"Legend showing what colors represent on the geospatial chart"}),Object(d.jsx)("li",{children:"When hovering on a state, show the effective minimum wage for that state in a box below the chart"}),Object(d.jsx)("li",{children:"Zoom and pan functionality is working."})]}),Object(d.jsx)(Y.a,{}),Object(d.jsx)(oe,{strong:!0,style:{fontSize:24},children:"Still To Do"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"For smaller screen sizes, figure out why the chart does not center properly on load"}),Object(d.jsx)("li",{children:"Implement an actual tooltip that appears when hovering on a state"})]})]});return Object(d.jsx)(K,{pageTitle:"Minimum Wage Geospatial Chart",description:$,showDescriptionTitle:!1,generateChart:function(e){var t,n,r=e.width;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(s.a,{justify:"space-between",style:{width:r},children:[Object(d.jsx)(o.a,{style:{width:"30%",display:"block",margin:"auto"},children:Object(d.jsx)(V,{defaultYear:C,minYear:j,maxYear:b,incrementYearDisabled:g,toggleIncrementYear:p,onChange:D})}),Object(d.jsx)(o.a,{style:{textAlign:"center",width:"50%"},children:Object(d.jsx)(oe,{strong:!0,style:{fontSize:24},children:"all"!==U?U:"All States"})})]}),Object(d.jsxs)(s.a,{style:{width:r},children:[Object(d.jsx)(o.a,{flex:1,children:Object(d.jsx)(W,{width:r/2,height:400,rows:a,timeField:"year",stateField:"state",colorRepresentation:"effectiveMinWageTodayDollars",chosenTimeField:C,onClick:function(e,t){return H(t)},showLegend:!0,renderToolTip:function(e,t){return Object(d.jsxs)(L.b,{direction:"vertical",children:[Object(d.jsxs)(oe,{style:{color:"white"},children:["State: ",e]}),Object(d.jsxs)(oe,{style:{color:"white"},children:["Effective Minimum Wage:"," ",l.format(t)]})]})}})}),Object(d.jsx)(o.a,{flex:1,children:Object(d.jsx)(te,{width:r/2,height:400,margin:{top:30,right:30,bottom:50,left:0},data:a,xLabel:"Year",yLabel:"Effective Minimum Wage ($)",x:"year",y:"effectiveMinWageTodayDollars",grouping:"state",cords:"all"!==U?[{x:C,y:null!==(t=null===(n=a.find((function(e){var t;return e.year===C&&(null===(t=e.state)||void 0===t?void 0:t.toLowerCase())===U.toLowerCase()})))||void 0===n?void 0:n.effectiveMinWageTodayDollars)&&void 0!==t?t:0}]:void 0,filter:"all"!==U?function(e){return e.state===U}:void 0,opacity:".4",strokeWidth:3,stroke:"all"!==U?"blue":void 0})})]}),Object(d.jsx)(Y.a,{}),Object(d.jsx)(s.a,{style:{width:r},justify:"center",children:Object(d.jsx)(o.a,{style:{width:"30%"},children:Object(d.jsx)(V,{defaultYear:R,minYear:f,maxYear:2020,incrementYearDisabled:w,toggleIncrementYear:M,onChange:B})})}),Object(d.jsx)(s.a,{style:{width:r},children:Object(d.jsx)(o.a,{flex:"1",children:Object(d.jsx)(ie,{width:r,height:400,margin:{top:30,right:30,bottom:60,left:0},data:P,xLabel:"Two Bedroom Apartment Cost ($)",yLabel:"Minimum Wage ($/hour)",x:"twoBedroom",y:"stateMinWageTodayDollars",color:"state",radius:12,isXAxisDollarValue:!0,isYAxisDollarValue:!0,opacity:"0.4",circleText:function(e){return function(e){var t=e.toLowerCase();return ce[t]}(e)},renderToolTip:function(e,t,n){return Object(d.jsxs)(L.b,{direction:"vertical",children:[Object(d.jsxs)(oe,{style:{color:"white"},children:["State: ",n]}),Object(d.jsxs)(oe,{style:{color:"white"},children:["Rent Cost: ",l.format(e)]}),Object(d.jsxs)(oe,{style:{color:"white"},children:["Effective Minimum Wage: ",l.format(t)]})]})}})})})]})}})}}}]);
//# sourceMappingURL=4.db3f73e1.chunk.js.map