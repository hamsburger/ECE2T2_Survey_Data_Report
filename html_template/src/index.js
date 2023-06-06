let TOC = document.querySelector("#TOC");
let TOCButton = document.querySelector("#TOC-Button");
let relevantHeadings = document.querySelectorAll("h1,h2");
let H1Incrementer = 0;
let H2Incrementer = 0;
let content = null; // H1 header content
let content2 = null; // H2 header content

relevantHeadings.forEach((node, i) => {
  let newA = document.createElement("a");
  if (node.tagName === "H1") {
    H1Incrementer++;
    H2Incrementer = 0;
    content = document.createElement("div");
    if (content2 !== null) {
      TOC.appendChild(content2);
      content2 = null;
    }

    if (
      i + 1 !== relevantHeadings.length &&
      relevantHeadings[i + 1].tagName !== "H1"
    ) {
      let arrow = document.createElement("div");
      arrow.style.border = "7px solid transparent";
      arrow.style.borderLeft = "7px solid black";
      arrow.style.display = "inline-block";
      arrow.style.marginRight = "1px";
      arrow.addEventListener("click", (e) => {
        let currentTarget = e.target;
        // Collapse
        if (currentTarget.style.borderLeft === "7px solid black") {
          currentTarget.style.borderLeft = "7px solid transparent";
          currentTarget.style.borderRight = "7px solid transparent";
          currentTarget.style.borderTop = "9px solid black";
          currentTarget.style.borderBottom = "3px solid transparent";
          currentTarget.style.marginRight = "5px";
          currentTarget.style.transform = "translate(-2px)";
          // Hide
        } else {
          currentTarget.style.borderLeft = "7px solid black";
          currentTarget.style.borderRight = "7px solid transparent";
          currentTarget.style.borderTop = "7px solid transparent";
          currentTarget.style.borderBottom = "7px solid transparent";
          currentTarget.style.marginRight = "1px";
          currentTarget.style.transform = "translate(0px)";
        }

        let parentalSibling = currentTarget.parentNode.nextElementSibling;
        if (parentalSibling && parentalSibling.id === "child") {
          if (parentalSibling.style.visibility === "hidden") {
            parentalSibling.style.visibility = "visible";
            parentalSibling.style.height = "100%";
            parentalSibling.style.marginTop = "3%";
          } else {
            parentalSibling.style.visibility = "hidden";
            parentalSibling.style.height = "0px";
            parentalSibling.style.marginTop = "0%";
          }
        }
      });
      content.appendChild(arrow);
    }

    newA.innerText = H1Incrementer + ". " + `${node.textContent}`.trimStart();
    content.appendChild(newA);
    content.id = "parent";
    TOC.appendChild(content);
    content.style.marginTop = "3%";
  } else {
    H2Incrementer++;
    if (content2 === null) {
      content2 = document.createElement("div");
      content2.id = "child";
      content2.style.marginLeft = "5%";
      content2.style.visibility = "hidden";
      content2.style.height = "0px";
    }
    newA.innerText =
      H1Incrementer +
      "." +
      H2Incrementer +
      " " +
      `${node.textContent}`.trimStart();

    content2.appendChild(newA);
  }

  newA.href = "#" + node.id;
  newA.style.textDecoration = "none";
  newA.style.color = "black";

  // console.log(node.tagName);
});

if (content2 !== null) {
  TOC.appendChild(content2);
  content2 = null;
}

TOCButton.addEventListener("click", (e) => {
  if (TOC.style.display === "block") TOC.style.display = "none";
  else TOC.style.display = "block";
});
