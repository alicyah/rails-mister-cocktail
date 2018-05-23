import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["pick?", "drink?", "choose?", "invent?"],
    typeSpeed: 150,
    loop: true
  });
}

export { loadDynamicBannerText };
