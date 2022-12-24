var gender = {
    "data": ["", "Male", "Female", "Transgender", "Non-Binary", "Prefer not to respond"]
};

var dropdown = document.getElementById("gender");

for (var i = 0; i < gender.data.length; i++) {
    var option = document.createElement("option");
    option.text = gender.data[i];
    option.value = gender.data[i];
    dropdown.add(option);
};
