import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateLocker1650163835174 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'locker',
        columns: [
          {
            name: 'number',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'is_rented',
            type: 'tinyint',
          },
          {
            name: 'section_id',
            type: 'integer',
          },
          {
            name: 'status',
            type: 'tinyint',
            default: 1,
          },
        ],
        foreignKeys: [
          {
            name: 'FKSectionIdLocker',
            referencedTableName: 'section',
            referencedColumnNames: ['id'],
            columnNames: ['section_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('locker')
  }
}
