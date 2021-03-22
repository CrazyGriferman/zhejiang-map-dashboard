export function deleteTableContent() {
    const tbodyEl = document.querySelector("tbody");
    tbodyEl.innerHTML = null;
}

export function addTableContent(station,count,city) {
    const tbodyEl = document.querySelector("tbody");
    tbodyEl.innerHTML += `
        <tr>
            <td>${station}</td>
            <td>${count}</td>
            <td>${city}</td>
        </tr>
    `;
}

export function getColor(v) {
const colors = [ '#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#005a32' ];
return v > 50
    ? colors[7]
    : v > 40
    ? colors[6]
    : v > 30
        ? colors[5]
        : v > 20
        ? colors[4]
        : v > 10
            ? colors[3]
            : v > 5
            ? colors[2]
            : v > 0
                ? colors[1]
                : colors[0];
}

export function *IdGenerator() {
    let id = 1;
    while(true) {
        yield id++;
    }
}

export function bigger(img) {
    document.getElementById("gfg").style.color = "green";
}