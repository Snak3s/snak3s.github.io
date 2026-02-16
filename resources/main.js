const appName = "Snakes";

var route, prevRoute;
var param, prevParam;
var pages = {
	"": {
		title: "Home",
		path: "",
	},
	"tags": {
		title: "Category",
		path: "tags",
	}
};
var pagelist = [];
var tags = {};


function strip(s) {
	let l = 0, r = s.length;
	const blank = " \r\n\t";
	while (l < s.length && blank.includes(s[l])) {
		l++;
	}
	while (r > l && blank.includes(s[r - 1])) {
		r--;
	}
	return s.substring(l, r);
}


function parseRoute() {
	prevRoute = route;
	prevParam = param;
	route = window.location.hash;
	param = null;
	if (route.length > 0 && route[0] == "#") {
		route = route.substring(1);
	}
	if (route.indexOf("#") >= 0) {
		route = route.substring(0, route.indexOf("#"));
	}
	if (route.indexOf("?") >= 0) {
		param = route.substring(route.indexOf("?") + 1);
		param = decodeURI(param);
		route = route.substring(0, route.indexOf("?"));
	}
	return prevRoute != route || (prevRoute == route && prevParam != param);
}


function timestampParam() {
	return "?t=" + new Date().getTime();
}


function clearPage() {
	$("#main > div").css("display", "none");
	if (prevRoute != undefined) {
		$("html, body").prop("scrollTop", 0);
	}
}


function throwError(title, msgs) {
	document.title = "Error" + " - " + appName;
	clearPage();
	$("#error").css("display", "flex");
	$("#errortitle").text(title);
	$("#errormsg").empty();
	if (!Array.isArray(msgs)) {
		msgs = [msgs];
	}
	for (let id in msgs) {
		let msg = $("<li></li>");
		msg.text(msgs[id]);
		$("#errormsg").append(msg);
	}
}


function parseConfig(data) {
	let lines = data.split("\n");
	let obj = [Object()];
	let objname = [""];
	let objindent = [-1];
	let cnt = 0;
	for (let id in lines) {
		let line = lines[id];
		let indent = 0;
		while (indent < line.length && " \t".includes(line[indent])) {
			indent++;
		}
		while (objindent[cnt] >= indent) {
			obj[cnt - 1][objname[cnt]] = obj[cnt];
			obj.pop();
			objname.pop();
			objindent.pop();
			cnt--;
		}
		let index = line.indexOf(":");
		let propname = strip(line.substring(indent, index));
		if (propname[0] == "-") {
			propname = strip(propname.substring(1));
		}
		let propvalue = strip(line.substring(index + 1));
		if (propvalue != "") {
			obj[cnt][propname] = propvalue;
			continue;
		}
		obj.push(Object());
		objname.push(propname);
		objindent.push(indent);
		cnt++;
	}
	while (cnt > 0) {
		obj[cnt - 1][objname[cnt]] = obj[cnt];
		obj.pop();
		objname.pop();
		objindent.pop();
		cnt--;
	}
	return obj[0];
}


function parseTags(tags) {
	if (tags == undefined) {
		return [];
	}
	tags = strip(tags);
	if (tags[0] == "[" && tags[tags.length - 1] == "]") {
		tags = tags.substring(1, tags.length - 1);
	}
	tags = tags.split(",");
	for (let id in tags) {
		tags[id] = strip(tags[id]);
	}
	return tags;
}


