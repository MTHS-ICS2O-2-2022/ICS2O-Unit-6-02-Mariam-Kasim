// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  //This function determines how many times the cookie has been clicked
  
  //process
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks) + 1
  }
  else {
    localStorage.clicks = 1
  }

  //output
  document.getElementById("answer").innerHTML = " You have "+localStorage.clicks+" cookies! "
}