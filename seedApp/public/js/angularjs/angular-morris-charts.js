/**
 * angular morris chart provides morris.js wrappers directives for angular
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";!function(){angular.module("angular.morris-chart",[])}(),function(){angular.module("angular.morris-chart").directive("areaChart",function(){return{restrict:"A",scope:{areaData:"=",areaXkey:"@",areaYkeys:"=",areaLabels:"=",lineColors:"="},link:function(a,e){a.$watch("areaData",function(){a.areaData&&("string"==typeof a.areaData&&(a.areaData=JSON.parse(a.areaData)),"string"==typeof a.areaYkeys&&(a.areaYkeys=JSON.parse(a.areaYkeys)),"string"==typeof a.areaLabels&&(a.areaLabels=JSON.parse(a.areaLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.areaInstance?a.areaInstance.setData(a.areaData):a.areaInstance=new Morris.Area({element:e,data:a.areaData,xkey:a.areaXkey,ykeys:a.areaYkeys,labels:a.areaLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),function(){angular.module("angular.morris-chart").directive("barChart",function(){return{restrict:"A",scope:{barX:"@",barY:"=",barLabels:"=",barData:"=",barColors:"=",barStacked:"=",barResize:"="},link:function(a,e){a.$watch("barData",function(){a.barData&&("string"==typeof a.barY&&(a.barY=JSON.parse(a.barY)),"string"==typeof a.barLabels&&(a.barLabels=JSON.parse(a.barLabels)),"string"==typeof a.barData&&(a.barData=JSON.parse(a.barData)),"string"==typeof a.barColors&&(a.barColors=JSON.parse(a.barColors)),"string"==typeof a.barStacked&&(a.barStacked=JSON.parse(a.barStacked)),"string"==typeof a.barResize&&(a.barResize=JSON.parse(a.barResize)),a.barInstance?a.barInstance.setData(a.barData):a.barInstance=new Morris.Bar({element:e,data:a.barData,xkey:a.barX,ykeys:a.barY,labels:a.barLabels,barColors:a.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],stacked:a.barStacked||!1,resize:a.barResize||!1,xLabelMargin:2}))})}}})}(),function(){angular.module("angular.morris-chart").directive("donutChart",["$injector",function(a){return{restrict:"A",scope:{donutData:"=",donutColors:"=",donutFormatter:"="},link:function(e,r){e.$watch("donutData",function(){if(e.donutData)if("string"==typeof e.donutData&&(e.donutData=JSON.parse(e.donutData)),"string"==typeof e.donutColors&&(e.donutColors=JSON.parse(e.donutColors)),e.donutInstance)e.donutInstance.setData(e.donutData);else{var t={element:r,data:e.donutData,colors:e.donutColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]};if("function"==typeof e.donutFormatter)t.formatter=e.donutFormatter;else if("string"==typeof e.donutFormatter&&a.has(e.donutFormatter+"Filter")){var n=a.get(e.donutFormatter+"Filter");t.formatter=function(a){return n.call(this,a)}}e.donutInstance=new Morris.Donut(t)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("lineChart",function(){return{restrict:"A",scope:{lineData:"=",lineXkey:"@",lineYkeys:"=",lineLabels:"=",lineColors:"=",parseTime:"="},link:function(a,e){a.$watch("lineData",function(){a.lineData&&("string"==typeof a.lineData&&(a.lineData=JSON.parse(a.lineData)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineLabels&&(a.lineLabels=JSON.parse(a.lineLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),"boolean"==typeof a.parseTime&&(a.parseTime=JSON.parse(a.parseTime)),a.lineInstance?(a.lineInstance.options.xkey=a.lineXkey,a.lineInstance.options.ykeys=a.lineYkeys,a.lineInstance.options.labels=a.lineLabels,a.lineInstance.options.parseTime=a.parseTime,a.lineInstance.options.lineColors=a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],a.lineInstance.setData(a.lineData)):a.lineInstance=new Morris.Line({element:e,data:a.lineData,xkey:a.lineXkey,ykeys:a.lineYkeys,labels:a.lineLabels,parseTime:a.parseTime,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}();