function loadConfig(config) {
	for (let prop in config.navbar) {
		let obj;
		if (typeof(config.navbar[prop]) == "string") {
			obj = {
				name: prop,
				title: prop,
				path: config.navbar[prop],
				src: config.navbar[prop],
			};
		} else {
			obj = config.navbar[prop];
			if (!obj.hasOwnProperty("title")) {
				obj.title = prop;
			}
			if (!obj.hasOwnProperty("name")) {
				obj.name = prop;
			}
			if (!obj.hasOwnProperty("path")) {
				obj.path = prop;
			}
			if (!obj.hasOwnProperty("src")) {
				obj.src = obj.path;
			}
		}
		obj.tags = parseTags(obj.tags);
		for (let id in obj.tags) {
			if (tags[obj.tags[id]] == undefined) {
				tags[obj.tags[id]] = [];
			}
			tags[obj.tags[id]].push(obj);
		}
		let item = $("<a></a>");
		item.attr("id", "nav-" + obj.path);
		item.attr("href", "#" + obj.path);
		item.addClass("ui item");
		item.text(obj.name);
		$("#navbar-items").append(item);
		pages[obj.path] = obj;
	}
	for (let prop in config.pages) {
		let obj;
		if (typeof(config.pages[prop]) == "string") {
			obj = {
				name: prop,
				title: prop,
				path: config.pages[prop],
				src: config.pages[prop],
			};
		} else {
			obj = config.pages[prop];
			if (!obj.hasOwnProperty("title")) {
				obj.title = prop;
			}
			if (!obj.hasOwnProperty("name")) {
				obj.name = prop;
			}
			if (!obj.hasOwnProperty("path")) {
				obj.path = prop;
			}
			if (!obj.hasOwnProperty("src")) {
				obj.src = obj.path;
			}
		}
		obj.tags = parseTags(obj.tags);
		for (let id in obj.tags) {
			if (tags[obj.tags[id]] == undefined) {
				tags[obj.tags[id]] = [];
			}
			tags[obj.tags[id]].push(obj);
		}
		pages[obj.path] = obj;
		pagelist.push(obj);
	}
}


function mdEscapeChar(c) {
	if (c == "\\") {
		return "\\\\";
	}
	if (c == "_") {
		return "\\_";
	}
	if (c == "*") {
		return "\\*";
	}
	return c;
}

function mdEscape(s) {
	let t = "";
	let inMath = false;
	let tok = "", esctok = "";
	let ldelim = "";
	let newline = 0;
	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 2 && s[i] == "`" && s[i + 1] == "`" && s[i + 2] == "`") {
			let linecnt = 0;
			let r = i + 1;
			while (r < s.length - 2) {
				if (s[r] == "\n") {
					linecnt++;
				}
				if (linecnt > 0 && s[r] == "`" && s[r + 1] == "`" && s[r + 2] == "`") {
					break;
				}
				r++;
			}
			if (r < s.length - 2 && linecnt > 0 && s[r] == "`" && s[r + 1] == "`" && s[r + 2] == "`") {
				if (inMath && (ldelim == "$" || ldelim == "\\(")) {
					inMath = false;
					t += ldelim + tok;
				}
				if (!inMath) {
					while (i < r) {
						t += s[i];
						i++;
					}
					while (s[i + 1] == "`") {
						t += s[i];
						i++;
					}
					t += s[i];
					continue;
				}
			}
		}
		if (!inMath) {
			if (i < s.length - 1 && s[i] == "`" && s[i + 1] != "`") {
				let r = i + 1;
				while (r < s.length && s[r] != "\n" && s[r] != "`") {
					r++;
				}
				if (r < s.length && s[r] == "`") {
					while (i < r) {
						t += s[i];
						i++;
					}
					t += s[r];
					continue;
				}
			}
			if (i < s.length - 1 && s[i] == "\\" && "[(".includes(s[i + 1])) {
				ldelim = s[i] + s[i + 1];
				i++;
				inMath = true;
				esctok = tok = "";
				newline = 0;
				continue;
			}
			if (i < s.length - 1 && s[i] == "$" && s[i + 1] == "$") {
				ldelim = s[i] + s[i + 1];
				i++;
				inMath = true;
				esctok = tok = "";
				newline = 0;
				continue;
			}
			if (s[i] == "$" && (i == 0 || s[i - 1] != "\\") && i < s.length - 1 && s[i + 1] != " " && s[i + 1] != "$") {
				ldelim = s[i];
				inMath = true;
				esctok = tok = "";
				newline = 0;
				continue;
			}
			t += s[i];
			continue;
		}
		if (s[i] == "\n") {
			newline++;
		}
		if (!" \n\r\t".includes(s[i])) {
			newline = 0;
		}
		if ((ldelim == "$" || ldelim == "\\(") && newline >= 2) {
			inMath = false;
			t += ldelim + tok + s[i];
			continue;
		}
		if (ldelim == "\\(" && i < s.length - 1 && s[i] == "\\" && s[i + 1] == ")" && s[i - 1] != "\\") {
			inMath = false;
			t += ldelim + esctok + s[i] + s[i + 1];
			i++;
			continue;
		}
		if (ldelim == "\\[" && i < s.length - 1 && s[i] == "\\" && s[i + 1] == "]" && s[i - 1] != "\\") {
			inMath = false;
			t += ldelim + esctok + s[i] + s[i + 1];
			i++;
			continue;
		}
		if (ldelim == "$$" && i < s.length - 1 && s[i] == "$" && s[i + 1] == "$" && s[i - 1] != "\\") {
			inMath = false;
			t += ldelim + esctok + s[i] + s[i + 1];
			i++;
			continue;
		}
		if (ldelim == "$" && s[i] == "$" && s[i - 1] != "\\" && s[i - 1] != " " && (i < s.length + 1 || !"0123456789".includes(s[i + 1]))) {
			inMath = false;
			t += ldelim + esctok + s[i];
			continue;
		}
		tok += s[i];
		esctok += mdEscapeChar(s[i]);
	}
	if (inMath) {
		t += ldelim + tok;
	}
	return t;
}


