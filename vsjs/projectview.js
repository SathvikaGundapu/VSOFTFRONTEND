const params = new URLSearchParams(window.location.search);
const degree = params.get('degree');
const branch = params.get('branch');
const type = params.get('type');
const domain = params.get('domain');

document.getElementById('title').textContent = `${degree} ${branch} ${type} - ${domain} Projects`;

async function getProjects() {
  let response = await fetch(`https://vsoft.onrender.com/api/projects/${degree}/${branch}/${type}/${domain}`);
  let data = await response.json();

  let table = document.createElement("table");
  let row = document.createElement("tr");

  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  th1.textContent = "TITLE";
  th2.textContent = "DESCRIPTION";
  th1.style.fontSize = "20px";
  th2.style.fontSize = "20px";
  row.append(th1, th2);
  table.appendChild(row);

  data.forEach(res => {
    let row = document.createElement("tr");

    ["title", "description"].forEach(key => {
      let td = document.createElement("td");
      td.textContent = res[key]; // fixed duplication
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  document.getElementById("result").appendChild(table);
}

getProjects();