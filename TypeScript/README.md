# TypeScript Dependencies Project

This project contains a series of progressive TypeScript exercises, from learning basic interfaces to advanced concepts like namespaces and declaration merging.

## Project Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Available Scripts
- `npm run start-dev`: Starts the Webpack development server
- `npm run build`: Compiles the project
- `npm run test`: Runs Jest tests

## Exercise Structure

### Task 0: Basic Student Interface
- **Directory**: `task_0/`
- **Objective**: Create a `Student` interface and display data in an HTML table
- **Files**: 
  - `js/main.ts`: Student interface with firstName, lastName, age, location
  - Webpack configuration for development

### Task 1: Teacher Interface
- **Directory**: `task_1/`
- **Objective**: `Teacher` interface with readonly and optional properties
- **Features**:
  - firstName/lastName properties as readonly
  - Optional yearsOfExperience property
  - Index signature for dynamic properties

### Task 2: Interface Extension
- **Directory**: `task_1/`
- **Objective**: Create `Directors` interface that extends `Teacher`
- **New property**: `numberOfReports` (number)

### Task 3: Functions and Interfaces
- **Directory**: `task_1/`
- **Objective**: `printTeacher` function with corresponding interface
- **Format**: `printTeacher("John", "Doe")` → `"J. Doe"`

### Task 4: TypeScript Classes
- **Directory**: `task_1/`
- **Objective**: `StudentClass` class with interfaces for constructor and class
- **Methods**:
  - `workOnHomework()`: returns "Currently working"
  - `displayName()`: returns the firstName

### Task 5: Advanced Types - Part 1
- **Directory**: `task_2/`
- **Objective**: `DirectorInterface` and `TeacherInterface` interfaces
- **Classes**: `Director` and `Teacher` implementing their respective interfaces
- **Function**: `createEmployee(salary)` returning Director or Teacher based on salary

### Task 6: Employee-specific Functions
- **Directory**: `task_2/`
- **Objective**: Type guards and execution functions
- **Functions**:
  - `isDirector()`: type predicate
  - `executeWork()`: executes the correct method based on employee type

### Task 7: String Literal Types
- **Directory**: `task_2/`
- **Objective**: `Subjects` type limited to "Math" or "History"
- **Function**: `teachClass()` returning the appropriate message based on subject

### Task 8: Ambient Namespaces
- **Directory**: `task_3/`
- **Objective**: Ambient type declarations for external library
- **Files**:
  - `interface.ts`: `RowID` type and `RowElement` interface
  - `crud.d.ts`: Ambient declarations for crud.js
  - `main.ts`: Usage of CRUD functions with types

### Task 9: Namespaces & Declaration Merging
- **Directory**: `task_4/js/subjects/`
- **Objective**: `Subjects` namespace with declaration merging
- **Files**:
  - `Teacher.ts`: Base Teacher interface
  - `Subject.ts`: Base Subject class
  - `Cpp.ts`, `React.ts`, `Java.ts`: Specialized classes with declaration merging

### Task 10: Brand Convention & Nominal Typing
- **Directory**: `task_5/`
- **Objective**: `MajorCredits` and `MinorCredits` interfaces with brand properties
- **Functions**: `sumMajorCredits()` and `sumMinorCredits()` to calculate credits

## Technologies Used

### Development
- **TypeScript** 4.9.5: Main language
- **Webpack** 5.88.2: Bundler and development server
- **ts-loader** 9.4.4: TypeScript loader for Webpack
- **fork-ts-checker-webpack-plugin**: Parallel type checking

### Code Quality
- **ESLint** 9.24.0: JavaScript/TypeScript linter
- **@typescript-eslint**: TypeScript-specific ESLint rules

### Testing
- **Jest** 29.7.0: Testing framework
- **ts-jest** 29.1.1: Jest preset for TypeScript
- **@types/jest**: TypeScript types for Jest

### Build Tools
- **clean-webpack-plugin**: Output directory cleaning
- **html-webpack-plugin**: HTML file generation
- **source-map**: Source map support for debugging

## TypeScript Configuration

The project uses a strict TypeScript configuration:
- **Target**: ES5 for maximum compatibility
- **Module**: ES6 for modern modules
- **Strict**: true for strict type checking
- **Source Maps**: enabled for debugging
- **Lib**: ES2020 and DOM for modern APIs

## Webpack Configuration

### Development Mode
- **Entry point**: `js/main.ts`
- **DevServer**: Port 8080 with automatic opening
- **Source maps**: inline for debugging
- **Hot reload**: enabled for development

### Plugins
- **ForkTsCheckerWebpackPlugin**: TypeScript type checking
- **CleanWebpackPlugin**: Automatic cleanup
- **HtmlWebpackPlugin**: Automatic HTML generation

## Development Rules

### General Requirements
- ✅ No TypeScript errors during build
- ✅ Use TypeScript for all variables when possible
- ✅ Respect defined interfaces and types
- ✅ ES6+ code with ES5 transpilation

### Best Practices
- Use interfaces to define contracts
- Readonly properties when appropriate
- Optional types with `?`
- Index signatures for dynamic properties
- Type guards for type discrimination
- Namespaces for code organization

## Debugging

The project includes source maps to facilitate debugging:
- TypeScript errors are displayed with original line numbers
- Support for debugging in modern browsers
- Integration with development tools

## Deployment

```bash
# Production build
npm run build

# Compiled files are in the dist/ directory
ls dist/
```

## Project Structure

```
├── task_0/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── .eslintrc.js
├── task_1/
│   └── js/main.ts
├── task_2/
│   └── js/main.ts
├── task_3/
│   ├── js/
│   │   ├── main.ts
│   │   ├── interface.ts
│   │   ├── crud.js
│   │   └── crud.d.ts
│   └── package.json
├── task_4/
│   └── js/subjects/
│       ├── Teacher.ts
│       ├── Subject.ts
│       ├── Cpp.ts
│       ├── React.ts
│       └── Java.ts
└── task_5/
    ├── js/main.ts
    └── package.json
```

## Learning Objectives

This project progressively teaches:
1. **Basic TypeScript**: Interfaces, types, and basic syntax
2. **Advanced Interfaces**: Readonly properties, optional properties, index signatures
3. **Classes**: Constructor interfaces, method implementation
4. **Advanced Types**: Union types, type guards, string literals
5. **Ambient Declarations**: Working with external JavaScript libraries
6. **Namespaces**: Code organization and declaration merging
7. **Nominal Typing**: Brand properties for type safety

---

**Note**: This project is designed for educational purposes to learn TypeScript progressively, from basic concepts to advanced features.