function getIcon(iconName) {
	let icon = $("<i></i>");
	icon.addClass(iconName + " icon");
	return icon;
}


function getMotto() {
	$("#index-motto-content").text("迷いを舍てて サテライト Ah…");
	$("#index-motto").css("opacity", 1);
}


function renderPreview(preview, content) {
	let md = markdownit({
		html: true,
		xhtmlOut: true,
		highlight: function(str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return "<pre class=\"hljs\"><code>" +
						hljs.highlight(str, {language: lang}).value +
						"</code></pre>";
				} catch (__) {}
			}
			return "<pre class=\"hljs\"><code>" + md.utils.escapeHtml(str) + "</code></pre>";
		},
	});
	let html = md.render(mdEscape(content));
	let pos = -1;
	for (let i = 1; i <= 6; i++) {
		let p = html.indexOf("<h" + i + ">");
		if (p >= 0 && (p < pos || pos == -1)) {
			pos = p;
		}
	}
	if (pos > 0) {
		html = html.substring(0, pos);
	} else {
		pos = html.indexOf("</p>");
		if (pos >= 0) {
			html = html.substring(0, pos + 4);
			for (let i = 4; i >= 1; i--) {
				html = html.replaceAll("<h" + i + ">", "<h" + (i + 1) + ">");
				html = html.replaceAll("</h" + i + ">", "</h" + (i + 1) + ">");
			}
		}
	}
	preview.html(html);
	preview.find("blockquote").addClass("ui blockquote segment");
	preview.find("table").addClass("ui celled table");
	renderMathInElement(preview[0], {
		delimiters: [
			{left: "$$", right: "$$", display: true},
			{left: "$", right: "$", display: false},
			{left: "\\(", right: "\\)", display: false},
			{left: "\\[", right: "\\]", display: true},
		],
	});
}


