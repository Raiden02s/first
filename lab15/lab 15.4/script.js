function openMonthInput() {
    document.getElementById("monthInput").style.display = "block";
}

function checkMonth() {
    const monthNumber = parseInt(document.getElementById("monthNumber").value);

    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        alert("Неправильний номер місяця!");
        return;
    }

    let season;
    let monthName;

    if (monthNumber >= 3 && monthNumber <= 5) {
        season = "Весна";
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        season = "Літо";
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        season = "Осінь";
    } else {
        season = "Зима";
    }

    switch (monthNumber) {
        case 1:
            monthName = "Січень";
            break;
        case 2:
            monthName = "Лютий";
            break;
        case 3:
            monthName = "Березень";
            break;
        case 4:
            monthName = "Квітень";
            break;
        case 5:
            monthName = "Травень";
            break;
        case 6:
            monthName = "Червень";
            break;
        case 7:
            monthName = "Липень";
            break;
        case 8:
            monthName = "Серпень";
            break;
        case 9:
            monthName = "Вересень";
            break;
        case 10:
            monthName = "Жовтень";
            break;
        case 11:
            monthName = "Листопад";
            break;
        case 12:
            monthName = "Грудень";
            break;
    }

    const result = ` ${season} ${monthName} (${monthNumber} місяць)`;
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.display = "block";
}