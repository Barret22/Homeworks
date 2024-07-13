

class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    getCoachInfo() {
        return `Імя: ${this.name} Спеціалізація: ${this.specialization} Рейтинг: ${this.rating}`;
    }

    getCoachRating() {
        return `Рейтинг: ${this.rating}`;
    }
}

let coach;

function addSpecialization() {
    const newSpecialization = document.getElementById('newSpecialization').value;
    if (newSpecialization) {
        const specializationSelect = document.getElementById('specialization');
        const option = document.createElement('option');
        option.value = newSpecialization;
        option.textContent = newSpecialization;
        specializationSelect.appendChild(option);
        document.getElementById('newSpecialization').value = '';
    } else {
        alert('Введіть нову спеціалізацію');
    }
}

function addCoach() {
    const name = document.getElementById('name').value;
    const specializationSelect = document.getElementById('specialization');
    const specialization = specializationSelect.options[specializationSelect.selectedIndex].value;
    const rating = parseFloat(document.getElementById('rating').value);

    if (!name || !specialization || isNaN(rating) || rating < 0 || rating > 5) {
        alert('Введіть дійсні данні');
        return;
    }

    coach = new Coach(name, specialization, rating);
    document.getElementById('coachInfo').innerText = coach.getCoachInfo();
}
