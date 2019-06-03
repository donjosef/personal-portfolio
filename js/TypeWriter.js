export const TypeWriter = (function () {

    const dom = {};
    let text = '';
    let time = 160;
  
    function getDomElements() {
      dom.myName = document.querySelector('.intro .highlight');
    }
  
    function type() {
      const name = dom.myName.dataset.name;
      text = name.substr(0, text.length + 1);
  
      dom.myName.textContent = text;
  
      if (text === name) {
        return;
      }
  
      setTimeout(() => {
        type();
      }, time);
    }
  
    function init() {
      getDomElements();
      type();
    }
  
    return {
      init: init
    }
  }());
