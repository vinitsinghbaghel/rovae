const courses = document.querySelectorAll(".course");

courses.forEach(function (course) {
    const btn = course.querySelector(".course-btn");
    // console.log(btn);

    btn.addEventListener("click", function () {
        // console.log(course);

        // courses.forEach(function (item) {
        //     if (item !== course) {
        //         item.classList.remove("show-text");
        //     }
        // });

        course.classList.toggle("show-text");
    });
});