/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Fonction pour additionner les crédits majeurs\nfunction sumMajorCredits(subject1, subject2) {\n    return {\n        credits: subject1.credits + subject2.credits,\n        __brand: \"MajorCredits\",\n    };\n}\n// Fonction pour additionner les crédits mineurs\nfunction sumMinorCredits(subject1, subject2) {\n    return {\n        credits: subject1.credits + subject2.credits,\n        __brand: \"MinorCredits\",\n    };\n}\n// Exemple d'utilisation:\nvar major1 = { credits: 3, __brand: \"MajorCredits\" };\nvar major2 = { credits: 4, __brand: \"MajorCredits\" };\nvar minor1 = { credits: 1, __brand: \"MinorCredits\" };\nvar minor2 = { credits: 2, __brand: \"MinorCredits\" };\nconsole.log(sumMajorCredits(major1, major2)); // { credits: 7, __brand: \"MajorCredits\" }\nconsole.log(sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: \"MinorCredits\" }\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;