Papa.parse('council.csv', {

  download: true,
  header: true,
  skipEmptyLines: true,

  complete: function(results) {

    console.log("CSV connected!");
    console.log(results.data);

    const table = document.querySelector('#dataTable');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // Get the CSV column headings
    const fields = results.meta.fields;

    // Create table headings
    const headerRow = document.createElement('tr');

    fields.forEach(field => {

      const th = document.createElement('th');

      th.textContent = field;

      headerRow.appendChild(th);

    });

    thead.appendChild(headerRow);


    // Add CSV data to the table
    results.data.forEach(row => {

      const tr = document.createElement('tr');

      fields.forEach(field => {

        const td = document.createElement('td');

        td.textContent = row[field] || '';

        tr.appendChild(td);

      });

      tbody.appendChild(tr);

    });

  },

  error: function(error) {

    console.log("CSV FAILED TO LOAD");
    console.log(error);

  }

});