function getPageSegment(page) {
	let segments = $("<div></div>");
	segments.addClass("ui index-page-segment segments");
	let header_link = $("<a></a>")
	header_link.attr("href", "#" + page.path);
	let header = $("<div></div>");
	header.addClass("ui top attached blue huge header segment");
	header.text(page.title);
	header_link.append(header);
	let content = $("<div></div>");
	content.attr("id", "index-preview#" + page.path);
	content.addClass("ui attached index-preview segment");
	let footer = $("<div></div>");
	footer.addClass("ui bottom attached clearing index-preview-footer segment");
	if (page.author) {
		let label = $("<div></div>");
		label.addClass("ui borderless label");
		label.text(page.author);
		label.prepend(getIcon("pencil alternate"));
		footer.append(label);
	}
	if (page.date) {
		let label = $("<div></div>");
		label.addClass("ui borderless label");
		label.text(page.date);
		label.prepend(getIcon("clock outline"));
		footer.append(label);
	}
	if (page.tags.length > 0) {
		let label = $("<div></div>");
		label.addClass("ui borderless label");
		if (page.tags.length == 1) {
			label.append(getIcon("tag"));
		} else {
			label.append(getIcon("tags"));
		}
		for (let id in page.tags) {
			let tag = $("<a></a>");
			tag.attr("href", "#tags?" + page.tags[id]);
			tag.addClass("page-header-tags");
			tag.text(page.tags[id]);
			label.append(tag);
		}
		footer.append(label);
	}
	let readmore_link = $("<a></a>");
	readmore_link.attr("href", "#" + page.path);
	let readmore = $("<div></div>");
	readmore.addClass("ui blue right labeled icon readmore button");
	readmore.text("Read More");
	readmore.append(getIcon("right chevron"));
	readmore_link.append(readmore);
	footer.append(readmore_link);
	segments.append(header_link);
	segments.append(content);
	segments.append(footer);
	$.ajax({
		url: page.src + timestampParam(),
		dataType: "text",
		callBack: content,
		success: function(data) {
			renderPreview(this.callBack, data);
			if ($("#index").css("display") != "none") {
				$("#index-menu").sticky({
					context: "#index-pages",
					offset: 80,
				});
			}
			if ($("#tagspage").css("display") != "none") {
				$("#tagspage-menu").sticky({
					context: "#tagspage-pages",
					offset: 80,
				});
			}
		},
		error: function(xhr, status, error) {
			this.callBack.text("Oooops, error occurred.");
			if ($("#index").css("display") != "none") {
				$("#index-menu").sticky({
					context: "#index-pages",
					offset: 80,
				});
			}
			if ($("#tagspage").css("display") != "none") {
				$("#tagspage-menu").sticky({
					context: "#tagspage-pages",
					offset: 80,
				});
			}
		}
	});
	return segments;
}


function renderIndex() {
	getMotto();
	$("#index-pages").empty();
	for (let id in pagelist) {
		$("#index-pages").append(getPageSegment(pagelist[id]));
	}
	$("#index-tags").empty();
	for (let id in tags) {
		let tag = $("<a></a>");
		tag.attr("href", "#tags?" + id);
		tag.addClass("ui index-menu-tags small button");
		tag.text(id);
		$("#index-tags").append(tag);
	}
	clearPage();
	$("#index").css("display", "block");
	$("#index-menu").sticky({
		context: "#index-pages",
		offset: 80,
	});
}


function renderTagsPage() {
	$("#tagspage-pages").empty();
	if (param == "" || param == undefined || param == null) {
		$("#tagspage-title").text("Category");
		let list = $("<div></div>");
		list.addClass("ui four stackable cards");
		for (let id in tags) {
			let item_link = $("<a></a>");
			item_link.attr("href", "#tags?" + id);
			item_link.addClass("fluid card");
			let item = $("<div></div>");
			item.addClass("content");
			item.text(id + " (" + tags[id].length + ")");
			item.prepend(getIcon("tag"));
			item_link.append(item);
			list.append(item_link);
		}
		$("#tagspage-pages").append(list);
	} else {
		$("#tagspage-title").text("Tag: " + param);
		for (let id in tags[param]) {
			$("#tagspage-pages").append(getPageSegment(tags[param][id]));
		}
	}
	$("#tagspage-tags").empty();
	for (let id in tags) {
		let tag = $("<a></a>");
		tag.attr("href", "#tags?" + id);
		tag.addClass("ui index-menu-tags small button");
		tag.text(id);
		$("#tagspage-tags").append(tag);
	}
	clearPage();
	$("#tagspage").css("display", "block");
	$("#tagspage-menu").sticky({
		context: "#tagspage-pages",
		offset: 80,
	});
}


