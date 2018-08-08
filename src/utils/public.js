import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import signals from "signals";
import PubSub from "pubsub-js";
import Cookies from "js-cookie";
import nprogress from "nprogress";
import "moment/locale/zh-cn";
import "nprogress/nprogress.css";
// import "pace/themes/center-atom.less";
// http://github.hubspot.com/pace
// http://ricostacruz.com/nprogress
import "./public.less";

// compatible mobile click event
const { FastClick, document } = window;
FastClick && document.addEventListener &&
	document.addEventListener(
		"DOMContentLoaded",
		() => FastClick.attach(document.body),
		false
	);
// ployfill console function
const log = window.console || {};
[
	"debug", "error", "info", "log", "warn", "dir",
	"dirxml", "table", "trace", "group", "groupCollapsed",
	"groupEnd", "clear", "count", "assert", "markTimeline",
	"profile", "profileEnd", "timeline", "timelineEnd",
	"time", "timeEnd", "timeStamp", "context",
].forEach(
	v => log[v] || (log[v] = x => x)
);
window.console = log;
// global variable for debug
Object.assign(window, {
	axios, moment, numeral, signals,
	PubSub, Cookies, nprogress,
});