lpConnLib.Process({"ResultSet": {"lpCallId":"467355964546-989263616897","lpCallConfirm":"","lpJS_Execute":[{"code_id": "SYSTEM!tagToBrowser_compact.js", "js_code": "function lpTagToBrowser(src,type,charset){this.src=src;if(this.src.indexOf('?')==-1){this.src+='?';}this.src=this.src+'&lpRandom='+(new Date()).getTime();this.type=(typeof(type)=='undefined')?'script':type;this.charset=(typeof(charset)=='undefined')?'UTF-8':charset;}lpTagToBrowser.prototype.Start=function(){if(this.type=='script'){var s=document.createElement(this.type);s.setAttribute('type','text/javascript');s.setAttribute('charset',this.charset);s.setAttribute('src',this.src);try{document.getElementsByTagName('head').item(0).appendChild(s);}catch(e){if(typeof(lpMTagDebug)!='undefined'&&lpMTagDebug.Display){lpMTagDebug.Display('Error appending element to DOM '+e+' src='+this.src,'ERROR');}}}else if(this.type=='img'){var s=new Image();s.src=this.src;}};"},{"code_id": "send_script_message_0", "js_code": "    var dummyVar = Jefferson.callme();    lpMTagConfig.vars.push([\"session\",\"raw_ipd-jsessionid\",dummyVar]);    /*console.log(\"Raw Jefferson Callme = \"+dummyVar);*/    if(!dummyVar) {      /*console.log(\"Jefferson ID failed!\");*/    } else {       var lpsessionid = atob2(dummyVar);       /*console.log(\"lpsessionid = \"+lpsessionid); */       lpMTagConfig.vars.push([\"session\",\"idp-jsessionid\",lpsessionid]);    }"},{"code_id": "INPAGE-DELAY-10", "js_code": "lpMTag.lpInPageRequestDelay=10;"}]}});