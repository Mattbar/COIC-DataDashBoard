//MAX 500 QUERIES PER API KEY PER DAY
//we'll want to cache results for each possible query

//===================================================================
/*

NEED TO ADD const API_KEY after figuring out value hashing for github

*/
//===================================================================
const URL = 'https://api.census.gov/data/'
const YEAR = '2018/'
const DATA_SET = 'acs/acs1'
const BASE_URL = URL + YEAR + DATA_SET

const GET = '?get='
const VARIABLE_MALES_30_TO_34 = 'B01001F_010E'
const MED_SEL_OWN_COST = 'B25088_001E'
const NO_FUCKING_CLUE_WHAT_THIS_IS = 'C08126_008E'
const TOTAL_FEMALE = 'B01001_026E'
const TOTAL_WHITE_MALES = 'B01001A_001E'
const MED_GROSS_RENT_TOTAL = ''
const MED_GROSS_RENT_DOLLARS = 'B25064_001E'

const GROSS_RENT_TOTAL = 'B25063_001E'
const GROSS_RENT_PERCENT_INCOME_30_34 = 'B25070_007E'
const GROSS_RENT_PERCENT_INCOME_35_39 = 'B25070_008E'
const GROSS_RENT_PERCENT_INCOME_40_49 = 'B25070_009E'
const GROSS_RENT_PERCENT_INCOME_50_PLUS = 'B25070_010E'
const MED_INCOME = 'B06011_001E'

const COMMA = ','
const FOR = '&for='
const IN = '&in='
const PLUS = '+'
const STATE = 'state:'
const ALL_STATES = 'state:*'
const COUNTY = 'county:'
const OREGON = '41'
const DESCHUTES = '017'
const CROOK = '013'
const JEFFERSON = '031'


// const FINAL_URL = BASE_URL + GET + VARIABLE_MALES_30_TO_34 + FOR + ALL_STATES
// const FINAL_URL = BASE_URL + GET + MED_SEL_OWN_COST + FOR + OREGON
// const FINAL_URL = BASE_URL + GET + TOTAL_WHITE_MALES + FOR + COUNTY + DESCHUTES + IN + STATE + OREGON
// const FINAL_URL = BASE_URL + GET + GROSS_RENT_TOTAL + FOR + COUNTY + DESCHUTES + IN + STATE + OREGON
// const FINAL_URL = BASE_URL + GET + GROSS_RENT_PERCENT_INCOME_30_34 + FOR + COUNTY + DESCHUTES + IN + STATE + OREGON
// const FINAL_URL = BASE_URL + GET + GROSS_RENT_PERCENT_INCOME_35_39 + FOR + COUNTY + DESCHUTES + IN + STATE + OREGON
// const FINAL_URL = BASE_URL + GET + GROSS_RENT_PERCENT_INCOME_40_49 + FOR + COUNTY + DESCHUTES + IN + STATE + OREGON
const FINAL_URL = BASE_URL + GET + MED_INCOME + COMMA + MED_GROSS_RENT_DOLLARS + FOR + COUNTY + DESCHUTES + IN + STATE + OREGON



// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xmlHttp = new XMLHttpRequest();
// xmlHttp.open( "GET", FINAL_URL + API_KEY, false ); // false for synchronous request
// xmlHttp.send( null );
// var response1 = JSON.parse(xhr.responseText);
// console.log(xmlHttp.responseText)

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", FINAL_URL + API_KEY, false ); // false for synchronous request
xmlHttp.send( null );
var parsed = JSON.parse(xmlHttp.responseText)
console.log(parsed[1][0]/parsed[1][1])
