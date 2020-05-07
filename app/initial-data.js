const initialData = [
  {
    id: 1,
    title: 'Tatooine',
    items: [
      { id: 2, title: 'Endor', items: [] },
      { id: 3, title: 'Hoth', items: [] },
      { id: 4, title: 'Dagobah', items: [] },
    ],
  },
  {
    id: 5,
    title: 'Death Star',
    items: [],
  },
  {
    id: 6,
    title: 'Alderaan',
    items: [
      {
        id: 7,
        title: 'Bespin',
        items: [{ id: 8, title: 'Jakku', items: [] }],
      },
    ],
  },
]

export default initialData
