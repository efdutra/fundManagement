(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)i=o[l],n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"006f":function(e,t,r){"use strict";var a=r("9d29"),n=r.n(a);n.a},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("5f5b"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-content-stretch flex-wrap align-items-stretch",attrs:{id:"app"}},[r("card",{attrs:{idUser:"2",usr:"industria1@yh-funds-management-api.com",pass:"yandeh@2019"}}),r("card",{attrs:{idUser:"3",usr:"industria2@yh-funds-management-api.com",pass:"yandeh@2019",showHist:"true"}})],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.users.length>0&&e.actualOk?r("div",{staticClass:"wrapper"},[r("div",{attrs:{id:"funds"}},[r("div",{staticClass:"title"},[e._v(e._s(e.actualUser.username))]),r("b-tabs",{attrs:{fill:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[e.actualOk?r("b-tab",[r("template",{slot:"title"},[r("fa",{attrs:{icon:["fas","home"]}})],1),r("div",{attrs:{id:"camp"}},[Object.keys(e.actualUser.seeds).length>0?r("div",{attrs:{id:"listSeeds"}},[r("h2",[e._v("Campanhas participantes")]),e._l(e.actualUser.seeds,function(t){return[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"seed"+e.actualUser.id+t.id,expression:"'seed' + actualUser.id+sd.id"}],attrs:{variant:"info"}},[r("fa",{attrs:{icon:["far","file"]}}),e._v("\n                "+e._s(t.description)+"\n            ")],1),r("b-collapse",{attrs:{id:"seed"+e.actualUser.id+t.id,accordion:"ac"+e.actualUser.id}},[r("div",{staticClass:"results"},[r("div",{staticClass:"valores"},[r("h4",[e._v("Total do Crédito:")]),r("span",[e._v(e._s(parseFloat(t.value).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))]),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()]),r("div",{staticClass:"valores"},[r("h4",[e._v("Parcial do Crédito:")]),r("span",[e._v(e._s(parseFloat(t.balance).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))]),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()])]),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"seed"+e.actualUser.id+t.id+"-inner",expression:"'seed' + actualUser.id+sd.id + '-inner'"}],attrs:{variant:"info"}},[e._v("Ver saldo detalhado")]),r("b-collapse",{attrs:{id:"seed"+e.actualUser.id+t.id+"-inner"}},e._l(t.history,function(a,n){return r("div",{staticClass:"history"},[a.created?[r("p",[e._v("Você criou a campanha "),r("strong",[e._v(e._s(t.description))]),e._v(" com um valor de "),r("strong",[e._v(e._s(parseFloat(a.value).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()])])]:[0!=n?["USED"==t.history[n-1].status&&(t.history[n-1].emitterId!=e.actualUser.id||t.history[n-1].emitterId==t.history[n-1].ownerId)||"USED"==a.status&&n==t.history.length?[r("p",[e._v("Você sacou "),r("strong",[e._v(e._s(parseFloat(t.history[n-1].balance).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()])])]:a.sender?[r("p",[e._v("Você transferiu "),r("strong",[e._v(e._s(parseFloat(a.value).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()]),e._v(" para "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==a.ownerId}).username))])])]:[r("p",[e._v("Você recebeu "),r("strong",[e._v(e._s(parseFloat(a.value).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()]),e._v(" de "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==a.emitterId}).username))])])]]:[a.sender?[r("p",[e._v("Você transferiu "),r("strong",[e._v(e._s(parseFloat(a.value).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()]),e._v(" para "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==a.ownerId}).username))])])]:[r("p",[e._v("Você recebeu "),r("strong",[e._v(e._s(parseFloat(a.value).toLocaleString("pt-BR","PROMOTIONAL"==t.type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==t.type?r("span",[e._v(" Pontos")]):e._e()]),e._v(" de "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==a.emitterId}).username))])])]]]],2)}),0)],1)]})],2):r("div",[r("h2",[e._v("Você não possui campanhas")])])])],2):e._e(),r("b-tab",[r("template",{slot:"title"},[r("fa",{attrs:{icon:["fas","plus-circle"]}})],1),r("div",{attrs:{id:"create"}},[r("h2",[e._v("Criar Crédito")]),r("form",{attrs:{action:""}},[r("label",{attrs:{for:"nome"}},[e._v("Nome:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.createName,expression:"createName"}],attrs:{name:"nome",type:"text",placeholder:"Digite aqui o nome do seed"},domProps:{value:e.createName},on:{input:function(t){t.target.composing||(e.createName=t.target.value)}}}),r("br"),r("label",{attrs:{for:"tipo"}},[e._v("Tipo:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"reais",name:"tipo",value:"MONETARY"},domProps:{checked:e._q(e.type,"MONETARY")},on:{change:function(t){e.type="MONETARY"}}}),r("label",{attrs:{for:"reais"}},[e._v("Reais (R$)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"promo",name:"tipo",value:"PROMOTIONAL"},domProps:{checked:e._q(e.type,"PROMOTIONAL")},on:{change:function(t){e.type="PROMOTIONAL"}}}),r("label",{attrs:{for:"promo"}},[e._v("Pontos")]),r("br"),r("label",{attrs:{for:"valor"}},[e._v("Valor:")]),"MONETARY"==e.type?r("vue-autonumeric",{attrs:{options:{digitGroupSeparator:".",decimalCharacter:",",decimalCharacterAlternative:".",currencySymbol:"R$"},placeholder:"Digite o valor"},model:{value:e.createVal,callback:function(t){e.createVal=t},expression:"createVal"}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.createVal,expression:"createVal"}],attrs:{name:"valor",type:"number",step:"1",onkeypress:"return event.charCode >= 48 && event.charCode <= 57",placeholder:"Digite o valor"},domProps:{value:e.createVal},on:{input:function(t){t.target.composing||(e.createVal=t.target.value)}}}),r("br"),r("button",{on:{click:e.createSeed}},[e._v("Criar")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.msgResposta.length>0,expression:"msgResposta.length > 0"}],staticClass:"resposta"},[r("hr"),r("p",[e._v(e._s(e.msgResposta)),r("br"),e._v("Atualizando...")]),r("hr")])])],2),e.actualOk?r("b-tab",[r("template",{slot:"title"},[r("fa",{attrs:{icon:["fas","exchange-alt"]}})],1),Object.keys(e.actualUser.seeds).length>0?r("div",{staticClass:"titleSelected"},[e._v("Saldo Disponível em: "+e._s(e.actualUser.seeds[e.fracIdCamp].description)+" - "+e._s(parseFloat(e.actualUser.seeds[e.fracIdCamp].balance).toLocaleString("pt-BR","PROMOTIONAL"==e.actualUser.seeds[e.fracIdCamp].type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==e.actualUser.seeds[e.fracIdCamp].type?r("span",[e._v(" Pontos")]):e._e()]):e._e(),Object.keys(e.actualUser.seeds).length>0?r("div",{attrs:{id:"frac"}},[r("h2",[e._v("Transferir Crédito")]),r("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.fracSeed(t)}}},[r("label",{attrs:{for:"seed"}},[e._v("Crédito:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fracIdCamp,expression:"fracIdCamp"}],staticClass:"campanha",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.fracIdCamp=t.target.multiple?r:r[0]}}},e._l(e.actualUser.seeds,function(t){return r("option",{attrs:{"data-seed":t.docId},domProps:{value:t.id}},[e._v(e._s(t.description))])}),0),r("br"),r("label",{attrs:{for:"dest"}},[e._v("Destino:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fracIdUser,expression:"fracIdUser"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.fracIdUser=t.target.multiple?r:r[0]}}},e._l(e.users,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.username))])}),0),r("br"),r("label",{attrs:{for:"valor"}},[e._v("Valor:")]),"MONETARY"==e.actualUser.seeds[e.fracIdCamp].type?r("vue-autonumeric",{attrs:{options:{digitGroupSeparator:".",decimalCharacter:",",decimalCharacterAlternative:".",currencySymbol:"R$"},placeholder:"Digite o valor"},model:{value:e.fracValue,callback:function(t){e.fracValue=t},expression:"fracValue"}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.fracValue,expression:"fracValue"}],attrs:{name:"valor",type:"number",step:"1",onkeypress:"return event.charCode >= 48 && event.charCode <= 57",placeholder:"Digite o valor"},domProps:{value:e.fracValue},on:{input:function(t){t.target.composing||(e.fracValue=t.target.value)}}}),r("br"),r("button",{attrs:{type:"submit"}},[e._v("Transferir")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.msgResposta.length>0,expression:"msgResposta.length > 0"}],staticClass:"resposta"},[r("hr"),r("p",[e._v(e._s(e.msgResposta)),r("br"),e._v("Atualizando...")]),r("hr")])]):r("div",[r("h2",[e._v("Você não possui créditos para transferir")])])],2):e._e(),e.actualOk?r("b-tab",[r("template",{slot:"title"},[r("fa",{attrs:{icon:["fas","wallet"]}})],1),Object.keys(e.actualUser.seeds).length>0?r("div",{staticClass:"titleSelected"},[e._v("Saldo Disponível em: "+e._s(e.actualUser.seeds[e.fracIdCamp].description)+" - "+e._s(parseFloat(e.actualUser.seeds[e.fracIdCamp].balance).toLocaleString("pt-BR","PROMOTIONAL"==e.actualUser.seeds[e.fracIdCamp].type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}))),"PROMOTIONAL"==e.actualUser.seeds[e.fracIdCamp].type?r("span",[e._v(" Pontos")]):e._e()]):e._e(),Object.keys(e.actualUser.seeds).length>0?r("div",{attrs:{id:"cashout"}},[r("h2",[e._v("Usar Crédito")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fracIdCamp,expression:"fracIdCamp"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.fracIdCamp=t.target.multiple?r:r[0]}}},e._l(e.actualUser.seeds,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.description))])}),0),r("br"),"MONETARY"==e.actualUser.seeds[e.fracIdCamp].type?r("vue-autonumeric",{attrs:{options:{digitGroupSeparator:".",decimalCharacter:",",decimalCharacterAlternative:".",currencySymbol:"R$"},placeholder:"Digite o valor"},model:{value:e.cashValue,callback:function(t){e.cashValue=t},expression:"cashValue"}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.cashValue,expression:"cashValue"}],attrs:{name:"valor",type:"number",step:"1",onkeypress:"return event.charCode >= 48 && event.charCode <= 57",placeholder:"Digite o valor"},domProps:{value:e.cashValue},on:{input:function(t){t.target.composing||(e.cashValue=t.target.value)}}}),r("br"),r("button",{on:{click:function(t){return t.preventDefault(),e.cashout(t)}}},[e._v("Usar")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.msgResposta.length>0,expression:"msgResposta.length > 0"}],staticClass:"resposta"},[r("hr"),r("p",[e._v(e._s(e.msgResposta)),r("br"),e._v("Atualizando...")]),r("hr")])],1):r("div",[r("h2",[e._v("Você não possui créditos para utilizar")])])],2):e._e(),r("b-tab",[r("template",{slot:"title"},[r("fa",{attrs:{icon:["fas","user-circle"]}})],1),r("div",{attrs:{id:"user"}},[r("h2",[e._v("Trocar usuário")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.idUserProp,expression:"idUserProp"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.idUserProp=t.target.multiple?r:r[0]}}},e._l(e.users,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.username))])}),0)])],2)],1)],1),e.showHist?r("div",{attrs:{id:"logs"}},[r("div",{staticClass:"sysout"},[r("h2",[e._v("Histórico geral")]),r("hr"),r("div",{staticClass:"wrapperLogs"},[e._l(e.docsH,function(t){return e.docs.length>0?[t.parentId?["USED"==t.status?[r("span",[e._v("O usuário "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.ownerId}).username))]),e._v(" fez um saque da campanha "),r("strong",[e._v(e._s(e.seeds.find(function(e){return e.id==t.seedId}).description))]),e._v(" com um valor de "),r("strong",[e._v(e._s(parseFloat(t.balance).toLocaleString("pt-BR","PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))])]),"PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?r("span",[r("strong",[e._v(" Pontos")])]):e._e(),r("br"),r("br"),t.ownerId!=t.emitterId?[r("span",[e._v("O usuário "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.ownerId}).username))]),e._v(" recebeu de "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.emitterId}).username))]),e._v(" da campanha "),r("strong",[e._v(e._s(e.seeds.find(function(e){return e.id==t.seedId}).description))]),e._v(" um valor de "),r("strong",[e._v(e._s(parseFloat(t.value).toLocaleString("pt-BR","PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))])]),"PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?r("span",[r("strong",[e._v(" Pontos")])]):e._e(),r("br"),r("br")]:e._e()]:t.parentId!=t.ownerId&&t.emitterId!=t.ownerId?[r("span",[e._v("O usuário "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.ownerId}).username))]),e._v(" recebeu de "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.emitterId}).username))]),e._v(" da campanha "),r("strong",[e._v(e._s(e.seeds.find(function(e){return e.id==t.seedId}).description))]),e._v(" um valor de "),r("strong",[e._v(e._s(parseFloat(t.value).toLocaleString("pt-BR","PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))])]),"PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?r("span",[r("strong",[e._v(" Pontos")])]):e._e(),r("br"),r("br")]:"USED"!=e.docs.find(function(e){return e.id==t.parentId}).status?[r("span",[e._v("O usuário "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.emitterId}).username))]),e._v(" enviou para "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.ownerId}).username))]),e._v(" da campanha "),r("strong",[e._v(e._s(e.seeds.find(function(e){return e.id==t.seedId}).description))]),e._v(" um valor de "),r("strong",[e._v(e._s(parseFloat(t.value).toLocaleString("pt-BR","PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))])]),"PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?r("span",[r("strong",[e._v(" Pontos")])]):e._e(),r("br"),r("br")]:e._e()]:[r("span",[e._v("O usuário "),r("strong",[e._v(e._s(e.users.find(function(e){return e.id==t.emitterId}).username))]),e._v(" criou a campanha "),r("strong",[e._v(e._s(e.seeds.find(function(e){return e.id==t.seedId}).description))]),e._v(" com um valor de "),r("strong",[e._v(e._s(parseFloat(t.value).toLocaleString("pt-BR","PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?{}:{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})))])]),"PROMOTIONAL"==e.seeds.find(function(e){return e.id==t.seedId}).type?r("span",[r("strong",[e._v(" Pontos")])]):e._e(),r("br"),r("br")]]:e._e()})],2)])]):e._e()]):e._e()},c=[],u=(r("c5f6"),r("55dd"),r("ac6a"),r("456d"),r("7514"),r("96cf"),r("3b8d")),d=r("e543"),l=r.n(d),p={name:"card",props:["idUser","usr","pass","showHist"],components:{VueAutonumeric:l.a},data:function(){return{tabIndex:0,token:"https://sso-dev.yandeh.com.br/auth/realms/YandehDev/protocol/openid-connect/token",apiPath:"https://yh-funds-management-api-dev.devyandeh.com.br/api/v1",idUserProp:"",seeds:[],users:[],docs:[],docsH:[],actualUser:"",fracIdCamp:"",fracIdUser:"",fracValue:"",type:"",frac:"",createVal:"",createName:"",resToken:"",actualOk:!1,msgResposta:"",logins:{2:"industria1@yh-funds-management-api.com",3:"industria2@yh-funds-management-api.com",4:"investimentoyandeh@yh-funds-management-api.com",5:"mercado1@yh-funds-management-api.com",6:"mercado2@yh-funds-management-api.com",7:"mercado3@yh-funds-management-api.com",8:"funcionario1@yh-funds-management-api.com",9:"funcionario2@yh-funds-management-api.com",10:"funcionario3@yh-funds-management-api.com"}}},watch:{idUserProp:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.users.length>0)){e.next=10;break}return e.next=3,this.getToken();case 3:this.mountObj(),this.actualUser=this.users.find(function(e){return e.id==t}),this.fracIdCamp=Object.keys(this.actualUser.seeds).length>0?this.actualUser.seeds[Object.keys(this.actualUser.seeds)[0]].id:"--",this.fracIdUser=this.users.filter(function(e){return e.id!=t})[0].id,this.frac=Object.keys(this.actualUser.seeds).length>0?this.actualUser.seeds[Object.keys(this.actualUser.seeds)[0]].id:"--",this.msgResposta="",this.tabIndex=0;case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},methods:{reloadAllCards:function(){this.$root.$emit("reloadCards")},getToken:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.token,{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},body:"grant_type=password&scope=openid&client_id=yh-funds-management-api&client_secret=e78a874f-d70e-410d-93a9-3656d546ea78&username="+this.logins[this.idUserProp]+"&password="+this.pass}).then(function(e){return e.json()}).then(function(e){t.resToken="Bearer "+e.access_token}).catch(function(e){return console.log(e)});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getSaldo:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.apiPath,"/users/").concat(t,"/balances"),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:this.resToken}}).then(function(e){return e.json()}).then(function(e){return e.content}).catch(function(e){return console.log(e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),loadValues:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r=this,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:this.idUser,a.length>1&&void 0!==a[1]&&a[1],e.next=4,this.getToken();case 4:return e.next=6,fetch("".concat(this.apiPath,"/users"),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:this.resToken}}).then(function(e){return e.json()}).then(function(e){r.users=e.content.sort(function(e,t){var r=e.id<t.id?-1:1;return r}),r.users.forEach(function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.getSaldo(t.id);case 2:t["saldo"]=e.sent;case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),console.log("USERS: ",r.users)});case 6:return e.next=8,fetch("".concat(this.apiPath,"/seeds?size=2000"),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:this.resToken}}).then(function(e){return e.json()}).then(function(e){r.seeds=e.content.sort(function(e,t){var r=e.id<t.id?-1:1;return r}),console.log("SEEDS: ",r.seeds)});case 8:return e.next=10,fetch("".concat(this.apiPath,"/documents?size=2000"),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:this.resToken}}).then(function(e){return e.json()}).then(function(e){r.docs=e.content.sort(function(e,t){var r=e.id<t.id?-1:1;return r}),r.docsH=JSON.parse(JSON.stringify(r.docs)).reverse(),console.log("DOCS: ",r.docs)});case 10:this.idUserProp=t,this.users.length>0&&(this.mountObj(),this.actualUser=this.users.find(function(e){return e.id==r.idUserProp}),this.fracIdCamp=Object.keys(this.actualUser.seeds).length>0?this.actualUser.seeds[Object.keys(this.actualUser.seeds)[0]].id:"--",this.fracIdUser=this.users.filter(function(e){return e.id!=r.idUserProp})[0].id,this.frac=Object.keys(this.actualUser.seeds).length>0?this.actualUser.seeds[Object.keys(this.actualUser.seeds)[0]].id:"--",window.setTimeout(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;e.msgResposta="",r.tabIndex=0},3e3)),this.fracValue="",this.createVal="",this.cashValue="",this.createName="",this.type="",this.mountObj(),console.log("ActualUser: "+this.actualUser.username,this.actualUser);case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),mountObj:function(){var e=this;this.users.forEach(function(t){t["seeds"]={},t.id==e.idUserProp&&e.docs.filter(function(t){return t.ownerId==e.idUserProp||t.emitterId==e.idUserProp}).forEach(function(r){t["seeds"][r.seedId]?t["seeds"][r.seedId]["history"].push({docId:r.id,balance:r.balance,value:r.value,status:r.status,emitterId:r.emitterId,ownerId:r.ownerId,created:!r.parentId,sender:!(r.emitterId!=e.idUserProp||!r.parentId)}):t["seeds"][r.seedId]={description:e.seeds.find(function(e){return e.id==r.seedId}).description,id:r.seedId,originalDocId:e.seeds.find(function(e){return e.id==r.seedId}).documentRootId,type:e.seeds.find(function(e){return e.id==r.seedId}).type,value:t.saldo.find(function(e){return e.id.seedId==r.seedId})?t.saldo.find(function(e){return e.id.seedId==r.seedId}).value:r.value,balance:t.saldo.find(function(e){return e.id.seedId==r.seedId})?t.saldo.find(function(e){return e.id.seedId==r.seedId}).balance:r.balance,docId:r.id,history:[{docId:r.id,balance:r.balance,value:r.value,emitterId:r.emitterId,ownerId:r.ownerId,status:r.status,created:!r.parentId,sender:!(r.emitterId!=e.idUserProp||!r.parentId)}]}})}),this.actualOk=!0},init:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.idUserProp=this.idUser,e.next=3,this.loadValues();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),createSeed:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),r={description:this.createName,type:this.type,value:Number("PROMOTIONAL"==this.type?parseInt(this.createVal):this.createVal)},e.next=4,fetch("".concat(this.apiPath,"/seeds"),{method:"POST",body:JSON.stringify(r),headers:new Headers({Authorization:this.resToken,Accept:"application/json","Content-Type":"application/json"})}).then(function(e){a.status(e,"create"),console.log("gravou seed ==> ",e)});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),fracSeed:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={fractions:[{username:this.users.find(function(e){return e.id==a.fracIdUser}).username,value:Number("PROMOTIONAL"==this.actualUser.seeds[this.fracIdCamp].type?parseInt(this.fracValue):this.fracValue),description:"Fracionamento de crédito"}]},e.next=3,fetch("".concat(this.apiPath,"/seeds/").concat(this.fracIdCamp,"/fractionate"),{method:"POST",body:JSON.stringify(r),headers:new Headers({Authorization:this.resToken,Accept:"application/json","Content-Type":"application/json"})}).then(function(e){a.status(e,"frac"),console.log("Fracionou Document ==> ",e)}).catch(function(e){return console.log(e)});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),cashout:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),r={value:this.cashValue},e.next=4,fetch("".concat(this.apiPath,"/seeds/").concat(this.fracIdCamp,"/cash-out"),{method:"PUT",body:JSON.stringify(r),headers:new Headers({Authorization:this.resToken,Accept:"application/json","Content-Type":"application/json"})}).then(function(e){a.status(e,"cashout"),console.log("diminuiu valor do document, feito cashout ==> ",e)}).catch(function(e){return console.log(e)});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),status:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={cashout:"Feito cashout",create:"Campanha criada com sucesso!",frac:"Crédito transferido com sucesso"},401==t.status&&(this.msgResposta="Você não tem permissão para visualizar este conteúdo"),422!=t.status&&400!=t.status||(this.msgResposta="Erro inesperado"),200!=t.status&&204!=t.status&&201!=t.status||(this.msgResposta=a[r]),e.next=6,this.reloadAllCards();case 6:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;this.$root.$on("reloadCards",Object(u["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadValues(e.idUserProp,!0);case 2:case"end":return t.stop()}},t)}))),this.init()}},m=p,f=(r("006f"),r("2877")),h=Object(f["a"])(m,o,c,!1,null,"ce27762a",null),v=h.exports,g={name:"app",components:{card:v}},_=g,y=(r("034f"),Object(f["a"])(_,s,i,!1,null,null,null)),O=y.exports,b=r("cb5b"),I=r("ad3d"),R=r("da3e"),w=r("faaa");b["a"].library.add(R["a"]),b["a"].library.add(w["a"]),a["default"].component("fa",I["a"]),a["default"].config.productionTip=!1,a["default"].use(n["a"]),new a["default"]({render:function(e){return e(O)}}).$mount("#app")},"64a9":function(e,t,r){},"9d29":function(e,t,r){}});
//# sourceMappingURL=app.47dd58fc.js.map