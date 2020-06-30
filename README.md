# bugi
A mini mobile shopping application built with React Native and Expo tool for purpose of Final Project of Lighthouse Labs.
User can Login and Logut (for the moment user no need to register or login | user can immediately scanning), Scan barcode of products, add to cart, confirme the QTY ( Increase/Descrese ) and payment.


## Setup

1. Clone the project to your local repo.
2. Run `npm install`
3. User needs ti install Expo app on mobile so he can run the application.
* Expo Guid (https://expo.io/tools)
4. Expo runs on the same wifi used in the computer.
5. Run `expo start` to run the app.
6. User needs to scan the IQ code with Phone's Camera to allow application build on Expo



## Back end server deployed to Heroku
. Also you check it by click Link below:
https://github.com/Hayder-Suwaed/final_project-api

Env expample:
```
STRIPE_PUBLISHABLE_KEY=your_test_key_here
STRIPE_SECRET_KEY=your_test_key_here

USERNAME=your_username_here
PASSWORD=your_password_here
```


## Final Product

Main Page:
!["Login page"](https://github.com/Hayder-Suwaed/final_project/blob/master/public/images/IMG_2524.PNG)

Scanner Page
!["QRScanner page"](https://github.com/Hayder-Suwaed/final_project/blob/master/public/images/IMG_2525.PNG)

Products details page
!["Products details page"](https://github.com/Hayder-Suwaed/final_project/blob/master/public/images/IMG_2526.PNG)

Cart:

![Cart page](https://github.com/Hayder-Suwaed/final_project/blob/master/public/images/IMG_2528.PNG)

Confirmation page
![Confirmation page](https://github.com/Hayder-Suwaed/final_project/blob/master/public/images/IMG_2527.PNG)

Payment page
![Payment page](https://github.com/Hayder-Suwaed/final_project/blob/master/public/images/IMG_2529.PNG)


## Dependec
* expo: 36.0.0
* React-Native: 0.61.5
* Jest: 24.9.0
* @babel/core: 7.0.0
* babel-jest: 24.9.0
* babel-preset-expo: 8.0.0
* metro-react-native-babel-preset: 0.56.0
* react-test-renderer: 16.9.0
