document.writeln("<!--�����ƶ�ͼƬ����-->");
document.writeln("<style type=\"text\/css\">");
document.writeln("<!-- ");
document.writeln("body{font-size=9pt}");
document.writeln("TH{FONT-SIZE: 9pt}");
document.writeln("TD{ FONT-SIZE: 9pt}");
document.writeln("#floater {");
document.writeln("position: absolute;");
document.writeln("left: 874px;");
document.writeln("top: 600;");
document.writeln("width: 125;");
document.writeln("visibility: visible;");
document.writeln("z-index: 10;");
document.writeln("}");
document.writeln("-->");
document.writeln("<\/style>");
document.writeln("");
document.writeln("");
document.writeln("<script>");
document.writeln("var online= new Array();");
document.writeln("if (!document.layers)");
document.writeln("document.write(\'<div id=\"divStayTopLeft\" style=\"position:absolute\">\')");
document.writeln("<\/script>");
document.writeln("<!--�����ƶ�ͼƬ����-->");
document.writeln("");
document.writeln("");
document.writeln("<div ID=\"floater\" style=\"right: 2px; top: 153px; width: 48px; height: 48px\"> ");
document.writeln("");
document.writeln("<TABLE cellSpacing=0 cellPadding=0 width=100 align=center border=0 id=\"table2\">");
document.writeln("  <TBODY>");
document.writeln("  <TR>");
document.writeln("    <TD>");
document.writeln(" <IMG height=55 ");
document.writeln("      src=\"images\/up_001.gif\" ");
document.writeln("      width=118 useMap=#m_about02Map border=0><\/TD><\/TR><\/TBODY><\/TABLE>");
document.writeln("");
document.writeln("<DIV id=tracq1>");
document.writeln("");
document.writeln("<TABLE cellSpacing=0 cellPadding=0 width=100 align=center border=0 id=\"table3\">");
document.writeln("  <TBODY>");
document.writeln("  <TR>");
document.writeln("    <TD class=cpx12hei vAlign=center align=middle width=118 ");
document.writeln("    background=\"images\/mid001.gif\" ");
document.writeln("    height=80>");
document.writeln("      <TABLE height=20 cellSpacing=0 cellPadding=0 width=101 align=center ");
document.writeln("      background=\"images\/list_001.gif\" ");
document.writeln("      border=0 id=\"table4\">");
document.writeln("        <TBODY>");
document.writeln("        <TR>");
document.writeln("          <TD align=middle><SPAN class=px12>��Ա�ͷ�<\/SPAN><\/TD><\/TR><\/TBODY><\/TABLE>");
document.writeln("");
document.writeln("      <TABLE cellSpacing=0 cellPadding=0 width=\"100%\" border=0 id=\"table5\">");
document.writeln("        <TBODY>");
document.writeln("        <TR>");
document.writeln("          <TD height=5>");
document.writeln("<SPAN id=ad_01>�ٵ�������...<\/SPAN>");
document.writeln("");
document.writeln("<\/TD><\/TR><\/TBODY><\/TABLE>");
document.writeln("     ");
document.writeln("");
document.writeln("    <\/TD><\/TR>");
document.writeln("  <TR>");
document.writeln("    <TD>");
document.writeln("<IMG height=21 ");
document.writeln("      src=\"images\/bot_001.gif\" ");
document.writeln("      width=118 align=center border=0><\/TD><\/TR><\/TBODY><\/TABLE><\/TD><\/TR><\/TBODY><\/TABLE><\/DIV><\/DIV><\/DIV><\/DIV>");
document.writeln("<p> ");
document.writeln("  <script LANGUAGE=\"JavaScript\">");
document.writeln("self.onError=null;");
document.writeln("currentX = currentY = 0;");
document.writeln("whichIt = null;");
document.writeln("lastScrollX = 0; lastScrollY = 0;");
document.writeln("NS = (document.layers) ? 1 : 0;");
document.writeln("IE = (document.all) ? 1: 0;");
document.writeln("<!-- STALKER CODE -->");
document.writeln("function heartBeat() {");
document.writeln("if(IE) { diffY = document.body.scrollTop; diffX = document.body.scrollLeft; }");
document.writeln("if(NS) { diffY = self.pageYOffset; diffX = self.pageXOffset; }");
document.writeln("if(diffY != lastScrollY) {");
document.writeln("percent = .1 * (diffY - lastScrollY);");
document.writeln("if(percent > 0) percent = Math.ceil(percent);");
document.writeln("else percent = Math.floor(percent);");
document.writeln("if(IE) document.all.floater.style.pixelTop += percent;");
document.writeln("if(NS) document.floater.top += percent;");
document.writeln("lastScrollY = lastScrollY + percent;");
document.writeln("}");
document.writeln("if(diffX != lastScrollX) {");
document.writeln("percent = .1 * (diffX - lastScrollX);");
document.writeln("if(percent > 0) percent = Math.ceil(percent);");
document.writeln("else percent = Math.floor(percent);");
document.writeln("if(IE) document.all.floater.style.pixelLeft += percent;");
document.writeln("if(NS) document.floater.left += percent;");
document.writeln("lastScrollX = lastScrollX + percent;");
document.writeln("}");
document.writeln("}");
document.writeln("<!-- \/STALKER CODE -->");
document.writeln("<!-- DRAG DROP CODE -->");
document.writeln("function checkFocus(x,y) {");
document.writeln("stalkerx = document.floater.pageX;");
document.writeln("stalkery = document.floater.pageY;");
document.writeln("stalkerwidth = document.floater.clip.width;");
document.writeln("stalkerheight = document.floater.clip.height;");
document.writeln("if( (x > stalkerx && x < (stalkerx+stalkerwidth)) && (y > stalkery && y < (stalkery+stalkerheight))) return true;");
document.writeln("else return false;");
document.writeln("}");
document.writeln("function grabIt(e) {");
document.writeln("if(IE) {");
document.writeln("whichIt = event.srcElement;");
document.writeln("while (whichIt.id.indexOf(\"floater\") == -1) {");
document.writeln("whichIt = whichIt.parentElement;");
document.writeln("if (whichIt == null) { return true; }");
document.writeln("}");
document.writeln("whichIt.style.pixelLeft = whichIt.offsetLeft;");
document.writeln("whichIt.style.pixelTop = whichIt.offsetTop;");
document.writeln("currentX = (event.clientX + document.body.scrollLeft);");
document.writeln("currentY = (event.clientY + document.body.scrollTop);");
document.writeln("} else {");
document.writeln("window.captureEvents(Event.MOUSEMOVE);");
document.writeln("if(checkFocus (e.pageX,e.pageY)) {");
document.writeln("");
document.writeln("whichIt = document.floater;");
document.writeln("StalkerTouchedX = e.pageX-document.floater.pageX;");
document.writeln("StalkerTouchedY = e.pageY-document.floater.pageY;");
document.writeln("}");
document.writeln("}");
document.writeln("return true;");
document.writeln("}");
document.writeln("function moveIt(e) {");
document.writeln("if (whichIt == null) { return false; }");
document.writeln("if(IE) {");
document.writeln("newX = (event.clientX + document.body.scrollLeft);");
document.writeln("newY = (event.clientY + document.body.scrollTop);");
document.writeln("distanceX = (newX - currentX); distanceY = (newY - currentY);");
document.writeln("currentX = newX; currentY = newY;");
document.writeln("whichIt.style.pixelLeft += distanceX;");
document.writeln("whichIt.style.pixelTop += distanceY;");
document.writeln("if(whichIt.style.pixelTop < document.body.scrollTop) whichIt.style.pixelTop = document.body.scrollTop;");
document.writeln("if(whichIt.style.pixelLeft < document.body.scrollLeft) whichIt.style.pixelLeft = document.body.scrollLeft;");
document.writeln("if(whichIt.style.pixelLeft > document.body.offsetWidth - document.body.scrollLeft - whichIt.style.pixelWidth - 20) whichIt.style.pixelLeft = document.body.offsetWidth - whichIt.style.pixelWidth - 20;");
document.writeln("if(whichIt.style.pixelTop > document.body.offsetHeight + document.body.scrollTop - whichIt.style.pixelHeight - 5) whichIt.style.pixelTop = document.body.offsetHeight + document.body.scrollTop - whichIt.style.pixelHeight - 5;");
document.writeln("event.returnValue = false;");
document.writeln("} else {");
document.writeln("whichIt.moveTo(e.pageX-StalkerTouchedX,e.pageY-StalkerTouchedY);");
document.writeln("if(whichIt.left < 0+self.pageXOffset) whichIt.left = 0+self.pageXOffset;");
document.writeln("if(whichIt.top < 0+self.pageYOffset) whichIt.top = 0+self.pageYOffset;");
document.writeln("if( (whichIt.left + whichIt.clip.width) >= (window.innerWidth+self.pageXOffset-17)) whichIt.left = ((window.innerWidth+self.pageXOffset)-whichIt.clip.width)-17;");
document.writeln("if( (whichIt.top + whichIt.clip.height) >= (window.innerHeight+self.pageYOffset-17)) whichIt.top = ((window.innerHeight+self.pageYOffset)-whichIt.clip.height)-17;");
document.writeln("return false;");
document.writeln("}");
document.writeln("return false;");
document.writeln("}");
document.writeln("function dropIt() {");
document.writeln("whichIt = null;");
document.writeln("if(NS) window.releaseEvents (Event.MOUSEMOVE);");
document.writeln("return true;");
document.writeln("}");
document.writeln("<!-- DRAG DROP CODE -->");
document.writeln("if(NS) {");
document.writeln("window.captureEvents(Event.MOUSEUP|Event.MOUSEDOWN);");
document.writeln("window.onmousedown = grabIt;");
document.writeln("window.onmousemove = moveIt;");
document.writeln("window.onmouseup = dropIt;");
document.writeln("}");
document.writeln("if(IE) {");
document.writeln("");
document.writeln("document.onmousedown = grabIt;");
document.writeln("document.onmousemove = moveIt;");
document.writeln("document.onmouseup = dropIt;");
document.writeln("}");
document.writeln("if(NS || IE) action = window.setInterval(\"heartBeat()\",1);");
document.writeln("<\/script>");
document.writeln("  <!--�����ƶ�ͼƬ�������-->");

