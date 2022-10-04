import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: 'Frontend', cursoId: 1},
      {nome: 'Backend', cursoId: 1},
      {nome: 'Redes I', cursoId: 2},
      {nome: 'Anatomia', cursoId: 4},
      {nome: 'História do Brasil', cursoId: 10},
      {nome: 'História do Mundo', cursoId: 10},
      {nome: 'Dir. Administrativo', cursoId: 3},
      {nome: 'Dir. Penal', cursoId: 3},
      {nome: 'Freud', cursoId: 8},
      {nome: 'Alfabetização', cursoId: 11},
    ])
  }
}
