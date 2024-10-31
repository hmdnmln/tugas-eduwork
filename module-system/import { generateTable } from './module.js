import { generateTable } from './tabel.js';

const data = [
    { nama: 'Hamdan Maulana', usia: 26, alamat: 'Indramayu' },
    { nama: 'Tria Aryanti', usia: 27, alamat: 'Indramayu' },
];

const columns = ['nama', 'usia', 'alamat'];

generateTable('#table-container', data, columns);
