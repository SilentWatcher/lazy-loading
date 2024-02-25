
const imgJson = [
    { "name": "Dr. Smith", "image": "./assets/doctor1.png", "specialty": "Cardiologist" },
    { "name": "Dr. Johnson", "image": "./assets/doctor2.png", "specialty": "Dermatologist" },
    { "name": "Dr. Williams", "image": "./assets/doctor3.png", "specialty": "Orthopedic Surgeon" },
    { "name": "Dr. Brown", "image": "./assets/doctor4.png", "specialty": "Neurologist" },
    { "name": "Dr. Miller", "image": "./assets/doctor5.png", "specialty": "Gynecologist" },
    { "name": "Dr. Davis", "image": "./assets/doctor6.png", "specialty": "Pediatrician" },
    { "name": "Dr. Garcia", "image": "./assets/doctor7.png", "specialty": "Ophthalmologist" },
    { "name": "Dr. Rodriguez", "image": "./assets/doctor8.png", "specialty": "Psychiatrist" },
    { "name": "Dr. Martinez", "image": "./assets/doctor9.png", "specialty": "Endocrinologist" },
    { "name": "Dr. Jackson", "image": "./assets/doctor10.png", "specialty": "Urologist" },
    // 10 -> 
    { "name": "Dr. Smith", "image": "./assets/doctor11.png", "specialty": "Cardiologist" },
    { "name": "Dr. Johnson", "image": "./assets/doctor12.png", "specialty": "Dermatologist" },
    { "name": "Dr. Williams", "image": "./assets/doctor13.png", "specialty": "Orthopedic Surgeon" },
    { "name": "Dr. Brown", "image": "./assets/doctor14.png", "specialty": "Neurologist" },
    { "name": "Dr. Miller", "image": "./assets/doctor15.png", "specialty": "Gynecologist" },
    { "name": "Dr. Davis", "image": "./assets/doctor16.png", "specialty": "Pediatrician" },
    { "name": "Dr. Garcia", "image": "./assets/doctor17.png", "specialty": "Ophthalmologist" },
    { "name": "Dr. Rodriguez", "image": "./assets/doctor18.png", "specialty": "Psychiatrist" },
    { "name": "Dr. Martinez", "image": "./assets/doctor19.png", "specialty": "Endocrinologist" },
    { "name": "Dr. Jackson", "image": "./assets/doctor20.png", "specialty": "Urologist" },
    //20
    { "name": "Dr. Davis", "image": "./assets/doctor21.png", "specialty": "Pediatrician" },
    { "name": "Dr. Garcia", "image": "./assets/doctor22.png", "specialty": "Ophthalmologist" },
    { "name": "Dr. Rodriguez", "image": "./assets/doctor23.png", "specialty": "Psychiatrist" },
    { "name": "Dr. Martinez", "image": "./assets/doctor24.png", "specialty": "Endocrinologist" },
    { "name": "Dr. Jackson", "image": "./assets/doctor25.png", "specialty": "Urologist" }
]


function loadImages() {
    const gallery = document.getElementById('imageGallery');

    imgJson.forEach(item => {

        const doctor_card = document.createElement('div')

        doctor_card.innerHTML=`            
            <img src=${item.image} alt="doctor" loading="lazy" height="180px" width="200px">
            <h3>${item.name}</h3>
            <p>${item.specialty}</p>`
    
        doctor_card.classList.add('doctor_card')

        gallery.appendChild(doctor_card);
    });
}

document.addEventListener('DOMContentLoaded', loadImages);