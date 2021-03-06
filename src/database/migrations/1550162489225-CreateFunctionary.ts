import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateFunctionary1550162489225 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'functionary',
        columns: [
          {
            name: 'cpf',
            type: 'varchar',
            length: '10',
            isPrimary: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'tinyint',
            default: 1,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('functionary')
  }
}