var activeSection, activeSubsection;
var subsectionCnt;

function updActiveSec(section, subsection) {
	$("#page-menu-item-" + activeSection).removeClass("active");
	$("#page-menu-item-" + activeSection + "-" + activeSubsection).removeClass("active");
	activeSection = section;
	activeSubsection = subsection;
	$("#page-menu-item-" + activeSection).addClass("active");
	$("#page-menu-item-" + activeSection + "-" + activeSubsection).addClass("active");
}


function renderPage(page, content) {
	$("#page-title").text(page.title);
	$("#page-menu-title").text(page.title);
	let md = markdownit({
		html: true,
		xhtmlOut: true,
		highlight: function(str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return "<pre class=\"hljs\"><code>" +
						hljs.highlight(str, {language: lang}).value +
						"</code></pre>";
				} catch (__) {}
			}
			return "<pre class=\"hljs\"><code>" + md.utils.escapeHtml(str) + "</code></pre>";
		},
	});
	$("#page-content").html(md.render(mdEscape(content)));
	$("#page-content > blockquote").addClass("ui blockquote segment");
	$("#page-content > table").addClass("ui celled table");
	let labels = $("#page-labels");
	labels.empty();
	if (page.author) {
		let label = $("<div></div>");
		label.addClass("ui inverted borderless label");
		label.text(page.author);
		label.prepend(getIcon("pencil alternate"));
		labels.append(label);
	}
	if (page.date) {
		let label = $("<div></div>");
		label.addClass("ui inverted borderless label");
		label.text(page.date);
		label.prepend(getIcon("clock outline"));
		labels.append(label);
	}
	if (page.tags.length > 0) {
		let label = $("<div></div>");
		label.addClass("ui inverted borderless label");
		if (page.tags.length == 1) {
			label.append(getIcon("tag"));
		} else {
			label.append(getIcon("tags"));
		}
		for (let id in page.tags) {
			let tag = $("<a></a>");
			tag.attr("href", "#tags?" + page.tags[id]);
			tag.addClass("page-header-tags");
			tag.text(page.tags[id]);
			label.append(tag);
		}
		labels.append(label);
	}
	renderMathInElement($("#page-content")[0], {
		delimiters: [
			{left: "$$", right: "$$", display: true},
			{left: "$", right: "$", display: false},
			{left: "\\(", right: "\\)", display: false},
			{left: "\\[", right: "\\]", display: true},
		],
	});
	let mindep = 2;
	while (mindep < 5 && $("#page-content > h" + mindep).length == 0) {
		mindep++;
	}
	let items = $("#page-menu-items");
	items.empty();
	clearPage();
	$("#page").css("display", "block");
	activeSection = activeSubsection = 0;
	if ($("#page-content > h" + mindep).length > 0) {
		$("#page-menu-items").css("display", "block");
		let section = 0, subsection = 0;
		let hlist = $("#page-content").find("h" + mindep + ", h" + (mindep + 1));
		let submenu = $("<div></div>");
		submenu.addClass("menu");
		items.append(submenu);
		subsectionCnt = [];
		for (let i = 0; i < hlist.length; i++) {
			let h = hlist.eq(i);
			if (h[0].tagName.toLowerCase() == "h" + mindep) {
				section++;
				subsectionCnt.push(subsection);
				subsection = 0;
				let item = $("<a></a>");
				item.attr("id", "page-menu-item-" + section);
				item.prop("section", section);
				item.addClass("ui item");
				item.html(h.html());
				items.append(item);
				let anchor = $("<a></a>");
				anchor.attr("name", route + "#" + section);
				anchor.attr("id", "anchor-" + section);
				anchor.prop("section", section);
				anchor.addClass("anchor");
				h.prepend(anchor);
				item.click(function() {
					$("#anchor-" + this.section)[0].scrollIntoView({
						block: "start",
						inline: "nearest",
						behavior: "smooth",
					});
				});
				anchor.visibility({
					once: false,
					onTopPassed: function() {
						updActiveSec(this.section, 0);
					},
					onTopPassedReverse: function() {
						updActiveSec(this.section - 1, subsectionCnt[this.section - 1]);
					},
				});
				submenu = $("<div></div>");
				submenu.addClass("menu");
				items.append(submenu);
			} else {
				subsection++;
				let item = $("<a></a>");
				item.attr("id", "page-menu-item-" + section + "-" + subsection);
				item.prop("section", section);
				item.prop("subsection", subsection);
				item.addClass("ui item");
				item.text(h.text());
				submenu.append(item);
				let anchor = $("<a></a>");
				anchor.attr("name", route + "#" + section + "-" + subsection);
				anchor.attr("id", "anchor-" + section + "-" + subsection);
				anchor.prop("section", section);
				anchor.prop("subsection", subsection);
				anchor.addClass("anchor");
				h.prepend(anchor);
				item.click(function() {
					$("#anchor-" + this.section + "-" + this.subsection)[0].scrollIntoView({
						block: "start",
						inline: "nearest",
						behavior: "smooth",
					});
				});
				anchor.visibility({
					once: false,
					onTopPassed: function() {
						updActiveSec(this.section, this.subsection);
					},
					onTopPassedReverse: function() {
						updActiveSec(this.section, this.subsection - 1);
					},
				});
			}
		}
		$("#page-menu").css("display", "block");
		$("#page-content-container").removeClass("twelve sixteen wide");
		$("#page-content-container").addClass("twelve wide");
	} else {
		$("#page-menu-items").css("display", "none");
		$("#page-menu").css("display", "none");
		$("#page-content-container").removeClass("twelve sixteen wide");
		$("#page-content-container").addClass("sixteen wide");
	}
	$("#page-content").visibility({
		onUpdate: function(c) {
			let p = c.pixelsPassed / Math.max(1, c.height + 80 - screen.availHeight);
			p = Math.min(1, p);
			$("#page-menu-percentage").css("width", p * 100 + "%");
			let a = Math.max(Math.min(p - 0.3, 0.5), 0);
			$("#page-menu-percentage").css("color", "rgba(255, 255, 255, " + a + ")");
			if (p >= 0.3) {
				$("#page-menu-percentage").text(Math.round(p * 100) + "%");
			} else {
				$("#page-menu-percentage").text("");
			}
		}
	});
	$("#page-menu").sticky({
		context: "#page-content",
		offset: 80,
	});
}


