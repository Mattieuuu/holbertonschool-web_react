/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRow: () => (/* binding */ deleteRow),
/* harmony export */   insertRow: () => (/* binding */ insertRow),
/* harmony export */   updateRow: () => (/* binding */ updateRow)
/* harmony export */ });
function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector),
/* harmony export */   teachClass: () => (/* binding */ teachClass)
/* harmony export */ });
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ "./js/crud.js");

var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = _crud__WEBPACK_IMPORTED_MODULE_0__.insertRow(row);
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
_crud__WEBPACK_IMPORTED_MODULE_0__.updateRow(newRowID, updatedRow);
_crud__WEBPACK_IMPORTED_MODULE_0__.deleteRow(newRowID);
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "London"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Paris"
};
var studentsList = [student1, student2];
function renderTable() {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        nameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        row.appendChild(nameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
function teachClass(todayClass) {
    return "Teaching " + todayClass;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztLQUN2QztJQUNELE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUlELFNBQVMsVUFBVSxDQUFDLFVBQW9CO0lBQ3BDLE9BQU8sY0FBWSxVQUFZLENBQUM7QUFDcEMsQ0FBQztBQVlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9jcnVkLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbnNlcnRSb3cocm93KSB7XG4gIGNvbnNvbGUubG9nKCdJbnNlcnQgcm93Jywgcm93KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUm93KHJvd0lkKSB7XG4gIGNvbnNvbGUubG9nKCdEZWxldGUgcm93IGlkJywgcm93SWQpO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3cocm93SWQsIHJvdykge1xuICBjb25zb2xlLmxvZyhgVXBkYXRlIHJvdyAke3Jvd0lkfWAsIHJvdyk7XG4gIHJldHVybiByb3dJZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2NydWQuZC50c1wiIC8+XG5pbXBvcnQgeyBSb3dJRCwgUm93RWxlbWVudCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIENSVUQgZnJvbSAnLi9jcnVkJztcblxuY29uc3Qgcm93OiBSb3dFbGVtZW50ID0ge1xuICAgIGZpcnN0TmFtZTogXCJHdWlsbGF1bWVcIixcbiAgICBsYXN0TmFtZTogXCJTYWx2YVwiXG59O1xuXG5jb25zdCBuZXdSb3dJRDogUm93SUQgPSBDUlVELmluc2VydFJvdyhyb3cpO1xuXG5jb25zdCB1cGRhdGVkUm93OiBSb3dFbGVtZW50ID0ge1xuICAgIGZpcnN0TmFtZTogXCJHdWlsbGF1bWVcIixcbiAgICBsYXN0TmFtZTogXCJTYWx2YVwiLFxuICAgIGFnZTogMjNcbn07XG5cbkNSVUQudXBkYXRlUm93KG5ld1Jvd0lELCB1cGRhdGVkUm93KTtcbkNSVUQuZGVsZXRlUm93KG5ld1Jvd0lEKTtcblxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbn1cblxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgICBsYXN0TmFtZTogXCJEb2VcIixcbiAgICBhZ2U6IDIwLFxuICAgIGxvY2F0aW9uOiBcIkxvbmRvblwiXG59O1xuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgICBmaXJzdE5hbWU6IFwiSmFuZVwiLFxuICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuICAgIGFnZTogMjIsXG4gICAgbG9jYXRpb246IFwiUGFyaXNcIlxufTtcblxuY29uc3Qgc3R1ZGVudHNMaXN0OiBBcnJheTxTdHVkZW50PiA9IFtzdHVkZW50MSwgc3R1ZGVudDJdO1xuXG5mdW5jdGlvbiByZW5kZXJUYWJsZSgpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuXG4gICAgc3R1ZGVudHNMaXN0LmZvckVhY2goKHN0dWRlbnQ6IFN0dWRlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY29uc3QgbmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAgIG5hbWVDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gICAgICAgIGxvY2F0aW9uQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDZWxsKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfSk7XG5cbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtmaXJzdE5hbWUuY2hhckF0KDApfS4gJHtsYXN0TmFtZX1gO1xufTtcblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gICAgbmV3KGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzSW50ZXJmYWNlO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcbiAgICB9XG5cbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICAgIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbiAgICB9XG5cbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogVGVhY2hlciB8IERpcmVjdG9yIHtcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IHN0cmluZyB7XG4gICAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICAgIH1cbiAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xufVxuXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFRlYWNoaW5nICR7dG9kYXlDbGFzc31gO1xufVxuXG5leHBvcnQge1xuICAgIERpcmVjdG9ySW50ZXJmYWNlLFxuICAgIFRlYWNoZXJJbnRlcmZhY2UsXG4gICAgRGlyZWN0b3IsXG4gICAgVGVhY2hlcixcbiAgICBjcmVhdGVFbXBsb3llZSxcbiAgICBpc0RpcmVjdG9yLFxuICAgIGV4ZWN1dGVXb3JrLFxuICAgIHRlYWNoQ2xhc3MsXG4gICAgU3ViamVjdHNcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==