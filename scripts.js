function InitResults()
{
    var picksContainer = document.getElementById("picksContainer");
    survivorData.Pickers.forEach(picker => {
        picksContainer.appendChild(createPickerElement(picker));
    });
}

function createPickerElement(picker)
{
    var pickerContainer = document.createElement("div");
    pickerContainer.classList.add("picker");
    var pickerName = document.createElement("div");
    pickerName.classList.add("picker-name");
    pickerName.innerText = picker.Name;

    pickerContainer.appendChild(pickerName);
    if(picker.Eliminated)
    {
        pickerContainer.classList.add("eliminated");
    }
    picker.Picks.forEach(selection => {
        pickerContainer.appendChild(createSelectionElement(selection));
    });
    return pickerContainer;
}

function createSelectionElement(selection)
{
    var selectionElm = document.createElement("div");
    selectionElm.classList.add("picker-selection");
    selectionElm.innerText = selection.Team;
    selectionElm.dataset.selectedTeam = selection.Team;
    if(!selection.Correct)
    {
        selectionElm.classList.add("incorrect-pick")
    }
    return selectionElm;
}