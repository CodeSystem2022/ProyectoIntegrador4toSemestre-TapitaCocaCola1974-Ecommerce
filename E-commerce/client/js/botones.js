 // Get references to the section and the button
 const section = document.getElementById("section1")
 const toggleSectionBtn = document.getElementById('toggleSectionBtn');

 // Add a click event listener to the button
 toggleSectionBtn.addEventListener('click', function () {
     // Toggle the 'hidden' class on the section
     const isHidden = section.classList.toggle('hidden');
     
     // Change button text based on the section's visibility
     toggleSectionBtn.innerText = isHidden ? 'Show Section' : 'Hide Section';
 });

  // Get references to the section and the button
  const section2 = document.getElementById("section2")
  const toggleSectionBtn2 = document.getElementById('toggleSectionBtn2');
 
  // Add a click event listener to the button
  toggleSectionBtn2.addEventListener('click', function () {
      // Toggle the 'hidden' class on the section
      const isHidden = section2.classList.toggle('hidden');
      
      // Change button text based on the section's visibility
      toggleSectionBtn2.innerText = isHidden ? 'Show Section' : 'Hide Section';
  });

  //section3

  const section3 = document.getElementById("section3")
  const toggleSectionBtn3 = document.getElementById('toggleSectionBtn3');
 
  // Add a click event listener to the button
  toggleSectionBtn3.addEventListener('click', function () {
      // Toggle the 'hidden' class on the section
      const isHidden = section3.classList.toggle('hidden');
      
      // Change button text based on the section's visibility
      toggleSectionBtn3.innerText = isHidden ? 'Show Section' : 'Hide Section';
  });