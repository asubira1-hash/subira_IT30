document.querySelectorAll('.Slides').forEach((slider) => {
  const nextBtn = slider.querySelector('.next');
  const prevBtn = slider.querySelector('.prev');
  const images = slider.querySelectorAll('.slide');
  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * 100;
    
    images.forEach(img => {
      img.style.transform = `translateX(${offset}%)`;
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

});

const items = [
  {
    name: "All",          // TODO 1 — item name
    category: "All",      // TODO 1 — must match an <option> value exactly
    description: "All Items Listed"    // TODO 1 — one sentence description
  },
  {
    name: "Project",
    category: "Astronomy",
    description: "The Study of space"
  },
  {
    name: "Interest",
    category: "Dingus",
    description: "loves small rodents"
  },
  {
    name: "Interest",
    category: "Grilled cheese",
    description: "The perfect sandwich"
  },
  {
    name: "Interest",
    category: "Captain",
    description: "My beloved son"
  },
  {
    name: "Project",
    category: "Home Cooking",
    description: "Cooking for roomates and experimenting with flavors"
  }
  
];
function renderItems(list) {


  const container = document.getElementById('results-container');
  if(container {
  container.innerHTML = "";
  }else{
    console.erroe("COuld not find results-container on this page!");
  }
  for (let i = 0; i < list.length; i++) { 
     const card = document.createElement("div");
     card.className="item-card";
     card.innerHTML=             
     "<h3>"+ list[i].category +"</h3>" +     
      "<p>"+list[i].description+"</p>" +
      "<span class='item-tag'>"+list[i].name +"</span>";
      container.appendChild(card);
      document.getElementById("result-count").textContent = i + " items shown";
    }
  }
function filterItems(value) {  // TODO 6a — name the parameter

  switch (value) {             // TODO 6b — what are you switching on?

    case "":
      
      renderItems(items);
      break;
    case "1":
    const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Astronomy") { 
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "2":              

      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Cat") {  // TODO 6d
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "3":             

      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Sandwich") {  // TODO 6d
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;
      case "4":              

      const filtered4 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Captain") {  // TODO 6d
          filtered4.push(items[i]);
        }
      }
      renderItems(filtered4);
      break;
      case "5":              

      const filtered5 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Home Cooking") {  // TODO 6d
          filtered5.push(items[i]);
        }
      }
      renderItems(filtered5);
      break;

    default:
      renderItems(items); 
      break;
    }
  }

filterItems("");
