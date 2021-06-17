var slideIndex = 1;
//Function to show next or previous image
    function plusSlides( n ) {
        showSlides(slideIndex += n);
    }

//Function to show which image we are displaying with dots
    function currentSlide( n ) {
        showSlides(slideIndex = n);
    }

//Function to show the image we want (they are taking the five dots and images and assigning them numbers, like an array)
    function showSlides( n ) {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
    //Checking that the image or dot value is not less than one or more than five within the function that is creating the array
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
    //The variable that tells which dot or image to show themselves.
        var i;
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    //Tabbed menu function

    function openTab(event, blue) {
        var i, x, tablinks;
        x = document.getElementsByClassName("menuLabel");
        for(i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        
        tablinks = document.getElementsByClassName("tablink");
        for(i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" selected", "")
        }

        document.getElementById(blue).style.display = "block";
        event.currentTarget.firstElementChild.className += " selected";
    
    }