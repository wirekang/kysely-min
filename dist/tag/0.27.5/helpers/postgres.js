import{K as o}from"../sql-QXMiomlF.js";function t(t){return o`(select coalesce(json_agg(agg), '[]') from ${t} as agg)`}function e(t){return o`(select to_json(obj) from ${t} as obj)`}function n(t){return o`json_build_object(${o.join(Object.keys(t).flatMap((e=>[o.lit(e),t[e]])))})`}export{t as jsonArrayFrom,n as jsonBuildObject,e as jsonObjectFrom};
