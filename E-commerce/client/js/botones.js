// Function to toggle the visibility of a section
function toggleSection(section) {
    section.classList.toggle('hidden');
}

// Get references to the sections and the buttons
const section1 = document.getElementById("section1");
const toggleSectionBtn1 = document.getElementById('toggleSectionBtn');

const section2 = document.getElementById("section2");
const toggleSectionBtn2 = document.getElementById('toggleSectionBtn2');

const section3 = document.getElementById("section3");
const toggleSectionBtn3 = document.getElementById('toggleSectionBtn3');

// Add click event listeners to the buttons
toggleSectionBtn1.addEventListener('click', function () {
    console.log('Button 1 clicked');
    toggleSection(section1);
});

toggleSectionBtn2.addEventListener('click', function () {
    console.log('Button 2 clicked');
    toggleSection(section2);
});

toggleSectionBtn3.addEventListener('click', function () {
    console.log('Button 3 clicked');
    toggleSection(section3);
});
section1.classList.add('hidden');
section2.classList.add('hidden');
section3.classList.add('hidden');