var insurance = {
    "data": [
        "", 
        "Governament Insurance",
        "UnitedHealt", 
        "Anthem", 
        "Centene", 
        "Humana", 
        "HCSC", 
        "CVS Health", 
        "Molina Healthcare", 
        "Cigna", 
        "Kaiser Permanente", 
        "GuideWell"
    ]
};

var dropdown = document.getElementById("insu-provider");

for (var i = 0; i < insurance.data.length; i++) {
    var option = document.createElement("option");
    option.text = insurance.data[i];
    option.value = insurance.data[i];
    dropdown.add(option);
};
