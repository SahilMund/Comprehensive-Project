 ## Ques:-
 <b><p>Online Exam Center is an App which needs to be designed beautifully and most interactive web app using HTML5,AngularJS , Users can sign up with email id and password to create account and start preparing for exams. My Tests option should list of all tests subscribed in exam package with status of each test. This should be also a perfect web app for user to keep a track of each test with time, marks and Number of attempts. Profile option gives you ability to change your password and other personal details.
 </p>
</b>


 ### Angular folder structure:-(Always prefer module)
```
 1.Feature module --> Admin,Buyer(all the features based on our application)
 2.Core Faeture module --> (components of forgot pwd,resert-pwd,user-login,user-register)
 3.Home module --> (Home Page)
 4.Models --> (Should be in a separate folder)
 5.Shared module --> (Hader,Footer)
```


 ## steps:-


1. To install the angular
```
npm install -g @angular/cli
```
2. Create a projects:-
```
ng new <projectname>
```
3. To run the application :-

```
ng serve --open 
(or)
ng s -o 
(or)
npm start
```
4. To install angular material
```
npm install --save @angular/material @angular/cdk @angular/animation
```
5.  Let's generate core folder and my-test module
6. Let's now add one component in the core folder

```
ng generate component user-login
```
7. Add one module in the app folder

```
ng generate module myTest           
```
8. Add one component inside the module

9. Add A services which helps to pass data between different component

```
ng generate service services/course
```

10. To transfer data from one component to another:- 
    
    i. (In service folder)
    ```
        private dataSource = new BehaviorSubject({});
        currmsg = this.dataSource.asObservable();

        dataChange(courses:any){
            this.dataSource.next(courses);
        }
    ```
    ii. Now add the service to the provider list of the module.ts file

    iii.
### Folder Structure:-

```
app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html


----- Models/   // each component is treated as a mini Angular app
--------------- employee.model.ts


----- Services/   // each component is treated as a mini Angular app
--------------- employee.service.ts


----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js


assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html

```