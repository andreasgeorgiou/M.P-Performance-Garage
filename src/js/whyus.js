// Setup WhyUs Counter Boxes
const counterBoxesData = [
  {
    id: "business-counter",
    number: 5,
    text: "Years in Business",
  },
  {
    id: "tires-counter",
    number: 650,
    text: "Tires Changed",
  },
  {
    id: "wheels-counter",
    number: 2250,
    text: "Wheels Aligned",
  },
  {
    id: "oil-counter",
    number: 5000,
    text: "Oils Changed",
  },
];
const counterBoxesHtml = counterBoxesData.map((cb) => {
  const id = cb.id ? cb.id : ``;
  const number = cb.number ? cb.number : ``;
  const text = cb.text ? cb.text : ``;
  const output =
    `<div id="${id}" class="counter-widget col-6 col-lg-3">
      <div class="shadow-sm rounded p-4 bg-secondary text-bg-secondary h-100 d-flex flex-column justify-content-center">
        <div class="counter-container">
          <div class="counter-head fs-3">
            <span class="counter-number">${number}</span>+
          </div>
        </div>
        <div>${text}</div>
      </div>
    </div>`;
  return output;
});
const counterBoxesElement = document.getElementById("counter-boxes");
if (counterBoxesElement) counterBoxesElement.innerHTML = counterBoxesHtml.join("");

// animate counters
const reasonCounter = document.querySelectorAll(`.counter-number`);
reasonCounter.forEach(reason => {
  if (reason) countWhenVisible(reason, reason.innerHTML, 1000);
})
function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false;
  let startTime = null;
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      startTime = performance.now();
      let count = 0;
      let duration = speed;
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime;
        let progress = elapsedTime / duration;
        if (progress >= 1) {
          clearInterval(interval);
          element.innerHTML = targetCount;
        } else {
          count = Math.floor(progress * targetCount);
          element.innerHTML = count;
        }
      }, 20);
    }
  });
  if (element) observer.observe(element);
}




