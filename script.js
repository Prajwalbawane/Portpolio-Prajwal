
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        // Remove active classes from all tab links
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-link");
        }

        // Remove active classes from all tab contents
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove("active-tab");
        }

        // Add active class to the clicked tab link
        event.currentTarget.classList.add("active-link");

        // Show the corresponding tab content
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
        sidemenu.style.right = "0";
    }
    function closemenu() {
        sidemenu.style.right = "-200px";
    }