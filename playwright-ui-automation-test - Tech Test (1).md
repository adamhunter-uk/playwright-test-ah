# Playwright UI Automation Technical Assessment (C#)

## Overview

This take-home assessment evaluates your proficiency with Playwright for UI automation testing using C#. You'll be creating automated tests for a public website, implementing various testing techniques, and demonstrating best practices in test architecture.

## Requirements

### Setup (10%)
- Set up a new Playwright project with C# and .NET
- Configure the necessary dependencies
- Implement a basic project structure following testing best practices

### Test Scenarios (50%)
Implement automated tests for [https://automationexercise.com](https://automationexercise.com) with the following scenarios:

1. **User Registration Flow**
   - Navigate to the registration page
   - Complete the registration form with random valid data
   - Verify successful registration

2. **Product Search and Filtering**
   - Search for a product category (e.g., "tshirts")
   - Apply at least two filters (e.g., price range, brand)
   - Verify that search results match the applied filters

3. **Shopping Cart Functionality**
   - Add multiple items to the cart
   - Update quantities
   - Remove an item
   - Verify cart totals update correctly

### Advanced Features (30%)
Implement as many of these features as you see fit

- **Page Object Model**: Implement a clean POM architecture
- **Visual Testing**: Compare screenshots for visual regression
- **Data-Driven Testing**: Run the same test with multiple data sets using NUnit or MSTest
- **API Integration**: Combine UI tests with API calls for test setup or verification. The site offers a list of available APIs at [https://automationexercise.com/api_list](https://automationexercise.com/api_list) that can be used for this purpose.
- **Performance Metrics**: Capture and report on page load times

### Custom Challenge Component (20%)
To demonstrate your complete understanding of complex automation you could try advanced skills like

- **Custom Test Framework Extension**: Create a custom extension for the Playwright test framework that adds functionality not available out-of-the-box (e.g., custom retry logic, specific reporting feature, or specialized assertions)
- **Test Patterns Implementation**: Implement a less common design pattern beyond POM (e.g., Screenplay Pattern, Fluent Interface Pattern) and explain why you chose it
- **Resilience Testing**: Create tests specifically designed to handle dynamic elements, network latency, or other real-world challenges, with detailed comments explaining your approach

### Documentation & Explanation (20%)
- Include a detailed README with:
  - Setup instructions
  - Test execution commands
  - Explanation of your test architecture and patterns
  - **Reasoning behind key decisions** - explain why you structured your code the way you did
  - **Challenges encountered** and how you solved them
  - How you would improve the framework if given more time
- Add thorough inline code comments explaining non-obvious implementation details

## Submission Guidelines

1. Create a GitHub repository with your solution
2. Make sure all dependencies are properly documented
3. Include an "Originality Statement" in your README confirming this is your original work and detailing any external resources or references used
4. Email the repository link to [email address]

## Follow-up Questions
Be prepared to answer questions about your implementation in a follow-up discussion, such as:
- Why did you choose specific patterns or approaches?
- How would you scale this framework for a large application?
- What would you change if you were testing different types of applications?

## Evaluation Criteria

- **Code Quality**: Clean, readable, and well-structured C# code
- **Test Coverage**: Completeness of test scenarios
- **Reliability**: Tests should be stable and repeatable
- **Best Practices**: Following Playwright and general testing best practices in C#
- **Error Handling**: Proper handling of exceptions and edge cases
- **Critical Thinking**: Evidence of thoughtful design decisions and problem-solving
- **Originality**: Unique approach that demonstrates understanding beyond copying examples

## Time Expectation

You should spend approximately 4-6 hours on this assessment. Focus on quality over quantity.

## Resources

- [Playwright for .NET Documentation](https://playwright.dev/dotnet/docs/intro)
- [.NET Documentation](https://docs.microsoft.com/en-us/dotnet/)
- [Automation Exercise Website](https://automationexercise.com)
