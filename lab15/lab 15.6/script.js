function openPrompt() {
    const number = parseInt(prompt("Введіть число від 1 до 7:"));

    if (isNaN(number) || number < 1 || number > 7) {
        alert("Неправильне число!");
        return;
    }

    const dayNames = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    const dayName = dayNames[number - 1];

    const result = `${dayName} це ${number} день тижня.`;
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.display = "block";
}