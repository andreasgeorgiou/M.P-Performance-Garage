// Setup Alert Boxes
const alertBoxesData = [
  {
    url: `https://maps.app.goo.gl/QCFpzekhECyKHx9h8`,
    img: `./media/reviewers/Eleni.png`,
    name: `eleni savva triantafyllidou`,
    body: `I have been a returning customer! Excellent work done in great time and Every part of the service is discussed in detail.
           I definitely recommend M.P performance garage!`,
  },
  {
    url: `https://maps.app.goo.gl/fJ7pHaHHCGJWWomc9`,
    img: `./media/reviewers/Jonh.png`,
    name: `John Amaro`,
    body: `Good service,good prices ,always there when you call..The best mechanic in Limassol`,
  },
  {
    url: `https://www.google.com/maps/place/M.P+Performance+Garage/@34.703245,32.956507,17z/data=!4m9!3m8!1s0x14e731c4b139a421:0x61024be8a841c1c4!8m2!3d34.7031391!4d32.9559384!10e4!16s%2Fg%2F11vz69c3rf!18m1!1s8@1:CAESGUNWX0E4bkVycjBGZmtSbUtfQXZBQVN2a2c%7C?hl=en&entry=ttu`,
    name: `Kypros Mavroudis`,
    body: `New equipment with excellent mechanic quality where he analyzes everything the vehicle needs. Well done!!!`,
  },
  {
    url: `https://maps.app.goo.gl/8or3nX9c1As82U9QA`,
    img: false,
    name: `Andreas G`,
    body: `Very good service. I highly recommend this workshop.`,
  },
  {
    url: `https://maps.app.goo.gl/1dn7SUmoF5d4EC3U6`,
    img: `./media/reviewers/Maria.png`,
    name: `Maria H-`,
    body: `Marinos is doing the service for my car the last 7 years. And i am very happy with his services,prices etc 10/10`,
  },
  {
    url: `https://maps.app.goo.gl/onKLbFgSB68JpeHc8`,
    img: false,
    name: `Phillip Demetriou`,
    body: `Perfect service, sudden appointment and yet was finished on the 2nd day and to my convenience was provided with a substitute car`,
  },
  {
    url: `https://maps.app.goo.gl/uZNB9NCK94xLGt3z6`,
    img: false,
    name: `Kyriakos Sotiriou`,
    body: `One of the best mechanics in Limassol. 5 stars for sure. Highly recommended.`,
  },
  {
    url: `https://maps.app.goo.gl/3AuPLrLsVWYnNMRL6`,
    img: false,
    name: `Angelos Georgiou`,
    body: `Excellent job and professional mechanic Great service`,
  },
  {
    url: `https://maps.app.goo.gl/vKbA99Sxr8awNupG9`,
    img: false,
    name: `Maria Georgiou`,
    body: `Very pleased!! Immediate response, Very kind, very good service, my car was fixed in a very fast time, very good communication.
          I highly recommend it!!`,
  },
  {
    url: `https://maps.app.goo.gl/o6wCV7HriEnTthUY8`,
    img: false,
    name: `Panagiotis Tilemaxou`,
    body: `Perfect service from the best`,
  },
  {
    url: `https://maps.app.goo.gl/HUWGbJGWLA5qdJE87`,
    img: false,
    name: `Nikolas Georgiou`,
    body: `O kaliteros sto xoro panta tipikos xwris apateonies opws oi parapano. Ton sistino anepifilakta`,
  },
  {
    url: `https://maps.app.goo.gl/kGtjWSpd71wPrXbt5`,
    img: false,
    name: `king glanza`,
    body: `The only mechanic who keeps car history!!! Impeccable`,
  },
]

const aletBoxHtml = alertBoxesData.map((rv) => {
  const avatar = rv.img
    ? `<img decoding="async" loading="lazy" width="26" height="26" src="${rv.img}" alt="Google Reviewer's Photo">`
    : `<i class='bx bx-user p-1 border rounded-circle'></i>`
  const url = rv.url ? rv.url : ``
  const name = rv.name ? rv.name : ``
  const body = rv.body ? rv.body : ``

  const output =
  `<li class="glide__slide h-auto">`+
      `<figure class="h-100">`+
        `<figcaption class="text-center text-md-start mb-2 fw-medium">`+
          `<a href="${url}" title="5 star Google Review" target="_blank" rel="nofollow">`+
            `${avatar} ${name} &#8212; <i class="bx bxl-google"></i> <i class="bx bx-map-alt"></i>`+
          `</a>`+
        `</figcaption>`+
        `<div class="star-ratings mb-2 text-center text-md-start">`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
        `</div>`+
        `<blockquote class="blockquote">"${body}"</blockquote>`+
      `</figure>`+
    `</li>`

  return output;
});

const aletBoxesElement = document.getElementById(`review-slides`)
if (aletBoxesElement) aletBoxesElement.innerHTML = aletBoxHtml.join(``)
