import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    disable: 'phone',
  });
};
