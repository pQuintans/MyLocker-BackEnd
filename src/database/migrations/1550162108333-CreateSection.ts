import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSection1550162108333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'section',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'color',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'left_room',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'right_room',
            type: 'varchar',
            length: '20',
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
    await queryRunner.dropTable('section')
  }
}
