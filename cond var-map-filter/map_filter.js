const mahasiswa = [
	{
		nama:"hamdan",
		nilai: 80
	},
	{
		nama:"tria",
		nilai: 90
	}
];

const listmahasiswa = mahasiswa.map((value)=>value.nilai);
console.log(listmahasiswa);

const listmhs = mahasiswa.filter((mhs)=>mhs.nilai<90);
console.log(listmhs);
