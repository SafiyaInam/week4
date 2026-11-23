Papa.parse('council.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.Ward}</td>
        <td>${row.2006/07}</td>
        <td>${row.2007/08}</td>
        <td>${row.2008.09}</td>
        <td>${row.2009.10}</td>
        <td>${row.2010.11}</td>
        <td>${row.2011.12}</td>
        <td>${row.2012.13}</td>
        <td>${row.2013.14}</td>
        <td>${row.2014.15}</td>
        <td>${row.2015.16}</td>
        <td>${row.2016.17}</td>
        <td>${row.2017.18}</td>
        <td>${row.Ward}</td>
        <td>${row.2018.19}</td>
        <td>${row.2019.20}</td>
        <td>${row.2020.21}</td>
        <td>${row.2021.22}</td>
        <td>${row.2022.23}</td>
        <td>${row.2023.24}</td>
        <td>${row.2024.25}</td>
        <td>${row.2025.26}</td>
      `;
 
      tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});
