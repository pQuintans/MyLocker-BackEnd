import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateStudent1650125773770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'student',
        columns: [
          {
            name: 'ra',
            type: 'varchar',
            length: '20',
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
            isNullable: true,
          },
          {
            name: 'code',
            type: 'varchar',
            length: '6',
            isNullable: true,
          },
          {
            name: 'locker_number',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'tinyint',
            default: 1,
          },
        ],
        foreignKeys: [
          {
            name: 'FKLockerNumberStudent',
            referencedTableName: 'locker',
            referencedColumnNames: ['number'],
            columnNames: ['locker_number'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('student')
  }
}
