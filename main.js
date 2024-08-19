const mockCsvData = [
  { id: 1, textId: 1, value: 'これは金子みすゞさんが書いた詩です' },
];

const handleClickH1 = async (id) => {
  const data = mockCsvData;
  const selectData = data.filter((row) => row.textId === id);
  const insertDiv = document.getElementById('insert-div');
  if (selectData.length === 0) {
    const div = document.createElement('div');
    div.innerHTML = 'データがありません';
    insertDiv.innerHTML = '';
    insertDiv.appendChild(div);
  } else {
    const div = document.createElement('div');
    div.innerHTML = selectData.map((row) => row.value).join('<br>');
    insertDiv.innerHTML = '';
    insertDiv.appendChild(div);
  }

  const div2 = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'input-text';
  input.className = 'bg-slate-200';
  div2.appendChild(input);
  const button = document.createElement('button');
  button.textContent = '追加';
  button.onclick = () => {
    handleClickButton(id);
  };
  div2.appendChild(button);
  insertDiv.appendChild(div2);
};

const handleClickButton = (id) => {
  const value = document.getElementById('input-text').value;
  if (value === '') {
    return;
  }
  const randamId = Math.floor(Math.random() * 1000000);
  const csvData = {
    id: randamId,
    textId: id,
    value,
  };
  mockCsvData.push(csvData);
  handleClickH1(id);
};
