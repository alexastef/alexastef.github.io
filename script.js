$(document).ready(function() {

    $(".port-image").on("mouseover", function(){
        const state = $(this).attr("data-state");

        if (state === "still") {
            const hoverUrl = $(this).attr("data-hover");
            $(this).attr("src", hoverUrl);
            $(this).attr("class", "port-image img-fluid");
            $(this).attr("data-state", "hovered");
            $(this).append("<button type='button class='btn btn-primary");
        }
    });

    $(".port-image").on("mouseout", function(){
        const state = $(this).attr("data-state");

        if (state === "hovered") {
            const stillUrl = $(this).attr("data-still");
            $(this).attr("src", stillUrl);
            $(this).attr("data-state", "still");
        }
    });

    $(".port-image").on("click", function(){
        const linkModal = $("#linkModal");
        $("#projectTitle").empty();
        let modalTitle = $(this).attr("alt");
        $("#projectTitle").append(modalTitle);
        linkModal.modal('show');
        const repoLink = $(".repoLink");
        const siteLink = $(".siteLink");

        if (modalTitle === "Password Generator") {
            repoLink.attr("href", "https://github.com/alexastef/password.homework");
            siteLink.attr("href", "https://alexastef.github.io/password.homework/");
        } 
        if (modalTitle === "That's the Spirit") {
            repoLink.attr("href","https://github.com/alexastef/ThatsTheSpirit");
            siteLink.attr("href","https://alexastef.github.io/ThatsTheSpirit/");
        }
        if (modalTitle === "Weather App"){
            repoLink.attr("href","https://github.com/alexastef/weatherapp.homework");
            siteLink.attr("href","https://alexastef.github.io/weatherapp.homework/");
        }
        if (modalTitle === "Day Scheduler") {
            repoLink.attr("href","https://github.com/alexastef/scheduler.homework");
            siteLink.attr("href","https://alexastef.github.io/scheduler.homework/");
        }
        if (modalTitle === "New York Times Search") {
            repoLink.attr("href", "https://github.com/alexastef/NYTsearch");
            siteLink.attr("href", "https://alexastef.github.io/NYTsearch");

        }

        if (modalTitle === "Eat-Da-Burger") {
            repoLink.attr("href", "https://github.com/alexastef/daburger");
            siteLink.attr("href", "https://bloc-minister-61255.herokuapp.com/");
        }

        if (modalTitle === "Lookin for a Loo!") {
            repoLink.attr("href", "https://github.com/alexastef/loo");
            siteLink.attr("href", "https://skip-to-the-loo.herokuapp.com/");
        }

        if (modalTitle === "COVID Can I Do It?") {
            repoLink.attr("href", "https://github.com/covidcanidoit/covidcanidoit");
            siteLink.attr("href", "https://covidcanidoit.com");
        }
    })

    });






