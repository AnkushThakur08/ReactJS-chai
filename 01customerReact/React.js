const rootElement = document.getElementById("root");

const ReactElement = {
  type: "a",
  props: {
    href: "http://react.org",
    _target: "_blank",
  },
  children: "Click here to Visit",
};

function RenderElement(element, container) {
 const element =  document.createElement(element.type)

 element.innerHTML = element.children
 element.setAttributes()
}

RenderElement(ReactElement, rootElement);
