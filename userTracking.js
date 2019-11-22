var URL_TO_POST_DATA = "."; //http://{YOUR_DOMAIN}/{PAGE_NAME}

var myjson;
var public_ip;
var isp;
var org;
var current_url=window.location.href;
var reference_url=document.referrer.split( '/' );
var user_agent=navigator.userAgent;
var country;
var country_code;
var region_code;
var region;
var city;
var continent_code;
var zip;
var currency;
var calling_code;
var languages;
var lat;
var lon;
var timezone;
var utc_offset;
var asn;
var status;

if(reference_url == "")
{
	reference_url="No Reference";
}

try{
$.getJSON("https://ipapi.co/json", function(json) {
	 myjson = json;
     public_ip = myjson.ip;
     isp = myjson.isp;
     org = myjson.org;
	 continent_code = myjson.continent_code;
	 calling_code = myjson.country_calling_code;
	 languages = myjson.languages;
	 utc_offset = myjson.utc_offset;
	 currency = myjson.currency;
     country = myjson.country_name;
     country_code = myjson.country;
     region_code = myjson.region_code;
     region = myjson.region;
     city = myjson.city;
     zip = myjson.postal;
     lat = myjson.latitude;
     lon = myjson.longitude;
     timezone = myjson.timezone;
     asn = myjson.asn;
     status = "Data posted to page : "+URL_TO_POST_DATA;
	
	 $.post(URL_TO_POST_DATA, {
        UserTracking_user_ip: public_ip,
        UserTracking_user_agent: user_agent,
        UserTracking_current_url: current_url,
        UserTracking_reference_url: reference_url,
		UserTracking_continent_code: myjson.continent_code,
		UserTracking_calling_code : myjson.country_calling_code,
		UserTracking_languages : myjson.languages,
		UserTracking_utc_offset : myjson.utc_offset,
        UserTracking_isp: isp,
        UserTracking_org: org,
        UserTracking_country: country,
        UserTracking_country_code: country_code,
        UserTracking_region_code: region_code,
        UserTracking_region: region,
        UserTracking_city: city,
        UserTracking_zip: zip,
        UserTracking_lat: lat,
        UserTracking_lon: lon,
        UserTracking_timezone: timezone,
        UserTracking_asn: asn,
        UserTracking_status: status
		
    }, function(data, status) {
	   //TO CHECK FOR INCOMING DATA - COMMENT/REMOVE THIS LINE BELOW WHEN USED IN PRODUCTION
	alert("Data Received : "+ " " + public_ip + " " + isp + " " + org + " " + current_url + " " + reference_url + " "+ user_agent + " " + country + " " + country_code + " " + region_code + " " + region + " " + city + " " + continent_code + " " + zip + " " + lat + " " + currency + " " + calling_code + " " + languages + " " + lon + " " + timezone + " " + utc_offset + " " + asn);
    });
})
}
catch(err)
{
	console.log("Error : "+err)
}
