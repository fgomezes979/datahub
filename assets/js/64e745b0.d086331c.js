"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65014],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),d=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(g.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),y=r,m=p["".concat(g,".").concat(y)]||p[y]||u[y]||l;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},26741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>g,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});t(96540);var a=t(15680);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={title:"Classification",slug:"/metadata-ingestion/docs/dev_guides/classification",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/classification.md"},g="Classification",d={unversionedId:"metadata-ingestion/docs/dev_guides/classification",id:"metadata-ingestion/docs/dev_guides/classification",title:"Classification",description:"The classification feature enables sources to be configured to automatically predict info types for columns and use them as glossary terms. This is an explicit opt-in feature and is not enabled by default.",source:"@site/genDocs/metadata-ingestion/docs/dev_guides/classification.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/classification",permalink:"/docs/metadata-ingestion/docs/dev_guides/classification",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/classification.md",tags:[],version:"current",frontMatter:{title:"Classification",slug:"/metadata-ingestion/docs/dev_guides/classification",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/classification.md"},sidebar:"overviewSidebar",previous:{title:"Stateful Ingestion",permalink:"/docs/metadata-ingestion/docs/dev_guides/stateful"},next:{title:"Adding Stateful Ingestion to a Source",permalink:"/docs/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source"}},s={},p=[{value:"Config details",id:"config-details",level:2},{value:"DataHub Classifier",id:"datahub-classifier",level:2},{value:"Config Details",id:"config-details-1",level:3},{value:"Supported infotypes",id:"supported-infotypes",level:3},{value:"Supported sources",id:"supported-sources",level:2},{value:"Future Work",id:"future-work",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced Configuration: Customizing configuration for supported info types",id:"advanced-configuration-customizing-configuration-for-supported-info-types",level:3},{value:"Advanced Configuration: Specifying Custom InfoType",id:"advanced-configuration-specifying-custom-infotype",level:3},{value:"Additional Resources",id:"additional-resources",level:2},{value:"DataHub Blog",id:"datahub-blog",level:3}],u={toc:p},y="wrapper";function m(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(y,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"classification"},"Classification"),(0,a.yg)("p",null,"The classification feature enables sources to be configured to automatically predict info types for columns and use them as glossary terms. This is an explicit opt-in feature and is not enabled by default."),(0,a.yg)("h2",{id:"config-details"},"Config details"),(0,a.yg)("p",null,"Note that a ",(0,a.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Field"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"enabled"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether classification should be used to auto-detect glossary terms"),(0,a.yg)("td",{parentName:"tr",align:null},"False")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sample_size"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of sample values used for classification."),(0,a.yg)("td",{parentName:"tr",align:null},"100")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_workers"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"Number of worker processes to use for classification. Set to 1 to disable."),(0,a.yg)("td",{parentName:"tr",align:null},"Number of cpu cores or 4")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_type_to_term"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,a.yg)("td",{parentName:"tr",align:null},"Optional mapping to provide glossary term identifier for info type."),(0,a.yg)("td",{parentName:"tr",align:null},"By default, info type is used as glossary term identifier.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"classifiers"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of object"),(0,a.yg)("td",{parentName:"tr",align:null},"Classifiers to use to auto-detect glossary terms. If more than one classifier, infotype predictions from the classifier defined later in sequence take precedance."),(0,a.yg)("td",{parentName:"tr",align:null},"[{'type': 'datahub', 'config': None}]")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table_pattern"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,a.yg)("td",{parentName:"tr",align:null},"Regex patterns to filter tables for classification. This is used in combination with other patterns in parent config. Specify regex to match the entire table name in ",(0,a.yg)("inlineCode",{parentName:"td"},"database.schema.table")," format. e.g. to match all tables starting with customer in Customer database and public schema, use the regex 'Customer.public.customer.*'"),(0,a.yg)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table_pattern.allow"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,a.yg)("td",{parentName:"tr",align:null},"['.*']")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table_pattern.deny"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,a.yg)("td",{parentName:"tr",align:null},"[]")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table_pattern.ignoreCase"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,a.yg)("td",{parentName:"tr",align:null},"True")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"column_pattern"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,a.yg)("td",{parentName:"tr",align:null},"Regex patterns to filter columns for classification. This is used in combination with other patterns in parent config. Specify regex to match the column name in ",(0,a.yg)("inlineCode",{parentName:"td"},"database.schema.table.column")," format."),(0,a.yg)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"column_pattern.allow"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,a.yg)("td",{parentName:"tr",align:null},"['.*']")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"column_pattern.deny"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,a.yg)("td",{parentName:"tr",align:null},"[]")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"column_pattern.ignoreCase"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,a.yg)("td",{parentName:"tr",align:null},"True")))),(0,a.yg)("h2",{id:"datahub-classifier"},"DataHub Classifier"),(0,a.yg)("p",null,"DataHub Classifier is the default classifier implementation, which uses ",(0,a.yg)("a",{parentName:"p",href:"https://pypi.org/project/acryl-datahub-classify/"},"acryl-datahub-classify")," library to predict info types."),(0,a.yg)("h3",{id:"config-details-1"},"Config Details"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Field"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"confidence_level_threshold"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"0.68")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"strip_exclusion_formatting"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"bool"),(0,a.yg)("td",{parentName:"tr",align:null},"A flag that determines whether the exclusion list uses exact matching or format stripping (case-insensitivity, punctuation removal, and special character removal)."),(0,a.yg)("td",{parentName:"tr",align:null},"True")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"list","[string]"),(0,a.yg)("td",{parentName:"tr",align:null},"List of infotypes to be predicted. By default, all supported infotypes are considered, along with any custom infotypes configured in ",(0,a.yg)("inlineCode",{parentName:"td"},"info_types_config"),"."),(0,a.yg)("td",{parentName:"tr",align:null},"None")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config"),(0,a.yg)("td",{parentName:"tr",align:null},"Configuration details for infotypes"),(0,a.yg)("td",{parentName:"tr",align:null},"Dict","[str, InfoTypeConfig]"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"See ",(0,a.yg)("a",{parentName:"td",href:"https://github.com/acryldata/datahub-classify/blob/main/datahub-classify/src/datahub_classify/reference_input.py"},"reference_input.py")," for default configuration.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".prediction_factors_and_weights"),(0,a.yg)("td",{parentName:"tr",align:null},"\u2753 (required if info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key")," is set)"),(0,a.yg)("td",{parentName:"tr",align:null},"Dict","[str,number]"),(0,a.yg)("td",{parentName:"tr",align:null},"Factors and their weights to consider when predicting info types"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".exclude_name"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"list","[string]"),(0,a.yg)("td",{parentName:"tr",align:null},"Optional list of names to exclude from classification."),(0,a.yg)("td",{parentName:"tr",align:null},"None")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".name"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"NameFactorConfig (see below for fields)"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".name.regex"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns the column name follows for the info type"),(0,a.yg)("td",{parentName:"tr",align:null},"['.*']")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".description"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"DescriptionFactorConfig (see below for fields)"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".description.regex"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns the column description follows for the info type"),(0,a.yg)("td",{parentName:"tr",align:null},"['.*']")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".datatype"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"DataTypeFactorConfig (see below for fields)"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".datatype.type"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of data types for the info type"),(0,a.yg)("td",{parentName:"tr",align:null},"['.*']")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".values"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"ValuesFactorConfig (see below for fields)"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".values.prediction_type"),(0,a.yg)("td",{parentName:"tr",align:null},"\u2753 (required if info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".values is set)"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"None")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".values.regex"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"List of regex patterns the column value follows for the info type"),(0,a.yg)("td",{parentName:"tr",align:null},"None")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"info_types_config.",(0,a.yg)("inlineCode",{parentName:"td"},"key"),".values.library"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Array of string"),(0,a.yg)("td",{parentName:"tr",align:null},"Library used for prediction"),(0,a.yg)("td",{parentName:"tr",align:null},"None")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"minimum_values_threshold"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"Minimum number of non-null column values required to process ",(0,a.yg)("inlineCode",{parentName:"td"},"values")," prediction factor."),(0,a.yg)("td",{parentName:"tr",align:null},"50")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("h3",{id:"supported-infotypes"},"Supported infotypes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Email_Address")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Gender")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Credit_Debit_Card_Number")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Phone_Number")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Street_Address")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Full_Name")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Age")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"IBAN")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"US_Social_Security_Number")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Vehicle_Identification_Number")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"IP_Address_v4")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"IP_Address_v6")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"US_Driving_License_Number")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Swift_Code")),(0,a.yg)("li",{parentName:"ul"},"Regex based Custom InfoTypes")),(0,a.yg)("h2",{id:"supported-sources"},"Supported sources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"All SQL sources")),(0,a.yg)("h2",{id:"future-work"},"Future Work"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Classification for nested columns (struct, array type)")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"basic"},"Basic"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake\n  config:\n    env: PROD\n    # Coordinates\n    account_id: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "sysadmin"\n\n    # Options\n    top_n_queries: 10\n    email_domain: mycompany.com\n\n    classification:\n      enabled: True\n      classifiers:\n        - type: datahub          \n')),(0,a.yg)("h3",{id:"advanced-configuration-customizing-configuration-for-supported-info-types"},"Advanced Configuration: Customizing configuration for supported info types"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake\n  config:\n    env: PROD\n    # Coordinates\n    account_id: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "sysadmin"\n\n    # Options\n    top_n_queries: 10\n    email_domain: mycompany.com\n\n    classification:\n      enabled: True\n      info_type_to_term:\n        Email_Address: "Email"\n      classifiers:\n        - type: datahub          \n          config:\n            confidence_level_threshold: 0.7\n            info_types_config:\n              Email_Address:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - "^.*mail.*id.*$"\n                    - "^.*id.*mail.*$"\n                    - "^.*mail.*add.*$"\n                    - "^.*add.*mail.*$"\n                    - email\n                    - mail\n                description:\n                  regex:\n                    - "^.*mail.*id.*$"\n                    - "^.*mail.*add.*$"\n                    - email\n                    - mail\n                datatype:\n                  type:\n                    - str\n                values:\n                  prediction_type: regex\n                  regex:\n                    - "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}"\n                  library: []\n              Gender:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - "^.*gender.*$"\n                    - "^.*sex.*$"\n                    - gender\n                    - sex\n                description:\n                  regex:\n                    - "^.*gender.*$"\n                    - "^.*sex.*$"\n                    - gender\n                    - sex\n                datatype:\n                  type:\n                    - int\n                    - str\n                values:\n                  prediction_type: regex\n                  regex:\n                    - male\n                    - female\n                    - man\n                    - woman\n                    - m\n                    - f\n                    - w\n                    - men\n                    - women\n                  library: []\n              Credit_Debit_Card_Number:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - "^.*card.*number.*$"\n                    - "^.*number.*card.*$"\n                    - "^.*credit.*card.*$"\n                    - "^.*debit.*card.*$"\n                description:\n                  regex:\n                    - "^.*card.*number.*$"\n                    - "^.*number.*card.*$"\n                    - "^.*credit.*card.*$"\n                    - "^.*debit.*card.*$"\n                datatype:\n                  type:\n                    - str\n                    - int\n                values:\n                  prediction_type: regex\n                  regex:\n                    - "^4[0-9]{12}(?:[0-9]{3})?$"\n                    - "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$"\n                    - "^3[47][0-9]{13}$"\n                    - "^3(?:0[0-5]|[68][0-9])[0-9]{11}$"\n                    - "^6(?:011|5[0-9]{2})[0-9]{12}$"\n                    - "^(?:2131|1800|35\\\\d{3})\\\\d{11}$"\n                    - "^(6541|6556)[0-9]{12}$"\n                    - "^389[0-9]{11}$"\n                    - "^63[7-9][0-9]{13}$"\n                    - "^9[0-9]{15}$"\n                    - "^(6304|6706|6709|6771)[0-9]{12,15}$"\n                    - "^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$"\n                    - "^(62[0-9]{14,17})$"\n                    - "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$"\n                    - "^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$"\n                    - "^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$"\n                  library: []\n              Phone_Number:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - ".*phone.*(num|no).*"\n                    - ".*(num|no).*phone.*"\n                    - ".*[^a-z]+ph[^a-z]+.*(num|no).*"\n                    - ".*(num|no).*[^a-z]+ph[^a-z]+.*"\n                    - ".*mobile.*(num|no).*"\n                    - ".*(num|no).*mobile.*"\n                    - ".*telephone.*(num|no).*"\n                    - ".*(num|no).*telephone.*"\n                    - ".*cell.*(num|no).*"\n                    - ".*(num|no).*cell.*"\n                    - ".*contact.*(num|no).*"\n                    - ".*(num|no).*contact.*"\n                    - ".*landline.*(num|no).*"\n                    - ".*(num|no).*landline.*"\n                    - ".*fax.*(num|no).*"\n                    - ".*(num|no).*fax.*"\n                    - phone\n                    - telephone\n                    - landline\n                    - mobile\n                    - tel\n                    - fax\n                    - cell\n                    - contact\n                description:\n                  regex:\n                    - ".*phone.*(num|no).*"\n                    - ".*(num|no).*phone.*"\n                    - ".*[^a-z]+ph[^a-z]+.*(num|no).*"\n                    - ".*(num|no).*[^a-z]+ph[^a-z]+.*"\n                    - ".*mobile.*(num|no).*"\n                    - ".*(num|no).*mobile.*"\n                    - ".*telephone.*(num|no).*"\n                    - ".*(num|no).*telephone.*"\n                    - ".*cell.*(num|no).*"\n                    - ".*(num|no).*cell.*"\n                    - ".*contact.*(num|no).*"\n                    - ".*(num|no).*contact.*"\n                    - ".*landline.*(num|no).*"\n                    - ".*(num|no).*landline.*"\n                    - ".*fax.*(num|no).*"\n                    - ".*(num|no).*fax.*"\n                    - phone\n                    - telephone\n                    - landline\n                    - mobile\n                    - tel\n                    - fax\n                    - cell\n                    - contact\n                datatype:\n                  type:\n                    - int\n                    - str\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - phonenumbers\n              Street_Address:\n                prediction_factors_and_weights:\n                  name: 0.5\n                  description: 0\n                  datatype: 0\n                  values: 0.5\n                name:\n                  regex:\n                    - ".*street.*add.*"\n                    - ".*add.*street.*"\n                    - ".*full.*add.*"\n                    - ".*add.*full.*"\n                    - ".*mail.*add.*"\n                    - ".*add.*mail.*"\n                    - add[^a-z]+\n                    - address\n                    - street\n                description:\n                  regex:\n                    - ".*street.*add.*"\n                    - ".*add.*street.*"\n                    - ".*full.*add.*"\n                    - ".*add.*full.*"\n                    - ".*mail.*add.*"\n                    - ".*add.*mail.*"\n                    - add[^a-z]+\n                    - address\n                    - street\n                datatype:\n                  type:\n                    - str\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - spacy\n              Full_Name:\n                prediction_factors_and_weights:\n                  name: 0.3\n                  description: 0\n                  datatype: 0\n                  values: 0.7\n                name:\n                  regex:\n                    - ".*person.*name.*"\n                    - ".*name.*person.*"\n                    - ".*user.*name.*"\n                    - ".*name.*user.*"\n                    - ".*full.*name.*"\n                    - ".*name.*full.*"\n                    - fullname\n                    - name\n                    - person\n                    - user\n                description:\n                  regex:\n                    - ".*person.*name.*"\n                    - ".*name.*person.*"\n                    - ".*user.*name.*"\n                    - ".*name.*user.*"\n                    - ".*full.*name.*"\n                    - ".*name.*full.*"\n                    - fullname\n                    - name\n                    - person\n                    - user\n                datatype:\n                  type:\n                    - str\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - spacy\n              Age:\n                prediction_factors_and_weights:\n                  name: 0.65\n                  description: 0\n                  datatype: 0\n                  values: 0.35\n                name:\n                  regex:\n                    - age[^a-z]+.*\n                    - ".*[^a-z]+age"\n                    - ".*[^a-z]+age[^a-z]+.*"\n                    - age\n                description:\n                  regex:\n                    - age[^a-z]+.*\n                    - ".*[^a-z]+age"\n                    - ".*[^a-z]+age[^a-z]+.*"\n                    - age\n                datatype:\n                  type:\n                    - int\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - rule_based_logic\n\n')),(0,a.yg)("h3",{id:"advanced-configuration-specifying-custom-infotype"},"Advanced Configuration: Specifying Custom InfoType"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake\n  config:\n    env: PROD\n    # Coordinates\n    account_id: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "sysadmin"\n\n    # Options\n    top_n_queries: 10\n    email_domain: mycompany.com\n\n    classification:\n      enabled: True\n      classifiers:\n        - type: datahub          \n          config:\n            confidence_level_threshold: 0.7\n            minimum_values_threshold: 10\n            info_types_config:\n              CloudRegion:\n                prediction_factors_and_weights:\n                  name: 0\n                  description: 0\n                  datatype: 0\n                  values: 1\n                values:\n                  prediction_type: regex\n                  regex:\n                    - "(af|ap|ca|eu|me|sa|us)-(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-\\\\d+"\n                  library: []\n')),(0,a.yg)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.yg)("h3",{id:"datahub-blog"},"DataHub Blog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://blog.datahubproject.io/pii-classification-just-got-easier-with-datahub-6bab2b63abcb"},"PII Classification just got easier with DataHub"))))}m.isMDXComponent=!0}}]);