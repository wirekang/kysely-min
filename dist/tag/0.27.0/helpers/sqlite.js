import{J as o}from"../sql-Zx-YDH8Y.js";import{g as t}from"../json-object-args-dpGUG5Uz.js";function n(t){return o`(select coalesce(json_group_array(json_object(${o.join(s(t.toOperationNode(),"agg"))})), '[]') from ${t} as agg)`}function e(t){return o`(select json_object(${o.join(s(t.toOperationNode(),"obj"))}) from ${t} as obj)`}function r(t){return o`json_object(${o.join(Object.keys(t).flatMap((n=>[o.lit(n),t[n]])))})`}function s(o,n){try{return t(o,n)}catch{throw new Error("SQLite jsonArrayFrom and jsonObjectFrom functions can only handle explicit selections due to limitations of the json_object function. selectAll() is not allowed in the subquery.")}}export{n as jsonArrayFrom,r as jsonBuildObject,e as jsonObjectFrom};
