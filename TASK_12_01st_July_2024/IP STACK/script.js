const api_key = prompt("Enter API Key");
let inputIPAddress = document.getElementById("inputipAddress").value;
console.log(api_key);
console.log(inputIPAddress);
let IPAddressContainer = document.createElement("div");
async function getIPaddressDetails() {
  console.log("IP ADDRESS Data is called");
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${inputIPAddress}`;
  // console.log(url)
  try {
    let data = await fetch(url);
    let res = await data.json();
    console.log(res);
    const [ip, location, as, isp] = [res.ip, res.location, res.as, res.isp];
    console.log(ip, location, as, isp);
    // getIPaddressDetails
    IPAddressContainer.innerHTML = `
  <div>
    <h1>Internet Service Provider: ${isp}</h1><hr/>
    <h2>Internet Protocol Address: ${ip}</h2><hr/>
    <h3> Autonomous System Number of ${as.asn}, domain of ${as.domain}, name of ${as.name}, route of ${as.route}, type of ${as.type}</h3><hr/>
    <h4>Location:</h4>
    <h6>It is located at city of ${location.city}, Country of ${location.country}, Region of ${location.region}, Postal code of ${location.postalCode}, GeonameID of ${location.geonameId}, Latitude at ${location.lat}, Longitude at ${location.lng}, Under Time Zone ${location.timezone}</h6><hr/>
  </div>
   `;
    document.body.append(IPAddressContainer);
  } catch (error) {
    console.error(error);
  }
}
