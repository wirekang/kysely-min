import{b3 as e,C as n,ax as a,I as s,a0 as o,V as t,b6 as c}from"./sql-qwqI2RE3.js";function r(o,t){const c=[];for(const{selection:r}of o.selections??[])if(e.is(r)&&n.is(r.column))c.push(m(r.column.column.name),i(t,r.column.column.name));else if(n.is(r))c.push(m(r.column.name),i(t,r.column.name));else{if(!a.is(r)||!s.is(r.alias))throw new Error("can't extract column names from the select query node");c.push(m(r.alias.name),i(t,r.alias.name))}return c}function m(e){return new o(t.createImmediate(e))}function i(a,s){return new o(e.create(n.create(s),c.create(a)))}export{r as g};
