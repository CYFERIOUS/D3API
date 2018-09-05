# Huge Navigation Exercise

## Overview

thanks for the oportunity im sending now my last commit.



## Version
0.2.0, DIGITAL FLUTE

## Files

* app.js - here i build a http require to convert the nav json in a rest api so i parse json from index.html in public folder

## REST-API

* IN THE INDEX FILE I CALL THE URL http://localhost:8080/hello that return a json to be parsed



)

###18-06-15-4.41pm
```
ALL FINISHED 

```

## Design Specifications

I DONT USE ANY LIBRARY, JUST PURE JAVASCRIPT

### Typography

* **Primary Navigation** 21/48 HUGE Avant Garde Bold: OK
* **Secondary Navigation** 16/48 Galaxie Copernicus Book: OK
* **Headline (Desktop)** 120/132 HUGE Avant Garde Bold: OK
* **Body Copy (Desktop)** 24/36 Galaxie Copernicus Book: OK
* **Headline (Mobile)** 44/48 HUGE Avant Garde Bold: OK
* **Body Copy (Mobile)** 14/24 Galaxie Copernicus Book: OK
* **Copyright (Mobile)** 12/16 Helvetica Neue Regular: OK

### Color

*ok

### Measurements

*OK basic css fluid

### Interactions

#### Desktop

* On hover, Primary Navigation reverses color (white/magenta). OK
* On click, if item contains a URL, Primary Navigation navigates to a new page.OK
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).OK
* Menu appears containing Secondary Navigation.OK
* Translucent mask appears over content, behind menu.OK
* On hover in, Secondary Navigation changes color (magenta/light gray).OK
* On click, Secondary navigates to a new page.OK
* On click outside of menu, menu and mask are hidden.OK

#### Mobile

* When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.OK
* The HUGE logo and navigation toggle slide left to right.OK
* The open navigation icon should change to the close navigation icon (“x”).OK
* Translucent mask appears over content, right of navigation.OK
* The Primary Navigation should include link items and menu items.OK
* When a user hovers a Primary Navigation item, it should change color (magenta/light gray).OK
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.OK
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate  180°.OK
* When a user hovers a Secondary Navigation item, it should change color (magenta/light gray).OK
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.OK
* When a user clicks outside of the navigation, the navigation should close.OK
* When the navigation closes:
  * the menu should “pull” from right to left OK
  * the logo and toggle button should “slide” from right to left (i dont understand it)
  * the close icon should change to the open icon:OK
  * the mask should be hidden:OK
