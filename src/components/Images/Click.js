import React from "react";
import Image from "./Image";

//This is where I would add all of the functionality to handle the image clicks.
//It would change the state of the photo from "unclicked" to "clicked"
//With each click, the code would check for a couple things:
//1. it would run a check to make sure that the state of the image is still "unclicked"
    //if the image had a status of "clicked", it would end the game 
//2. If the image hadn't been clicked yet, they would shuffle in a random order
//3. Each click would also run a check to see if there are any unclicked images.
    //if there are still images that are unclicked, the game continues
    //if all of the images have a status of "clicked", the player wins. 