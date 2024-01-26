// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { gsap } from "gsap";
import 'overlayscrollbars/overlayscrollbars.css';
import { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from 'overlayscrollbars';

const osInstance = OverlayScrollbars(document.querySelector('#myElement'), {});
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(MotionPathHelper);
const element = document.getElementById('tel');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);
const test = document.querySelector('.test');

const hover = gsap.to(test, {x: 200, y:100, duration: 2, scale: 0.8});
				 gsap.fromTo(".inner", { width: 100 }, { width: 200, duration: 2 });
hover.pause();
test.addEventListener("mouseenter", () => hover.play());
test.addEventListener("mouseleave", () => hover.reverse());


let tl = gsap.timeline({paused:true});
tl.from('.title', {x:300, duration:1.5});
tl.from('.sub-title', {x:-300, duration:1.5}, "-=1");
let button = document.querySelector('.buttonn');
button.addEventListener("click", () => tl.play())


gsap.to(".buttonn", {
	x: 700,
	rotate:360,
	duration: 3,
	scrollTrigger: { trigger: ".buttonn", start:"500"},
 });

 gsap.to(".rect001", {
	// x: window.innerWidth-200,
	rotate:360,
	duration: 10,
	
	scrollTrigger: {
		trigger: ".rect001",
		scrub:true,
		start:"top 50%",
		end:"top 0%",
		markers:true,
		pin:true,
		// scroller: ".motion-test"
		},
 });

//  gsap.to("#rect01", {
// 	duration: 10, 
// 	repeat: 120,
// 	repeatDelay: 0,
// 	yoyo: true,
// 	ease: "linear",
// 	motionPath:{
// 	  path: [{x:100, y:10},
// 		 {x:200, y:200},
// 		 {x:800, y:70},
// 		 {x:400, y:170},
// 		 {x:window.innerWidth, y:40},
// 		],
// 	  align: "#path01",
// 	//   autoRotate: true,
// 	  alignOrigin: [0.5, 0.5]
// 	}
//  });

//  gsap.to("#rect02", {
// 	duration: 5, 
// 	repeat: 12,
// 	// repeatDelay: 3,
// 	yoyo: true,
// 	ease: "power1.inOut",
// 	motionPath:{
// 	  path: "#path02",
// 	  align: "#path02",
// 	  autoRotate: true,
// 	  alignOrigin: [0.5, 0.5]
// 	}
//  });

