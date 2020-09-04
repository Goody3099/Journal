
const contentTarget = document.querySelector(".form-container")

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
                </select>
            </p>
        </fieldset>
        <fieldset class= "flex">
            <label for="button">Record Journal Entry</label>
            <input type="button" value="Submit">
        </fieldset>
    </form>`
}

export const JournalFormComponent = () => {
    render()
}