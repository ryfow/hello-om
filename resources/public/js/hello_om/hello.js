// Compiled by ClojureScript 0.0-2127
goog.provide('hello_om.hello');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
hello_om.hello.name_change = (function name_change(owner,state){return om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"name","name",1017277949),(function (){return om.core.get_node.call(null,owner,"name").value;
}));
});
hello_om.hello.hello_om_base = (function hello_om_base(p__6385,owner){var map__6390 = p__6385;var map__6390__$1 = ((cljs.core.seq_QMARK_.call(null,map__6390))?cljs.core.apply.call(null,cljs.core.hash_map,map__6390):map__6390);var data = map__6390__$1;var name = cljs.core.get.call(null,map__6390__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof hello_om.hello.t6391 !== 'undefined')
{} else
{
/**
* @constructor
*/
hello_om.hello.t6391 = (function (name,data,map__6390,owner,p__6385,hello_om_base,meta6392){
this.name = name;
this.data = data;
this.map__6390 = map__6390;
this.owner = owner;
this.p__6385 = p__6385;
this.hello_om_base = hello_om_base;
this.meta6392 = meta6392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hello_om.hello.t6391.cljs$lang$type = true;
hello_om.hello.t6391.cljs$lang$ctorStr = "hello-om.hello/t6391";
hello_om.hello.t6391.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"hello-om.hello/t6391");
});
hello_om.hello.t6391.prototype.om$core$IRender$ = true;
hello_om.hello.t6391.prototype.om$core$IRender$render$arity$1 = (function (this__5341__auto__){var self__ = this;
var this__5341__auto____$1 = this;return React.DOM.form({"onSubmit": (function (){return false;
})},React.DOM.h2(cljs.core.PersistentArrayMap.EMPTY,"What's your name?"),om.dom.input.call(null,{"ref": "name", "style": {"fontSize": "24px"}, "onChange": (function (){return hello_om.hello.name_change.call(null,self__.owner,self__.data);
})}),React.DOM.h1({},((cljs.core.empty_QMARK_.call(null,self__.name))?null:[cljs.core.str("Hello, "),cljs.core.str(self__.name),cljs.core.str(".")].join(''))));
});
hello_om.hello.t6391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6393){var self__ = this;
var _6393__$1 = this;return self__.meta6392;
});
hello_om.hello.t6391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6393,meta6392__$1){var self__ = this;
var _6393__$1 = this;return (new hello_om.hello.t6391(self__.name,self__.data,self__.map__6390,self__.owner,self__.p__6385,self__.hello_om_base,meta6392__$1));
});
hello_om.hello.__GT_t6391 = (function __GT_t6391(name__$1,data__$1,map__6390__$2,owner__$1,p__6385__$1,hello_om_base__$1,meta6392){return (new hello_om.hello.t6391(name__$1,data__$1,map__6390__$2,owner__$1,p__6385__$1,hello_om_base__$1,meta6392));
});
}
return (new hello_om.hello.t6391(name,data,map__6390__$1,owner,p__6385,hello_om_base,null));
});
hello_om.hello.initial_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),""], null));
om.core.root.call(null,hello_om.hello.initial_state,hello_om.hello.hello_om_base,document.getElementById("reactContainer"));

//# sourceMappingURL=hello.js.map