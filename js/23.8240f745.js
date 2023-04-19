"use strict";(self["webpackChunkIDNCreaterPages"]=self["webpackChunkIDNCreaterPages"]||[]).push([[23],{5023:function(e,t,i){i.r(t),i.d(t,{diagram:function(){return ee}});i(7658);var n=i(3589),r=i(7567),s=i(6898),a=i(4069),c=i(6666),l=i(929),o=(i(3617),i(5743),i(4747),function(){var e=function(e,t,i,n){for(i=i||{},n=e.length;n--;i[e[n]]=t);return i},t=[1,3],i=[1,5],n=[1,6],r=[1,7],s=[1,8],a=[5,6,8,14,16,18,19,40,41,42,43,44,45,53,71,72],c=[1,22],l=[2,13],o=[1,26],h=[1,27],u=[1,28],d=[1,29],y=[1,30],p=[1,31],_=[1,24],g=[1,32],E=[1,33],R=[1,36],f=[71,72],m=[5,8,14,16,18,19,40,41,42,43,44,45,53,60,62,71,72],I=[1,56],b=[1,57],k=[1,58],S=[1,59],T=[1,60],N=[1,61],v=[1,62],x=[62,63],A=[1,74],q=[1,70],w=[1,71],$=[1,72],O=[1,73],C=[1,75],D=[1,79],L=[1,80],M=[1,77],F=[1,78],P=[5,8,14,16,18,19,40,41,42,43,44,45,53,71,72],V={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,openDirective:9,typeDirective:10,closeDirective:11,":":12,argDirective:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,requirementDef:23,elementDef:24,relationshipDef:25,requirementType:26,requirementName:27,STRUCT_START:28,requirementBody:29,ID:30,COLONSEP:31,id:32,TEXT:33,text:34,RISK:35,riskLevel:36,VERIFYMTHD:37,verifyType:38,STRUCT_STOP:39,REQUIREMENT:40,FUNCTIONAL_REQUIREMENT:41,INTERFACE_REQUIREMENT:42,PERFORMANCE_REQUIREMENT:43,PHYSICAL_REQUIREMENT:44,DESIGN_CONSTRAINT:45,LOW_RISK:46,MED_RISK:47,HIGH_RISK:48,VERIFY_ANALYSIS:49,VERIFY_DEMONSTRATION:50,VERIFY_INSPECTION:51,VERIFY_TEST:52,ELEMENT:53,elementName:54,elementBody:55,TYPE:56,type:57,DOCREF:58,ref:59,END_ARROW_L:60,relationship:61,LINE:62,END_ARROW_R:63,CONTAINS:64,COPIES:65,DERIVES:66,SATISFIES:67,VERIFIES:68,REFINES:69,TRACES:70,unqString:71,qString:72,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",12:":",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",28:"STRUCT_START",30:"ID",31:"COLONSEP",33:"TEXT",35:"RISK",37:"VERIFYMTHD",39:"STRUCT_STOP",40:"REQUIREMENT",41:"FUNCTIONAL_REQUIREMENT",42:"INTERFACE_REQUIREMENT",43:"PERFORMANCE_REQUIREMENT",44:"PHYSICAL_REQUIREMENT",45:"DESIGN_CONSTRAINT",46:"LOW_RISK",47:"MED_RISK",48:"HIGH_RISK",49:"VERIFY_ANALYSIS",50:"VERIFY_DEMONSTRATION",51:"VERIFY_INSPECTION",52:"VERIFY_TEST",53:"ELEMENT",56:"TYPE",58:"DOCREF",60:"END_ARROW_L",62:"LINE",63:"END_ARROW_R",64:"CONTAINS",65:"COPIES",66:"DERIVES",67:"SATISFIES",68:"VERIFIES",69:"REFINES",70:"TRACES",71:"unqString",72:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,3],[4,5],[4,2],[4,2],[4,1],[9,1],[10,1],[13,1],[11,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[23,5],[29,5],[29,5],[29,5],[29,5],[29,2],[29,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[36,1],[36,1],[36,1],[38,1],[38,1],[38,1],[38,1],[24,5],[55,5],[55,5],[55,2],[55,1],[25,5],[25,5],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[27,1],[27,1],[32,1],[32,1],[34,1],[34,1],[54,1],[54,1],[57,1],[57,1],[59,1],[59,1]],performAction:function(e,t,i,n,r,s,a){var c=s.length-1;switch(r){case 6:this.$=s[c].trim(),n.setAccTitle(this.$);break;case 7:case 8:this.$=s[c].trim(),n.setAccDescription(this.$);break;case 9:n.parseDirective("%%{","open_directive");break;case 10:n.parseDirective(s[c],"type_directive");break;case 11:s[c]=s[c].trim().replace(/'/g,'"'),n.parseDirective(s[c],"arg_directive");break;case 12:n.parseDirective("}%%","close_directive","pie");break;case 13:this.$=[];break;case 19:n.addRequirement(s[c-3],s[c-4]);break;case 20:n.setNewReqId(s[c-2]);break;case 21:n.setNewReqText(s[c-2]);break;case 22:n.setNewReqRisk(s[c-2]);break;case 23:n.setNewReqVerifyMethod(s[c-2]);break;case 26:this.$=n.RequirementType.REQUIREMENT;break;case 27:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 28:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 29:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 30:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 31:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 32:this.$=n.RiskLevel.LOW_RISK;break;case 33:this.$=n.RiskLevel.MED_RISK;break;case 34:this.$=n.RiskLevel.HIGH_RISK;break;case 35:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 36:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 37:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 38:this.$=n.VerifyType.VERIFY_TEST;break;case 39:n.addElement(s[c-3]);break;case 40:n.setNewElementType(s[c-2]);break;case 41:n.setNewElementDocRef(s[c-2]);break;case 44:n.addRelationship(s[c-2],s[c],s[c-4]);break;case 45:n.addRelationship(s[c-2],s[c-4],s[c]);break;case 46:this.$=n.Relationships.CONTAINS;break;case 47:this.$=n.Relationships.COPIES;break;case 48:this.$=n.Relationships.DERIVES;break;case 49:this.$=n.Relationships.SATISFIES;break;case 50:this.$=n.Relationships.VERIFIES;break;case 51:this.$=n.Relationships.REFINES;break;case 52:this.$=n.Relationships.TRACES;break}},table:[{3:1,4:2,6:t,9:4,14:i,16:n,18:r,19:s},{1:[3]},{3:10,4:2,5:[1,9],6:t,9:4,14:i,16:n,18:r,19:s},{5:[1,11]},{10:12,20:[1,13]},{15:[1,14]},{17:[1,15]},e(a,[2,8]),{20:[2,9]},{3:16,4:2,6:t,9:4,14:i,16:n,18:r,19:s},{1:[2,2]},{4:21,5:c,7:17,8:l,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:o,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{11:34,12:[1,35],22:R},e([12,22],[2,10]),e(a,[2,6]),e(a,[2,7]),{1:[2,1]},{8:[1,37]},{4:21,5:c,7:38,8:l,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:o,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:39,8:l,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:o,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:40,8:l,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:o,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:41,8:l,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:o,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:42,8:l,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:o,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{27:43,71:[1,44],72:[1,45]},{54:46,71:[1,47],72:[1,48]},{60:[1,49],62:[1,50]},e(f,[2,26]),e(f,[2,27]),e(f,[2,28]),e(f,[2,29]),e(f,[2,30]),e(f,[2,31]),e(m,[2,55]),e(m,[2,56]),e(a,[2,4]),{13:51,21:[1,52]},e(a,[2,12]),{1:[2,3]},{8:[2,14]},{8:[2,15]},{8:[2,16]},{8:[2,17]},{8:[2,18]},{28:[1,53]},{28:[2,53]},{28:[2,54]},{28:[1,54]},{28:[2,59]},{28:[2,60]},{61:55,64:I,65:b,66:k,67:S,68:T,69:N,70:v},{61:63,64:I,65:b,66:k,67:S,68:T,69:N,70:v},{11:64,22:R},{22:[2,11]},{5:[1,65]},{5:[1,66]},{62:[1,67]},e(x,[2,46]),e(x,[2,47]),e(x,[2,48]),e(x,[2,49]),e(x,[2,50]),e(x,[2,51]),e(x,[2,52]),{63:[1,68]},e(a,[2,5]),{5:A,29:69,30:q,33:w,35:$,37:O,39:C},{5:D,39:L,55:76,56:M,58:F},{32:81,71:g,72:E},{32:82,71:g,72:E},e(P,[2,19]),{31:[1,83]},{31:[1,84]},{31:[1,85]},{31:[1,86]},{5:A,29:87,30:q,33:w,35:$,37:O,39:C},e(P,[2,25]),e(P,[2,39]),{31:[1,88]},{31:[1,89]},{5:D,39:L,55:90,56:M,58:F},e(P,[2,43]),e(P,[2,44]),e(P,[2,45]),{32:91,71:g,72:E},{34:92,71:[1,93],72:[1,94]},{36:95,46:[1,96],47:[1,97],48:[1,98]},{38:99,49:[1,100],50:[1,101],51:[1,102],52:[1,103]},e(P,[2,24]),{57:104,71:[1,105],72:[1,106]},{59:107,71:[1,108],72:[1,109]},e(P,[2,42]),{5:[1,110]},{5:[1,111]},{5:[2,57]},{5:[2,58]},{5:[1,112]},{5:[2,32]},{5:[2,33]},{5:[2,34]},{5:[1,113]},{5:[2,35]},{5:[2,36]},{5:[2,37]},{5:[2,38]},{5:[1,114]},{5:[2,61]},{5:[2,62]},{5:[1,115]},{5:[2,63]},{5:[2,64]},{5:A,29:116,30:q,33:w,35:$,37:O,39:C},{5:A,29:117,30:q,33:w,35:$,37:O,39:C},{5:A,29:118,30:q,33:w,35:$,37:O,39:C},{5:A,29:119,30:q,33:w,35:$,37:O,39:C},{5:D,39:L,55:120,56:M,58:F},{5:D,39:L,55:121,56:M,58:F},e(P,[2,20]),e(P,[2,21]),e(P,[2,22]),e(P,[2,23]),e(P,[2,40]),e(P,[2,41])],defaultActions:{8:[2,9],10:[2,2],16:[2,1],37:[2,3],38:[2,14],39:[2,15],40:[2,16],41:[2,17],42:[2,18],44:[2,53],45:[2,54],47:[2,59],48:[2,60],52:[2,11],93:[2,57],94:[2,58],96:[2,32],97:[2,33],98:[2,34],100:[2,35],101:[2,36],102:[2,37],103:[2,38],105:[2,61],106:[2,62],108:[2,63],109:[2,64]},parseError:function(e,t){if(!t.recoverable){var i=new Error(e);throw i.hash=t,i}this.trace(e)},parse:function(e){var t=this,i=[0],n=[],r=[null],s=[],a=this.table,c="",l=0,o=0,h=2,u=1,d=s.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(p.yy[_]=this.yy[_]);y.setInput(e,p.yy),p.yy.lexer=y,p.yy.parser=this,"undefined"==typeof y.yylloc&&(y.yylloc={});var g=y.yylloc;s.push(g);var E=y.options&&y.options.ranges;function R(){var e;return e=n.pop()||y.lex()||u,"number"!==typeof e&&(e instanceof Array&&(n=e,e=n.pop()),e=t.symbols_[e]||e),e}"function"===typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;var f,m,I,b,k,S,T,N,v={};while(1){if(m=i[i.length-1],this.defaultActions[m]?I=this.defaultActions[m]:(null!==f&&"undefined"!=typeof f||(f=R()),I=a[m]&&a[m][f]),"undefined"===typeof I||!I.length||!I[0]){var x="";for(k in N=[],a[m])this.terminals_[k]&&k>h&&N.push("'"+this.terminals_[k]+"'");x=y.showPosition?"Parse error on line "+(l+1)+":\n"+y.showPosition()+"\nExpecting "+N.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(l+1)+": Unexpected "+(f==u?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(x,{text:y.match,token:this.terminals_[f]||f,line:y.yylineno,loc:g,expected:N})}if(I[0]instanceof Array&&I.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(I[0]){case 1:i.push(f),r.push(y.yytext),s.push(y.yylloc),i.push(I[1]),f=null,o=y.yyleng,c=y.yytext,l=y.yylineno,g=y.yylloc;break;case 2:if(S=this.productions_[I[1]][1],v.$=r[r.length-S],v._$={first_line:s[s.length-(S||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(S||1)].first_column,last_column:s[s.length-1].last_column},E&&(v._$.range=[s[s.length-(S||1)].range[0],s[s.length-1].range[1]]),b=this.performAction.apply(v,[c,o,l,p.yy,I[1],r,s].concat(d)),"undefined"!==typeof b)return b;S&&(i=i.slice(0,-1*S*2),r=r.slice(0,-1*S),s=s.slice(0,-1*S)),i.push(this.productions_[I[1]][0]),r.push(v.$),s.push(v._$),T=a[i[i.length-2]][i[i.length-1]],i.push(T);break;case 3:return!0}}return!0}},Y=function(){var e={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);return t?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),n=e[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if(i=this._input.match(this.rules[r[s]]),i&&(!t||i[0].length>t[0].length)){if(t=i,n=s,this.options.backtrack_lexer){if(e=this.test_match(i,r[s]),!1!==e)return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?(e=this.test_match(t,r[n]),!1!==e&&e):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions["INITIAL"].rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,t,i,n){switch(i){case 0:return this.begin("open_directive"),19;case 1:return this.begin("type_directive"),20;case 2:return this.popState(),this.begin("arg_directive"),12;case 3:return this.popState(),this.popState(),22;case 4:return 21;case 5:return"title";case 6:return this.begin("acc_title"),14;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),16;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 5;case 14:break;case 15:break;case 16:break;case 17:return 8;case 18:return 6;case 19:return 28;case 20:return 39;case 21:return 31;case 22:return 30;case 23:return 33;case 24:return 35;case 25:return 37;case 26:return 40;case 27:return 41;case 28:return 42;case 29:return 43;case 30:return 44;case 31:return 45;case 32:return 46;case 33:return 47;case 34:return 48;case 35:return 49;case 36:return 50;case 37:return 51;case 38:return 52;case 39:return 53;case 40:return 64;case 41:return 65;case 42:return 66;case 43:return 67;case 44:return 68;case 45:return 69;case 46:return 70;case 47:return 56;case 48:return 58;case 49:return 60;case 50:return 63;case 51:return 62;case 52:this.begin("string");break;case 53:this.popState();break;case 54:return"qString";case 55:return t.yytext=t.yytext.trim(),71}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[53,54],inclusive:!1},INITIAL:{rules:[0,5,6,8,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,55],inclusive:!0}}};return e}();function U(){this.yy={}}return V.lexer=Y,U.prototype=V,V.Parser=U,new U}());o.parser=o;const h=o;let u=[],d={},y={},p={},_={};const g={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},E={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},R={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},f={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},m=function(e,t,i){r.m.parseDirective(this,e,t,i)},I=(e,t)=>(void 0===y[e]&&(y[e]={name:e,type:t,id:d.id,text:d.text,risk:d.risk,verifyMethod:d.verifyMethod}),d={},y[e]),b=()=>y,k=e=>{void 0!==d&&(d.id=e)},S=e=>{void 0!==d&&(d.text=e)},T=e=>{void 0!==d&&(d.risk=e)},N=e=>{void 0!==d&&(d.verifyMethod=e)},v=e=>(void 0===_[e]&&(_[e]={name:e,type:p.type,docRef:p.docRef},n.l.info("Added new requirement: ",e)),p={},_[e]),x=()=>_,A=e=>{void 0!==p&&(p.type=e)},q=e=>{void 0!==p&&(p.docRef=e)},w=(e,t,i)=>{u.push({type:e,src:t,dst:i})},$=()=>u,O=()=>{u=[],d={},y={},p={},_={},(0,n.y)()},C={RequirementType:g,RiskLevel:E,VerifyType:R,Relationships:f,parseDirective:m,getConfig:()=>(0,n.g)().req,addRequirement:I,getRequirements:b,setNewReqId:k,setNewReqText:S,setNewReqRisk:T,setNewReqVerifyMethod:N,setAccTitle:n.o,getAccTitle:n.p,setAccDescription:n.v,getAccDescription:n.q,addElement:v,getElements:x,setNewElementType:A,setNewElementDocRef:q,addRelationship:w,getRelationships:$,clear:O},D=e=>`\n\n  marker {\n    fill: ${e.relationColor};\n    stroke: ${e.relationColor};\n  }\n\n  marker.cross {\n    stroke: ${e.lineColor};\n  }\n\n  svg {\n    font-family: ${e.fontFamily};\n    font-size: ${e.fontSize};\n  }\n\n  .reqBox {\n    fill: ${e.requirementBackground};\n    fill-opacity: 100%;\n    stroke: ${e.requirementBorderColor};\n    stroke-width: ${e.requirementBorderSize};\n  }\n  \n  .reqTitle, .reqLabel{\n    fill:  ${e.requirementTextColor};\n  }\n  .reqLabelBox {\n    fill: ${e.relationLabelBackground};\n    fill-opacity: 100%;\n  }\n\n  .req-title-line {\n    stroke: ${e.requirementBorderColor};\n    stroke-width: ${e.requirementBorderSize};\n  }\n  .relationshipLine {\n    stroke: ${e.relationColor};\n    stroke-width: 1;\n  }\n  .relationshipLabel {\n    fill: ${e.relationLabelColor};\n  }\n\n`,L=D,M={CONTAINS:"contains",ARROW:"arrow"},F=(e,t)=>{let i=e.append("defs").append("marker").attr("id",M.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",M.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0\n      L${t.line_height},${t.line_height/2}\n      M${t.line_height},${t.line_height/2}\n      L0,${t.line_height}`).attr("stroke-width",1)},P={ReqMarkers:M,insertLineEndings:F};let V={},Y=0;const U=(e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",V.rect_min_width+"px").attr("height",V.rect_min_height+"px"),B=(e,t,i)=>{let n=V.rect_min_width/2,r=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",n).attr("y",V.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach((e=>{0==s?r.append("tspan").attr("text-anchor","middle").attr("x",V.rect_min_width/2).attr("dy",0).text(e):r.append("tspan").attr("text-anchor","middle").attr("x",V.rect_min_width/2).attr("dy",.75*V.line_height).text(e),s++}));let a=1.5*V.rect_padding,c=s*V.line_height*.75,l=a+c;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",V.rect_min_width).attr("y1",l).attr("y2",l),{titleNode:r,y:l}},Q=(e,t,i,n)=>{let r=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",V.rect_padding).attr("y",n).attr("dominant-baseline","hanging"),s=0;const a=30;let c=[];return i.forEach((e=>{let t=e.length;while(t>a&&s<3){let i=e.substring(0,a);e=e.substring(a,e.length),t=e.length,c[c.length]=i,s++}if(3==s){let e=c[c.length-1];c[c.length-1]=e.substring(0,e.length-4)+"..."}else c[c.length]=e;s=0})),c.forEach((e=>{r.append("tspan").attr("x",V.rect_padding).attr("dy",V.line_height).text(e)})),r},H=(e,t,i,n)=>{const r=t.node().getTotalLength(),s=t.node().getPointAtLength(.5*r),a="rel"+Y;Y++;const c=e.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(n),l=c.node().getBBox();e.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-l.width/2).attr("y",s.y-l.height/2).attr("width",l.width).attr("height",l.height).attr("fill","white").attr("fill-opacity","85%")},W=function(e,t,i,r,a){const c=i.edge(X(t.src),X(t.dst)),l=(0,s.jvg)().x((function(e){return e.x})).y((function(e){return e.y})),o=e.insert("path","#"+r).attr("class","er relationshipLine").attr("d",l(c.points)).attr("fill","none");t.type==a.db.Relationships.CONTAINS?o.attr("marker-start","url("+n.e.getUrl(V.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(o.attr("stroke-dasharray","10,7"),o.attr("marker-end","url("+n.e.getUrl(V.arrowMarkerAbsolute)+"#"+P.ReqMarkers.ARROW+"_line_ending)")),H(e,o,V,`<<${t.type}>>`)},K=(e,t,i)=>{Object.keys(e).forEach((r=>{let s=e[r];r=X(r),n.l.info("Added new requirement: ",r);const a=i.append("g").attr("id",r),c="req-"+r,l=U(a,c);let o=B(a,r+"_title",[`<<${s.type}>>`,`${s.name}`]);Q(a,r+"_body",[`Id: ${s.id}`,`Text: ${s.text}`,`Risk: ${s.risk}`,`Verification: ${s.verifyMethod}`],o.y);const h=l.node().getBBox();t.setNode(r,{width:h.width,height:h.height,shape:"rect",id:r})}))},j=(e,t,i)=>{Object.keys(e).forEach((n=>{let r=e[n];const s=X(n),a=i.append("g").attr("id",s),c="element-"+s,l=U(a,c);let o=B(a,c+"_title",["<<Element>>",`${n}`]);Q(a,c+"_body",[`Type: ${r.type||"Not Specified"}`,`Doc Ref: ${r.docRef||"None"}`],o.y);const h=l.node().getBBox();t.setNode(s,{width:h.width,height:h.height,shape:"rect",id:s})}))},G=(e,t)=>(e.forEach((function(e){let i=X(e.src),n=X(e.dst);t.setEdge(i,n,{relationship:e})})),e),z=function(e,t){t.nodes().forEach((function(i){void 0!==i&&void 0!==t.node(i)&&(e.select("#"+i),e.select("#"+i).attr("transform","translate("+(t.node(i).x-t.node(i).width/2)+","+(t.node(i).y-t.node(i).height/2)+" )"))}))},X=e=>e.replace(/\s/g,"").replace(/\./g,"_"),J=(e,t,i,r)=>{V=(0,n.g)().requirement,r.db.clear(),r.parser.parse(e);const o=V.securityLevel;let h;"sandbox"===o&&(h=(0,s.Ys)("#i"+t));const u="sandbox"===o?(0,s.Ys)(h.nodes()[0].contentDocument.body):(0,s.Ys)("body"),d=u.select(`[id='${t}']`);P.insertLineEndings(d,V);const y=new c.k({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:V.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));let p=r.db.getRequirements(),_=r.db.getElements(),g=r.db.getRelationships();K(p,y,d),j(_,y,d),G(g,y),(0,a.bK)(y),z(d,y),g.forEach((function(e){W(d,e,y,t,r)}));const E=V.rect_padding,R=d.node().getBBox(),f=R.width+2*E,m=R.height+2*E;(0,l.k)(d,m,f,V.useMaxWidth),d.attr("viewBox",`${R.x-E} ${R.y-E} ${f} ${m}`)},Z={draw:J},ee={parser:h,db:C,renderer:Z,styles:L}}}]);
//# sourceMappingURL=23.8240f745.js.map