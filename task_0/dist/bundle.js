/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("var student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 20,\n    location: \"London\"\n};\nvar student2 = {\n    firstName: \"Jane\",\n    lastName: \"Doe\",\n    age: 22,\n    location: \"Paris\"\n};\nvar studentsList = [student1, student2];\n// Create and append table to the body\nvar table = document.createElement('table');\nvar tbody = document.createElement('tbody');\n// Create header row\nvar headerRow = document.createElement('tr');\nvar firstNameHeader = document.createElement('th');\nvar locationHeader = document.createElement('th');\nfirstNameHeader.textContent = 'First Name';\nlocationHeader.textContent = 'Location';\nheaderRow.appendChild(firstNameHeader);\nheaderRow.appendChild(locationHeader);\ntbody.appendChild(headerRow);\n// Add student rows\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    var firstNameCell = document.createElement('td');\n    var locationCell = document.createElement('td');\n    firstNameCell.textContent = student.firstName;\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(locationCell);\n    tbody.appendChild(row);\n});\ntable.appendChild(tbody);\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

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