// Setup WhyUs Counter Boxes
const reasonBoxesData = [
  {
    img: `./media/products/dq200.png`,
    title: `DSG DQ200 - Original Mechatronic Repair Kit`,
    body: ``,
  },
  {
    img: `./media/products/dq200-1.png`,
    title: `DSG DQ200 - Mechatronic Performance Kit`,
    body: ``,
  },
  {
    img: `./media/products/dq200-2.png`,
    title: `DSG DQ200 - Mechatronic Big Case Housing`,
    body: ``,
  },
  {
    img: `./media/products/dq200-3-accumulator.png`,
    title: `DSG DQ200 - Accumulator`,
    body: ``,
  },
  {
    img: `./media/products/dq200-4-accumulator.png`,
    title: `DSG DQ200 - Performance Accumulator`,
    body: ``,
  },
  {
    img: `./media/products/dq200-5.png`,
    title: `DSG DQ200 - GearBox Bearing Kit`,
    body: ``,
  },
  {
    img: `./media/products/dq200-fork.png`,
    title: `DSG DQ200 - Bearings Fork`,
    body: ``,
  },
  {
    img: `./media/products/dq200-fork-1.png`,
    title: `DSG DQ200 - Clutch Bearing Fork`,
    body: ``,
  },
  {
    img: `./media/products/dq200-fork-2.png`,
    title: `DSG DQ200 - Fork`,
    body: ``,
  },
  {
    img: `./media/products/dq200-TCM.png`,
    title: `DSG DQ200 - TCM`,
    body: ``,
  },
  {
    img: `./media/products/dq200-oil-solinoid-valve.png`,
    title: `DSG DQ200 - Oil Pressure Solinoid and Pressure Solinoied Valves `,
    body: ``,
  },
  {
    img: `./media/products/dq200-differential-pinions.png`,
    title: `DSG Differential Pinions`,
    body: ``,
  },
  {
    img: `./media/products/725-tcm.png`,
    title: `Mercedes Benz 9G-725 TCM`,
    body: `Part Num.: A0009014900  & Part Num.: A0009015000`,
  },
  {
    img: `./media/products/722.9-tcm.png`,
    title: `Mercedes Benz 7G-722.9 TCM`,
    body: `Part Num.: A0009018008  & Part Num.: A0009017100 & Part Num.: A0009013200`,
  },
  {
    img: `./media/products/724-tcm.png`,
    title: `Mercedes Benz 7G-DCT TCM`,
    body: `Part Num.: A0002703900  & Part Num.: A0002702700`,
  },
  {
    img: `./media/products/hybrid-tcm.png`,
    title: `Mercedes Hybrid - TCM`,
    body: `Part Num.: А0002703300`,
  },
  {
    img: `./media/products/Bclass-tcm.png`,
    title: `Mercedes B class - A class TCM`,
    body: `Part Num.: А0034662410`,
  },
  {
    img: `./media/products/722.6-tcm.png`,
    title: `Mercedes Benz 722.6 TCM`,
    body: ``,
  },
  {
    img: `./media/products/725-oil-pan.png`,
    title: `Mercedes Benz 725-9G GearBox filter`,
    body: ``,
  },
  {
    img: `./media/products/725-overflow-pipes.png`,
    title: `Mercedes Benz 725-9G Overflow Pipes`,
    body: ``,
  },
  {
    img: `./media/products/725-tool.png`,
    title: `Mercedes Benz 725-9G GearBox Filter tools`,
    body: ``,
  },
  {
    img: `./media/products/mercedes-servo-module.png`,
    title: `Mercedes benz Servo Module`,
    body: ``,
  },
  {
    img: `./media/products/724-kit-filter.png`,
    title: `Mercedes Benz 724-7G DCT GearBox Filter`,
    body: ``,
  },
  {
    img: `./media/products/724-small-filter.png`,
    title: `Mercedes Benz 724 GearBox Filter`,
    body: ``,
  },
  {
    img: `./media/products/722.9-filter.png`,
    title: `Mercedes Benz 722.9 GearBox Filter`,
    body: ``,
  },  {
    img: `./media/products/722.6-filter.png`,
    title: `Mercedes Benz 722.6 GearBox Filter Kit`,
    body: ``,
  },
  {
    img: `./media/products/juke-filter-2.png`,
    title: `Nissan CVT GearBox Filter Kit`,
    body: ``,
  },
  {
    img: `./media/products/juke-filter-1.png`,
    title: `Nissan CVT GearBox Filter`,
    body: ``,
  },
  {
    img: `./media/products/juke-filter.png`,
    title: `Nissan CVT GearBox Filter Kit`,
    body: `Second Generation`,
  },
  {
    img: `./media/products/juke-filter-3.png`,
    title: `Nissan CVT GearBox Filter`,
    body: `Second Generation`,
  },
  {
    img: `./media/products/demio-filter-2.png`,
    title: `Mazda GearBox Filter Kit`,
    body: ``,
  },
  {
    img: `./media/products/demio-filter.png`,
    title: `Mazda GearBox Filter Kit`,
    body: `Second Generation`,
  },
  {
    img: `./media/products/vezel-filter.png`,
    title: `Honda CVT GearBox Filter Kit`,
    body: ``,
  },
  {
    img: `./media/products/honda-actuator-vtc.png`,
    title: `Honda Actuator VTC`,
    body: ``,
  },
  {
    img: `./media/products/honda-vezel-belt.png`,
    title: `Honda Vezel Belt Tensioner`,
    body: ``,
  },
  {
    img: `./media/products/Renault-DCT250-actuador.png`,
    title: `Renault DCT250 Actuador`,
    body: ``,
  },
  {
    img: `./media/products/mercedes-handbrake.png`,
    title: `Mercedes Benz Handbrake Handle`,
    body: ``,
  },
  {
    img: `./media/products/Handbrake-handle.png`,
    title: `Mercedes Benz Handbrake Handle Mounting`,
    body: ``,
  },
  {
    img: `./media/products/mercedes-back-lights.png`,
    title: `Mercedes Benz Bulb Mounting`,
    body: ``,
  },
  {
    img: `./media/products/A204820257764.png`,
    title: `Mercedes Benz Bulb Mounting`,
    body: ``,
  },
  {
    img: `./media/products/mercedes-bulb-mount.png`,
    title: `Mercedes Benz Bulb Mounting`,
    body: ``,
  },
  {
    img: `./media/products/mercedes-seat-belt.png`,
    title: `Mercedes Benz Seat Buckle`,
    body: ``,
  },
  


];
const reasonBoxesHtml = reasonBoxesData.map((rs) => {

  const img = rs.img ? rs.img : '';
  const title = rs.title ? rs.title : ``;
  const body = rs.body ? rs.body : ``;

  const output =
    `<div class="col-lg-4 col-6 col-12">
      <div class="card shadow-sm h-100">
      <img src="${img}" class="card-img-top">  
      <div class="card-body">

          <div class="fs-5 text-primary fw-medium card-title">${title}</div>
          ${body}
        </div>
      </div>
    </div>`;
  return output;
});
const reasaonBoxesElement = document.getElementById("reason-boxes");
if (reasaonBoxesElement) reasaonBoxesElement.innerHTML = reasonBoxesHtml.join("");