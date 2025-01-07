const teacherData = {
    james: {
        name: "Fr. Denis D. Suza",
        number: "9846189808",
        years: 5,
        address: "01/01/1985",
        classes: "Class 1 to Class 5"
    },
    robin: {
        name: "Shiva V.K.",
        number: "9845086613",
        years: 7,
        address: "02/02/1980",
        classes: "Class 6 to Class 10"
    },
    luffy: {
        name: "Narendra Upadhya",
        number: "9867332323",
        years: 3,
        address: "03/03/1990",
        classes: "Class 5 to Class 8"
    },
    randy: {
        name: "Ishowri Sharma",
        number: "9845082264",
        years: 6,
        address: "04/04/1982",
        classes: "Class 2 to Class 6"
    },
    cosmo: {
        name: "Sushil Pokhrel",
        number: "9863199463",
        years: 4,
        address: "05/05/1988",
        classes: "Class 3 to Class 7"
    },
    sun: {
        name: "Khusbu Gurung",
        number: "9806709848",
        years: 2,
        address: "06/06/1992",
        classes: "Class 4 to Class 9"
    },
    ronaldo: {
        name: "Krishna Sharan Upadhya",
        number: "9855050460",
        years: 5,
        address: "07/07/1989",
        classes: "Class 1 to Class 5"
    },
    messy: {
        name: "Sarita Thapa",
        number: "9849636184",
        years: 8,
        address: "08/08/1987",
        classes: "Class 6 to Class 10"
    },
    clean: {
        name: "Ashmita Koirala",
        number: "9748423894",
        years: 4,
        address: "12/12/1984",
        classes: "Class 4 to Class 7"
    },
    neat: {
        name: "Anand Kumar Chaudhary",
        number: "9856041008",
        years: 5,
        address: "01/12/1988",
        classes: "Class 8 to Class 10"
    },
    hungry: {
        name: "Rabina Pradhan",
        number: "9846721920",
        years: 6,
        address: "02/12/1983",
        classes: "Class 5 to Class 9"
    },
    kkenton: {
        name: "Suman Rana",
        number: "9808860925",
        years: 2,
        address: "03/12/1990",
        classes: "Class 2 to Class 5"
    },
    monty: {
        name: "Mohan Singh Gurung",
        number: "9817190273",
        years: 3,
        address: "04/12/1986",
        classes: "Class 1 to Class 4"
    },
    comply: {
        name: "Shambhu Shahi",
        number: "9846129688",
        years: 1,
        address: "05/12/1997",
        classes: "Class 3 to Class 8"
    },
    red_hed: {
        name: "Chandra Nepali",
        number: "9855052215",
        years: 5,
        address: "06/12/1984",
        classes: "Class 6 to Class 10"
    },
    sectarian: {
        name: "Hari Lamsal",
        number: "9845114599",
        years: 5,
        address: "06/12/1984",
        classes: "Class 6 to Class 10"
    },
    buffen: {
        name: "Anish Gurung",
        number: "9816615087",
        years: 5,
        address: "06/12/1984",
        classes: "Class 6 to Class 10"
    },
    moldy: {
        name: "Amar Bdr. Gurung",
        number: "9815100818",
        years: 5,
        address: "06/12/1984",
        classes: "Class 6 to Class 10"
    }
};

function showInfo(teacherID) {
    const teacher = teacherData[teacherID];
    if (teacher) {
        document.getElementById("teacherName").textContent = teacher.name;
        document.getElementById("teacher-number").textContent = teacher.number;
        document.getElementById("teacher-years").textContent = teacher.years;
        document.getElementById("teacher-address").textContent = teacher.address;
        document.getElementById("teacher-classes").textContent = teacher.classes;

        // Clear previous reviews
        const reviewsList = document.getElementById("reviews-list");
        reviewsList.innerHTML = '';

        document.getElementById("infoModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

function submitReview() {
    const reviewInput = document.getElementById("review-input").value;

    if (reviewInput.trim()) {
        const reviewsList = document.getElementById("reviews-list");
        const newReview = document.createElement("p");
        newReview.textContent = reviewInput;
        reviewsList.appendChild(newReview);
        document.getElementById("review-input").value = '';
    } else {
        alert("Please enter a review before submitting.");
    }
}
