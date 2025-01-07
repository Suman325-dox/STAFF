const teacherData = {
    james: {
        name: "Fr. Denis D. Suza",
        number: "123-456-7890",
        years: 5,
        birthDate: "01/01/1985",
        classes: "Class 1 to Class 5"
    },
    robin: {
        name: "Shiva V.K.",
        number: "098-765-4321",
        years: 7,
        birthDate: "02/02/1980",
        classes: "Class 6 to Class 10"
    },
    luffy: {
        name: "Narendra Upadhya",
        number: "123-987-6543",
        years: 3,
        birthDate: "03/03/1990",
        classes: "Class 5 to Class 8"
    },
    randy: {
        name: "Ishowri Sharma",
        number: "456-123-7890",
        years: 6,
        birthDate: "04/04/1982",
        classes: "Class 2 to Class 6"
    },
    cosmo: {
        name: "Sushil Pokhrel",
        number: "321-654-9870",
        years: 4,
        birthDate: "05/05/1988",
        classes: "Class 3 to Class 7"
    },
    sun: {
        name: "Khusbu Gurung",
        number: "654-321-0987",
        years: 2,
        birthDate: "06/06/1992",
        classes: "Class 4 to Class 9"
    },
    ronaldo: {
        name: "Krishna Sharan Upadhya",
        number: "789-012-3456",
        years: 5,
        birthDate: "07/07/1989",
        classes: "Class 1 to Class 5"
    },
    messy: {
        name: "Sarita Thapa",
        number: "012-345-6789",
        years: 8,
        birthDate: "08/08/1987",
        classes: "Class 6 to Class 10"
    },
    kkenton: {
        name: "Susmita Shrestha",
        number: "321-987-6540",
        years: 4,
        birthDate: "12/12/1984",
        classes: "Class 4 to Class 7"
    },
monty: {
            name: "Mohan Singh Gurung",
            number: "654-789-0123",
            years: 5,
            birthDate: "01/12/1988",
            classes: "Class 8 to Class 10"
        },
        comply: {
            name: "Shambhu Shahi",
            number: "987-654-3210",
            years: 6,
            birthDate: "02/12/1983",
            classes: "Class 5 to Class 9"
        },
        red_hed: {
            name: "Chandra Nepali",
            number: "213-456-7890",
            years: 2,
            birthDate: "03/12/1990",
            classes: "Class 2 to Class 5"
        },
        sectarian: {
            name: "Bhidhya Nepali",
            number: "321-654-0987",
            years: 3,
            birthDate: "04/12/1986",
            classes: "Class 1 to Class 4"
        },
        buffen: {
            name: "Anish Gurung",
            number: "654-789-1230",
            years: 1,
            birthDate: "05/12/1997",
            classes: "Class 3 to Class 8"
        },
        moldy: {
            name: "Amar Bdr. Gurung",
            number: "987-012-3456",
            years: 5,
            birthDate: "06/12/1984",
            classes: "Class 6 to Class 10"
        }
    };

function showInfo(teacherID) {
    const teacher = teacherData[teacherID];
    if (teacher) {
        document.getElementById("teacherName").textContent = teacher.name;
        document.getElementById("teacherNumber").textContent = teacher.number;
        document.getElementById("teacherYears").textContent = teacher.years;
        document.getElementById("teacherBirthDate").textContent = teacher.birthDate;
        document.getElementById("teacherClass").textContent = teacher.classes;

        document.getElementById("infoModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

function submitReview() {
    const reviewInput = document.getElementById("reviewInput").value;

    if (reviewInput.trim()) {
        const reviewsList = document.getElementById("reviewsList");
        const newReview = document.createElement("p");
        newReview.textContent = reviewInput;
        reviewsList.appendChild(newReview);
        document.getElementById("reviewInput").value = '';
    } else {
        alert("Please enter a review before submitting.");
    }
}
