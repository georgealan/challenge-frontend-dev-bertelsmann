var bloodtypes = {
    "data": [
        "",
        "A RhD positive (A+)",
        "A RhD negative (A-)",
        "B RhD positive (B+)",
        "B RhD negative (B-)",
        "O RhD positive (O+)",
        "O RhD negative (O-)",
        "AB RhD positive (AB+)",
        "AB RhD negative (AB-)"
    ]
};

var dropdown = document.getElementById("bloodtype");

for (var i = 0; i < bloodtypes.data.length; i++) {
    var option = document.createElement("option");
    option.text = bloodtypes.data[i];
    option.value = bloodtypes.data[i];
    dropdown.add(option);
};