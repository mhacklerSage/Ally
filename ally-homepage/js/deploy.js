lpAddMonitorTag();
typeof lpMTagConfig!="undefined"&&function(a){lpMTagConfig.isMobile=!1;if(/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4)))lpMTagConfig.isMobile=!0}(navigator.userAgent||navigator.vendor||window.opera);
//DO NOT CHANGE THE BELOW COMMENT
//PLUGINS_LIST=sendLPVarsFromPage,globalUtilsV2,genericEventsBridge,inviteDeclineEffects

if (typeof(lpMTagConfig.plugins)=='undefined') { lpMTagConfig.plugins = {};}

lpMTagConfig.plugins['sendLPVarsFromPage'] = {
        name: 'sendLPVarsFromPage',
        config : {  
            lpVarMappings: [
				{name:"PageName",
				 scope:"page",
				 methods:[{type:"jsref",jsref:"s.pageName"}]},
				{name:"SiteSection",
				 scope:"page",
				 methods:[{type:"jsref",jsref:"s.channel"}]},
				{name:"SubSection",
				 scope:"page",
				 methods:[{type:"jsref",jsref:"s.prop35"}]},
				{name:"Events",
				 scope:"page",
				 methods:[{type:"jsref",jsref:"s.events"}]},
				{name:"Products",
				 scope:"page",
				 methods:[{type:"jsref",jsref:"s.products"}]}],
			sendEmptyValues: true
		} 
};

lpMTagConfig.plugins['globalUtilsV2'] = {
        name: 'globalUtilsV2',
        config : {  
			dbOvrObj : ['lpMTagConfig.db1'],
			overrideBusyAction:true,
			overrideOfflineAction:true,
			forceButtonRefreshOnInvite: true
		}
};

lpMTagConfig.plugins['genericEventsBridge'] = {
        name: 'genericEventsBridge',
        config : {  
			invStart : function(vars){
				var inviteObj = eval(vars.objName);
				try{
				//this block will create a transparency filter in IE prior to 6
					var arVersion = navigator.appVersion.split("MSIE"), version = parseFloat(arVersion[1]);
					if(((version >= 5.5) && (version < 7)) && (document.body.filters)) {
						var chatImage = document.getElementById('chatBackdrop');
						if (chatImage) {
							var img = chatImage, imgName = img.src.toUpperCase();
							if(imgName.substring(imgName.length-3, imgName.length) == "PNG") {
								var imgID = (img.id) ? "id='" + img.id + "' " : "";
								var imgClass = (img.className) ? "class='" + img.className + "' " : "";
								var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
								var imgStyle = "display:inline-block;" + img.style.cssText;
								if(img.align == "left") { imgStyle = "float:left;" + imgStyle; }
								if(img.align == "right") { imgStyle = "float:right;" + imgStyle; }
								if(img.parentElement.href) { imgStyle = "cursor:hand;" + imgStyle; }
								var strNewHTML = "<span " + imgID + imgClass + imgTitle + 
								" style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" +
								"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
								"(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
								img.outerHTML = strNewHTML;
							}
						}
					}
					if(lpMTagConfig.dynButton != null && lpMTagConfig.dynButton.length>0){
						lpMTagConfig['dynButton0'].MakeCall();
					}
				} catch(e){}
				try{
					//when the chatbox is offered up, fire off a link click
					var s= s_gi(s_account);
					s.trackExternalLinks=false;
					s.linkTrackVars='eVar45'; 
					s.eVar45= s.pageName + '| Chat Offered';
					s.tl(this,'o',s.eVar45);
				} catch(e){
					//console.log(e.message);
				}
				return true;
			},
			invAccepted : function(vars){
				var inviteObj = eval(vars.objName);
				try{
					//when the chatbox is offered up, fire off a link click
					var s= s_gi(s_account);
					s.trackExternalLinks=false;
					s.linkTrackVars='events,eVar75';
					s.events='event24';
					s.linkTrackEvents='event24';
					s.eVar75= s.eVar22+':Chat Accepted';
					s.tl(this,'o',s.eVar75);
				} catch(e){
					//console.log(e.message);
				}
				return true;
			},
			invDeclined : function(vars){
				var inviteObj = eval(vars.objName);
				try{
					//when the chatbox is offered up, fire off a link click
					var s= s_gi(s_account);
					s.trackExternalLinks=false;
					s.linkTrackVars='events,eVar75'; 
					s.events='event24';
					s.linkTrackEvents='event24';
					s.eVar75= s.eVar22+':Chat Declined';
					s.tl(this,'o',s.eVar75);
				} catch(e){
					//console.log(e.message);
				}
				return true;
			},
			invTimeout : function(vars){
				var inviteObj = eval(vars.objName);
				try{
					//when the chatbox is offered up, fire off a link click
					var s= s_gi(s_account);
					s.trackExternalLinks=false;
					s.linkTrackVars='events,eVar75'; 
					s.events='event24';
					s.linkTrackEvents='event24';
					s.eVar75= s.eVar22+':Chat Timeout';
					s.tl(this,'o',s.eVar75);
				} catch(e){
					//console.log(e.message);
				}
				return true;
			},
			dbOvrObj : ['lpMTagConfig.db1'],
			btClicked : function(vars){
				objRef = eval(vars.objName);	
				if (vars.status == 'online') {
					try{
						//when the chatbox is requested by user
						var s= s_gi(s_account);
						s.trackExternalLinks=false;
						s.linkTrackVars='eVar45'; 
						s.eVar45= s.pageName + '| Chat Requested';
						s.tl(this,'o',s.eVar45);
					} catch(e){
						//console.log(e.message);
					}
				}
				return true;
			}
		}
};

