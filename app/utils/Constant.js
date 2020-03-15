export const columnTicket = [
  {
    title: 'Id',
    dataIndex: 'id',
    defaultSortOrder: 'descend',
    sortDirections: ['descend'],
    filters: [
      {
        text: '1',
        value: '1',
      },
      {
        text: '2',
        value: '2',
      },
      {
        text: '3',
        value: '3',
      },
      {
        text: '4',
        value: '4',
      },
    ],
  },
  {
    title: 'Titulo',
    dataIndex: 'title',
    sortDirections: ['descend'],

    defaultSortOrder: 'descend',
  },
  {
    title: 'Prioridad',
    dataIndex: 'priority',
    sortDirections: ['descend'],

    defaultSortOrder: 'descend',
  },
  {
    title: 'Tipo de problema',
    dataIndex: 'category_id',
    sortDirections: ['descend'],
    defaultSortOrder: 'descend',
  },
];
export const columna = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

export const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export const optionsPregunta = [
  { label: 'Preguntas Comerciales', value: 'comerciales', name: 'comerciales' },
  { label: 'Preguntas Tecnicas', value: 'tickets', name: 'tickets' },
];

export const optionsHerramienta = [
  { label: ' Bitrix24 Self Hosted', value: 'hosted' },
  { label: ' Bitrix24 On Cloud', value: 'cloud' },
];

export const optionsProblema = [
  { label: ' No puede iniciar sesion', value: 'problema1' },
  { label: ' Informar de un error ', value: 'problema2' },
  { label: ' Como funciona ', value: 'problema3' },
  { label: ' Solicitar caracteristica', value: 'problema4' },
];
