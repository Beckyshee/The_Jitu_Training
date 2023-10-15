document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.querySelector(".btn");
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const outputYear = document.querySelector(".output-year");
    const outputMonth = document.querySelector(".output-month");
    const outputDay = document.querySelector(".output-day");
  
    calculateButton.addEventListener("click", function() {
      const day = parseInt(dayInput.value);
      const month = parseInt(monthInput.value);
      const year = parseInt(yearInput.value);
  
      const birthDate = new Date(year, month - 1, day);
      const currentDate = new Date();
  
      const ageInMilliseconds = currentDate - birthDate;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInMinutes = ageInSeconds / 60;
      const ageInHours = ageInMinutes / 60;
      const ageInDays = ageInHours / 24;
      const ageInMonths = ageInDays / 30.44; // Average number of days in a month
      const ageInYears = ageInMonths / 12;
  
      outputYear.textContent = Math.floor(ageInYears);
      outputMonth.textContent = Math.floor(ageInMonths);
      outputDay.textContent = Math.floor(ageInDays);
    });
  });
  