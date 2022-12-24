var ageTime = {
    "data": ["", "Years", "Months", "Days"]
};

var dropdown = document.getElementById("agetime");

for (var i = 0; i < ageTime.data.length; i++) {
    var option = document.createElement("option");
    option.text = ageTime.data[i];
    option.value = ageTime.data[i];
    dropdown.add(option);
};
