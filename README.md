## Automation Project

### Automation testing on a website using POM Structure And Playright

You are asking for automation tests on the (https://www.saucedemo.com/) site.

Q1|Try login with locked_out_user and verify the error message.

Q2|Log in with standard_user. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

Q3|Login with performance_glitch_user and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the products' names and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

### Clone repository
```bash
git clone https://github.com/FouziaMozumder/Automation-Project.git
```
## Instructions

### Generate allure report
```bash
allure generate allure-results --clean -o allure-report 
```
### Open allure report
```bash
allure open allure-report 
```
### Run the code
```bash
npm run test 
```




