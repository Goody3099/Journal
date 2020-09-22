import { saveEntry, getEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".form-container")

eventHub.addEventListener("click", event =>{
    if(event.target.id === "Btn"){
        const entryObj = {
            date: document.querySelector("#journalDate").value,
            concept: document.querySelector("#concepts").value,
            entry: document.querySelector("#journalEntry").value,
            moodId: parseInt(document.querySelector("#myList").value),
        }
        saveEntry(entryObj)
    }
})

const render = () => {
   contentTarget.innerHTML += `<form action="">
        <fieldset class= "flex">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class= "flex">
            <label for="concepts">Concepts covered</label>
            <input type="text" name="concepts" id="concepts">
        </fieldset>
        <fieldset class= "flex">
            <label for="journalEntry">Journal Entry</label>
            <input type="text" name="journalEntry" id="journalEntry">
        </fieldset>
        <fieldset class= "flex">
            <legend>Mood</legend>
            <p>
                <label for="">Mood List</label>
                <select id = "myList">
                    <option value="1">Happy</option>
                    <option value="2">Sad</option>
                    <option value="3">Mad</option>
                    <option value="4">Sleepy</option>
                    <option value="5">Sleepy</option>
                </select>
            </p>
        </fieldset>
        <fieldset class= "flex">
            <label for="button">Record Journal Entry</label>
            <input id="Btn" type="button" value="Submit">
        </fieldset>
    </form>`
}

eventHub.addEventListener("entryStateChanged", event =>{
    getEntries().then(EntryListComponent)
})
export const JournalFormComponent = () => {
    render()
}