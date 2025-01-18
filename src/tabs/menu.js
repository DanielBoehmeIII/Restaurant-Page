import { grandParent } from "./home.js";
// import menuImgPath from "./img/menu.png";

export function loadMenu() {
  // const menuImg = document.createElement("img");
  // menuImg.id = "menu-img";
  // menuImg.src = menuImgPath;
  //
  const menu = document.createElement("div");
  menu.id = "menu";
  // menu.appendChild(menuImg);
  let pageNum = 1;

  for (let i = 0; i < 5; i++) {
    if (pageNum % 2 !== 0) {
      new page(
        "Mos Eisley Cantina",
        Array.from({ length: 5 }, () => new item()),
        pageNum,
      );
    } else {
      new page(
        "../img/menu-icon.jpg",
        Array.from({ length: 5 }, () => new item()),
        pageNum,
      );
    }
    const pageElement = document.createElement("div");
    pageElement.id = `page-${pageNum}`;
    pageElement.classList.add("page");
    const title = document.createElement("h6");
    title.innerHTML = page.title;
    pageElement.appendChild(title);
    const items = document.createElement("div");
    items.class = "items";
    for (let j = 0; j < 5; j++) {
      const item = document.createElement("div");
      item.id = `item-${j + 1}`;
      const name = document.createElement("h4");
      const description = document.createElement("p");
      const price = document.createElement("h6");
      item.appendChild(name);
      item.appendChild(description);
      item.appendChild(price);
      pageElement.appendChild(item);
    }
    menu.appendChild(pageElement);
    pageNum++;
  }
  grandParent.appendChild(menu);
}

class item {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

class page {
  constructor(title, items, pageNum) {
    this.title = title;
    this.items = items;
    this.pageNum = pageNum;
  }
}
