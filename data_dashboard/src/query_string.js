const API_KEY = '&key='

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

var FINAL_URL = BASE_URL 
				+ GET + GROSS_RENT_TOTAL 
				+ COMMA + GROSS_RENT_PERCENT_INCOME_30_34
				+ COMMA + GROSS_RENT_PERCENT_INCOME_35_39
				+ COMMA + GROSS_RENT_PERCENT_INCOME_40_49
				+ COMMA + GROSS_RENT_PERCENT_INCOME_50_PLUS
				+ FOR + COUNTY + DESCHUTES 
				+ IN + STATE + OREGON

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", FINAL_URL + API_KEY, false ); // false for synchronous request
xmlHttp.send( null );
var parsed = JSON.parse(xmlHttp.responseText)
console.log("GROSS_RENT_TOTAL: " + parsed[1][0])
console.log("GROSS_RENT_PERCENT_INCOME_30_34: " + parsed[1][1])
console.log("GROSS_RENT_PERCENT_INCOME_35_39: " + parsed[1][2])
console.log("GROSS_RENT_PERCENT_INCOME_40_49: " + parsed[1][3])
console.log("GROSS_RENT_PERCENT_INCOME_50_PLUS: " + parsed[1][4])