function loadPage() {
	if (!parseRoute()) {
		return;
	}
	if (prevRoute != null && prevRoute in pages) {
		$("#nav-" + prevRoute).removeClass("active");
	}
	$("#main").css("opacity", 0);
	if (!(route in pages)) {
		throwError("Page not found", "Target page: " + route);
		$("#main").css("opacity", 1);
		return;
	}
	$("#nav-" + route).addClass("active");
	document.title = pages[route].title + " - " + appName;
	if (route == "") {
		renderIndex();
		$("#main").css("opacity", 1);
		return;
	}
	if (route == "tags") {
		renderTagsPage();
		$("#main").css("opacity", 1);
		return;
	}
	$.ajax({
		url: pages[route].src + timestampParam(),
		dataType: "text",
		success: function(data) {
			renderPage(pages[route], data);
			$("#main").css("opacity", 1);
		},
		error: function(xhr, status, error) {
			throwError("Error occurred while loading page", [
				"Source: " + pages[route].src,
				"Status code: " + xhr.status,
			]);
			$("#main").css("opacity", 1);
		}
	});
}


function render() {
	$(".ui.header.item").text(appName);
	$("#index-title").text(appName);
	$.ajax({
		url: "config.yml" + timestampParam(),
		dataType: "text",
		success: function(data) {
			loadConfig(parseConfig(data));
			loadPage();
		},
		error: function(xhr, status, error) {
			throwError("Error occurred while loading data", [
				"Source: config.yml",
				"Status code: " + xhr.status,
			]);
		}
	});
}

window.onload = () => { render(); };
window.onhashchange = () => { loadPage(); };
