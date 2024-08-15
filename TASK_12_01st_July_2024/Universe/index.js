const api_key = prompt("Enter API Key");
let universeContainer = document.createElement("div");
async function getSolarSystemData() {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
  try {
    let data = await fetch(url);
    let res = await data.json();
    console.log(res, typeof res);
    let [
      copyright,
      date,
      explanation,
      hdurl,
      media_type,
      service_version,
      title,
      res_url,
    ] = [
      res.copyright,
      res.date,
      res.explanation,
      res.hdurl,
      res.media_type,
      res.service_version,
      res.title,
      res.url,
    ];
    console.log(
      copyright,
      data,
      explanation,
      hdurl,
      media_type,
      service_version,
      title,
      res_url
    );
    // console.log(res.copyright,res.date,res.explanation,res.hdurl,res.media_type,res.service_version,res.title,res.url);
    if (res.media_type == "video") {
      universeContainer.innerHTML = `
      <div> 
          <hr>
          <h1 class="text-center text-primary">${res.title} <h1/>
          <h6 class="text-center text-primary">${res.date} </h6>
          <hr>
          <iframe width="560" height="315" src="${res.url}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <small class="text-center">${res.explanation}</small>
          <h1>&copy;${res.copyright}</h1> 
          <hr>
      </div>
      `;
      document.body.append(universeContainer);
    } else {
      universeContainer.innerHTML = `
      <div> 
          <h1 >${res.title} 
          <h6 >${res.date} 
          <img src="${res.url}" width="560" height="315" class="img-fluid alt="Solar System">
          <a href="${res.hdurl}" target="_blank">Click Here to get HD Image</a>
          <p >${res.explanation}</p>
          <h1>&copy;${res.copyright}</h1>
      </div>
      `;
      document.body.append(universeContainer);
    }
  } catch (error) {
    console.error(error);
  }
}
