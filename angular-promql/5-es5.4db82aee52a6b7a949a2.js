(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EzVS:function(e,t,n){var s;void 0===(s=(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.languageConfiguration={wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"<",close:">"}],folding:{}};for(var n=["sum","min","max","avg","stddev","stdvar","count","count_values","bottomk","topk","quantile"],s=[],i=0,o=n;i<o.length;i++)s.push(o[i]+"_over_time");var r=["on","ignoring","group_right","group_left","by","without"],a="("+r.reduce(function(e,t){return e+"|"+t})+")",l=n.concat(["abs","absent","ceil","changes","clamp_max","clamp_min","day_of_month","day_of_week","days_in_month","delta","deriv","exp","floor","histogram_quantile","holt_winters","hour","idelta","increase","irate","label_join","label_replace","ln","log2","log10","minute","month","predict_linear","rate","resets","round","scalar","sort","sort_desc","sqrt","time","timestamp","vector","year"]).concat(s).concat(r);t.language={ignoreCase:!1,defaultToken:"",tokenPostfix:".promql",keywords:l,operators:["+","-","*","/","%","^","==","!=",">","<",">=","<=","and","or","unless"],vectorMatching:a,symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/@vectorMatching\s*(?=\()/,"type","@clauses"],[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/(^#.*$)/,"comment"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"type","@default":"identifier"}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+[smhdwy]/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}},t.completionItemProvider={provideCompletionItems:function(){return{suggestions:l.map(function(e){return{label:e,kind:monaco.languages.CompletionItemKind.Keyword,insertText:e,insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet}})}}}}).apply(t,[n,t]))||(e.exports=s)}}]);