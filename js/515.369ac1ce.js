"use strict";(self["webpackChunkIDNCreaterPages"]=self["webpackChunkIDNCreaterPages"]||[]).push([[515],{2515:function(t,e,i){i.d(e,{D:function(){return c},S:function(){return u},a:function(){return y},b:function(){return f},c:function(){return h},d:function(){return ut},e:function(){return l},p:function(){return o},s:function(){return pt}});i(7658);var s=i(9673),n=i(6862),r=i(8751),a=function(){var t=function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},e=[1,2],i=[1,3],s=[1,5],n=[1,7],r=[2,5],a=[1,15],o=[1,17],c=[1,21],l=[1,22],h=[1,23],u=[1,24],d=[1,37],p=[1,25],y=[1,26],f=[1,27],g=[1,28],m=[1,29],_=[1,32],S=[1,33],k=[1,34],b=[1,35],T=[1,36],E=[1,39],v=[1,40],x=[1,41],D=[1,42],C=[1,38],$=[1,45],A=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],L=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],I=[1,4,5,7,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],O=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],N={trace:function(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,directive:6,SD:7,document:8,line:9,statement:10,classDefStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"--\x3e":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,class:42,CLASSENTITY_IDS:43,STYLECLASS:44,openDirective:45,typeDirective:46,closeDirective:47,":":48,argDirective:49,direction_tb:50,direction_bt:51,direction_rl:52,direction_lr:53,eol:54,";":55,EDGE_STATE:56,STYLE_SEPARATOR:57,left_of:58,right_of:59,open_directive:60,type_directive:61,arg_directive:62,close_directive:63,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",7:"SD",14:"DESCR",15:"--\x3e",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"class",43:"CLASSENTITY_IDS",44:"STYLECLASS",48:":",50:"direction_tb",51:"direction_bt",52:"direction_rl",53:"direction_lr",55:";",56:"EDGE_STATE",57:"STYLE_SEPARATOR",58:"left_of",59:"right_of",60:"open_directive",61:"type_directive",62:"arg_directive",63:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[9,1],[9,1],[10,1],[10,1],[10,1],[10,2],[10,3],[10,4],[10,1],[10,2],[10,1],[10,4],[10,3],[10,6],[10,1],[10,1],[10,1],[10,1],[10,4],[10,4],[10,1],[10,1],[10,2],[10,2],[10,1],[11,3],[11,3],[12,3],[6,3],[6,5],[32,1],[32,1],[32,1],[32,1],[54,1],[54,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1],[45,1],[46,1],[49,1],[47,1]],performAction:function(t,e,i,s,n,r,a){var o=r.length-1;switch(n){case 4:return s.setRootDoc(r[o]),r[o];case 5:this.$=[];break;case 6:"nl"!=r[o]&&(r[o-1].push(r[o]),this.$=r[o-1]);break;case 7:case 8:this.$=r[o];break;case 9:this.$="nl";break;case 12:this.$=r[o];break;case 13:const t=r[o-1];t.description=s.trimColon(r[o]),this.$=t;break;case 14:this.$={stmt:"relation",state1:r[o-2],state2:r[o]};break;case 15:const e=s.trimColon(r[o]);this.$={stmt:"relation",state1:r[o-3],state2:r[o-1],description:e};break;case 19:this.$={stmt:"state",id:r[o-3],type:"default",description:"",doc:r[o-1]};break;case 20:var c=r[o],l=r[o-2].trim();if(r[o].match(":")){var h=r[o].split(":");c=h[0],l=[l,h[1]]}this.$={stmt:"state",id:c,type:"default",description:l};break;case 21:this.$={stmt:"state",id:r[o-3],type:"default",description:r[o-5],doc:r[o-1]};break;case 22:this.$={stmt:"state",id:r[o],type:"fork"};break;case 23:this.$={stmt:"state",id:r[o],type:"join"};break;case 24:this.$={stmt:"state",id:r[o],type:"choice"};break;case 25:this.$={stmt:"state",id:s.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[o-1].trim(),note:{position:r[o-2].trim(),text:r[o].trim()}};break;case 30:this.$=r[o].trim(),s.setAccTitle(this.$);break;case 31:case 32:this.$=r[o].trim(),s.setAccDescription(this.$);break;case 33:case 34:this.$={stmt:"classDef",id:r[o-1].trim(),classes:r[o].trim()};break;case 35:this.$={stmt:"applyClass",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 38:s.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:s.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:s.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:s.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:r[o].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:r[o-2].trim(),classes:[r[o].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:r[o-2].trim(),classes:[r[o].trim()],type:"default",description:""};break;case 50:s.parseDirective("%%{","open_directive");break;case 51:s.parseDirective(r[o],"type_directive");break;case 52:r[o]=r[o].trim().replace(/'/g,'"'),s.parseDirective(r[o],"arg_directive");break;case 53:s.parseDirective("}%%","close_directive","state");break}},table:[{3:1,4:e,5:i,6:4,7:s,45:6,60:n},{1:[3]},{3:8,4:e,5:i,6:4,7:s,45:6,60:n},{3:9,4:e,5:i,6:4,7:s,45:6,60:n},{3:10,4:e,5:i,6:4,7:s,45:6,60:n},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],r,{8:11}),{46:12,61:[1,13]},{61:[2,50]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4],4:a,5:o,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,22:u,24:d,25:p,26:y,27:f,28:g,29:m,32:31,33:_,35:S,37:k,38:b,42:T,45:6,50:E,51:v,52:x,53:D,56:C,60:n},{47:43,48:[1,44],63:$},t([48,63],[2,51]),t(A,[2,6]),{6:30,10:46,11:18,12:19,13:20,16:c,17:l,19:h,22:u,24:d,25:p,26:y,27:f,28:g,29:m,32:31,33:_,35:S,37:k,38:b,42:T,45:6,50:E,51:v,52:x,53:D,56:C,60:n},t(A,[2,8]),t(A,[2,9]),t(A,[2,10]),t(A,[2,11]),t(A,[2,12],{14:[1,47],15:[1,48]}),t(A,[2,16]),{18:[1,49]},t(A,[2,18],{20:[1,50]}),{23:[1,51]},t(A,[2,22]),t(A,[2,23]),t(A,[2,24]),t(A,[2,25]),{30:52,31:[1,53],58:[1,54],59:[1,55]},t(A,[2,28]),t(A,[2,29]),{34:[1,56]},{36:[1,57]},t(A,[2,32]),{39:[1,58],41:[1,59]},{43:[1,60]},t(L,[2,44],{57:[1,61]}),t(L,[2,45],{57:[1,62]}),t(A,[2,38]),t(A,[2,39]),t(A,[2,40]),t(A,[2,41]),t(I,[2,36]),{49:63,62:[1,64]},t(I,[2,53]),t(A,[2,7]),t(A,[2,13]),{13:65,24:d,56:C},t(A,[2,17]),t(O,r,{8:66}),{24:[1,67]},{24:[1,68]},{23:[1,69]},{24:[2,48]},{24:[2,49]},t(A,[2,30]),t(A,[2,31]),{40:[1,70]},{40:[1,71]},{44:[1,72]},{24:[1,73]},{24:[1,74]},{47:75,63:$},{63:[2,52]},t(A,[2,14],{14:[1,76]}),{4:a,5:o,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,21:[1,77],22:u,24:d,25:p,26:y,27:f,28:g,29:m,32:31,33:_,35:S,37:k,38:b,42:T,45:6,50:E,51:v,52:x,53:D,56:C,60:n},t(A,[2,20],{20:[1,78]}),{31:[1,79]},{24:[1,80]},t(A,[2,33]),t(A,[2,34]),t(A,[2,35]),t(L,[2,46]),t(L,[2,47]),t(I,[2,37]),t(A,[2,15]),t(A,[2,19]),t(O,r,{8:81}),t(A,[2,26]),t(A,[2,27]),{4:a,5:o,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,21:[1,82],22:u,24:d,25:p,26:y,27:f,28:g,29:m,32:31,33:_,35:S,37:k,38:b,42:T,45:6,50:E,51:v,52:x,53:D,56:C,60:n},t(A,[2,21])],defaultActions:{7:[2,50],8:[2,1],9:[2,2],10:[2,3],54:[2,48],55:[2,49],64:[2,52]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],s=[],n=[null],r=[],a=this.table,o="",c=0,l=0,h=2,u=1,d=r.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(y.yy[f]=this.yy[f]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,"undefined"==typeof p.yylloc&&(p.yylloc={});var g=p.yylloc;r.push(g);var m=p.options&&p.options.ranges;function _(){var t;return t=s.pop()||p.lex()||u,"number"!==typeof t&&(t instanceof Array&&(s=t,t=s.pop()),t=e.symbols_[t]||t),t}"function"===typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;var S,k,b,T,E,v,x,D,C={};while(1){if(k=i[i.length-1],this.defaultActions[k]?b=this.defaultActions[k]:(null!==S&&"undefined"!=typeof S||(S=_()),b=a[k]&&a[k][S]),"undefined"===typeof b||!b.length||!b[0]){var $="";for(E in D=[],a[k])this.terminals_[E]&&E>h&&D.push("'"+this.terminals_[E]+"'");$=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+D.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(c+1)+": Unexpected "+(S==u?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError($,{text:p.match,token:this.terminals_[S]||S,line:p.yylineno,loc:g,expected:D})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+S);switch(b[0]){case 1:i.push(S),n.push(p.yytext),r.push(p.yylloc),i.push(b[1]),S=null,l=p.yyleng,o=p.yytext,c=p.yylineno,g=p.yylloc;break;case 2:if(v=this.productions_[b[1]][1],C.$=n[n.length-v],C._$={first_line:r[r.length-(v||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(v||1)].first_column,last_column:r[r.length-1].last_column},m&&(C._$.range=[r[r.length-(v||1)].range[0],r[r.length-1].range[1]]),T=this.performAction.apply(C,[o,l,c,y.yy,b[1],n,r].concat(d)),"undefined"!==typeof T)return T;v&&(i=i.slice(0,-1*v*2),n=n.slice(0,-1*v),r=r.slice(0,-1*v)),i.push(this.productions_[b[1]][0]),n.push(C.$),r.push(C._$),x=a[i[i.length-2]][i[i.length-1]],i.push(x);break;case 3:return!0}}return!0}},R=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),s=t[0].match(/(?:\r\n?|\n).*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if(i=this._input.match(this.rules[n[r]]),i&&(!e||i[0].length>e[0].length)){if(e=i,s=r,this.options.backtrack_lexer){if(t=this.test_match(i,n[r]),!1!==t)return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?(t=this.test_match(e,n[s]),!1!==t&&t):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions["INITIAL"].rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,s){switch(i){case 0:return 41;case 1:return 50;case 2:return 51;case 3:return 52;case 4:return 53;case 5:return this.begin("open_directive"),60;case 6:return this.begin("type_directive"),61;case 7:return this.popState(),this.begin("arg_directive"),48;case 8:return this.popState(),this.popState(),63;case 9:return 62;case 10:break;case 11:break;case 12:return 5;case 13:break;case 14:break;case 15:break;case 16:break;case 17:return this.pushState("SCALE"),17;case 18:return 18;case 19:this.popState();break;case 20:return this.begin("acc_title"),33;case 21:return this.popState(),"acc_title_value";case 22:return this.begin("acc_descr"),35;case 23:return this.popState(),"acc_descr_value";case 24:this.begin("acc_descr_multiline");break;case 25:this.popState();break;case 26:return"acc_descr_multiline_value";case 27:return this.pushState("CLASSDEF"),38;case 28:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 29:return this.popState(),this.pushState("CLASSDEFID"),39;case 30:return this.popState(),40;case 31:return this.pushState("CLASS"),42;case 32:return this.popState(),this.pushState("CLASS_STYLE"),43;case 33:return this.popState(),44;case 34:return this.pushState("SCALE"),17;case 35:return 18;case 36:this.popState();break;case 37:this.pushState("STATE");break;case 38:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 39:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 40:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 41:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 42:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 43:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 44:return 50;case 45:return 51;case 46:return 52;case 47:return 53;case 48:this.pushState("STATE_STRING");break;case 49:return this.pushState("STATE_ID"),"AS";case 50:return this.popState(),"ID";case 51:this.popState();break;case 52:return"STATE_DESCR";case 53:return 19;case 54:this.popState();break;case 55:return this.popState(),this.pushState("struct"),20;case 56:break;case 57:return this.popState(),21;case 58:break;case 59:return this.begin("NOTE"),29;case 60:return this.popState(),this.pushState("NOTE_ID"),58;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:this.popState(),this.pushState("FLOATING_NOTE");break;case 63:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 64:break;case 65:return"NOTE_TEXT";case 66:return this.popState(),"ID";case 67:return this.popState(),this.pushState("NOTE_TEXT"),24;case 68:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 69:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 70:return 7;case 71:return 7;case 72:return 16;case 73:return 56;case 74:return 24;case 75:return e.yytext=e.yytext.trim(),14;case 76:return 15;case 77:return 28;case 78:return 57;case 79:return 5;case 80:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[14,15],inclusive:!1},close_directive:{rules:[14,15],inclusive:!1},arg_directive:{rules:[8,9,14,15],inclusive:!1},type_directive:{rules:[7,8,14,15],inclusive:!1},open_directive:{rules:[6,14,15],inclusive:!1},struct:{rules:[14,15,27,31,37,44,45,46,47,56,57,58,59,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[66],inclusive:!1},FLOATING_NOTE:{rules:[63,64,65],inclusive:!1},NOTE_TEXT:{rules:[68,69],inclusive:!1},NOTE_ID:{rules:[67],inclusive:!1},NOTE:{rules:[60,61,62],inclusive:!1},CLASS_STYLE:{rules:[33],inclusive:!1},CLASS:{rules:[32],inclusive:!1},CLASSDEFID:{rules:[30],inclusive:!1},CLASSDEF:{rules:[28,29],inclusive:!1},acc_descr_multiline:{rules:[25,26],inclusive:!1},acc_descr:{rules:[23],inclusive:!1},acc_title:{rules:[21],inclusive:!1},SCALE:{rules:[18,19,35,36],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[50],inclusive:!1},STATE_STRING:{rules:[51,52],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[14,15,38,39,40,41,42,43,48,49,53,54,55],inclusive:!1},ID:{rules:[14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,10,11,12,13,15,16,17,20,22,24,27,31,34,37,55,59,70,71,72,73,74,75,76,78,79,80],inclusive:!0}}};return t}();function w(){this.yy={}}return N.lexer=R,w.prototype=N,N.Parser=w,new w}();a.parser=a;const o=a,c="LR",l="TB",h="state",u="relation",d="classDef",p="applyClass",y="default",f="divider",g="[*]",m="start",_=g,S="end",k="color",b="fill",T="bgFill",E=",";function v(){return{}}let x=c,D=[],C=v();const $=()=>({relations:[],states:{},documents:{}});let A={root:$()},L=A.root,I=0,O=0;const N={LINE:0,DOTTED_LINE:1},R={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},w=t=>JSON.parse(JSON.stringify(t)),B=function(t,e,i){r.m.parseDirective(this,t,e,i)},P=t=>{s.l.info("Setting root doc",t),D=t},F=()=>D,G=(t,e,i)=>{if(e.stmt===u)G(t,e.state1,!0),G(t,e.state2,!1);else if(e.stmt===h&&("[*]"===e.id?(e.id=i?t.id+"_start":t.id+"_end",e.start=i):e.id=e.id.trim()),e.doc){const t=[];let i,s=[];for(i=0;i<e.doc.length;i++)if(e.doc[i].type===f){const n=w(e.doc[i]);n.doc=w(s),t.push(n),s=[]}else s.push(e.doc[i]);if(t.length>0&&s.length>0){const i={stmt:h,id:(0,n.y)(),type:"divider",doc:w(s)};t.push(w(i)),e.doc=t}e.doc.forEach((t=>G(e,t,!0)))}},Y=()=>(G({id:"root"},{id:"root",doc:D},!0),{id:"root",doc:D}),j=t=>{let e;e=t.doc?t.doc:t,s.l.info(e),z(!0),s.l.info("Extract",e),e.forEach((t=>{switch(t.stmt){case h:U(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case u:Z(t.state1,t.state2,t.description);break;case d:st(t.id.trim(),t.classes);break;case p:rt(t.id.trim(),t.styleClass);break}}))},U=function(t,e=y,i=null,n=null,r=null,a=null,o=null,c=null){const l=null==t?void 0:t.trim();if(void 0===L.states[l]?(s.l.info("Adding state ",l,n),L.states[l]={id:l,descriptions:[],type:e,doc:i,note:r,classes:[],styles:[],textStyles:[]}):(L.states[l].doc||(L.states[l].doc=i),L.states[l].type||(L.states[l].type=e)),n&&(s.l.info("Setting state description",l,n),"string"===typeof n&&tt(l,n.trim()),"object"===typeof n&&n.forEach((t=>tt(l,t.trim())))),r&&(L.states[l].note=r,L.states[l].note.text=s.e.sanitizeText(L.states[l].note.text,(0,s.g)())),a){s.l.info("Setting state classes",l,a);const t="string"===typeof a?[a]:a;t.forEach((t=>rt(l,t.trim())))}if(o){s.l.info("Setting state styles",l,o);const t="string"===typeof o?[o]:o;t.forEach((t=>at(l,t.trim())))}if(c){s.l.info("Setting state styles",l,o);const t="string"===typeof c?[c]:c;t.forEach((t=>ot(l,t.trim())))}},z=function(t){A={root:$()},L=A.root,I=0,C=v(),t||(0,s.y)()},H=function(t){return L.states[t]},M=function(){return L.states},X=function(){s.l.info("Documents = ",A)},J=function(){return L.relations};function K(t=""){let e=t;return t===g&&(I++,e=`${m}${I}`),e}function W(t="",e=y){return t===g?m:e}function V(t=""){let e=t;return t===_&&(I++,e=`${S}${I}`),e}function q(t="",e=y){return t===_?S:e}function Q(t,e,i){let n=K(t.id.trim()),r=W(t.id.trim(),t.type),a=K(e.id.trim()),o=W(e.id.trim(),e.type);U(n,r,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),U(a,o,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),L.relations.push({id1:n,id2:a,relationTitle:s.e.sanitizeText(i,(0,s.g)())})}const Z=function(t,e,i){if("object"===typeof t)Q(t,e,i);else{const n=K(t.trim()),r=W(t),a=V(e.trim()),o=q(e);U(n,r),U(a,o),L.relations.push({id1:n,id2:a,title:s.e.sanitizeText(i,(0,s.g)())})}},tt=function(t,e){const i=L.states[t],n=e.startsWith(":")?e.replace(":","").trim():e;i.descriptions.push(s.e.sanitizeText(n,(0,s.g)()))},et=function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()},it=()=>(O++,"divider-id-"+O),st=function(t,e=""){void 0===C[t]&&(C[t]={id:t,styles:[],textStyles:[]});const i=C[t];void 0!==e&&null!==e&&e.split(E).forEach((t=>{const e=t.replace(/([^;]*);/,"$1").trim();if(t.match(k)){const t=e.replace(b,T),s=t.replace(k,b);i.textStyles.push(s)}i.styles.push(e)}))},nt=function(){return C},rt=function(t,e){t.split(",").forEach((function(t){let i=H(t);if(void 0===i){const e=t.trim();U(e),i=H(e)}i.classes.push(e)}))},at=function(t,e){const i=H(t);void 0!==i&&i.textStyles.push(e)},ot=function(t,e){const i=H(t);void 0!==i&&i.textStyles.push(e)},ct=()=>x,lt=t=>{x=t},ht=t=>t&&":"===t[0]?t.substr(1).trim():t.trim(),ut={parseDirective:B,getConfig:()=>(0,s.g)().state,addState:U,clear:z,getState:H,getStates:M,getRelations:J,getClasses:nt,getDirection:ct,addRelation:Z,getDividerId:it,setDirection:lt,cleanupLabel:et,lineType:N,relationType:R,logDocuments:X,getRootDoc:F,setRootDoc:P,getRootDocV2:Y,extract:j,trimColon:ht,getAccTitle:s.p,setAccTitle:s.o,getAccDescription:s.q,setAccDescription:s.v,addStyleClass:st,setCssClass:rt,addDescription:tt,setDiagramTitle:s.w,getDiagramTitle:s.x},dt=t=>`\ndefs #statediagram-barbEnd {\n    fill: ${t.transitionColor};\n    stroke: ${t.transitionColor};\n  }\ng.stateGroup text {\n  fill: ${t.nodeBorder};\n  stroke: none;\n  font-size: 10px;\n}\ng.stateGroup text {\n  fill: ${t.textColor};\n  stroke: none;\n  font-size: 10px;\n\n}\ng.stateGroup .state-title {\n  font-weight: bolder;\n  fill: ${t.stateLabelColor};\n}\n\ng.stateGroup rect {\n  fill: ${t.mainBkg};\n  stroke: ${t.nodeBorder};\n}\n\ng.stateGroup line {\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.transition {\n  stroke: ${t.transitionColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.stateGroup .composit {\n  fill: ${t.background};\n  border-bottom: 1px\n}\n\n.stateGroup .alt-composit {\n  fill: #e0e0e0;\n  border-bottom: 1px\n}\n\n.state-note {\n  stroke: ${t.noteBorderColor};\n  fill: ${t.noteBkgColor};\n\n  text {\n    fill: ${t.noteTextColor};\n    stroke: none;\n    font-size: 10px;\n  }\n}\n\n.stateLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${t.mainBkg};\n  opacity: 0.5;\n}\n\n.edgeLabel .label rect {\n  fill: ${t.labelBackgroundColor};\n  opacity: 0.5;\n}\n.edgeLabel .label text {\n  fill: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n.label div .edgeLabel {\n  color: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n\n.stateLabel text {\n  fill: ${t.stateLabelColor};\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.node circle.state-start {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node .fork-join {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node circle.state-end {\n  fill: ${t.innerEndBackground};\n  stroke: ${t.background};\n  stroke-width: 1.5\n}\n.end-state-inner {\n  fill: ${t.compositeBackground||t.background};\n  // stroke: ${t.background};\n  stroke-width: 1.5\n}\n\n.node rect {\n  fill: ${t.stateBkg||t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n.node polygon {\n  fill: ${t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};;\n  stroke-width: 1px;\n}\n#statediagram-barbEnd {\n  fill: ${t.lineColor};\n}\n\n.statediagram-cluster rect {\n  fill: ${t.compositeTitleBackground};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n\n.cluster-label, .nodeLabel {\n  color: ${t.stateLabelColor};\n}\n\n.statediagram-cluster rect.outer {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state .divider {\n  stroke: ${t.stateBorder||t.nodeBorder};\n}\n\n.statediagram-state .title-state {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-cluster.statediagram-cluster .inner {\n  fill: ${t.compositeBackground||t.background};\n}\n.statediagram-cluster.statediagram-cluster-alt .inner {\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.statediagram-cluster .inner {\n  rx:0;\n  ry:0;\n}\n\n.statediagram-state rect.basic {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state rect.divider {\n  stroke-dasharray: 10,10;\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.note-edge {\n  stroke-dasharray: 5;\n}\n\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n\n.statediagram-note text {\n  fill: ${t.noteTextColor};\n}\n\n.statediagram-note .nodeLabel {\n  color: ${t.noteTextColor};\n}\n.statediagram .edgeLabel {\n  color: red; // ${t.noteTextColor};\n}\n\n#dependencyStart, #dependencyEnd {\n  fill: ${t.lineColor};\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.statediagramTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${t.textColor};\n}\n`,pt=dt}}]);
//# sourceMappingURL=515.369ac1ce.js.map