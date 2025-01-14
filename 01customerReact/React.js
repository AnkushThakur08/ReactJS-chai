const rootElement = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click here to visit googl",
};

const renderElement = (element, mainElement) => {
  const domElement = document.createElement(element.type);
  domElement.innerText = element.children;
  domElement.setAttribute("href", element.props.href);
  domElement.setAttribute("target", element.props.target);

  mainElement.appendChild(domElement);
};

renderElement(reactElement, rootElement);