lpMTagConfig.plugins['inviteDeclineEffects'] = {
        name: 'inviteDeclineEffects',
        config : {  
			dbOvrObj : ['lpMTagConfig.db1'], 
			effect: "invite-transfer",
			transferClassName: "{border:1px #808080 solid 1px;background-color:#fff}"
		}
};
if (typeof(lpMTagConfig.pluginCode)== 'undefined') {lpMTagConfig.pluginCode = {};} // HAS TO BE HERE
lpMTagConfig.pluginCode.lpBasePlugin = {
    // initialize the external configuration parameters - do not change this method - has to be added to every plugin
    init: function() {
        try {
            if (typeof (lpMTagConfig.pluginRef) == 'undefined') { lpMTagConfig.pluginRef = {}; }
            lpMTagConfig.pluginRef[this.name] = this;
            this.log(this.name + ' init', 'DEBUG');
            for (var name in lpMTagConfig.plugins) {
                if (typeof (lpMTagConfig.plugins[name]) == 'object' && lpMTagConfig.plugins[name].name == this.name) {
                    var cfg = lpMTagConfig.plugins[name].config;
                    if (cfg) {
                        for (var prop in cfg) {
                            this[prop] = cfg[prop];
                        }
                    }
                    break;
                }
            }
        }
        catch (e) {
            this.log('Plugin ' + this.name + ' exception in init:' + e, 'ERROR');
        }
    },

    log: function(msg, level) {
        if (typeof(lpMTagDebug)!='undefined' && lpMTagDebug.Display) {
            try {
                lpMTagDebug.Display(msg, level, 'PLUGIN-' + this.name);
            }
            catch (e) { }
        }
		if(typeof(console)!='undefined' && 
		   (typeof(lpMTagConfig.pluginsConsoleDebug)=='undefined' ||  lpMTagConfig.pluginsConsoleDebug==true)){
			console.log(level + ":" + msg);
		}
    }
};

