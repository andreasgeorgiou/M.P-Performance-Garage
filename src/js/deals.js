// Setup Alert Boxes
const alertBoxesData = [
  {
    body: `We are Open 7 days a week.`,
  },
  {
    body: `Both Appointments and Walkins are Welcome.`,
  },
  {
    body: `Special Discounts for Veterans & Military Personel, Students, and Senior Citizens.`,
  },
];
const alertBoxHtml = alertBoxesData.map((bx) => {
  const body = bx.body ? bx.body : ``
  return `<li>${body}</li>`
});
const alertBoxesElement = document.querySelector("#alert-boxes .card-body")
if (alertBoxesElement) alertBoxesElement.innerHTML = alertBoxHtml.join("")







// Setup Deals Slides
const dealsSlidesData = [
  {
    icon: `<i class="icon bx bx-wind display-6"></i>`,
    title: `Air Conditioning Services`,
    body: `Filling with special gar for your car's air conditioner.`,
  },
  {
    icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
    title: `Regularly Service`,
    body: `Oil, Filters, Sparks changes and others. `,
  },
  // {
  //   icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
  //   title: `Conventional Oil Change for just $69.99`,
  //   body: `Get your car running smoothly with our oil change specials! Conventional oil change for $69.99. Quality service at great prices!`,
  // },
  // {
  //   icon: `<i class="icon bx bx-stop-circle display-6"></i>`,
  //   title: `Brake Pads starting at just $79.99`,
  //   body: `Enhance your vehicle's safety with our limited-time brake pads deal! Expert replacements, special pricing. Act now, drive confidently!`,
  // },
  {
    icon: `<i class="icon bx bx-color display-6"></i>`,
    title: `Tires replacement and Wheel Alignment`,
    body: `We provide the best quality of Tires on special prices and Wheel alignment by our specialist!`,
  },
  {
    icon: `<i class="icon bx bxs-wrench display-6"></i>`,
    title: `Diagnostic & Repair`,
    body: `Leave your car to our Specialist for immediate repair!`,
  },
  // {
  //   icon: `<i class="icon bx bxs-color display-6"></i>`,
  //   title: `4 New Tires from $399.99 & Up`,
  //   body: `Get rolling with a fantastic deal! 4 new tires for $399.99 & free wheel alignment. Limited time offer. Visit us now!`,
  // },
  // {
  //   icon: `<i class="icon bx bxs-color display-6"></i>`,
  //   title: `4 Used Tires from $199.99 & Up`,
  //   body: `Get road-ready with our special deal! 4 used tires for $199.99 & free wheel alignment. Limited time offer. Visit us now!`,
  // },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `MOT Inspection`,
    body: `Don't worry about your MOT check! We take care of it for you!`,
  },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `Accessories & Body Work`,
    body: `We have multiple options of car accessories and car's body work`,
  },
];
const dealsSlidesHtml = dealsSlidesData.map((sl) => {
  const output =
    `<li class="glide__slide h-auto">`+
      `<div class="ag-courses_item h-100 bg-primary p-3 text-light rounded">`+
        `<div class="ag-courses-item_bg"></div>`+
        `<div class="ag-courses-item_title fs-5 fw-medium mb-2">`+
          `<div>${sl.icon}</div>`+
          `<div>${sl.title}</div>`+
        `</div>`+
        `<div class="ag-course-body">${sl.body}</div>`+
      `</div>`+
    `</li>`
  return output
});
const dealsSlidesElement = document.getElementById("deals-slides")
if (dealsSlidesElement) dealsSlidesElement.innerHTML = dealsSlidesHtml.join("")
