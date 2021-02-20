import React from 'react'

function Recipies() {
    return (
        <div className = "recipieContainer">
            <h1>Recipes</h1>
            <div className="recipieBox1">
                <p className = "recipeDescription">
                    For the first recipie we are going to make hostlites all time favourite "The Pulav":- <br />
                    <strong>Ingredients:</strong> Onion, Tomatoes, Potato chopped - 2 Each. Green chilly, red powdered chilly, and salt according to the taste.<br />
                    Can include chat masala or maggi masala as per taste requirements.<br /><br />
                    <strong>Here Goes the procedure: </strong>Take some oil in the Cooker and first fry the mustard seeds and Jeera followed by 
                    onion and green chilly.<br /> When the onion goes a little pinkish, then add tomatoes to the Cooker and 2 tablespoon of salt. Stir them well untill the stiffness <br />
                    of tomatoes goes away. Now the chat masala or the maggi masala can be added to the mixture in Cooker. Please make sure that<br />
                    the stove is kept at a mild flame otherwise the masala would start to stick on the base of thne Cooker. After 5 minutes, add some <br/>
                    water along with rice and chopped potatoes. Close the lid of the Pressure cooker and wait for the first whistle. There you have your <br />
                    delicious pulav waiting for you.


            </p>
                <iframe title="PulavVideo" width="420" height="345" src="https://www.youtube.com/embed/6NMT_5LH8XY">
                </iframe>

            </div>

        </div>
    )
}

export default Recipies;