// Initialize the plugin hook arrays if needed
if (typeof (lpMTagConfig.pluginHook) == 'undefined') { lpMTagConfig.pluginHook = {}; }
if (typeof (lpMTagConfig.pluginHook.invite) == 'undefined') { lpMTagConfig.pluginHook.invite = []; }
if (typeof (lpMTagConfig.pluginHook.dynButtons) == 'undefined') { lpMTagConfig.pluginHook.dynButtons = []; }
if(typeof lpMTagConfig.pluginCode=="undefined")lpMTagConfig.pluginCode={};
lpMTagConfig.pluginCode.sendLPVarsFromPage={ver:1,name:"sendLPVarsFromPage",lpVarMappings:[],sendEmptyValues:!1,maxVarNameLength:50,maxVarValueLength:50,pullFromQueryString:!0,doProcessMappings:!0,setup:function(){this.log(this.name+" setup","DEBUG");this.processMappings()},start:function(){this.log(this.name+" start","DEBUG");this.processMappings()},processMappings:function(){if(this.doProcessMappings){this.processQueryString();for(var b=0;b<this.lpVarMappings.length;b++)this.processMapping(this.lpVarMappings[b]);
this.doProcessMappings=!1}},processQueryString:function(){try{if(this.queryStringTable==null)this.queryStringTable={};for(var b=window.location.search.substring(1).split("&"),a=0;a<b.length;a++){var c=b[a].split("=");if(this.pullFromQueryString&&c[0].indexOf("!")>0){var d=c[0].split("!"),e="";d[0]=="PV"?e="page":d[0]=="SV"?e="session":d[0]=="VV"&&(e="variable");e!=""&&c.length==2&&this.addVar(e,d[1],c[1])}c.length>1&&(this.queryStringTable[c[0]]=c[1])}}catch(f){}},getMetaTagTable:function(){if(this.metaTagTable==
null){this.metaTagTable={};for(var b=document.getElementsByTagName("meta"),a=0;a<b.length;a++)b[a].getAttribute("name")!==null&&(this.metaTagTable[b[a].getAttribute("name")]=b[a])}return this.metaTagTable},getCookieTable:function(){if(this.cookieTable==null){this.cookieTable={};for(var b=document.cookie.split(";"),a=0;a<b.length;a++)this.cookieTable[this.trim(b[a].substring(0,b[a].indexOf("=")))]=b[a]}return this.cookieTable},trim:function(b){return b.replace(/^\s+|\s+$/g,"")},addVar:function(b,a,
c){if(lpMTagConfig.vars!=null&&typeof lpMTagConfig.vars=="array")lpMTagConfig.push([b,a,c]);else{if(a.indexOf("OrderTotal")!=-1||a.indexOf("OrderNumber")!=-1)if(c==""||c==0)return;else lpMTagConfig.sendCookies=!1;c=this.trim(c.toString());a.length>this.maxVarNameLength&&(a=a.substr(0,this.maxVarNameLength));c.length>this.maxVarValueLength&&(c=c.substr(0,this.maxVarValueLength));switch(b){case "page":lpMTagConfig.pageVar[lpMTagConfig.pageVar.length]=escape(a)+"="+escape(c);break;case "session":lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length]=
escape(a)+"="+escape(c);break;case "visitor":lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length]=escape(a)+"="+escape(c)}}},processMapping:function(b){try{for(var a=b.name,c=b.scope,d=null,e=0;e<b.methods.length;e++)if(d=this.executeMethod(a,b.methods[e]),d!=null&&d!="")break;d!=null?d!=""||this.sendEmptyValues?this.addVar(c,a,d):this.log("Plugin "+this.name+" empty value for variable "+a,"WARN"):this.log("Plugin "+this.name+" null value for variable "+a,"WARN")}catch(f){this.log("Plugin "+this.name+
" exception in processing mapping for variable "+b.name+":"+f,"WARN")}},executeMethod:function(b,a){a.type||this.log("Plugin "+this.name+" no type specified for method for variable "+b,"ERROR");var c;switch(a.type){case "meta":if(a.metaname){var d=this.getMetaTagTable()[a.metaname];d&&d.getAttribute("name")==a.metaname&&(c=d.getAttribute("content"))}else this.log("Plugin "+this.name+" no metaname specified for meta method for variable "+b,"ERROR");break;case "cookie":a.cookiename?(d=this.getCookieTable()[a.cookiename])?
c=this.trim(d.substring(d.indexOf("=")+1)):this.log("Plugin "+this.name+" no cookie with name "+a.cookiename,"WARN"):this.log("Plugin "+this.name+" no cookiename specified for cookie method for variable "+b,"ERROR");break;case "jsref":a.jsref?c=eval(a.jsref):this.log("Plugin "+this.name+" no jsref specified for js method for variable "+b,"ERROR");break;case "regex":if(a.pattern){d="";if(a.elementID!=""&&a.elementID!=null){var e=document.getElementById(a.elementID);e?d=e.innerHTML:this.log("Plugin "+
this.name+" no element found with ID "+a.elementID,"WARN")}else d=document.getElementsByTagName("body")[0].innerHTML;if(d!=null||d!="")a.searchLiteralOnly&&(d=d.replace(/<[^>]*>/g,"").replace(/\s+/g," ")),(d=a.pattern.exec(d))&&d.length>0?c=d[0].replace(a.pattern,a.replace):a.pattern&&this.log("Plugin "+this.name+" no match found for regex "+a.pattern)}else this.log("Plugin "+this.name+" no regex specified for regex method for variable "+b,"ERROR");break;case "func":a.func&&(c=a.func());break;case "query":typeof a.key!=
"undefined"?c=this.queryStringTable[a.key]:this.log("Plugin "+this.name+' No "key" defined for "'+a.type+'" method for variable '+b,"ERROR");break;default:return this.log("Plugin "+this.name+" unrecognized method type "+a.type+" for variable "+b,"ERROR"),null}return a.getValue&&c?a.getValue(c):c}};
if(typeof lpMTagConfig.pluginCode=="undefined")lpMTagConfig.pluginCode={};
lpMTagConfig.pluginCode.globalUtilsV2={ver:2,name:"globalUtilsV2",overrideBusyAction:!1,overrideOfflineAction:!1,forceButtonRefreshOnDecline:!1,forceButtonRefreshOnInvite:!1,cookiesToNotSend:null,excludeVisitorByCookie:!1,excludeVariableName:"Exclude",excludeVariableValue:"true",overrideZIndex:!1,zIndex:2E3,ssoURL:null,dynButtonHooks:[{name:"busyAction",run:function(a){return lpMTagConfig.pluginCode.globalUtilsV2.busyAction(a)}},{name:"offlineAction",run:function(a){return lpMTagConfig.pluginCode.globalUtilsV2.offlineAction(a)}},
{name:"dbStateChange",run:function(a){return lpMTagConfig.pluginCode.globalUtilsV2.dbStateChange(a)}}],buttonRefs:[],start:function(){this.log(this.name+" start","DEBUG");this.excludeVisitorByCookie&typeof lpAddVars!="undefined"&&/lpdontbotherme\=1/.test(document.cookie)&&lpAddVars("session",this.excludeVariableName,this.excludeVariableValue);if(this.ssoURL!=null){lpMTagConfig.inviteChatSSOurl=this.ssoURL;for(var a=0;a<lpMTagConfig.dynButton.length;a++)lpMTagConfig.dynButton[a].SSOURL=this.ssoURL}if(this.cookiesToNotSend!=
null&&this.cookiesToNotSend instanceof Array)lpMTagConfig.GetPageCookies=function(){var a=document.cookie;if(typeof a=="undefined"||a==null)a="";for(var c=0;c<this.cookiesToNotSend.length;c++)a=a.replace(this.cookiesToNotSend[c]+"=[a-zA-Z0-9-!]*;?","");return a}},setExcludeCookie:function(a){try{if(this.log(this.name+" setExcludeCookie","DEBUG"),!isNaN(a)&&a>0){var b=new Date;b.setTime(b.getTime()+a*36E5);var c="; expires="+b.toGMTString();document.cookie="lpdontbotherme=1"+c+"; path=/";typeof lpSendData!=
"undefined"&&this.excludeVisitorByCookie&&lpSendData("session",this.excludeVariableName,this.excludeVariableValue)}}catch(d){this.log("Plugin "+this.name+" exception in setExcludeCookie:"+d,"ERROR")}},busyAction:function(a){if(this.overrideBusyAction)try{this.log(this.name+" busyAction","DEBUG");objRef=eval(a.objName);var b=objRef.getActionURL("Busy"),b=b.replace(/forceOffline/,"SESSIONVAR%21BusyClickOverride");window.open(b,"Chat"+lpMTagConfig.lpNumber,"width=472,height=320,status=0,resizable=0,menubar=no,scrollbars=no,location=no")}catch(c){this.log("Plugin "+
this.name+" exception in busyAction:"+c,"ERROR")}},offlineAction:function(a){if(this.overrideOfflineAction)try{this.log(this.name+" offlineAction","DEBUG");objRef=eval(a.objName);var b=objRef.getActionURL("Offline");window.open(b,"Chat"+lpMTagConfig.lpNumber,"width=472,height=320,status=0,resizable=0,menubar=no,scrollbars=no,location=no")}catch(c){this.log("Plugin "+this.name+" exception in offlineAction:"+c,"ERROR")}},dbStateChange:function(a){try{this.log(this.name+" dbStateChange","DEBUG");for(var b=
eval(a.objName),c=!1,d=0;d<this.buttonRefs.length;d++)this.buttonRefs[d]===b&&(c=!0);!c&&b!=null&&this.buttonRefs.push(b);objRef=eval(a.objName);if(typeof objRef.refImage=="undefined")return!0;if(a.status=="busy"&&this.overrideBusyAction)return objRef.setCursorStyle(objRef.pointerStyle),objRef.refImage.src=typeof objRef.ver=="undefined"?objRef.imageUrl+objRef.imgBusyName:objRef.imgBusyName,objRef.refImage.alt="",objRef.refImage.onclick=typeof objRef.overwriteObj.busyAction!="undefined"?function(){try{eval(objRef.extConfig.ovr).busyAction(a.objName)}catch(b){}return!1}:
null,!1;if(a.status=="offline"&&this.overrideOfflineAction)return objRef.setCursorStyle(objRef.pointerStyle),objRef.refImage.src=typeof objRef.ver=="undefined"?objRef.imageUrl+objRef.imgOfflineName:objRef.imgOfflineName,objRef.refImage.alt="",objRef.refImage.onclick=typeof objRef.overwriteObj.offlineAction!="undefined"?function(){try{eval(objRef.extConfig.ovr).offlineAction(a.objName)}catch(b){}return!1}:null,!1}catch(e){this.log("Plugin "+this.name+" exception in dbStateChange:"+e,"ERROR")}return!0},
refreshButtons:function(){for(var a=0;a<this.buttonRefs.length;a++){var b=this.buttonRefs[a];try{b.MakeCall()}catch(c){this.log("Plugin "+this.name+" exception when refreshing button: "+c,"ERROR")}}},inviteChatShown:function(a){try{if(this.log(this.name+" inviteChatShown","DEBUG"),this.forceButtonRefreshOnInvite==!0&&this.refreshButtons(),this.overrideZIndex){var b=eval(a.objName);if(b&&b.divID){var c=document.getElementById(b.divID);if(c)c.style.zIndex=this.zIndex}}}catch(d){this.log("Plugin "+this.name+
" exception in inviteChatShown:"+d,"ERROR")}return!0},inviteChatDeclined:function(){try{this.log(this.name+" inviteChatDeclined","DEBUG"),this.forceButtonRefreshOnDecline==!0&&this.refreshButtons()}catch(a){this.log("Plugin "+this.name+" exception in inviteChatDeclined:"+a,"ERROR")}return!0}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatDeclined",run:function(a){return lpMTagConfig.pluginCode.globalUtilsV2.inviteChatDeclined(a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatShown",run:function(a){return lpMTagConfig.pluginCode.globalUtilsV2.inviteChatShown(a)}};
if(typeof lpMTagConfig.pluginCode=="undefined")lpMTagConfig.pluginCode={};
lpMTagConfig.pluginCode.genericEventsBridge={ver:1,name:"genericEventsBridge",invStart:null,invAccepted:null,invDeclined:null,invTimeout:null,invVoiceStart:null,invVoiceAccepted:null,invVoiceDeclined:null,invVoiceTimeout:null,invMultiChannelStart:null,invMultiChannelAccepted:null,invMultiChannelDeclined:null,invMultiChannelTimeout:null,btStateChange:null,btClicked:null,override:!1,dynButtonHooks:[{name:"dbStateChange",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.dbStateChange(a)}},
{name:"dbClicked",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.dbClicked(a)}}],start:function(){this.log(this.name+" start","DEBUG")},execCallback:function(a,b,c){var d=!0;try{this.log(this.name+" "+a,"DEBUG"),b!==null&&(d=b(c))}catch(e){this.log("Plugin "+this.name+" exception in "+a+":"+e,"ERROR")}return this.override?d:!0},inviteChatStart:function(a){return this.execCallback("inviteChatStart",this.invStart,a)},inviteChatAccept:function(a){return this.execCallback("inviteChatAccepted",
this.invAccepted,a)},inviteChatDeclined:function(a){return this.execCallback("inviteChatDeclined",this.invDeclined,a)},inviteChatTimeout:function(a){return this.execCallback("inviteChatTimeout",this.invTimeout,a)},inviteVoiceStart:function(a){return this.execCallback("inviteVoiceStart",this.invVoiceStart,a)},inviteVoiceAccept:function(a){return this.execCallback("inviteVoiceAccept",this.invVoiceAccepted,a)},inviteVoiceDeclined:function(a){return this.execCallback("inviteVoiceDeclined",this.invVoiceDeclined,
a)},inviteVoiceTimeout:function(a){return this.execCallback("inviteVoiceTimeout",this.invVoiceTimeout,a)},inviteMultiChannelStart:function(a){return this.execCallback("inviteMultiChannelStart",this.invMultiStart,a)},inviteMultiChannelAccept:function(a,b){var c=!0;try{this.log(this.name+" inviteMultiChannelAccept","DEBUG"),this.invMultiChannelAccept!==null&&(c=this.invMultiChannelAccept(a,b))}catch(d){this.log("Plugin "+this.name+" exception in inviteMultiChannelAccept:"+d,"ERROR")}return this.override?
c:!0},inviteMultiChannelDeclined:function(a){return this.execCallback("inviteMultiChannelDeclined",this.invMultiDeclined,a)},inviteMultiChannelTimeout:function(a){return this.execCallback("inviteMultiChannelTimeout",this.invMultiTimeout,a)},dbStateChange:function(a){return this.execCallback("dbStateChange",this.btStateChange,a)},dbClicked:function(a){return this.execCallback("dbClicked",this.btClicked,a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatStart",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteChatStart(a)}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatAccept",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteChatAccept(a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatDeclined",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteChatDeclined(a)}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatTimeout",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteChatTimeout(a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteVoiceStart",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteVoiceStart(a)}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteVoiceAccept",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteVoiceAccept(a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteVoiceDeclined",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteVoiceDeclined(a)}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteVoiceTimeout",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteVoiceTimeout(a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteMultiChannelStart",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteMultiChannelStart(a)}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteMultiChannelAccept",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteMultiChannelAccept(a)}};
lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteMultiChannelDeclined",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteMultiChannelDeclined(a)}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteMultiChannelTimeout",src:"genericEventsBridge",run:function(a){return lpMTagConfig.pluginCode.genericEventsBridge.inviteMultiChannelTimeout(a)}};
if(typeof lpMTagConfig.pluginCode=="undefined")lpMTagConfig.pluginCode={};
lpMTagConfig.pluginCode.inviteDeclineEffects={ver:1.1,name:"inviteDeclineEffects",chatButRef:null,effectTrigger:"",effect:"invite-transfer",transferSpeed:2E3,transferClassName:"ui-effects-transfer",transferClassStyle:"",onEndTransfer:null,pulsateButton:!0,inviteFadeSpeed:500,jQueryURL:"",jQueryUIURL:"",dynButtonHooks:[{name:"dbStart",src:"inviteDeclineEffects",run:function(a){return lpMTagConfig.pluginCode.inviteDeclineEffects.dbStart(a)}}],inviteClosed:!1,start:function(){this.log(this.name+" start",
"DEBUG");var a="",b=document.getElementsByTagName("head")[0];if(this.transferClassStyle!==""){var a=document.createElement("style"),c="."+this.transferClassName+"{"+this.transferClassStyle+"}";a.setAttribute("type","text/css");b.appendChild(a);a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}if(typeof jQuery=="undefined"&&this.jQueryURL!=="")a=document.createElement("script"),a.type="text/javascript",a.src=this.jQueryURL,b.appendChild(a);if(typeof $!="undefined"&&typeof $.effects==
"undefined"&&this.jQueryUIURL!=="")a=document.createElement("script"),a.type="text/javascript",a.src=this.jQueryUIURL,b.appendChild(a)},dbStart:function(a){try{this.log(this.name+" dbStart","DEBUG"),this.chatButRef=eval(a.objName)}catch(b){this.log("Plugin "+this.name+" exception in dbStart:"+b,"ERROR")}return!0},inviteChatDeclined:function(a){try{if(this.inviteClosed)return this.inviteClosed=!1,!0;this.log(this.name+" inviteChatDeclined","DEBUG");inviteObj=eval(a.objName);if(inviteObj===null||this.chatButRef===
null||this.chatButRef.buttonState!="online"||typeof jQuery=="undefined"||typeof $.effects=="undefined"||this.effectTrigger!==""&&inviteObj.contentType==2&&inviteObj.inviteHTML.indexOf(this.effectTrigger)<0)return!0;var b=this;if(typeof $!="undefined"&&this.effect=="invite-transfer"){var c=$("#"+inviteObj.divID);this.inviteFadeSpeed>0&&c.animate({opacity:0},this.inviteFadeSpeed);c.effect("transfer",{to:"#"+this.chatButRef.divID,className:this.transferClassName},this.transferSpeed,this.onEndTransfer!==
null?this.onEndTransfer:function(){b.pulsateButton&&$("#"+b.chatButRef.divID).effect("pulsate")})}if(typeof jQuery!="undefined"&&this.effect=="invite-fade"){var d=jQuery("#"+this.chatButRef.divID),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth(),opacity:0};jQuery("#"+inviteObj.divID).animate(f,"slow","linear",function(){b.pulsateButton&&jQuery("#"+b.chatButRef.divID).effect("pulsate");inviteObj.CloseInvite!==null&&inviteObj.CloseInvite()});this.inviteClosed=!0;return!1}}catch(g){this.log("Plugin "+
this.name+" exception in inviteChatDeclined:"+g,"ERROR")}return!0}};lpMTagConfig.pluginHook.invite[lpMTagConfig.pluginHook.invite.length]={name:"inviteChatDeclined",src:"inviteDeclineEffects",run:function(a){return lpMTagConfig.pluginCode.inviteDeclineEffects.inviteChatDeclined(a)}};
if(typeof lpMTagConfig.initPluginSys=="undefined")lpMTagConfig.initPluginSys=function(){try{for(var d in lpMTagConfig.plugins){for(var c in lpMTagConfig.pluginCode.lpBasePlugin)lpMTagConfig.pluginCode[d][c]=lpMTagConfig.pluginCode.lpBasePlugin[c];typeof lpMTagConfig.pluginCode[d].init!="undefined"&&lpMTagConfig.pluginCode[d].init();typeof lpMTagConfig.pluginLoaded!="undefined"&&lpMTagConfig.pluginLoaded(lpMTagConfig.pluginCode[d].name)}}catch(k){if(typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display)lpMTagDebug.Display("Exceptions in processing pluginRef:"+
k,"ERROR","PLUGIN-SYS");else throw k;}d=function(a,b){typeof a[b.name]=="undefined"&&(a[b.name]=function(a,c){return arguments.callee.hooks?lpMTagConfig.runPluginHooks(arguments.callee.hooks,b.name,{objName:a,status:c}):lpMTagConfig.runPluginHooks(lpMTagConfig.pluginHook.dynButtons,b.name,{objName:a,status:c})});if(!a[b.name].hooks)a[b.name].hooks=[];a[b.name].hooks.push(b)};try{for(c in lpMTagConfig.pluginRef){var g=lpMTagConfig.pluginRef[c];if(typeof g.dbOvrObj!="undefined")for(var h=0;h<g.dbOvrObj.length;h++){var i=
eval(g.dbOvrObj[h]);if(i){for(var f=0;f<lpMTagConfig.pluginHook.dynButtons.length;f++)d(i,lpMTagConfig.pluginHook.dynButtons[f]);if(g.dynButtonHooks)for(var j=0;j<g.dynButtonHooks.length;j++)d(i,g.dynButtonHooks[j])}}}}catch(l){if(typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display)lpMTagDebug.Display("Exceptions in processing dbOvrObj:"+l,"ERROR","PLUGIN-SYS");else throw l;}try{for(f=0;f<lpMTagConfig.pluginHook.invite.length;f++)(function(a){var b=lpMTagConfig.pluginHook.invite[a];typeof lpMTagConfig[b.name]==
"undefined"&&(lpMTagConfig[b.name]=function(a){return lpMTagConfig.runPluginHooks(lpMTagConfig.pluginHook.invite,b.name,{objName:a})})})(f)}catch(m){if(typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display)lpMTagDebug.Display("Exceptions in processing invite hooks:"+m,"ERROR","PLUGIN-SYS");else throw m;}lpMTagConfig.runPluginHooks=function(a,b,c){try{for(var d=!0,f=0;f<a.length;f++){var g=a[f];if(g.name==b){typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display&&lpMTagDebug.Display("runPluginHooks running:"+
b,"DEBUG","PLUGIN-SYS");c.prevRet=d;var h=g.run(c);h===!1&&(d=h)}}}catch(i){if(typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display)lpMTagDebug.Display("Exceptions in runPluginHooks:"+i,"ERROR","PLUGIN-SYS");else throw i;}return d};try{for(c in lpMTagConfig.pluginRef)c!="lpBasePlugin"&&typeof lpMTagConfig.pluginRef[c].start!="undefined"&&lpMTagConfig.pluginRef[c].start()}catch(n){if(typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display)lpMTagDebug.Display("Exceptions in processing start evets:"+n,
"ERROR","PLUGIN-SYS");else throw n;}},lpMTagConfig.initPluginSys();else if(typeof e!="undefined")if(typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display)lpMTagDebug.Display("Trying to define and run initPluginSys more than once (Check for multiple mtagconfig.js):"+e,"ERROR","PLUGIN-SYS");else throw e;else typeof lpMTagDebug!="undefined"&&lpMTagDebug.Display&&lpMTagDebug.Display("Trying to define and run initPluginSys more than once (Check for multiple mtagconfig.js):","ERROR","PLUGIN-SYS");
