import{K as r}from"../sql--tv71Y9T.js";function e(e){return r`coalesce((select * from ${e} as agg for json path, include_null_values), '[]')`}function n(e){return r`(select * from ${e} as agg for json path, include_null_values, without_array_wrapper)`}function o(e){return r`json_query('{${r.join(Object.keys(e).map((n=>r`"${r.raw(n)}":"'+${e[n]}+'"`)),r`,`)}}')`}export{e as jsonArrayFrom,o as jsonBuildObject,n as jsonObjectFrom};
