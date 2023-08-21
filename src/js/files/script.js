// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const element = document.getElementById('tel');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);