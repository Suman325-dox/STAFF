const teacherData = {
    james: {
        name: "Fr. Denis D. Suza",
        number: "9846189808",
        years: 0,
        address: "Bandipur",
        classes: "No classes",
        reviews: [
            "He is a nice person.",
            "Great knowledge .",
            "Always helpful and supportive."
        ]
    },
    robin: {
        name: "Shiva V.K.",
        number: "9845086613",
        years: 18,
        address: "Bharatpur-14",
        classes: "upto Class 12",
        reviews: [
            "He is an excellent teacher.",
            "Very engaging and inspirational."
        ]
    },
    luffy: {
        name: "Narendra Upadhya",
        number: "9867332323",
        years: 15,
        address: "Bandipur",
        classes: "upto Class 12",
        reviews: [
            "He brings lots of energy to his classes."
        ]
    },
    randy: {
        name: "Ishowri Sharma",
        number: "9845082264",
        years: 19,
        address: "Bandipur",
        classes: "uptoClass 12",
        reviews: [
            "He makes learning fun and interactive.",
            "Very approachable and understanding."
        ]
    },
    cosmo: {
        name: "Sushil Pokhrel",
        number: "9863199463",
        years: 2,
        address: "unknown",
        classes: "upto Class 12",
        reviews: [
            "He is a disciplined and creative teacher."
        ]
    },
    sun: {
        name: "Khusbu Gurung",
        number: "9806709848",
        years: 1,
        address: "Bandipur",
        classes: "upto Class 12",
        reviews: [
            "She is so patient and helpful.",
            "Always encourages students.",
            "Best computerteacher"
        ]
    },
    ronaldo: {
        name: "Krishna Sharan Upadhya",
        number: "9855050460",
        years: 34,
        address: "Chitwan",
        classes: "upto Class 12",
        reviews: [
            "He is an outstanding mentor."
        ]
    },
    messy: {
        name: "Sarita Thapa",
        number: "9849636184",
        years: 11,
        address: "Butwal",
        classes: "upto Class 12",
        reviews: [
            "She has great teaching skills.",
            "Very knowledgeable and supportive."
        ]
    },
    clean: {
        name: "Ashmita Koirala",
        number: "9748423894",
        years: 0,
        address: "Bandipur",
        classes: "Class 4 to Class 7",
        reviews: [
            "She is very encouraging.",
            "Makes lessons really enjoyable."
        ]
    },
    neat: {
        name: "Anand Kumar Chaudhary",
        number: "9856041008",
        years: 0,
        addres: "unknown",
        classes: "Class 8 to Class 10",
        reviews: [
            "He is very thorough and precise."
        ]
    },
    hungry: {
        name: "Rasbina Pradhan",
        number: "9846721920",
        years: 6,
        address: "Bandipur",
        classes: "Class 5 to Class 9",
        reviews: [
            "She engages students well."
        ]
    },
    kkenton: {
        name: "Suman Rana",
        number: "9808860925",
        years: 10,
        address: "Rishing",
        classes: "upto Class 12",
        reviews: [
            "He is a great listener.",
            "Always helpful and understanding."
        ]
    },
    monty: {
        name: "Mohan Singh Gurung",
        number: "9817190273",
        years: 3,
        address: "Bandipur-5",
        classes: "from class to class",
        reviews: [
            "He supports all his students."
        ]
    },
    comply: {
        name: "Shambhu Shahi",
        number: "9846129688",
        years: 1,
        address:"unknown",
        classes: "Class 3 to Class 8",
        reviews: [
            "He is very motivating."
        ]
    },
    red_hed: {
        name: "Chandra Nepali",
        number: "9855052215",
        years: 5,
        addres: "Bandipur-25",
        classes: "Class 6 to Class 10",
        reviews: [
            "He has excellent teaching methods."
        ]
    },
    sectarian: {
        name: "Hari Lamsal",
        number: "9845114599",
        years: 5,
        address: "unknown",
        classes: "Class 6 to Class 10",
        reviews: [
            "He has deep knowledge of his subjects."
        ]
    },
    buffen: {
        name: "Keshav Prasad Poudel",
        number: "9845047035",
        years: 1,
        address: "Chitwan",
        classes: "upto Class 12",
        reviews: [
            "He is always well prepared for his lessons."
        ]
    },
    moldy: {
        name: "Amar Bdr. Gurung",
        number: "9815100818",
        years: 5,
        address: "unknown",
        classes: "Class 6 to Class 10",
        reviews: [
            "He provides excellent feedback."
        ]
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

        // Show predefined reviews
        const reviewsList = document.getElementById("reviews-list");
        reviewsList.innerHTML = ''; // Clear previous reviews

        // Add predefined reviews
        teacher.reviews.forEach(review => {
            const reviewElement = document.createElement("p");
            reviewElement.textContent = review;
            reviewElement.classList.add("review");
            reviewsList.appendChild(reviewElement);
        });

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
        newReview.classList.add("review");
        reviewsList.appendChild(newReview);
        document.getElementById("review-input").value = '';
    } else {
        alert("Please enter a review before submitting.");
    }
}
