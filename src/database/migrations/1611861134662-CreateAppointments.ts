import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1611861134662
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // No método up vamos colocar o que queremos que aconteça no banco de dados quando a migration for executada
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Utilizaremos o método down para desfazer o que foi feito no método up caso ocorra algum problema
    await queryRunner.dropTable('appointments');
  }
}
