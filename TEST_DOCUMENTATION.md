# Test Documentation

## Overview

This document describes the comprehensive test suite for the Mahmoud Portfolio project, specifically for the newly added `Welcome.jsx` and `index.jsx` components.

## Test Framework

- **Vitest**: Modern, fast unit test framework designed for Vite projects
- **React Testing Library**: Testing utilities for React components
- **jsdom**: DOM implementation for Node.js testing environment
- **@testing-library/jest-dom**: Custom matchers for DOM assertions
- **@testing-library/user-event**: Advanced user interaction simulation

## Installation

To install test dependencies:

```bash
npm install
```

## Running Tests

### Run all tests in watch mode
```bash
npm test
```

### Run tests once (CI mode)
```bash
npm run test:run
```

### Run tests with UI
```bash
npm run test:ui
```

### Run tests with coverage
```bash
npm run test:coverage
```

### Run tests in watch mode (explicit)
```bash
npm run test:watch
```

## Test Files

### 1. `src/components/Welcome.test.jsx`

Comprehensive test suite for the Welcome component with 100+ test cases covering:

#### Test Categories

**Rendering Tests**
- Component renders without crashing
- Default props handling
- Semantic HTML structure validation

**Content Display Tests**
- Welcome/hero heading rendering
- Introduction text display
- Profile image/avatar handling
- Call-to-action elements

**Props Handling Tests**
- Custom className prop
- Optional title prop
- Optional subtitle prop
- Null/undefined prop handling

**Styling and Accessibility Tests**
- ARIA labels and accessibility attributes
- Image alt text validation
- Keyboard navigation support
- Semantic HTML usage

**Integration with Constants Tests**
- Graceful handling of missing constants
- Empty array handling from constants
- Dynamic data integration

**Responsive Behavior Tests**
- Mobile viewport (375x667)
- Tablet viewport (768x1024)
- Desktop viewport (1920x1080)

**Interaction Tests**
- Button click handling
- Link navigation
- User event simulation

**Error Handling Tests**
- React error boundaries
- Missing image sources
- Invalid props

**Performance Tests**
- Unnecessary re-render prevention
- Rapid prop change handling
- Component lifecycle optimization

**Edge Cases**
- Null props
- Undefined props
- Empty strings
- Very long text content
- Special characters and XSS prevention

**Animation and Transitions Tests**
- Mount animations
- Unmount cleanup
- Transition states

**Integration Tests**
- React StrictMode compatibility
- Custom provider wrapping
- Context integration

### 2. `src/components/index.test.jsx`

Comprehensive test suite for the barrel export file with 60+ test cases covering:

#### Test Categories

**Module Structure Tests**
- Export object validation
- Non-empty export verification
- Valid module structure

**Expected Component Exports Tests**
- Welcome component export
- Navbar component export
- Default export pattern
- Named exports pattern

**Export Validation Tests**
- Valid React component exports
- No test file exports
- No naming conflicts

**Import Compatibility Tests**
- Destructured imports
- Wildcard imports
- Default import support
- Tree-shaking compatibility

**Export Consistency Tests**
- PascalCase naming conventions
- Component display names
- Consistent patterns

**Re-export Patterns Tests**
- Proper re-export from component files
- Maintained functionality through re-export

**Module Side Effects Tests**
- No side effects on import
- No global scope modification

**Error Handling Tests**
- Graceful handling of missing files
- Repeated import handling

**Performance Considerations Tests**
- No circular dependencies
- Efficient lazy loading

**Build System Compatibility Tests**
- ES modules support
- CommonJS interop
- Vite compatibility

**Future Component Additions Tests**
- Easy accommodation of new exports
- Backwards compatibility

**Type Safety Tests**
- TypeScript compatibility
- Consistent function signatures

**Integration with Project Aliases Tests**
- #components alias support
- Cross-file resolution

## Test Structure

Each test follows this pattern:

```javascript
describe('Component/Feature Name', () => {
  beforeEach(() => {
    // Setup code
  })

  afterEach(() => {
    // Cleanup code
  })

  describe('Specific Feature Category', () => {
    it('should behave in a specific way', () => {
      // Arrange
      // Act
      // Assert
    })
  })
})
```

## Code Coverage Goals

- **Statements**: > 80%
- **Branches**: > 80%
- **Functions**: > 80%
- **Lines**: > 80%

## Best Practices

### 1. Test Behavior, Not Implementation
Tests focus on what the component does, not how it does it.

### 2. Accessibility First
All tests include accessibility checks (ARIA labels, alt text, keyboard navigation).

### 3. Comprehensive Edge Cases
Tests cover null, undefined, empty, and extreme values.

### 4. Real User Interactions
Uses `@testing-library/user-event` for realistic user interactions.

### 5. Clean Test Data
Tests use minimal, focused test data.

### 6. Descriptive Test Names
Each test clearly describes what it's testing.

### 7. Isolation
Tests don't depend on each other and can run in any order.

### 8. Fast Execution
Tests run quickly to encourage frequent execution.

## Mocking Strategy

### Constants
```javascript
vi.mock('#constants', () => ({
  navLinks: [...],
  navIcons: [...],
  // other mocked constants
}))
```

### External Dependencies
External dependencies (like `dayjs`) are mocked when needed to ensure test isolation.

## Continuous Integration

These tests are designed to run in CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run Tests
  run: npm run test:run

- name: Generate Coverage
  run: npm run test:coverage
```

## Troubleshooting

### Tests Failing Due to Missing Components

If tests fail because components aren't implemented yet:
1. This is expected - tests are written to be future-proof
2. Implement the components following the test specifications
3. Tests will pass once implementation matches expectations

### Import Errors

If you see import errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Mock Errors

If mocks aren't working:
```bash
# Clear Vitest cache
npx vitest --clearCache
```

## Writing New Tests

When adding new components:

1. Create a test file: `ComponentName.test.jsx`
2. Follow the existing test structure
3. Include all test categories relevant to your component
4. Run tests frequently during development
5. Aim for high coverage

## Test Philosophy

These tests follow the **Testing Trophy** philosophy:
- Few end-to-end tests
- Many integration tests
- Lots of unit tests
- Static analysis (ESLint, TypeScript)

## Future Enhancements

- Visual regression testing with Chromatic
- Performance benchmarks with Vitest bench
- Snapshot testing for complex UI
- End-to-end tests with Playwright

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Contributing

When contributing:
1. Write tests for all new features
2. Update existing tests when changing behavior
3. Ensure all tests pass before submitting PR
4. Maintain or improve code coverage