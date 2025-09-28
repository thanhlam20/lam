let heading1 = "";
let heading2 = "";
let row1 = "";
let row2 = "";
for (let i = 1; i <= 5; i++) {
    heading1 = heading1 +`<th>${i}</th>`;
    row1 = row1 + "<td>";
    for (let j = 1; j <= 10; j++) {
        row1 = row1 + `${i} x ${j} = ${i*j} <br>`;
    }
    row1 = row1 + "</td>";
}

//

for (let i = 6; i <= 10; i++) {
    heading2 = heading2 +`<th>${i}</th>`;
    row2 = row2 + "<td>";
    for (let j = 1; j <= 10; j++) {
        row2 = row2 + `${i} x ${j} = ${i*j} <br>`;
    }
    row2 = row2 + "</td>";
}

let html = `<table width = "100%" border="1"
<tr>
${heading1} 
</tr>
<tr>
${row1}
</tr>
<tr>
${heading2}
</tr>
<tr>
${row2}
</tr>
</table>`;
document.body.innerHTML = html;