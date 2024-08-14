import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const kidId = itemClicked.dataset.id

        if (itemClicked.dataset.type === 'child') {
            for (const child of children) {
                if (child.id === parseInt(kidId)) {
                    window.alert(`${itemClicked.textContent} wish is ${child.wish}.`)
                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

