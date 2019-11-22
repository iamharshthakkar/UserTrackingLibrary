# User Tracking Library
User tracking library written in javascript, this library helps to track visitors on your website.

# How to use this library?
User tracking library can be used by initializing the javascript files by referencing it in your project file:

```html
<script src="userTrackingHelper.js" type="text/javascript"></script>
<script src="userTracking.js" type="text/javascript"></script>
```

After initilation, set your `URL_TO_POST_DATA` in `userTracking.js` file where tracking data of your website will be posted.

*Example*:
```js
var URL_TO_POST_DATA = "https://YourDomainName.com/PathToPost.php";
```
*These data later can be stored to your designated database to get website statical data.*

The response received by the brower is in JSON format and contains the following fields:

Fields | Description
--- | --- 
`ip` | public (external) IP address (same as URL `ip`)
`city` | city name
`region` | region name (administrative division)
`region_code` | region code
`country` | country code (two letter, ISO 3166-1 alpha-2)
`country_name` | country name
`continent_code` | continent code
`postal` | postal code
`latitude` | latitude
`longitude` | longitude
`timezone` | timezone (IANA format i.e. “Area/Location”)
`utc_offset` | 	UTC offset as +HHMM or -HHMM (HH is hours, MM is minutes)
`country_calling_code` | country calling code (dial in code, comma separated)
`currency` | currency code (ISO 4217)
`languages` | languages spoken (comma separated 2 or 3 letter ISO 639 code with optional hyphen separated country suffix)
`asn` | autonomous system number
`org` | organinzation name

